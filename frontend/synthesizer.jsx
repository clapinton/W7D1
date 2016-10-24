import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<div>Hi there</div>, root);

  window.store = store; // for testing
});
