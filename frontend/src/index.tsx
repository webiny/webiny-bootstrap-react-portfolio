import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

// ApolloClient
import { ApolloProvider } from "@apollo/react-hooks";
import client from './apolloClient/index';


ReactDOM.render(
  (<ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <App />
      </React.Fragment>
    </ThemeProvider>,
  </ApolloProvider>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
