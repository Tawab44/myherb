import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/herbcare.css";

const Herbcare = () => {
  const [herbs, setHerbs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchHerbs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/care"
        );
        setHerbs(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load herb care data");
      } finally {
        setLoading(false);
      }
    };

    fetchHerbs();
  }, []);

  /* 🔍 SEARCH LOGIC */
  const filteredHerbs = herbs.filter((herb) => {
    const search = searchTerm.toLowerCase();

    return (
      herb.commonName.toLowerCase().includes(search) ||
      herb.scientificName.toLowerCase().includes(search) ||
      herb.alsoKnownAs.some((name) =>
        name.toLowerCase().includes(search)
      )
    );
  });

  if (loading) return <h2>Loading herbs...</h2>;

  return (
    <div className="herbcare-container">

      <h1>🌿 Your Herb care starts here 🌿</h1>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="🔍 Search herb..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {filteredHerbs.length === 0 && (
        <p>No herbs found 🌱</p>
      )}

      {/* HERB CARDS */}
      <div className="herb-grid">
        {filteredHerbs.map((herb) => (
          <div key={herb._id} className="herb-card">

            <h2>
              {herb.commonName} ({herb.scientificName})
            </h2>

            <img src={herb.imageUrl} alt={herb.commonName} />

            <h3>Also Known As</h3>
            <p>{herb.alsoKnownAs.join(", ")}</p>

            <h3>About This Plant</h3>
            <p>{herb.about}</p>

            <h3>Plant Care Instructions</h3>

            <ul className="care-list">
              <li>🌱 Outdoor Size: {herb.care.outdoorSize}</li>
              <li>☀️ Light: {herb.care.light}</li>
              <li>💧 Humidity: {herb.care.humidity}</li>
              <li>🌿 Fertilizing: {herb.care.fertilizing}</li>
              <li>✂️ Pruning: {herb.care.pruning}</li>
              <li>🐛 Pests: {herb.care.pests}</li>
              <li>🏠 Indoor Size: {herb.care.indoorSize}</li>
              <li>🚿 Watering: {herb.care.watering}</li>
              <li>🌡️ Temperature: {herb.care.temperature}</li>
              <li>📅 Season: {herb.care.season}</li>
              <li>⭐ Difficulty: {herb.care.difficulty}</li>
            </ul>

            <div className="fact-box">
              💡 Did You Know? {herb.fact}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Herbcare;