import React from 'react';
import '../Styling/index.css'

function App() {
  return (
    <div className='App'>
      <header className='Header'>
          <h1>TRUE/FALSE TRIVIA</h1>
          <nav>
            <button>Change Category</button>
            <button>Trivia History</button>
          </nav>
      </header>
      <div className='UserRecordDetails'>
        <div><p>Your Record: 0-0</p></div>
        <div><p>Active Streak: 0</p></div>
      </div>
      <div>
        <h2>MAIN SECTION COMPONENT</h2>
      </div>
      <footer>
        <p>Thank you for playing!  This website uses the triviaAPI from OpenTriviaDatabase (https://opentdb.com/)</p>
      </footer>
    </div>
  );
}

export default App;
