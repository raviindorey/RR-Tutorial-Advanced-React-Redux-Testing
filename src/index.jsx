import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'Root.jsx';
import App from 'components/App.jsx';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root'),
);
