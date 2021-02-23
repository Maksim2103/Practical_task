import axios from 'axios';
import * as types from './photos.types';

export const fetchPhotos = () => async (dispatch) => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  const response = await axios.get(apiUrl);
  const { data } = response;

  dispatch({
    type: types.FETCH_PHOTOS,
    payload: data,
  });
};

export const deletePhoto = (payload) => {
  return {
    type: types.DELETE_PHOTOS,
    payload,
  };
};

export const addPhoto = (id, name, email, phone) => {
  return {
    type: types.ADD_PHOTOS,
    id,
    name,
    email,
    phone,
  };
};

export const editPhoto = (id, name, email, phone) => {
  return {
    type: types.EDIT_PHOTOS,
    id,
    name,
    email,
    phone,
  };
};
