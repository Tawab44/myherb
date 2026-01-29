import aboutImg1 from "../assets/homembg.gif";
import aboutImg2 from "../assets/abtbg1.jpg";
import aboutBg from "../assets/abtbg1.jpg";
import about2 from "../assets/mist2.gif";
import gcard1 from "../assets/ggreengear.webp";
import gcard2 from "../assets/greengear2.png";
import gcard3 from "../assets/lmagni.png";

const About = () => {
  return (
    <>
      {/* SECTION 1 — IMAGE LEFT, CONTENT RIGHT */}
      <div
        style={{
          padding: "80px 10%",
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
          background: `url(${aboutImg2}) center/cover no-repeat`,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <img
          src={aboutImg1}
          alt="Herb AI"
          style={{
            width: "380px",
            borderRadius: "14px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
        />

        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.85)",
            padding: "30px",
            borderRadius: "14px",
          }}
        >
          <h1 style={{ color: "#14532d" }}>About Herb AI 🌿</h1>
          <p style={{ marginTop: "20px", lineHeight: "1.8", fontSize: "17px" }}>
            Herb AI is an intelligent platform that helps users identify herbs
            from images instantly using advanced machine learning models.
            <br /><br />
            Designed for students, gardeners, and herbal enthusiasts, Herb AI
            makes learning about plants simple, interactive, and fun.
          </p>
        </div>
      </div>

      {/* SECTION 2 — CONTENT LEFT, BULLETS RIGHT */}
      <div
        style={{
          padding: "80px 10%",
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
          background: `url(${about2}) center/cover no-repeat`,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "rgba(240,253,244,0.9)",
            padding: "30px",
            borderRadius: "14px",
          }}
        >
          <h2 style={{ color: "#166534" }}>
            Perfect for Plant & Nature Enthusiasts 🌱
          </h2>
          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            Herb AI focuses on helping users learn about herbs in a simple, interactive way. Upload images, explore herb details, and discover their health benefits with ease all in a clean and modern design.
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            padding: "25px 30px",
            borderRadius: "14px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            minWidth: "300px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>✅ Accurate Predictions</li>
            <li>✅ Simple Interface</li>
            <li>✅ Educational</li>
            <li>✅ Fast & Responsive</li>
            <li>✅ Accessible on All Devices</li>
            <li>✅ User Friendly</li>
          </ul>
        </div>
      </div>

      {/* SECTION 3 — THREE INFO CARDS */}
      <div
        style={{
          background: `url(${aboutBg}) center/cover no-repeat`,
          padding: "100px 8%",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
  {
    img: gcard1,
    title: "How Herb AI Works",
    text:
      "Herb AI uses CNNs with architectures like ResNet, DenseNet, and InceptionV3 to analyze image features and classify over 25 herbs.",
  },
  {
    img: gcard2,
    title: "High-Quality Insights",
    text:
      "View visually similar plants, compare benefits, and understand differences to confidently identify the right herb.",
  },
  {
    img: gcard3,
    title: "Learn and Explore",
    text:
      "Upload images, explore detailed herb profiles, and learn about plant benefits in an engaging, interactive way.",
  },


          ].map((card, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.8)",
                padding: "30px",
                borderRadius: "16px",
                width: "280px",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            >
              <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: "60px",
                    marginBottom: "15px",
                    }}
/>

              <h3 style={{ color: "#14532d" }}>{card.title}</h3>
              <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* WHY HERB AI */}
        <div
          style={{
            marginTop: "80px",
            background: "rgba(0,0,0,0.65)",
            color: "white",
            padding: "40px",
            borderRadius: "16px",
            maxWidth: "900px",
            marginInline: "auto",
            textAlign: "center",
          }}
        >
          <h2>Why Herb AI? 🤖🌿</h2>

          <p style={{ marginTop: "15px" }}>
            <strong>AI-Powered:</strong> Built with CNN, ResNet, and InceptionV3
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Fast & Reliable:</strong> Processes images in seconds
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Interactive Experience:</strong> Search, explore, and learn
          </p>
        </div>

        {/* USEFUL LINKS */}
        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h3>Useful Links 🔗</h3>
          <p style={{ marginTop: "10px" }}>
            <a
              href="https://github.com/Tawab44/myherb"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#86efac", textDecoration: "none" }}
            >
              GitHub Repository
            </a>
          </p>
          <p style={{ marginTop: "8px" }}>
            <a
              href="mailto:tawab.223694106@vcet.edu.in"
              style={{ color: "#86efac", textDecoration: "none" }}
            >
              Email
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
