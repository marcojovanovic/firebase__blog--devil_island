import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DevilProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <DevilProvider>
      <Router>
        <App />
      </Router>
    </DevilProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
