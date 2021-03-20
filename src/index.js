import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DevilProvider } from './context';

ReactDOM.render(
  
  <React.StrictMode>
    <DevilProvider>
      <App />
    </DevilProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
