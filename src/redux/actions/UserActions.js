import { ADD_USER, GET_USERS } from "./ActionTypes.js";

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
