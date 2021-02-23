import * as types from './photos.types';

const initialState = {
  photos: [],
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PHOTOS:
      return { ...state, photos: action.payload };
    case types.DELETE_PHOTOS:
      return {
        ...state,
        photos: state.photos.filter((el) => el.id !== action.payload),
      };
    case types.ADD_PHOTOS:
      return {
        ...state,
        photos: [
          ...state.photos,
          {
            id: action.id,
            name: action.name,
            email: action.email,
            phone: action.phone,
          },
        ],
      };
    case types.EDIT_PHOTOS:
      return {
        ...state,
        photos: state.photos.map((photo) => {
          if (photo.id === action.id) {
            photo.name = action.name;
            photo.email = action.email;
            photo.phone = action.phone;
          }
          return photo;
        }),
      };

    default:
      return state;
  }
};

export default photosReducer;
