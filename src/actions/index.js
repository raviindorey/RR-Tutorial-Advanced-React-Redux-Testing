import axios from 'axios';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const SAVE_COMMENT = 'SAVE_COMMENT';

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const fetchComments = async () => {
  const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
  const comments = response.data.map(dataObj => dataObj.name);

  return {
    type: FETCH_COMMENTS,
    payload: comments,
  };
};
