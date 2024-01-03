import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./UserView.css";

const UserView = () => {
  const param = useParams();
  const user = useSelector(({ store }) => {
    const users = store.users;
    return users.find((user) => user.id === param.id);
  });

  console.log("user : ", user);

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
            {user.educationHistory.map((education) => {
              return (
                <div className="parentContainer">
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
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
                        {education?.examsAndScores.map((value) => {
                          return (
                            <tr>
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
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserView;
