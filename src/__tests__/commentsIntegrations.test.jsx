import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root.jsx';
import App from 'components/App.jsx';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>,
  );
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'name as Comment 1' }, { name: 'name as Comment 2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
  wrapper.unmount();
});

it('can fetch a list of comments and display them', (done) => {
  wrapper.find({ className: 'btn btn-outline-success form-control' }).simulate('click');

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);
    done();
  });
});
