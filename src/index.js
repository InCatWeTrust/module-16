import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './style.css';

import { initState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import CommentsVidget from './containers/app';
import { createStore } from 'redux';
import comments from './reducers';

const initialState = initState();

const store = createStore(comments, initialState);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <CommentsVidget store={store} />,
  document.getElementById('app')
);