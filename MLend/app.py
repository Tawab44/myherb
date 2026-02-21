from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import torch
from torchvision import transforms
from PIL import Image
import shutil
import os

# -------------------------
# INIT APP
# -------------------------

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------
# LOAD TORCHSCRIPT MODEL (.pt)
# -------------------------

model = torch.jit.load("model.pt", map_location="cpu")
model.eval()

# -------------------------
# CLASS NAMES
# -------------------------

CLASS_NAMES = [
    "Aerva lanata (Mountain Knotgrass)",
    "Aloe vera (Ghritkumari)",
    "Andrographis paniculata (Kalmegh)",
    "Bacopa monnieri (Brahmi)",
    "Calotropis gigantea (Aak, Madar)",
    "Centella asiatica (Gotu Kola)",
    "Chromolaena odorata (Siam Weed)",
    "Cissus quadrangularis (Hadjod)",
    "Clerodendrum infortunatum (Bharangi)",
    "Clitoria ternatea (Aparajita, Shankhpushpi Blue variety)",
    "Coccinia grandis (Kundru, Ivy Gourd)",
    "Curcuma longa (Haldi, Turmeric)",
    "Datura metel Linn (Dhatura)",
    "Desmodium gangeticum (Shalaparni)",
    "Hemigraphis colorata (Red Flame Ivy)",
    "Kaempferia galanga Linn (Kachur, Aromatic Ginger)",
    "Mentha spicata (Pudina, Spearmint)",
    "Not a herb",
    "Ocimum gratissimum (Ram Tulsi, Vana Tulsi)",
    "Ocimum tenuiflorum (Krishna Tulsi, Holy Basil)",
    "Oxalis corniculata (Changeri, Indian Sorrel)",
    "Peperomia pellucida (Shiny Bush, Rat’s Ear)",
    "Phyllanthus niruri (Bhumi Amla, Stonebreaker)",
    "Piper betle (Paan)",
    "Piper longum (Pippali, Long Pepper)",
    "Piper nigrum (Kali Mirch, Black Pepper)",
    "Plectranthus barbatus (Patharchur, Indian Coleus)",
    "Plumbago indica (Red Chitrak)",
    "Pseudarthria viscida (Salaparni)",
    "Ricinus communis Linn (Arandi, Castor Plant)",
    "Tinospora cordifolia (Giloy, Guduchi)"
]

# -------------------------
# IMAGE TRANSFORMS
# Fusion model needs TWO inputs
# -------------------------

transform_resnet = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

transform_inception = transforms.Compose([
    transforms.Resize((299, 299)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

# -------------------------
# ROOT ENDPOINT
# -------------------------

@app.get("/")
def home():
    return {"message": "Herb AI Fusion Model API running"}

# -------------------------
# PREDICTION ENDPOINT
# -------------------------

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        temp_file = f"temp_{file.filename}"

        # Save uploaded image
        with open(temp_file, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        img = Image.open(temp_file).convert("RGB")

        # Prepare BOTH inputs
        img_res = transform_resnet(img).unsqueeze(0)
        img_inc = transform_inception(img).unsqueeze(0)

        with torch.no_grad():
            outputs = model(img_res, img_inc)
            probs = torch.softmax(outputs, dim=1)
            probability, predicted_index = torch.max(probs, 1)

        predicted_class = CLASS_NAMES[predicted_index.item()]
        probability = probability.item()

        

        os.remove(temp_file)

        return {
            "class": predicted_class,
            "probability": probability
        }

    except Exception as e:
        return {"error": str(e)}