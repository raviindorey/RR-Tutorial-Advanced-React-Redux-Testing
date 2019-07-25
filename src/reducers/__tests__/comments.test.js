import commentsFormReducer from 'reducers';
import { SAVE_COMMENT } from 'actions';

describe('comments reducer', () => {
  it('handles action of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'New Comment',
    };
    const newState = commentsFormReducer([], action);
    expect(newState.comments).toEqual(['New Comment']);
  });

  it('handles action with unknown type', () => {
    const newState = commentsFormReducer([], { type: 'THIS_IS_NOT_PRESENT' });
    expect(newState.comments).toEqual([]);
  });
});
