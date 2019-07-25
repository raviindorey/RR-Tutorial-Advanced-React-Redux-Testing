import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import PropTypes from 'prop-types';

import reducer from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Root = ({ children, initialState }) => {
  const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware()));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Root;

Root.defaultProps = {
  initialState: {},
};

Root.propTypes = {
  children: PropTypes.element.isRequired,
  initialState: PropTypes.shape({
    comments: PropTypes.array,
    form: PropTypes.object,
  }),
};
