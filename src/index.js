import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// FOR CONTEXT
// import { DataProvider } from './contexts/DataContext';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DataProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </DataProvider> */}
  </React.StrictMode>
);
