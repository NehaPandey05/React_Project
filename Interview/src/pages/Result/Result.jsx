import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const answers = location?.state?.answers || [];

  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  // 🧠 Analyze answers
  const analyzeAnswer = (answer) => {
    let score = 0;

    if (!answer) return 0;

    if (answer.length > 50) score += 4;
    if (answer.length > 20) score += 3;
    if (answer.toLowerCase().includes("project")) score += 2;
    if (answer.split(" ").length > 10) score += 1;

    return score; // max ~10
  };

  useEffect(() => {
    if (answers.length === 0) return;

    let total = 0;

    answers.forEach((item) => {
      total += analyzeAnswer(item.answer);
    });

    const finalScore = Math.min(10, Math.round(total / answers.length));
    setScore(finalScore);

    // 🎯 Feedback logic
    if (finalScore >= 8) {
      setFeedback("Excellent performance! You communicated clearly and confidently.");
    } else if (finalScore >= 6) {
      setFeedback("Good job! Try adding more detailed explanations.");
    } else {
      setFeedback("Needs improvement. Practice answering with more clarity and depth.");
    }
  }, [answers]);

  return (
    <div className="result-page">

      <h1>🎯 Interview Result</h1>

      <div className="score-box">
        <h2>Your Score</h2>
        <div className="score">{score}/10</div>
      </div>

      <div className="feedback-box">
        <h2>Feedback</h2>
        <p>{feedback}</p>
      </div>

      <div className="answers-box">
        <h2>Your Answers</h2>

        {answers.map((item, index) => (
          <div key={index} className="answer-card">
            <p><strong>Q{index + 1}:</strong> {item.question}</p>
            <p><strong>Your Answer:</strong> {item.answer || "No answer given"}</p>
          </div>
        ))}
      </div>

      <button className="retry-btn" onClick={() => navigate("/")}>
        🔄 Try Again
      </button>

    </div>
  );
}

export default Result;