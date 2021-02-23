import axios from 'axios';
import * as types from './articles.types';

export const fetcArticles = () => async (dispatch) => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const response = await axios.get(apiUrl);
  const { data } = response;

  dispatch({
    type: types.FETCH_ARTICLES,
    payload: data,
  });
};

export const deleteItem = (payload) => {
  return {
    type: types.DELETE_ARTICLE,
    payload,
  };
};

export const addArticles = (userId, id, title, body) => {
  return {
    type: types.ADD_ARTICLE,
    userId,
    id,
    title,
    body,
  };
};

export const editArticles = (id, title, body) => {
  return {
    type: types.EDIT_ARTICLE,
    id,
    title,
    body,
  };
};
