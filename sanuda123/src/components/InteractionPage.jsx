/*import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3030"); // WebSocket connection

const InteractionPage = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receiveMessage"); // Cleanup
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧑‍🏫 Student-Teacher Chat</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "scroll" }}>
        {chat.map((msg, index) => (
          <p key={index} style={{ background: "#f1f1f1", padding: "5px", borderRadius: "5px" }}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ marginTop: "10px", padding: "5px", width: "80%" }}
      />
      <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "5px" }}>Send</button>
    </div>
  );
};

// ✅ Ensure default export
export default InteractionPage; */

import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3030"); // WebSocket connection

const InteractionPage = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedChat = JSON.parse(localStorage.getItem("chat")) || [];
    setChat(storedChat);
    
    socket.on("receiveMessage", (data) => {
      setChat((prev) => {
        const updatedChat = [...prev, data];
        localStorage.setItem("chat", JSON.stringify(updatedChat));
        return updatedChat;
      });
    });
    
    socket.on("userTyping", (isTyping) => {
      setTyping(isTyping);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("userTyping");
    };
  }, []);

  /*const sendMessage = () => {
    if (message.trim()) {
      const chatMessage = {
        user: username || "Anonymous",
        text: message,
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.emit("sendMessage", chatMessage);
      setMessage("");
    }
  };*/

  const sendMessage = () => {
    if (message.trim()) {
      const chatMessage = {
        user: username || "Anonymous",
        text: message,
        timestamp: new Date().toISOString(),
        userId: localStorage.getItem("userId"), // Store user ID after login
        userRole: localStorage.getItem("userRole"), // Store role (student or teacher)
      };
  
      socket.emit("sendMessage", chatMessage); // Send message with role and ID
      setMessage(""); // Clear message input
    }
  };
  

  const handleTyping = (e) => {
    setMessage(e.target.value);
    socket.emit("userTyping", e.target.value.length > 0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧑‍🏫 Student-Teacher Chat</h2>
      <input
        type="text"
        placeholder="Enter your name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <div
        style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "scroll" }}
      >
        {chat.map((msg, index) => (
          <p key={index} style={{ background: "#f1f1f1", padding: "5px", borderRadius: "5px" }}>
            <strong>{msg.user}</strong>: {msg.text} <span style={{ fontSize: "0.8em", color: "gray" }}>({msg.timestamp})</span>
          </p>
        ))}
      </div>
      {typing && <p style={{ color: "gray" }}>Someone is typing...</p>}
      <input
        type="text"
        value={message}
        onChange={handleTyping}
        placeholder="Type a message..."
        style={{ marginTop: "10px", padding: "5px", width: "80%" }}
      />
      <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "5px" }}>Send</button>
    </div>
  );
};

export default InteractionPage;









