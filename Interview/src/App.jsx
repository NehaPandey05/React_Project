import { BrowserRouter, Routes, Route } from "react-router-dom";
import Interview from "./components/Interview/Interview";
import Dashboard from "./pages/Dashboard/Dashboard";
import Instruction from "./pages/Instruction/Instruction";
import Layout from "./components/Layout/Layout";
import Result from "./pages/Result/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="instruction" element={<Instruction />} />
          <Route path="interview" element={<Interview />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;