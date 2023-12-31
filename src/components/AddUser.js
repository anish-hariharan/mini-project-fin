import { useState } from "react";
import "./AddUser.css";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/UserActions";

const AddUser = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLatName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [id, setId] = useState("12");

  const handleAddUser = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        firstName,
        lastName,
        contact: phoneNumber,
        aadharNumber,
        id: Number(id) + 1,
      })
    );

    setId((Number(id) + 1).toString());
  };

  return (
    <>
      <div>
        <div
          style={{
            height: "100%",
            marginTop: "0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form className="addUserForm" onSubmit={handleAddUser}>
            <div>
              <h2 style={{ margin: "0%" }}>Add User</h2>
            </div>
            <div className="addUserInputContainer">
              <div className="labelContainerAU">
                <div>
                  <label style={{ margin: "5px", width: "100%" }}>
                    First name
                  </label>
                </div>
              </div>
              <div className="inputContainerAUF">
                <input
                  type="text"
                  className="inputBox"
                  title="firstName"
                  style={{ width: "100%" }}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className="addUserInputContainer">
              <div className="labelContainerAU">
                <div>
                  <label style={{ margin: "5px", width: "100%" }}>
                    Last name
                  </label>
                </div>
              </div>
              <div className="inputContainerAUF">
                <input
                  type="text"
                  className="inputBox"
                  style={{ width: "100%" }}
                  onChange={(e) => setLatName(e.target.value)}
                />
              </div>
            </div>
            <div className="addUserInputContainer">
              <div className="labelContainerAU">
                <div>
                  <label style={{ margin: "5px", width: "100%" }}>
                    Phone number
                  </label>
                </div>
              </div>
              <div className="inputContainerAUF">
                <input
                  type="tel"
                  className="inputBox"
                  style={{ width: "100%" }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="addUserInputContainer">
              <div className="labelContainerAU">
                <div>
                  <label style={{ margin: "5px", width: "100%" }}>
                    Aadhar number
                  </label>
                </div>
              </div>
              <div className="inputContainerAUF">
                <input
                  type="text"
                  className="inputBox"
                  style={{ width: "100%" }}
                  onChange={(e) => setAadharNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="addUseButton">
              <button
                style={{ width: "102%", margin: "10px" }}
                className="submitButton"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;