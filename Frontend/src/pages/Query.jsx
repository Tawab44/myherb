import { useState } from "react";
import axios from "axios";
import queryBg from "../assets/mist.gif";
import "../styles/query.css";

const Query = () => {
  const [formData, setFormData] = useState({
    commonName: "",
    scientificName: "",
    partUsed: [],
    properties: "",
    source: "",
    missingStatus: "",
    notes: "",
    contributorName: "",
    email: "",
    permission: false,
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "partUsed") {
      const updated = checked
        ? [...formData.partUsed, value]
        : formData.partUsed.filter((item) => item !== value);

      setFormData({ ...formData, partUsed: updated });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.commonName ||
      !formData.email ||
      !formData.source ||
      !formData.missingStatus ||
      !formData.permission ||
      !image
    ) {
      alert("Please fill all required fields");
      return;
    }

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((val) => data.append(key, val));
      } else {
        data.append(key, formData[key]);
      }
    });

    if (image) data.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/queries", data);

      alert("Submission successful 🌿");

      setFormData({
        commonName: "",
        scientificName: "",
        partUsed: [],
        properties: "",
        source: "",
        missingStatus: "",
        notes: "",
        contributorName: "",
        email: "",
        permission: false,
      });

      setImage(null);
    } catch {
      alert("Submission failed");
    }
  };

  return (
    <div
      className="query-container"
      style={{
        background: `url(${queryBg}) center/cover no-repeat`,
      }}
    >
      {/* ===== HEADING ===== */}

      <h1 className="query-heading">
        Add Your Discovery to the{" "}
        <span>Herb Network & Library</span> 🌿
      </h1>

      <p className="query-subheading">
        If you’ve discovered a herb or information missing from our collection,
        share it with us. Our team will review and verify your submission.
      </p>

      {/* ===== FORM BOX ===== */}

      <div className="query-card">
        <form onSubmit={handleSubmit} className="query-form">
          <input
            name="commonName"
            placeholder="Common / Regional Name *"
            value={formData.commonName}
            onChange={handleChange}
            required
          />

          <input
            name="scientificName"
            placeholder="Scientific Name (Optional)"
            value={formData.scientificName}
            onChange={handleChange}
          />

          {/* UPLOAD */}
          <div>
            <label>Upload Image *</label>

            <label className="upload-box">
              📤 Click to Upload Herb Image
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </label>

            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="preview-img"
              />
            )}
          </div>

          {/* PART USED */}
          <div>
            <label>Part Used *</label>

            <div className="option-group">
              {["Leaf", "Root", "Flower", "Seed", "Bark", "Full Plant"].map(
                (part) => (
                  <label key={part} className="option-item">
                    <input
                      type="checkbox"
                      name="partUsed"
                      value={part}
                      checked={formData.partUsed.includes(part)}
                      onChange={handleChange}
                    />
                    <span>{part}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <textarea
            name="properties"
            placeholder="Known Properties / Benefits"
            rows="3"
            value={formData.properties}
            onChange={handleChange}
          />

          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            required
          >
            <option value="">Source of Information *</option>
            <option>Personal knowledge</option>
            <option>Traditional use</option>
            <option>Book reference</option>
            <option>Research article</option>
            <option>Practitioner advice</option>
            <option>Other</option>
          </select>

          {/* RADIO */}
          <div>
            <label>Is this herb missing? *</label>

            <div className="option-group">
              {["Yes", "Not sure", "Exists but incomplete"].map((opt) => (
                <label key={opt} className="option-item">
                  <input
                    type="radio"
                    name="missingStatus"
                    value={opt}
                    checked={formData.missingStatus === opt}
                    onChange={handleChange}
                    required
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="notes"
            placeholder="Additional Notes"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
          />

          <input
            name="contributorName"
            placeholder="Your Name (Optional)"
            value={formData.contributorName}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* PERMISSION */}
          <label className="permission">
            <input
              type="checkbox"
              name="permission"
              checked={formData.permission}
              onChange={handleChange}
              required
            />
            <span>
              I allow this information to be reviewed and published *
            </span>
          </label>

          <button type="submit" className="submit-btn">
            Submit Contribution 🌱
          </button>
        </form>
      </div>
    </div>
  );
};

export default Query;
