import {
  ADD_USER,
  GET_USERS,
  ADD_ACADEMICS,
  UPDATE_EDUCATIONAL_HISTORY,
} from "./ActionTypes.js";

export const addUser = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};

export const getUsers = (value) => {
  return {
    type: GET_USERS,
    payload: value,
  };
};

export const addAcademics = ({ id, updatedHistory }) => {
  return {
    type: ADD_ACADEMICS,
    payload: { id, updatedHistory },
  };
};

export const updateEducationalHistory = ({
  value,
  bioMark,
  chemMark,
  csMark,
  englishMark,
  mathsMark,
  phyMark,
  scienceMark,
  socialMark,
  std,
  tamilMark,
  userId,
  examName,
}) => {
  const updatedEducationalHistory = {
    english: englishMark || value.english,
    examName: examName,
    id: value.id,
    maths: mathsMark || value.maths,
    ratings: "5",
    science: scienceMark || value.science,
    social: socialMark || value.social,
    tamil: tamilMark || value.tamil,
    ...(value?.biology && { biology: bioMark || value.biology }),
    ...(value?.physics && { physics: phyMark || value.physics }),
    ...(value?.chemistry && { chemistry: chemMark || value.chemistry }),
    ...(value?.computerScience && {
      computerScience: csMark || value.computerScience,
    }),
  };

  return {
    type: UPDATE_EDUCATIONAL_HISTORY,
    payload: { updatedEducationalHistory, std, userId },
  };
};
