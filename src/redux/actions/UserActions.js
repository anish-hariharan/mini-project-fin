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
  updatedEducationalHistory,
  userId,
  std,
  user,
}) => {
  const updatedUser = {
    ...user,
    educationHistory: user.educationHistory.map((history) => {
      if (history.class === std) {
        return {
          ...history,
          examsAndScores: history.examsAndScores.map((value) => {
            if (value.id === updatedEducationalHistory.id) {
              return updatedEducationalHistory;
            }

            return value;
          }),
        };
      }

      return history;
    }),
  };

  return {
    type: UPDATE_EDUCATIONAL_HISTORY,
    payload: { userId, std, updatedUser },
  };
};
