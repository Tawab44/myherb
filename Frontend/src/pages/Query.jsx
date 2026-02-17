import { useState } from "react";
import axios from "axios";

const Query = () => {
  const [formData, setFormData] = useState({
    email: "",
    nameOrProperties: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.description) {
      alert("Email and Description are required");
      return;
    }

    const data = new FormData();
    data.append("email", formData.email);
    data.append("nameOrProperties", formData.nameOrProperties);
    data.append("description", formData.description);

    if (image) {
      data.append("image", image);
    }

    try {
      await axios.post("http://localhost:5000/api/queries", data);
      alert("Query submitted successfully 🌿");
      setFormData({ email: "", nameOrProperties: "", description: "" });
      setImage(null);
    } catch (error) {
      alert("Error submitting query");
    }
  };

  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h1>Submit Herb Query 🌱</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="nameOrProperties"
          placeholder="Herb Name / Properties (Optional)"
          value={formData.nameOrProperties}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Short Description *"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Submit Query</button>
      </form>
    </div>
  );
};

export default Query;
