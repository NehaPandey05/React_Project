import { useNavigate, useLocation } from "react-router-dom";
import "./Instruction.css";

function Instruction() {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location?.state?.type || "Technical";

  const tips = {
    Technical: [
      "Explain your logic clearly",
      "Think aloud",
      "Discuss time complexity"
    ],
    HR: [
      "Be confident",
      "Give real life examples",
      "Show communication skills"
    ],
    Coding: [
      "Explain before coding",
      "Handle edge cases",
      "Optimize solution"
    ]
  };

  return (
    <div className="instruction-page">

      <h1 className="title">{type} Interview</h1>

      {/* Stats */}
      <div className="stats">
        <div className="stat">
          <h3>5-10</h3>
          <p>Questions</p>
        </div>

        <div className="stat">
          <h3>10-15 min</h3>
          <p>Duration</p>
        </div>

        <div className="stat">
          <h3>AI</h3>
          <p>Feedback</p>
        </div>
      </div>

      {/* Grid */}
      <div className="instruction-grid">

        <div className="card">
          <h2>📋 Overview</h2>
          <ul>
            <li>Interview Type: {type}</li>
            <li>AI Generated Questions</li>
            <li>Recorded Responses</li>
          </ul>
        </div>

        <div className="card">
          <h2>💡 Tips</h2>
          <ul>
            {tips[type].map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>⚠️ Rules</h2>
          <ul>
            <li>Each question time limited</li>
            <li>No skipping questions</li>
            <li>Recording enabled</li>
          </ul>
        </div>

        <div className="card">
          <h2>✅ Preparation</h2>
          <ul>
            <li>Check microphone</li>
            <li>Stable internet</li>
            <li>Quiet environment</li>
          </ul>
        </div>

      </div>

      <button
        className="start-btn"
        onClick={() => navigate("/interview", { state: { type } })}
      >
        Start {type} Interview →
      </button>

    </div>
  );
}

export default Instruction;