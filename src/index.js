import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './style.css';

import CommentsVidget from './containers/app';
import { createStore } from 'redux';
import comments from './reducers';

// if (localStorage.length == 0) {
// 	localStorage.setItem('comments', JSON.stringify([]));
// }

const initialState = [];

const store = createStore(comments, initialState);

ReactDOM.render(
  <CommentsVidget store={store} />,
  document.getElementById('app')
);

// JSON.parse(localStorage.getItem('comments'))