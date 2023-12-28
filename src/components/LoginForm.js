import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LogInForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogIn = (e) => {
    e.preventDefault();
    if (userName === "anish" && password === "anish@1234") {
      localStorage.setItem("userInfo", userName);
      navigate("/home");
    } else {
      console.log("error");
    }
  };

  const enableSubmitBtn = userName !== "" && password !== "";
  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleLogIn} className="loginForm">
          <div className="formDiv">
            <div className="formDivChild">
              <label style={{ margin: "5px" }}>User name</label>
              <input
                title="username"
                type="text"
                onChange={handleUserName}
                value={userName}
                name="userName"
                required
                style={{ width: "80%" }}
                className="inputBox"
              />
            </div>

            <div className="formDivChild">
              <label style={{ margin: "5px" }}>Password</label>
              <input
                title="password"
                type="password"
                onChange={handlePassword}
                value={password}
                name="password"
                required
                style={{ width: "80%" }}
                className="inputBox"
              />
            </div>

            <div className="btnContainer">
              <button
                type="submit"
                onClick={handleLogIn}
                disabled={!enableSubmitBtn}
                style={{ width: "86%", margin: "10px" }}
                className="submitButton"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogInForm;
