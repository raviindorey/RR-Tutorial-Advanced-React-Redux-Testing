import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root.jsx';
import App from 'components/App.jsx';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>,
  );
});

it('can fetch a list of comments and display them', () => {
  wrapper.find({ className: 'btn btn-outline-success form-control' }).simulate('click');
  expect(wrapper.find('li').length).toEqual(500);
});
