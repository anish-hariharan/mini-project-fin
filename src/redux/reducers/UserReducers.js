import { ADD_USER, GET_USERS } from "../actions/ActionTypes.js";

const initialState = {
  users: [
    {
      id: "1",
      firstName: "anish",
      lastName: "hariharan",
      contact: "9233211242",
      aadharNumber: "1231231232",
    },
    {
      id: "2",
      firstName: "shelif",
      lastName: "sluvai",
      contact: "9233211243",
      aadharNumber: "1231231233",
    },
    {
      id: "3",
      firstName: "suji",
      lastName: "mukesh",
      contact: "9233211244",
      aadharNumber: "1231231234",
    },
    {
      id: "4",
      firstName: "samual",
      lastName: "jk",
      contact: "9233211245",
      aadharNumber: "1231231235",
    },
    {
      id: "5",
      firstName: "test 5",
      lastName: "user",
      contact: "9233211246",
      aadharNumber: "1231231236",
    },
    {
      id: "6",
      firstName: "test 6",
      lastName: "user",
      contact: "9233211247",
      aadharNumber: "1231231237",
    },
    {
      id: "7",
      firstName: "test 7",
      lastName: "user",
      contact: "9233211248",
      aadharNumber: "1231231238",
    },
    {
      id: "8",
      firstName: "test 8",
      lastName: "user",
      contact: "9233211249",
      aadharNumber: "1231231239",
    },
    {
      id: "9",
      firstName: "test 9",
      lastName: "user",
      contact: "9233211211",
      aadharNumber: "1231231211",
    },
    {
      id: "10",
      firstName: "test 10",
      lastName: "user",
      contact: "9233211212",
      aadharNumber: "1231231212",
    },
    {
      id: "11",
      firstName: "test 11",
      lastName: "user",
      contact: "9233211213",
      aadharNumber: "1231231213",
    },
    {
      id: "12",
      firstName: "test 12",
      lastName: "user",
      contact: "9233211214",
      aadharNumber: "1231231214",
    },
  ],
};

const userReducer = (state = initialState, action) => {
  if (action.type === GET_USERS) {
    return state;
  }

  if (action.type === ADD_USER) {
    return {
      users: [...state.users, action.payload],
    };
  }

  return state;
};

export default userReducer;
