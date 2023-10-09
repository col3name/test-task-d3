/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import {ApolloProvider} from '@apollo/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import {getClientWithAuth} from './shared/api/graphql';

import { store } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const graphQlClient = getClientWithAuth();
root.render(
  // @ts-ignore
  <React.StrictMode>
    <ApolloProvider client={graphQlClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
