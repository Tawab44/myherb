import { useState } from "react";
import axios from "axios";

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
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <h1>
        Upload an image of a plant and let AI identify it for you.
      </h1>

      <h4 style={{ marginTop: "10px", lineHeight: "1.6" }}>
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
          }}
        >
          📤 Upload Plant Image
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
  );
};

export default Home;
