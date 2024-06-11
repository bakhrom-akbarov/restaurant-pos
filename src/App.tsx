import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { Routing } from './routes/Routing';
import client from './apolloClient';
import { ThemeProvider } from './ThemeProvider';

import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Routing />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
