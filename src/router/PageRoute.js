import { Route, Routes } from "react-router-dom";

import AddUser from "../components/AddUser";
import CustomersList from "../components/Customers";
import Header from "../components/Header";
import LogInForm from "../components/LoginForm";
import UserView from "../components/UserView";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRouter from "./PrivateRouter";

const PageRoute = () => {
  return (
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
        <Route
          path="/user/:id"
          element={
            <ProtectedRoute>
              <UserView />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default PageRoute;
