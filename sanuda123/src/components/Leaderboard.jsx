import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get("http://localhost:3030/leaderboard");
                setPlayers(response.data);
            } catch (err) {
                console.error("Error fetching leaderboard:", err);
                setError("Failed to load leaderboard.");
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    if (loading) return <p>Loading leaderboard...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Leaderboard</h2>
            <table border="1" style={{ margin: "0 auto", width: "50%" }}>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.player_name}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
