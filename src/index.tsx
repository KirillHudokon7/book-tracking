import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { App } from './app';
import { configureAppStore } from './store/configureStore';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDom.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  MOUNT_NODE,
);
