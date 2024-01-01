import { useEffect, useState } from "react";
import "./AddUser.css";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/UserActions";
import Dialog from "./Dialog";

const AddUser = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [id, setId] = useState("12");
  const [open, setOpen] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [aadharNumberError, setAadharNumberError] = useState("");
  const [message, setMessage] = useState("");
  const [heading, setHeading] = useState("");
  const [resetForm, setResetForm] = useState(true);

  const handleAddUser = (event) => {
    event.preventDefault();

    if (phoneNumber.length !== 10) {
      setOpen(true);
      setMessage("Phone number should have minimum 10 digts");
      setHeading("Error");
      setResetForm(false);
      return;
    }

    if (aadharNumber.length !== 12) {
      setOpen(true);
      setMessage("Aadhar number should have minimum 12 digts");
      setHeading("Error");
      setResetForm(false);
      return;
    }

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
    setOpen(true);
    setMessage("Added the user successfully");
    setHeading("Add User");
    setResetForm(true);
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setAadharNumber("");
  };

  const closeModel = () => {
    setOpen(false);
    resetForm && clearForm();
  };

  const HandleNumber = (e, type) => {
    const numberPattern = /^[0-9]*$/;

    const { func } = {
      PHONE: {
        func: setPhoneNumber,
      },
      AADHAR: {
        func: setAadharNumber,
      },
    }[type];

    if (numberPattern.test(e.target.value)) {
      func(e.target.value);
    }

    return;
  };

  useEffect(() => {
    if (phoneNumber.length > 10) {
      setPhoneNumberError("Invalid Phone number");
    } else {
      setPhoneNumberError("");
    }

    if (aadharNumber.length > 12) {
      setAadharNumberError("Invalid aadhar number");
    } else {
      setAadharNumberError("");
    }
  }, [phoneNumber, aadharNumber]);

  return (
    <>
      <div>
        <div className="addUserDormContainer">
          <Dialog
            open={open}
            content={message}
            heading={heading}
            onclose={closeModel}
          />
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
                  onInput={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                  onInvalid={(e) => {
                    e.target.setCustomValidity("Please enter your first name");
                    e.target.setCustomValidity("");
                  }}
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
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  onInvalid={(e) => {
                    e.target.setCustomValidity("Please enter your last name");
                    e.target.setCustomValidity("");
                  }}
                  required
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
                  onChange={(e) => {
                    HandleNumber(e, "PHONE");
                    e.target.setCustomValidity("");
                  }}
                  value={phoneNumber}
                  onInvalid={(e) => {
                    e.target.setCustomValidity(
                      "Please enter your phone number"
                    );
                  }}
                  required
                />
              </div>
              {phoneNumberError && (
                <div className="warningMessage">
                  <p>{phoneNumberError}</p>
                </div>
              )}
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
                  onChange={(e) => {
                    HandleNumber(e, "AADHAR");
                    e.target.setCustomValidity("");
                  }}
                  value={aadharNumber}
                  onInvalid={(e) => {
                    e.target.setCustomValidity(
                      "Please enter your aadhar number"
                    );
                  }}
                  required
                />
              </div>
              {aadharNumberError && (
                <div className="warningMessage">
                  <p>Aadhar number is a required field</p>
                </div>
              )}
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
