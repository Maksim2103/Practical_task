import axios from 'axios';
import * as types from './users.types';

export const fetchUsers = () => async (dispatch) => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const response = await axios.get(apiUrl);
  const { data } = response;

  dispatch({
    type: types.FETCH_USERS,
    payload: data,
  });
};

export const deleteUser = (payload) => {
  return {
    type: types.DELETE_USER,
    payload,
  };
};

export const addUser = (id, name, email, phone) => {
  return {
    type: types.ADD_USER,
    id,
    name,
    email,
    phone,
  };
};

export const editUser = (id, name, email, phone) => {
  return {
    type: types.EDIT_USER,
    id,
    name,
    email,
    phone,
  };
};
