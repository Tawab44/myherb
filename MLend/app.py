from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import preprocess_input
import numpy as np
import shutil
import os

# Initialize FastAPI
app = FastAPI()

# Allow frontend requests
origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model
model = load_model("ResNet50_m1.h5")

# Class labels  
CLASS_NAMES = [str(i) for i in range(30)]

IMG_HEIGHT, IMG_WIDTH = 224, 224

@app.get("/")
def home():
    return {"message": "Herb AI Prediction API is running."}

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        temp_file = f"temp_{file.filename}"

        with open(temp_file, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        img = image.load_img(temp_file, target_size=(IMG_HEIGHT, IMG_WIDTH))
        x = image.img_to_array(img)
        x = np.expand_dims(x, axis=0)
        x = preprocess_input(x)

        preds = model.predict(x)
        predicted_index = int(np.argmax(preds[0]))
        probability = float(preds[0][predicted_index])
        predicted_class = CLASS_NAMES[predicted_index]

        if probability < 0.5:
            predicted_class = "Not a Herb"

        os.remove(temp_file)

        return {"class": predicted_class, "probability": probability}

    except Exception as e:
        return {"error": str(e)}
