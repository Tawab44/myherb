🌿 Herb AI — Intelligent Medicinal Herb Identification & Knowledge Platform

Herb AI is a full-stack AI-powered web application that identifies medicinal herbs from images and provides detailed information, care guidance, and community contributions.
It combines Machine Learning, MERN stack backend, and modern React frontend to create a complete herb exploration platform.

🚀 Live Features

🔍 AI Herb Identification

--Upload an image of a plant → AI predicts the herb using deep learning models.

--Fusion CNN model (ResNet + Inception)

--PyTorch / TensorFlow support

--Confidence score output

--Detects non-herb images


🌱 Virtual Garden (VGarden)

----Explore curated medicinal herb information:

--Herb name & scientific name

--Benefits & uses

--Symptoms treated

--Traditional knowledge

--Visual herb cards


🧑‍🌾 HerbCare Page (Accurate Information)

--Provides guidance on how to care for medicinal plants.

Includes:

--Watering requirements 💧

--Sunlight needs ☀️

--Fertilization 🌍

--Maintenance tips 🌿

--Growth advice 🔥


📝 Herb Contribution (Query System)

--Users can submit new herb information to expand the library.

--Upload herb image

--Add details & notes

--Contributor information

--Stored in database

--Review & approval workflow

📧 Automatic Email Confirmation

----After submission, users receive:

✔️ Confirmation email
✔️ Appreciation message
✔️ Status information

--Implemented using Nodemailer + Gmail SMTP.


🤖 AI Chatbot Assistant

--Integrated conversational assistant for herb-related questions.

--Powered by Google Gemini API

--Context-aware responses (memory supported)

--Floating chat interface

--Real-time replies

--Thinking indicator


🌐 Multi-Language Support

--Translate the entire website into multiple languages.

--Google Translate integration

--Custom navbar language selector

------Instant translation

--Clean UI without Google banner


🔐 Authentication System

----Secure user accounts using JWT.

----Signup / Login

----Protected routes

----Token-based authentication

----User data stored in MongoDB


🧠 Machine Learning Component

--Located in MLend/

--Models included:

--Fusion Model (.pt)

--ResNet models (.h5)

--FastAPI inference server

--Image preprocessing pipeline

--The model receives image input and returns predicted herb class.


--📂 Project Structure Overview--

```
└── 📁myherb
    └── 📁Backend
        └── 📁config
            ├── db.js
        └── 📁models
            ├── Careinfo.js
            ├── Plant.js
            ├── Query.js
            ├── User.js
        └── 📁routes
            ├── authRoutes.js
            ├── careRoutes.js
            ├── chatRoutes.js
            ├── plantRoutes.js
            ├── queryRoutes.js
        └── 📁services
            ├── geminiService.js
        └── 📁uploads
            ├── 1771728033567-testgingata.jpg
            ├── 1771729621736-notmint.jpg
        └── 📁utils
            ├── sendEmail.js
        ├── .env
        ├── package-lock.json
        ├── package.json
        ├── server.js
    └── 📁Frontend
        └── 📁public
            ├── vite.svg
        └── 📁src
            └── 📁assets
                ├── all imgs                
            └── 📁components
                ├── Chatbot.jsx
                ├── LanguageSwitcher.jsx
                ├── Navbar.jsx
                ├── ProtectedRoute.jsx
            └── 📁pages
                ├── About.jsx
                ├── Herbcare.jsx
                ├── Home.jsx
                ├── Login.jsx
                ├── Query.jsx
                ├── Signup.jsx
                ├── Vgarden.jsx
            └── 📁styles
                ├── auth.css
                ├── Chatbot.css
                ├── herbcare.css
                ├── home.css
                ├── language.css
                ├── navbar.css
                ├── query.css
            ├── App.jsx
            ├── index.css
            ├── main.jsx
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── README.md
        ├── vite.config.js
    └── 📁MLend
        └── 📁__pycache__
            ├── app.cpython-310.pyc
        ├── app.py
        ├── fusion_model.pt
        ├── model.pt
        ├── requirements.txt
        ├── ResNet50_m1.h5
        ├── ResNet50_m3.h5
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

🏗️ Project Architecture-

🔹 Backend — Node.js / Express

--Handles authentication, data storage, chatbot, and email.

Key components:

--MongoDB database connection

--REST APIs

--File uploads

--Email system

--Chatbot API


--Important routes:

Route	             Purpose
/api/auth	    User authentication
/api/plants	    Herb database
/api/queries	Herb submissions
/api/care	    Herb care info
/api/chat	    Chatbot interaction



🔹 Frontend — React + Vite

--User interface for all features.

Pages include:

--Home — AI prediction tool

--About — Project overview

--VGarden — Herb library

--HerbCare — Care instructions

--Query — Contribution form

--Login / Signup — Authentication

Reusable components:

--Navbar

--Chatbot

--Language Switcher

--Protected Route wrapper


🔹 MLend — Machine Learning API

--FastAPI server that performs image classification.

Functions:

--Load trained models

--Preprocess uploaded images

--Return prediction results

--Serve AI inference endpoint

⚙️ How the Project Works (Step-by-Step)
🔎 1. Herb Identification

--User uploads plant image on Home page

--Image sent to ML API

--Model processes image

--Prediction returned to frontend

--Result displayed to user


🌿 2. Virtual Garden Browsing

--User logs in

--Frontend requests herb data

--Backend fetches from MongoDB

--Displays herb cards


🧑‍🌾 3. Herb Care Information

--User visits HerbCare page

--Backend processes care data and provides accurate up-to-date data

--Information displayed and Search is Opted to get specific Herb care info


📝 4. Herb Contribution

--User fills submission form

--Uploads image + details

--Backend stores entry

--Confirmation email sent to user


🤖 5. Chatbot Interaction

---User sends message

---Backend forwards to Gemini API

---AI generates response

---Reply displayed in chat window


🌐 6. Language Translation

--User selects language

--Google Translate applies translation

--UI updates instantly translating the whole page


🧰 Technologies Used
Frontend

React.js

Vite

CSS

Axios

React Router


Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Multer (file uploads)

Nodemailer (email)


Machine Learning

Python

FastAPI

PyTorch

TensorFlow / Keras

CNN architectures (ResNet, Inception)


AI Services

Google Gemini API (chatbot) multiple models


---🛠️ Installation & Setup---
🔹 Clone Repository or Install Zip 
git clone https://github.com/yourusername/myherb.git
cd myherb

🔹 Backend Setup

-cd Backend

-npm install

-npm run dev


Create .env: 

🔹 Frontend Setup

-cd Frontend

-npm install

-npm run dev


🔹 ML API Setup

-cd MLend
-pip install -r requirements.txt
-uvicorn app:app --reload


 🔚

If you found this project useful, feel free to ⭐ star the repository.


