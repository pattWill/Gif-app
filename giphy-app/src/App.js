import React from 'react';
import './App.css';
import Nav from './components/Navigation';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Nav />
        < Content />
      </header>
    </div>
  );
}

export default App;
