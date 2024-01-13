import { useDispatch, useSelector } from "react-redux";
import Dialog from "./Dialog";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AddNewAcademicsForm.css";
import { addAcademics } from "../redux/actions/UserActions";

const AddNewAcademicsForm = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [selectedStandard, setStandard] = useState("");
  const [selectDepartment, setDepartment] = useState("");

  const user = useSelector(({ store }) =>
    store.users.find((user) => user.id === params.id)
  );
  const [availableClass, setAvailableClass] = useState([]);

  const totalAcademicses = [
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
    setStandard(e.target.value);
  };
  const handleChangeDepartment = (e) => {
    setDepartment(e.target.value);
  };
  const handleClose = () => onClose();

  const handleFormSubmit = () => {
    const educationHistory = user.educationHistory;

    const updatedHistory = [
      ...educationHistory,
      {
        class: selectedStandard,
        examsAndScores: [
          {
            examName: "Quaterly",
            english: "N/A",
            maths: "N/A",
            science: "N/A",
            social: "N/A",
            tamil: "N/A",
          },
          {
            examName: "HalfYearly",
            english: "N/A",
            maths: "N/A",
            science: "N/A",
            social: "N/A",
            tamil: "N/A",
          },
          {
            examName: "Annual",
            english: "N/A",
            maths: "N/A",
            science: "N/A",
            social: "N/A",
            tamil: "N/A",
          },
        ],
      },
    ];

    dispatch(addAcademics({ id: params.id, updatedHistory }));
    handleClose();
  };

  useEffect(() => {
    const userClass = user?.educationHistory
      ? user.educationHistory.map((education) => education.class)
      : [];

    const filteredArray = totalAcademicses.filter(
      (item) => !userClass.includes(item)
    );

    setAvailableClass(filteredArray);
    setStandard(filteredArray[0]);
  }, [user]);

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
              >
                {availableClass.length ? (
                  availableClass.map((standard, index) => (
                    <option key={index}>{standard}</option>
                  ))
                ) : (
                  <option>No class available</option>
                )}
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
