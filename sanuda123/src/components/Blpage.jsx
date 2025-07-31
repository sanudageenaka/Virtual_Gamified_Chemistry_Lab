import React from "react";
import { Link } from "react-router-dom";


const categories = [
  { name: "Organic Chemistry", image: "https://cdn-icons-png.flaticon.com/256/7531/7531458.png", path: "/organic" },
  { name: "Inorganic Chemistry", image: "https://cdn-icons-png.flaticon.com/256/16831/16831083.png", path: "/inorganic" },
  { name: "Physical Chemistry", image: "https://cdn-icons-png.flaticon.com/256/3081/3081611.png", path: "/physical" },
  { name: "General Chemistry", image: "https://cdn-icons-png.flaticon.com/256/921/921815.png", path: "/generalchemistry" },
];

export default function ChemQuest() {
  return (
    <div style={{ backgroundColor: "#0a0a23", color: "white", minHeight: "100vh", textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "yellow" }}>ChemQuest</h1>
      <nav>
        <Link to="/" style={{ margin: "10px", color: "yellow" }}>Home</Link>
        <Link to="/experiments" style={{ margin: "10px" }}>Experiments</Link>
        <Link to="/leaderboard" style={{ margin: "10px" }}>Leaderboard</Link>
        <Link to="/categories" style={{ margin: "10px" }}>Categories</Link>
      </nav>
      <h2 style={{ marginTop: "20px", color: "yellow" }}>Let’s explore the Wonders of Chemistry</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", maxWidth: "600px", margin: "20px auto" }}>
        {categories.map((category, index) => (
          <div key={index} style={{ backgroundColor: "#1a1a2e", padding: "20px", borderRadius: "10px" }}>
            <Link to={category.path} style={{ textDecoration: "none", color: "white" }}>
              <img src={category.image} alt={category.name} style={{ width: "80px", height: "80px" }} />
              <h3>{category.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
