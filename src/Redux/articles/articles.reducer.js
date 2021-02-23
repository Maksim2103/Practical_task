import * as types from './articles.types';

const initialState = {
  articles: [],
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ARTICLES:
      return { ...state, articles: action.payload };
    case types.DELETE_ARTICLE:
      return {
        ...state,
        articles: [
          ...state.articles.filter((article) => article.id !== action.payload),
        ],
      };
    case types.ADD_ARTICLE:
      return {
        ...state,
        articles: [
          ...state.articles,
          {
            userId: action.userId,
            id: action.id,
            title: action.title,
            body: action.body,
          },
        ],
      };
    case types.EDIT_ARTICLE:
      return {
        ...state,
        articles: state.articles.map((art) => {
          if (art.id === action.id) {
            art.title = action.title;
            art.body = action.body;
          }
          return art;
        }),
      };
    default:
      return state;
  }
};

export default articles;
