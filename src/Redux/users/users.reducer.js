import * as types from './users.types';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return { ...state, users: action.payload };
    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((el) => el.id !== action.payload),
      };
    case types.ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.id,
            name: action.name,
            email: action.email,
            phone: action.phone,
          },
        ],
      };
    case types.EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            user.name = action.name;
            user.email = action.email;
            user.phone = action.phone;
          }
          return user;
        }),
      };

    default:
      return state;
  }
};

export default usersReducer;
