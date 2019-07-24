import React from 'react';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

const App = () => (
  <div className="container">
    <div className="row justify-content-center">
      <h2>Hello From App Testing!</h2>
    </div>
    <div className="row">
      <CommentForm />
    </div>
    <div className="row">
      <CommentList />
    </div>
  </div>
);

export default App;
