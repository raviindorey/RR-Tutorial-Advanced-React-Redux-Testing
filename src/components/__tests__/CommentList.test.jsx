import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root.jsx';
import CommentList from 'components/CommentList.jsx';

// import { save_comment, saveComment } from 'actions';

let wrapped;
beforeEach(() => {
  const initialState = { comments: ['Comment 1', 'Comment 2'] };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('creates on LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows comment for each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});
