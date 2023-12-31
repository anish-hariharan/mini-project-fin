import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogInForm from "./components/LoginForm";
import PrivateRouter from "./router/PrivateRouter";
import ProtectedRoute from "./router/ProtectedRoute";
import CustomersList from "./components/Customers";
import Header from "./components/Header";
import AddUser from "./components/AddUser";

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
        <Route element={<Header />}>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <CustomersList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addUser"
            element={
              <ProtectedRoute>
                <AddUser />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
