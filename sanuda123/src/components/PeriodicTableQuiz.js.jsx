import React, { useState } from "react";

function PeriodicTableQuiz() {
  const questions = [
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Pb"],
      answer: "Au",
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
      answer: "Hydrogen",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const userId = 1; // Replace with actual logged-in user ID

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      submitScore(score + (option === questions[currentQuestion].answer ? 1 : 0));
    }
  };

  const submitScore = async (finalScore) => {
    try {
      const response = await fetch("http://localhost:3030/submit-score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, score: finalScore, totalQuestions: questions.length }),
      });

      const data = await response.json();
      console.log("Score submitted:", data);
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px", color: "#fff", backgroundColor: "#0D1B2A", minHeight: "100vh" }}>
      <h1>Periodic Table Quiz</h1>
      {showScore ? (
        <h2>Your Score: {score} / {questions.length}</h2>
      ) : (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{
                display: "block",
                margin: "10px auto",
                padding: "10px",
                backgroundColor: "#F4A261",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PeriodicTableQuiz;
