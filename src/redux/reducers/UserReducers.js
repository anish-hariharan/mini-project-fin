import {
  ADD_ACADEMICS,
  ADD_USER,
  GET_USERS,
  UPDATE_EDUCATIONAL_HISTORY,
} from "../actions/ActionTypes.js";

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
              id: "bdcf834d-d5c6-4dd6-82b8-72574ac6b734",
            },
            {
              examName: "HalfYearly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
              id: "a2a3d4ba-14c5-4bc3-aee6-7d7fa9b115fd",
            },
            {
              examName: "Annual",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
              id: "bdcc8381-9e96-43d2-a11b-de91b1d288ed",
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
              id: "bd433e4a-7204-4ace-888a-3b93141cfc81",
            },
            {
              examName: "HalfYearly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
              id: "a0f6237d-731f-4eee-a795-b1c8c85285e9",
            },
            {
              examName: "Annual",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
              id: "bc30366c-0b14-4e78-babe-4ae0226f3f5c",
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
              id: "7dd80b63-996b-4681-9916-234fa4809759",
            },
            {
              examName: "HalfYearly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
              id: "e906b6dd-33a6-4965-bb49-a4b80a6d8000",
            },
            {
              examName: "Annual",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
              id: "ec306674-8ac6-4172-999f-f94d7b3ae4de",
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
              id: "aa7c1b27-6652-4491-a306-f8113f3eae5e",
            },
            {
              examName: "HalfYearly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
              id: "890898e3-97a0-4059-937e-772eb2218117",
            },
            {
              examName: "Annual",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
              id: "3ac9ace9-d410-4a8f-b220-90a1eb609aaa",
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
              id: "57c899a1-3520-4177-9baa-c60bd9551d53",
            },
            {
              examName: "HalfYearly",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
              id: "985e558f-780a-4dd5-aeb1-6c377babc858",
            },
            {
              examName: "Annual",
              english: "80",
              tamil: "80",
              maths: "80",
              science: "80",
              social: "80",
              ratings: "5",
              id: "0db05523-b696-470b-b9d9-9485f3a98fb9",
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

  if (action.type === UPDATE_EDUCATIONAL_HISTORY) {
    const { updatedEducationalHistory, std, userId } = action.payload;

    const user = state.users.find((user) => user.id === userId);

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

    const updatedState = state.users.map((user) => {
      if (user.id === userId) {
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
