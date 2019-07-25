import React from 'react';
import { shallow } from 'enzyme';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import App from 'components/App.jsx';
// import reducer from '../../reducers';
import CommentForm from 'components/CommentForm.jsx';
import CommentList from 'components/CommentList.jsx';

// const store = createStore(reducer);
// const appWithStore = <Provider store={store}><App /></Provider>;

// jest way:
//  create a div in `jsdom`
//  add app to div
//  match stuff (expectations)
//  remove the div

// it('shows a comment form', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(appWithStore, div);
//   // console.log(div);
//   // expect(div.innerHTML).toContain('Box of Comment');
//   ReactDOM.unmountComponentAtNode(div);
// });

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentForm).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
