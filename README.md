🌿 Herb AI – Medicinal Plant Identification Platform

Herb AI is an intelligent full-stack web application that identifies medicinal herbs from images using deep learning. It provides accurate predictions along with detailed herb information such as scientific name, medicinal properties, uses, and symptoms treated.

The project combines Machine Learning, Backend APIs, and a modern React frontend to deliver a smooth, user-friendly experience accessible from any device.

🚀 Features
🌱 AI-Powered Plant Identification

🧠 Deep Learning model (CNN, ResNet, InceptionV3)
📸 Image upload & prediction

📊 Prediction confidence score

🌿 Virtual Garden with medicinal herb cards
🔍 Search herbs by name

🔐 User authentication (Login / Signup)

☁️ MongoDB Atlas cloud database

📱 Responsive design (mobile & desktop)


<img width="814" height="192" alt="image" src="https://github.com/user-attachments/assets/3d7380c6-a7af-4329-ac7b-188761f8dd82" />


🧰 Tech Stack
--Frontend--

React.js (Vite)

Axios

React Router

CSS / Inline Styling


--Backend--

FastAPI / Flask / Express

Python / Node.js

REST APIs

JWT Authentication


--Machine Learning--

TensorFlow / Keras

CNN

ResNet

InceptionV3

.h5 trained model

--Database--

MongoDB Atlas (Cloud)


⚙️ Setup Instructions 
1️⃣ Clone the Repository
git clone https://github.com/YOUR_USERNAME/myherb.git
cd myherb

🖥️ Frontend Setup (React + Vite)
cd Frontend
npm install
npm run dev


Frontend runs at:
http://localhost:5173

🔧 Backend Setup (API + ML) (MLend)
Create virtual environment (recommended)
cd Backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

Install dependencies
pip install -r requirements.txt

Backend--
node server.js
Backend runs at:

http://localhost:5000

🌿 Virtual Garden

Displays medicinal herb cards

Data fetched from MongoDB Atlas

Includes:

Common name

Scientific name

Medicinal properties

Uses

Symptoms treated

Image

🔍 API Endpoints


--Authentication--

POST /api/auth/signup
POST /api/auth/login

--Plants--

GET /api/plants

--Prediction--

POST /predict/






