import React from 'react';
import './App.css';
import ButtonStart from './components/ButtonStart';
import Game from './components/Game';
import Title from './components/Title';

function App() {
  const [stateGame, setStateGame] = React.useState(0)

  const startGame = () => {
    setStateGame(1)
  }

  const loseGame = () => {
    setStateGame(2)
  }

  const winGame = () => {
    setStateGame(3)
  }

  if (stateGame === 0) {
    return (
      <div className="App">
        <Title styleTitle={0}/>
        <ButtonStart onClick={startGame}/>
      </div>
    );
  }
  if (stateGame === 1) {
    return (
      <div className="App">
        <Game loseGame={loseGame} winGame={winGame}/>
      </div>
    );
  }
  if (stateGame === 2) {
    return (
      <div className="App">
        <Title styleTitle={1}/>
        <ButtonStart onClick={startGame}/>
      </div>
    );
  }
  if (stateGame === 3) {
    return (
      <div className="App">
        <Title styleTitle={2}/>
        <ButtonStart onClick={startGame}/>
      </div>
    );
  }
  return null
}

export default App;
