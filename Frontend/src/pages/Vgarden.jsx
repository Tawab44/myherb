import { useEffect, useState } from "react";
import axios from "axios";

const Vgarden = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/plants");
        setPlants(res.data);
      } catch (error) {
        console.error(error);
        alert("Failed to load plant data");
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading garden...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌿 Virtual Garden</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {plants.map((plant) => (
          <div
            key={plant._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              backgroundColor: "#f0fdf4",
              boxShadow: "0 5px 12px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={plant.imageUrl}
              alt={plant.commonName}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <h3 style={{ marginTop: "10px", color: "#166534" }}>
              {plant.commonName}
            </h3>

            <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
            <p><strong>Height:</strong> {plant.height}</p>

            <p>
              <strong>Medicinal Properties:</strong>{" "}
              {plant.medicinalProperties.join(", ")}
            </p>

            <p>
              <strong>Used For:</strong>{" "}
              {plant.usedFor.join(", ")}
            </p>

            <p>
              <strong>Symptoms Treated:</strong>{" "}
              {plant.symptomsTreated.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vgarden;
