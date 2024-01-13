import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./UserView.css";
import { useState } from "react";
import AddNewAcademicsForm from "./AddNewAcademicsForm";

const UserView = () => {
  const param = useParams();
  const user = useSelector(({ store }) => {
    const users = store.users;
    return users.find((user) => user.id === param.id);
  });
  const [openAddAcademicForm, setAddAcademicForm] = useState();
  const totalClass =
    user.educationHistory.length > 0
      ? user.educationHistory.map((history) => history.class)
      : [];

  const handleOpenAddAcademicForm = () => setAddAcademicForm(true);
  const handleCloseAddAcademicForm = () => setAddAcademicForm(false);

  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <div className="NameContainer">
            <h1 style={{ marginLeft: "25px" }}>
              {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}{" "}
              {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)},
            </h1>
          </div>
          <div className="tableContainer">
            {user.educationHistory ? (
              user.educationHistory.map((education, index) => {
                return (
                  <div className="parentContainer" key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <h1>Standard {education.class}</h1>
                    </div>
                    <div>
                      <table className="user-table">
                        <thead>
                          <tr>
                            <th>Examiation</th>
                            <th>Tamil</th>
                            <th>English</th>
                            <th>Maths</th>
                            <th>Science</th>
                            <th>Social</th>
                          </tr>
                        </thead>
                        <tbody>
                          {education?.examsAndScores.map((value, index) => {
                            return (
                              <tr key={index}>
                                <td>{value.examName}</td>
                                <td>{value.tamil}</td>
                                <td>{value.english}</td>
                                <td>{value.maths}</td>
                                <td>{value.science}</td>
                                <td>{value.social}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2>No education history available</h2>
            )}
          </div>
          <div>
            <button
              onClick={handleOpenAddAcademicForm}
              disabled={totalClass.length === 12}
            >
              Add Academic
            </button>
          </div>
          <AddNewAcademicsForm
            open={openAddAcademicForm}
            onClose={handleCloseAddAcademicForm}
          />
        </div>
      </div>
    </>
  );
};

export default UserView;
