import React from 'react';
import './App.css';

import {
  types, transitions, positions, Provider as AlertProvider,
} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '5px',
  type: types.INFO,
  transition: transitions.SCALE,
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </AlertProvider>
  );
}

export default App;
