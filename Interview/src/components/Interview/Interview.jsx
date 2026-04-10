import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Interview.css";

function Interview() {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const [recording, setRecording] = useState(false);
  const [time, setTime] = useState(30);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(
    "Tell me about yourself"
  );

 
  const questions = [
    "Tell me about yourself",
    "Explain your latest project",
    "What are your strengths?",
    "What is closure in JavaScript?",
    "Explain React lifecycle"
  ];

  const [index, setIndex] = useState(0);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (!recording) return;
    const timer = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          nextQuestion();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [recording]);

 
  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    videoRef.current.srcObject = stream;
  };

  const startRecording = () => {
    const stream = videoRef.current.srcObject;
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    recorder.start();
    setRecording(true);

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.onresult = e => {
        const text = e.results[e.results.length - 1][0].transcript;
        setTranscript(text);
      };
      recognitionRef.current.start();
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    recognitionRef.current?.stop();
    setRecording(false);
  };

  const nextQuestion = async () => {
  if (loading) return;
  setLoading(true);

  stopRecording();

 
  const updatedAnswers = [
    ...answers,
    {
      question: currentQuestion,
      answer: transcript || "No answer"
    }
  ];

  setAnswers(updatedAnswers);

  await new Promise(res => setTimeout(res, 1000));

  const nextIndex = index + 1;

  if (nextIndex >= questions.length) {
    navigate("/result", {
      state: { answers: updatedAnswers }
    });
    return;
  }

  setIndex(nextIndex);
  setCurrentQuestion(questions[nextIndex]);
  setTranscript("");
  setTime(30);

  setTimeout(() => {
    startRecording();
    setLoading(false);
  }, 500);
};

  return (
    <div className="interview-page">
      <h1>AI Mock Interview</h1>

      <div className="question-box">
        <h2>{currentQuestion}</h2>
      </div>

      <div className="timer">Time Left: {time}s</div>

      <video ref={videoRef} autoPlay muted className="video" />

      <div className="controls">
        <button onClick={startRecording} disabled={recording}>
          Start
        </button>
        <button onClick={stopRecording}>Stop</button>
        <button onClick={nextQuestion} disabled={loading}>
          {loading ? "Thinking..." : "Next"}
        </button>
      </div>

      <div className="transcript">
        <strong>Your Answer:</strong>
        <p>{transcript}</p>
      </div>
    </div>
  );
}

export default Interview;