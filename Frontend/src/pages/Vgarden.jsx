import { useEffect, useState } from "react";
import axios from "axios";

const Vgarden = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");


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

 const filteredPlants = plants.filter((plant) => {
  const search = searchTerm.toLowerCase();

  return (
    plant.commonName.toLowerCase().includes(search) ||
    plant.scientificName.toLowerCase().includes(search) ||
    plant.usedFor.some((use) =>
      use.toLowerCase().includes(search)
    ) ||
    plant.symptomsTreated.some((symptom) =>
      symptom.toLowerCase().includes(search)
    )
  );
});
 
  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading garden...</h2>;
  }

  return (
    
    <div style={{ padding: "20px",}}>
      <h1>🌿 Virtual Garden</h1>
      <input
   type="text"
   placeholder="🔍 Search by name, use, or symptom..."
   value={searchTerm}
   onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    marginTop: "15px",
    padding: "12px 16px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    
  }}
/>
{filteredPlants.length === 0 && (
  <p style={{ marginTop: "20px", color: "#666" }}>
    No plants found 🌱
  </p>
)}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {filteredPlants.map((plant) => (

          <div
            key={plant._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              backgroundColor: "#f0fdf4",
              boxShadow: "0 5px 12px rgba(0,0,0,0.1)",
              maxWidth: "320px",     
              margin: "0 auto"
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

            <h2 style={{ marginTop: "10px", color: "#166534" }}>
              {plant.commonName}
            </h2>

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
