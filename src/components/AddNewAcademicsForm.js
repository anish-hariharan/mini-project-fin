import { useDispatch, useSelector } from "react-redux";
import Dialog from "./Dialog";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AddNewAcademicsForm.css";
import { addAcademics } from "../redux/actions/UserActions";
import { v4 as uuidV4 } from "uuid";

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
  const availableDepartment = [
    "Below 10",
    "Maths Biology",
    "Maths ComputerScience",
  ];

  const departmentEnum = {
    Below10: "BELOWTEN",
    MathsBiology: "MATHSBIOLOGY",
    MathsComputerScience: "MATHSCOMPUTER",
  };

  const handleChangeStandard = (e) => {
    if (e.target.value <= 10) {
      setDepartment("Below 10");
    } else {
      setDepartment(availableDepartment[1]);
    }
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
        department: departmentEnum[selectDepartment.replace(/\s/g, "")],
        examsAndScores: [
          {
            examName: "Quaterly",
            english: "N/A",
            maths: "N/A",
            tamil: "N/A",
            ...(selectDepartment === "Below 10" && {
              science: "N/A",
              social: "N/A",
            }),
            ...(selectDepartment !== "Below 10" && {
              physics: "N/A",
              chemistry: "N/A",
            }),

            ...(selectDepartment === "Maths Biology" && {
              biology: "N/A",
            }),
            ...(selectDepartment === "Maths ComputerScience" && {
              computerScience: "N/A",
            }),
            id: uuidV4(),
          },
          {
            examName: "HalfYearly",
            english: "N/A",
            maths: "N/A",
            tamil: "N/A",
            ...(selectDepartment === "Below 10" && {
              science: "N/A",
              social: "N/A",
            }),
            ...(selectDepartment !== "Below 10" && {
              physics: "N/A",
              chemistry: "N/A",
            }),

            ...(selectDepartment === "Maths Biology" && {
              biology: "N/A",
            }),
            ...(selectDepartment === "Maths ComputerScience" && {
              computerScience: "N/A",
            }),
            id: uuidV4(),
          },
          {
            examName: "Annual",
            english: "N/A",
            maths: "N/A",
            tamil: "N/A",
            ...(selectDepartment === "Below 10" && {
              science: "N/A",
              social: "N/A",
            }),
            ...(selectDepartment !== "Below 10" && {
              physics: "N/A",
              chemistry: "N/A",
            }),

            ...(selectDepartment === "Maths Biology" && {
              biology: "N/A",
            }),
            ...(selectDepartment === "Maths ComputerScience" && {
              computerScience: "N/A",
            }),
            id: uuidV4(),
          },
        ],
      },
    ];

    dispatch(addAcademics({ id: params.id, updatedHistory }));
    handleClose();
    setStandard("");
  };

  useEffect(() => {
    const userClass = user?.educationHistory
      ? user.educationHistory.map((education) => education.class)
      : [];

    const filteredArray = totalAcademicses.filter(
      (item) => !userClass.includes(item)
    );
    setAvailableClass(filteredArray);
    setDepartment(selectedStandard <= 10 ? "Below 10" : "Maths Biology");

    if (selectedStandard === "") {
      setStandard(filteredArray[0]);
    }
  }, [user, selectedStandard]);

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
                defaultValue={selectedStandard}
                onClick={(e) => handleChangeStandard(e)}
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
                    <option
                      key={index}
                      disabled={
                        (department === "Below 10" && selectedStandard > 10) ||
                        ((department === "Maths Biology" ||
                          department === "Maths ComputerScience") &&
                          selectedStandard < 10)
                      }
                    >
                      {department}
                    </option>
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
