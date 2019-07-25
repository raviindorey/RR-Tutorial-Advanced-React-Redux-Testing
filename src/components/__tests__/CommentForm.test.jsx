import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CommentForm from 'components/CommentForm';
import reducer from 'reducers';

const store = createStore(reducer);

// const appWithStore = <Provider store={store}><App /></Provider>;

let wrapped;

// Note: Same could have been achieved by using a shallow component
// as CommentForm does not have a child.
// We are just trying out full-dom component with `mount`.
beforeEach(() => {
  wrapped = mount(<Provider store={store}><CommentForm /></Provider>);
});

// A fully functional DOM element should be unmounted
// so that it does not interfere with other tests.
afterEach(() => {
  wrapped.unmount();
});

