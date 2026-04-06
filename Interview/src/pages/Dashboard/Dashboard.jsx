import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const goToInstruction = (type) => {
    navigate("/instruction", { state: { type } });
  };

  return (
    <div className="dashboard-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="gradient-text">
            Ace Your Interviews with AI
          </h1>

          <p className="subtitle">
            Practice technical, HR, and coding interviews with AI.
            Get feedback, improve performance and boost confidence.
          </p>

          <button
            className="cta-btn"
            onClick={() => navigate("/instruction")}
          >
            Select Interview Role →
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="AI interview"
          />
        </div>
      </section>


      {/* INTERVIEW TYPES */}
      <section className="roles">
        <h2>Choose Interview Type</h2>

        <div className="role-cards">
          <div className="role-card" onClick={() => goToInstruction("Technical")}>
            💻 Technical Interview
          </div>

          <div className="role-card" onClick={() => goToInstruction("HR")}>
            🧠 HR Interview
          </div>

          <div className="role-card" onClick={() => goToInstruction("Coding")}>
            🧪 Coding Interview
          </div>
        </div>
      </section>

   



      {/* HOW IT WORKS */}
      <section className="steps">
        <h2>How It Works</h2>

        <div className="step-cards">
          <div className="step">1️⃣ Select Role</div>
          <div className="step">2️⃣ Answer Questions</div>
          <div className="step">3️⃣ Get AI Feedback</div>
        </div>
      </section>


      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <h3>100+</h3>
          <p>Questions</p>
        </div>

        <div className="stat">
          <h3>95%</h3>
          <p>Success Rate</p>
        </div>

        <div className="stat">
          <h3>24/7</h3>
          <p>AI Support</p>
        </div>
      </section>

    </div>
  );
}

export default Dashboard;