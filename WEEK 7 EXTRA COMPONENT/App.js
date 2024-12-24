import React from 'react';
import './App.css';
import EmojiInput from './EmojiInput'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Emoji Input</h1>
        <p>Type 'Happy', 'Like', or 'Sad' to display the corresponding emoji:</p>
        <EmojiInput /> 
      </header>
    </div>
  );
}

export default App;
