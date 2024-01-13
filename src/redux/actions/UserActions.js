import { ADD_USER, GET_USERS, ADD_ACADEMICS } from "./ActionTypes.js";

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
