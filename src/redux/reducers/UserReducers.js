import { ADD_ACADEMICS, ADD_USER, GET_USERS } from "../actions/ActionTypes.js";

const initialState = {
  users: [
    {
      id: "1",
      firstName: "anish",
      lastName: "hariharan",
      contact: "9233211242",
      aadharNumber: "1231231232",
      educationHistory: [
        {
          class: "1",
          department: "BELOWTEN",
          examsAndScores: [
            {
              examName: "Quaterly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
            {
              examName: "HalfYearly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
            {
              examName: "Annual",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      firstName: "shelif",
      lastName: "sluvai",
      contact: "9233211243",
      aadharNumber: "1231231233",
      educationHistory: [
        {
          class: "1",
          department: "BELOWTEN",
          examsAndScores: [
            {
              examName: "Quaterly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
            {
              examName: "HalfYearly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
            {
              examName: "Annual",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
          ],
        },
        {
          class: "2",
          department: "BELOWTEN",
          examsAndScores: [
            {
              examName: "Quaterly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
            {
              examName: "HalfYearly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
            {
              examName: "Annual",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      firstName: "suji",
      lastName: "mukesh",
      contact: "9233211244",
      aadharNumber: "1231231234",
      educationHistory: [
        {
          class: "1",
          department: "BELOWTEN",
          examsAndScores: [
            {
              examName: "Quaterly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
            {
              examName: "HalfYearly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
            {
              examName: "Annual",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
          ],
        },
      ],
    },
    {
      id: "4",
      firstName: "samual",
      lastName: "jk",
      contact: "9233211245",
      aadharNumber: "1231231235",
      educationHistory: [
        {
          class: "1",
          department: "BELOWTEN",
          examsAndScores: [
            {
              examName: "Quaterly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
            {
              examName: "HalfYearly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
            {
              examName: "Annual",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
            },
          ],
        },
      ],
    },
    {
      id: "5",
      firstName: "test 5",
      lastName: "user",
      contact: "9233211246",
      aadharNumber: "1231231236",
      educationHistory: [],
    },
    {
      id: "6",
      firstName: "test 6",
      lastName: "user",
      contact: "9233211247",
      aadharNumber: "1231231237",
      educationHistory: [],
    },
    {
      id: "7",
      firstName: "test 7",
      lastName: "user",
      contact: "9233211248",
      aadharNumber: "1231231238",
      educationHistory: [],
    },
    {
      id: "8",
      firstName: "test 8",
      lastName: "user",
      contact: "9233211249",
      aadharNumber: "1231231239",
      educationHistory: [],
    },
    {
      id: "9",
      firstName: "test 9",
      lastName: "user",
      contact: "9233211211",
      aadharNumber: "1231231211",
      educationHistory: [],
    },
    {
      id: "10",
      firstName: "test 10",
      lastName: "user",
      contact: "9233211212",
      aadharNumber: "1231231212",
      educationHistory: [],
    },
    {
      id: "11",
      firstName: "test 11",
      lastName: "user",
      contact: "9233211213",
      aadharNumber: "1231231213",
      educationHistory: [],
    },
    {
      id: "12",
      firstName: "test 12",
      lastName: "user",
      contact: "9233211214",
      aadharNumber: "1231231214",
      educationHistory: [],
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

  if (action.type === ADD_ACADEMICS) {
    const { id, updatedHistory } = action.payload;
    const user = state.users.find((user) => user.id === id);
    const updatedUser = { ...user, educationHistory: [...updatedHistory] };
    const updatedState = state.users.map((user) => {
      if (user.id === id) {
        return updatedUser;
      }

      return user;
    });

    return {
      users: [...updatedState],
    };
  }

  return state;
};

export default userReducer;
