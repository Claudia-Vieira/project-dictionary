import React from "react";
import './App.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
        <Dictionary/>

      <footer>
        <p className="mt-4">Coded by Cláudia Vieira. Open Source on <a href="https://github.com/Claudia-Vieira/project-dictionary">GitHub</a>.</p>
      </footer>
    </div>
  );
}

export default App;
