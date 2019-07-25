import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import PropTypes from 'prop-types';

import reducer from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()));

const Root = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default Root;

Root.propTypes = {
  children: PropTypes.element.isRequired,
};
