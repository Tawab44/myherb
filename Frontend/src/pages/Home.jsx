import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import homeBg from "../assets/mist.gif";
import loginImg from "../assets/vgardenbg.webp";
import featureImg from "../assets/herbbgtr2.png";
import youtubeBg from "../assets/takpl.png";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file");
      return;
    }

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
    setPrediction(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      alert("Please select an image!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/predict/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setPrediction(res.data);
    } catch (err) {
      console.error(err);
      alert("Error uploading or predicting!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div
      style={{
        minHeight: "100vh",
        background: `url(${homeBg}) no-repeat center center`,
        backgroundSize: "cover",
        padding: "40px 0",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}
    >
      {/* Content Card */}
      <div
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          background: "rgba(46, 42, 42, 0.4)",
          borderRadius: "12px",
          textAlign:"center",
        }}
      >
        <h1 style={{fontSize:"3rem",
                    color:"#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "700",}}>
          Upload an image of a plant and let AI {""}<span style={{ color: "#49d54d" }}>Identify</span> it for you.
        </h1>

        <h4 style={{ marginTop: "10px", 
                     lineHeight: "1.6",
                     color:"#ffffff",
                     fontFamily: "'Poppins', sans-serif",
                    fontWeight: "400",}}>
          Herb AI is a free and open-source platform designed to identify plants and
          herbs using machine learning. Upload an image below to get instant
          predictions.
        </h4>

        {/* Upload Form */}
        <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
          <label
            htmlFor="plantImage"
            style={{
              padding: "12px 20px",
              backgroundColor: "#16a34a",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
              display: "inline-block",
              fontWeight: "bold",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
             Upload Plant Image 📤
          </label>

          <input
            type="file"
            id="plantImage"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />

          <br />

          <button
            type="submit"
            style={{
              marginTop: "20px",
              padding: "10px 25px",
              backgroundColor: "#15803d",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontFamily: "'Poppins', sans-serif",
            }}
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict 🌱"}
          </button>
        </form>

        {/* Image Preview */}
        {preview && (
          <div style={{ marginTop: "25px" }}>
            <h4>Selected Image Preview:</h4>
            <img
              src={preview}
              alt="Selected plant"
              style={{
                marginTop: "10px",
                maxWidth: "300px",
                borderRadius: "10px",
                border: "2px solid #16a34a",
              }}
            />
          </div>
        )}

        {/* Prediction Display */}
        {prediction && !prediction.error && (
          <div
            style={{
              marginTop: "25px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              backgroundColor: "#f0fdf4",
            }}
          >
            <h3>
              Prediction:{" "}
              <span style={{ color: "#16a34a" }}>
                {prediction.class}
              </span>
            </h3>
            <p>
              Probability:{" "}
              {(prediction.probability * 100).toFixed(2)}%
            </p>
          </div>
        )}

        {/* Error */}
        {prediction?.error && (
          <div style={{ marginTop: "20px", color: "red" }}>
            Error: {prediction.error}
          </div>
        )}
        
      </div>
    </div>
 {/* LOGIN INFO SECTION */}
      <div
        style={{
          padding: "80px 10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={{ color: "#14532d" }}>
            Login to Unlock the Virtual Garden 🌿
          </h2>
          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            Login to get access to the Virtual Garden and explore complete
            information about medicinal herbs including their benefits,
            symptoms treated, and traditional uses.

            Herb AI features beautifully designed data cards for each herb, displaying its name, image, health benefits, and common uses in one place. These cards make it easy to browse, compare, and learn about different herbs quickly, giving you a clear and organized way to explore herbal information.
          </p>
        </div>

        <img
          src={loginImg}
          alt="Login"
          style={{ width: "350px", borderRadius: "12px" }}
        />
      </div>

      {/* FEATURES SECTION */}
      <div
        style={{
          padding: "80px 10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          backgroundColor: "#f0fdf4",
        }}
      >
        <img
          src={featureImg}
          alt="Features"
          style={{ width: "350px", borderRadius: "12px" }}
        />

        <div style={{ flex: 1 }}>
          <h2 style={{ color: "#166534" }}>Main Features 🚀</h2>
          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            Herb AI can accurately identify over 25 medicinal herbs from
            an image. It provides detailed information including medicinal and
            culinary benefits, practical usage tips, and traditional knowledge.
          </p>
        </div>
      </div>

      {/* GUIDANCE + YOUTUBE */}
      <Link to="/about" style={{ textDecoration: "none" }}>
        <div
          style={{
            height: "70vh",
            background: `url(${youtubeBg}) center/cover no-repeat`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.65)",
              padding: "40px",
              borderRadius: "14px",
              maxWidth: "800px",
            }}
          >
            <h2>We’re Here to Guide You 🌱</h2>
            <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
              Have questions about herbs or how our AI works? Herb AI helps you
              explore plant benefits and use the prediction tool with ease.
            </p>
            <p style={{ marginTop: "20px" }}> Click here to know more</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Home;
