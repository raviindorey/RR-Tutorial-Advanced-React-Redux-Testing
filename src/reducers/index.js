import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions';

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      return state.concat(action.payload);

    default:
      return state;
  }
};

const customFormReducer = formReducer.plugin({
  commentForm: (state, action) => {
    switch (action.type) {
      case SAVE_COMMENT:
        return undefined;
      default:
        return state;
    }
  },
});

const reducer = combineReducers({
  form: customFormReducer,
  comments: commentReducer,
});

export default reducer;
