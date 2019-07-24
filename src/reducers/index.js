import { SAVE_COMMENT } from '../actions';

const commentReducer = (state = [], action) => {
  switch (action.payload) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentReducer;
