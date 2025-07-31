import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="home-page"
      style={{
        backgroundColor: "#1a2a3a",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <div
        className="background-animation"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: "url('https://example.com/lab-background.jpg')",
          backgroundSize: "cover",
          opacity: "0.1",
          animation: "slide 30s infinite linear",
        }}
      ></div>

      {/* Animated Lab Rats */}
      <div
        className="lab-rats"
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          animation: "moveRats 10s infinite ease-in-out",
        }}
      >
        <img
          src="public/logo192.png"
          alt="Lab Rat 1"
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            animation: "ratMove 5s linear infinite",
            animationDelay: "0s",
          }}
        />
        <img
          src="https://example.com/lab-rat2.png"
          alt="Lab Rat 2"
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            animation: "ratMove 6s linear infinite",
            animationDelay: "2s",
          }}
        />
        <img
          src="https://example.com/lab-rat3.png"
          alt="Lab Rat 3"
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            animation: "ratMove 7s linear infinite",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Title & Description */}
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "15px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        Get Ready for the Lab
      </h1>
      <p
        style={{
          fontSize: "1.4rem",
          maxWidth: "600px",
          marginBottom: "30px",
          animation: "fadeIn 2s ease-in-out",
        }}
      >
        Dive into a virtual chemistry adventure with our gamified lab setup. Let the reactions begin!
      </p>

      {/* Call to Action Buttons */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <Link
          to="/register"
          className="btn"
          style={{
            backgroundColor: "#F4A261",
            color: "black",
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "12px 25px",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "0.3s",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Start Your Experiment
        </Link>

        <Link
          to="/teacherregister"
          className="btn"
          style={{
            backgroundColor: "#2A9D8F",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "12px 25px",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "0.3s",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Teacher Portal
        </Link>
      </div>

      {/* Leaderboard */}
      <div
        className="top-three"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          marginTop: "50px",
          animation: "fadeIn 3s ease-in-out",
        }}
      >
        {[1, 2, 3].map((rank) => (
          <div key={rank} style={{ textAlign: "center" }}>
            <img
              src={
                rank === 1
                  ? "https://example.com/avatar1.jpg"
                  : rank === 2
                  ? "https://example.com/avatar2.jpg"
                  : "https://example.com/avatar3.jpg"
              }
              alt={`Top User ${rank}`}
              style={{
                borderRadius: "50%",
                border: "3px solid #F4A261",
                width: "90px",
                height: "90px",
                marginBottom: "10px",
                boxShadow: "0px 0px 20px rgba(255, 165, 97, 0.6)",
              }}
            />
            <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>#{rank}</p>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div style={{ marginTop: "50px", display: "flex", gap: "20px" }}>
        <a
          href="https://www.instagram.com/chem.quest/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "white", transition: "0.3s" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
            alt="Instagram"
            style={{ width: "40px", height: "40px", transition: "0.3s" }}
          />
          <p style={{ fontSize: "1rem", fontWeight: "bold" }}>Instagram</p>
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "white", transition: "0.3s" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
            alt="Facebook"
            style={{ width: "40px", height: "40px", transition: "0.3s" }}
          />
          <p style={{ fontSize: "1rem", fontWeight: "bold" }}>Facebook</p>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "white", transition: "0.3s" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
            alt="LinkedIn"
            style={{ width: "40px", height: "40px", transition: "0.3s" }}
          />
          <p style={{ fontSize: "1rem", fontWeight: "bold" }}>LinkedIn</p>
        </a>
      </div>
    </div>
  );
}

export default Home;
