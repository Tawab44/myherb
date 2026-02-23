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
        const res = await axios.get("http://localhost:5000/api/care");
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

      {/* CENTERED INTRO PARAGRAPH */}
      <p className="intro-text">
        Herbs are natural medicine that thrive with proper sunlight, water,
        and soil, producing richer aroma and nutrients. 🌿 Many varieties
        repel pests and attract pollinators, while 🌱 regular harvesting
        promotes fuller growth and more flavorful leaves.
      </p>

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

      {/* 🌿 SHOW ALL HERBS ONE AFTER ANOTHER */}
      {filteredHerbs.map((herb) => (
        <div key={herb._id} className="herb-card">

          <h2>
            {herb.commonName} ({herb.scientificName})
          </h2>

          <img src={herb.imageUrl} alt={herb.commonName} />

          <h3>Also Known As</h3>
          <p className="left-text">
            {herb.alsoKnownAs.join(", ")}
          </p>

          <h3>About This Plant</h3>
          <p className="left-text">
            {herb.about}
          </p>

          <h3>Plant Care Instructions</h3>

          {/* TWO-COLUMN GRID */}
          <div className="care-grid">

            <div className="care-box">🌱 Outdoor Size: {herb.care.outdoorSize}</div>
            <div className="care-box">☀️ Light: {herb.care.light}</div>

            <div className="care-box">💧 Humidity: {herb.care.humidity}</div>
            <div className="care-box">🌿 Fertilizing: {herb.care.fertilizing}</div>

            <div className="care-box">✂️ Pruning: {herb.care.pruning}</div>
            <div className="care-box">🐛 Pests: {herb.care.pests}</div>

            <div className="care-box">🏠 Indoor Size: {herb.care.indoorSize}</div>
            <div className="care-box">🚿 Watering: {herb.care.watering}</div>

            <div className="care-box">🌡️ Temperature: {herb.care.temperature}</div>
            <div className="care-box">📅 Season: {herb.care.season}</div>

            <div className="care-box full">⭐ Difficulty: {herb.care.difficulty}</div>

          </div>

          <div className="fact-box">
            💡 Did You Know? {herb.fact}
          </div>

        </div>
      ))}

    </div>
  );
};

export default Herbcare;