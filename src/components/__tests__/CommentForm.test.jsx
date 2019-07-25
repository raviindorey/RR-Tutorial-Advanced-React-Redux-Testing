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

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'test comment' },
  });
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('test comment');
});

it('has an empty text once the submit is done', () => {
  wrapped.find('textarea').simulate('change', {
    target: {
      value: 'This needs to be gone.',
    },
  });
  wrapped.update();
  wrapped.find('form').simulate('submit');
  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
