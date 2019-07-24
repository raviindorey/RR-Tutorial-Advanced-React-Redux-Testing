import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../App.jsx';
import reducer from '../../reducers';

const store = createStore(reducer);
const appWithStore = <Provider store={store}><App /></Provider>;

// create a div in `jsdom`
// add app to div
// match stuff (expectations)
// remove the div

it('shows a comment form', () => {
  const div = document.createElement('div');
  ReactDOM.render(appWithStore, div);
  // console.log(div);
  // expect(div.innerHTML).toContain('Box of Comment');
  ReactDOM.unmountComponentAtNode(div);
});
