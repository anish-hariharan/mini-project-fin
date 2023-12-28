import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogInForm from "./components/LoginForm";
import PrivateRouter from "./router/PrivateRouter";
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <LogInForm />
            </PrivateRouter>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <h1>Home page!</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
