import { useSelector } from "react-redux";
import Dialog from "./Dialog";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AddNewAcademicsForm.css";

const AddNewAcademicsForm = ({ open, onClose }) => {
  const params = useParams();
  const [selectedStandard, setStandard] = useState("");
  const [selectDepartment, setDepartment] = useState("");

  const user = useSelector(({ store }) =>
    store.users.find((user) => user.id === params.id)
  );
  const [availableClass, setAvailableClass] = useState([]);

  const totalClass = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const availableDepartment = ["Maths Biology", "Maths ComputerScience"];

  const handleChangeStandard = (e) => {
    console.log("event : ", e);
    setStandard(e.target.value);
  };
  const handleChangeDepartment = (e) => {
    setDepartment(e.target.value);
  };

  const handleFormSubmit = () => {
    console.log("selectedStandard : ", selectedStandard);
    console.log("selectDepartment : ", selectDepartment);
  };

  useEffect(() => {
    const userClass = user?.educationHistory
      ? user.educationHistory.map((education) => education.class)
      : [];

    const filteredArray = totalClass.filter(
      (item) => !userClass.includes(item)
    );

    setAvailableClass(filteredArray);
    setStandard(filteredArray[0]);
  }, [user]);

  const handleClose = () => onClose();

  return (
    <>
      <Dialog
        open={open}
        heading="Add new Academics"
        onclose={handleClose}
        onSubmit={handleFormSubmit}
      >
        <div style={{ width: "100%" }}>
          <div className="parentAddAcademicContainer">
            <div className="labelAddAcademicContainer">
              <label style={{ margin: "5px", width: "100%" }}>
                Choose the Class
              </label>
            </div>
            <div className="selectContainer">
              <select
                id="choose-class-from-the-option"
                className="selectField"
                value={selectedStandard}
                onChange={(e) => handleChangeStandard(e)}
                defaultValue={""}
              >
                {availableClass.length &&
                  availableClass.map((standard, index) => (
                    <option key={index}>{standard}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className="parentAddAcademicContainer">
            <div className="labelAddAcademicContainer">
              <label style={{ margin: "5px", width: "100%" }}>Department</label>
            </div>
            <div className="selectContainer">
              <select
                id="choose-department-from-the-option"
                className="selectField"
                value={selectDepartment}
                onChange={(e) => handleChangeDepartment(e)}
              >
                {availableDepartment.length &&
                  availableDepartment.map((department, index) => (
                    <option key={index}>{department}</option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AddNewAcademicsForm;
