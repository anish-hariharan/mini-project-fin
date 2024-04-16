import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./UserView.css";
import { useEffect, useState } from "react";
import AddNewAcademicsForm from "./AddNewAcademicsForm";
import {
  getStudentExamMarks,
  updateEducationalHistory,
} from "../redux/actions/UserActions";

const UserView = () => {
  const dispatch = useDispatch();
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
  const [editMode, setEditMode] = useState("");
  const [tamilMark, setTamilMark] = useState("");
  const [englishMark, setEnglishMark] = useState("");
  const [mathsMark, setMathsMark] = useState("");
  const [scienceMark, setScienceMark] = useState("");
  const [socialMark, setSocialMark] = useState("");
  const [phyMark, setPhyMark] = useState("");
  const [chemMark, setChemMark] = useState("");
  const [bioMark, setBiologyMark] = useState("");
  const [csMark, setCSMark] = useState("");
  const [defaultMarks, setDefaultMarks] = useState({});

  const handleOpenAddAcademicForm = () => setAddAcademicForm(true);
  const handleCloseAddAcademicForm = () => setAddAcademicForm(false);
  const handleSetDefaultMarks = ({ classId, examId, examName }) =>
    setDefaultMarks(
      getStudentMark({
        classId,
        examId,
        examName,
      })
    );

  const tableSubjects = {
    BELOWTEN: (
      <>
        <th>Examiation</th>
        <th>Tamil</th>
        <th>English</th>
        <th>Maths</th>
        <th>Science</th>
        <th>Social</th>
        <th></th>
      </>
    ),
    MATHSBIOLOGY: (
      <>
        <th>Examiation</th>
        <th>Tamil</th>
        <th>English</th>
        <th>Maths</th>
        <th>Physics</th>
        <th>Chemistry</th>
        <th>Biology</th>
        <th></th>
      </>
    ),
    MATHSCOMPUTER: (
      <>
        <th>Examiation</th>
        <th>Tamil</th>
        <th>English</th>
        <th>Maths</th>
        <th>Physics</th>
        <th>Chemistry</th>
        <th>Computer Science</th>
        <th></th>
      </>
    ),
  };

  const updateEducationHistory = (values) => {
    const updatedEducationalHistory = {
      english: englishMark || values.english,
      examName: values.examName,
      id: values.value.id,
      maths: mathsMark || values.maths,
      ratings: "5",
      science: scienceMark || values.science,
      social: socialMark || values.social,
      tamil: tamilMark || values.tamil,
      ...(values?.biology && { biology: bioMark || values.biology }),
      ...(values?.physics && { physics: phyMark || values.physics }),
      ...(values?.chemistry && { chemistry: chemMark || values.chemistry }),
      ...(values?.computerScience && {
        computerScience: csMark || values.computerScience,
      }),
    };

    dispatch(
      updateEducationalHistory({
        updatedEducationalHistory,
        userId: param.id,
        std: values.std,
        user,
      })
    );
  };

  const handleSubmit = (values) => {
    updateEducationHistory(values);

    setEditMode("");
    setTamilMark("");
    setEnglishMark("");
    setMathsMark("");
    setScienceMark("");
    setSocialMark("");
    setPhyMark("");
    setChemMark("");
    setBiologyMark("");
    setCSMark("");
  };

  const getStudentMark = ({ classId, examId, examName }) => {
    const classMark = user.educationHistory.find(
      (exam) => exam.class === classId
    );

    const marks = classMark.examsAndScores.find(
      (exam) => exam.id === examId && exam.examName === examName
    );

    return marks;
  };

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
          <div className="tableContainerUV">
            {user.educationHistory ? (
              user.educationHistory.map((education, index) => {
                return (
                  <div className="parentContainerUV" key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <h1 style={{ position: "sticky" }}>
                        Standard {education.class}
                      </h1>
                    </div>
                    <div>
                      <table className="user-table">
                        <thead>
                          <tr>{tableSubjects[education.department]}</tr>
                        </thead>
                        <tbody>
                          {education?.examsAndScores.map((value) => {
                            return (
                              <tr key={value.id}>
                                <td>{value.examName}</td>
                                <td>
                                  {editMode === value.id ? (
                                    <input
                                      defaultValue={
                                        defaultMarks?.tamil ?? tamilMark
                                      }
                                      onChange={(e) =>
                                        setTamilMark(e.target.value)
                                      }
                                    ></input>
                                  ) : (
                                    value.tamil
                                  )}
                                </td>
                                <td>
                                  {editMode === value.id ? (
                                    <input
                                      defaultValue={
                                        defaultMarks?.english ?? englishMark
                                      }
                                      onChange={(e) =>
                                        setEnglishMark(e.target.value)
                                      }
                                    ></input>
                                  ) : (
                                    value.english
                                  )}
                                </td>
                                <td>
                                  {editMode === value.id ? (
                                    <input
                                      defaultValue={
                                        defaultMarks?.maths ?? mathsMark
                                      }
                                      onChange={(e) =>
                                        setMathsMark(e.target.value)
                                      }
                                    ></input>
                                  ) : (
                                    value.maths
                                  )}
                                </td>

                                {value?.science && (
                                  <td>
                                    {editMode === value.id ? (
                                      <input
                                        defaultValue={
                                          defaultMarks?.science ?? scienceMark
                                        }
                                        onChange={(e) =>
                                          setScienceMark(e.target.value)
                                        }
                                      ></input>
                                    ) : (
                                      value.science
                                    )}
                                  </td>
                                )}
                                {value?.social && (
                                  <td>
                                    {editMode === value.id ? (
                                      <input
                                        defaultValue={
                                          defaultMarks?.social ?? socialMark
                                        }
                                        onChange={(e) =>
                                          setSocialMark(e.target.value)
                                        }
                                      ></input>
                                    ) : (
                                      value.science
                                    )}
                                  </td>
                                )}

                                {value?.physics && (
                                  <td>
                                    {editMode === value.id ? (
                                      <input
                                        value={phyMark}
                                        onChange={(e) =>
                                          setPhyMark(e.target.value)
                                        }
                                      ></input>
                                    ) : (
                                      value.physics
                                    )}
                                  </td>
                                )}
                                {value?.chemistry && (
                                  <td>
                                    {editMode === value.id ? (
                                      <input
                                        value={chemMark}
                                        onChange={(e) =>
                                          setChemMark(e.target.value)
                                        }
                                      ></input>
                                    ) : (
                                      value.chemistry
                                    )}
                                  </td>
                                )}
                                {value?.biology && (
                                  <td>
                                    {editMode === value.id ? (
                                      <input
                                        value={bioMark}
                                        onChange={(e) =>
                                          setBiologyMark(e.target.value)
                                        }
                                      ></input>
                                    ) : (
                                      value.biology
                                    )}
                                  </td>
                                )}
                                {value?.computerScience && (
                                  <td>
                                    {editMode === value.id ? (
                                      <input
                                        value={csMark}
                                        onChange={(e) =>
                                          setCSMark(e.target.value)
                                        }
                                      ></input>
                                    ) : (
                                      value.computerScience
                                    )}
                                  </td>
                                )}
                                <td>
                                  {editMode === value.id ? (
                                    <button
                                      onClick={() =>
                                        handleSubmit({
                                          value,
                                          tamilMark,
                                          englishMark,
                                          scienceMark,
                                          socialMark,
                                          mathsMark,
                                          bioMark,
                                          phyMark,
                                          chemMark,
                                          csMark,
                                          std: education.class,
                                          examName: value.examName,
                                        })
                                      }
                                    >
                                      Save
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => {
                                        setEditMode(value.id);
                                        handleSetDefaultMarks({
                                          classId: education.class,
                                          examId: value.id,
                                          examName: value.examName,
                                        });
                                      }}
                                    >
                                      Edit
                                    </button>
                                  )}
                                </td>
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
