import { Link } from "react-router-dom";

function GeneralChemistry() {
  return (
    <div>
      {/* Main Content */}
      <div
        style={{
          backgroundColor: "#0D1B2A",
          color: "#fff",
          minHeight: "100vh",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
          General Chemistry
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Explore fundamental concepts of chemistry, including the periodic table, 
          chemical reactions, atomic structures, and more!
        </p>

        <div
          className="topics"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {/* Topic 1 - Periodic Table */}
          <div
            className="topic-card"
            style={{
              backgroundColor: "#1B263B",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
              Periodic Table
            </h3>
            <p style={{ marginBottom: "20px" }}>
              Learn about elements and their properties.
            </p>
            <Link
              to="/interactionpage"
              style={{
                backgroundColor: "#F4A261",
                color: "#000",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Explore
            </Link>
            <Link
              to="/quiz/periodic-table"
              style={{
                backgroundColor: "#E76F51",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
              }}
            >
              Take Quiz
            </Link>
          </div>

          {/* Topic 2 - Chemical Reactions */}
          <div
            className="topic-card"
            style={{
              backgroundColor: "#1B263B",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
              Chemical Reactions
            </h3>
            <p style={{ marginBottom: "20px" }}>
              Understand reaction types and balancing equations.
            </p>
            <Link
              to="/chemical-reactions"
              style={{
                backgroundColor: "#F4A261",
                color: "#000",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Learn More
            </Link>
            <Link
              to="/quiz/chemical-reactions"
              style={{
                backgroundColor: "#E76F51",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
              }}
            >
              Take Quiz
            </Link>
          </div>

          {/* Topic 3 - Atomic Structure */}
          <div
            className="topic-card"
            style={{
              backgroundColor: "#1B263B",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
              Atomic Structure
            </h3>
            <p style={{ marginBottom: "20px" }}>
              Dive into protons, neutrons, and electrons.
            </p>
            <Link
              to="/atomic-structure"
              style={{
                backgroundColor: "#F4A261",
                color: "#000",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Start Learning
            </Link>
            <Link
              to="/quiz/atomic-structure"
              style={{
                backgroundColor: "#E76F51",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
              }}
            >
              Take Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralChemistry;
