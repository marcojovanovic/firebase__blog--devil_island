import React from 'react';
import './App.css';
import { DevilContext } from './context';

function App() {
  const data = React.useContext(DevilContext);

  console.log(data);

  return <div className="App">hello there</div>;
}

export default App;
