import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="title">AI Mock Interview</div>
      <div className="subtitle">
        Practice your interview skills
      </div>

      <button
        className="btn"
        onClick={() => navigate("/interview")}
      >
        Start Interview
      </button>
    </div>
  );
}

export default Home;