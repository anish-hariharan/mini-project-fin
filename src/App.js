import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogInForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogInForm />} />
        <Route path="/home" element={<h1>Home page!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
