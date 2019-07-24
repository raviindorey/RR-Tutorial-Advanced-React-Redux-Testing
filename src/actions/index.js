export const SAVE_COMMENT = 'SAVE_COMMENT';

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});
