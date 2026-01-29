import aboutBg from "../assets/herbbg.jpg";

const About = () => {
  return (
     <div
      style={{
        minHeight: "100vh",
        background: `url(${aboutBg}) no-repeat center center`,
        backgroundSize: "cover",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
  <div
  style={{
          maxWidth: "900px",
          background: "rgba(0,0,0,0.55)",
          color: "white",
          padding: "30px",
          borderRadius: "14px",
          textAlign: "center",
        }}
      >
  <h1 style={{ padding: "20px" }}>About Page</h1>
<h4>Herb AI is an intelligent platform that helps users identify herbs from images instantly. Using advanced machine learning models, it recognizes over 100 herbs and provides detailed information about their health benefits, uses, and traditional applications. Designed for students, gardeners, and herbal enthusiasts, Herb AI makes learning about plants simple, interactive, and fun.</h4>
</div>
</div>
);
};

export default About;
