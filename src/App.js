import React, { useState } from 'react';
import './App.css';

function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [message, setMessage] = useState('Clique no botão para jogar!');
  const [wins, setWins] = useState(0);
  const [totalRolls, setTotalRolls] = useState(0);

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);

    const sum = newDice1 + newDice2;
    setTotalRolls(totalRolls + 1);

    if (sum === 7 || sum === 11) {
      setWins(wins + 1);
      setMessage('Você ganhou!');
    } else {
      setMessage('Você perdeu!');
    }
  };

  const winPercentage = totalRolls > 0 ? ((wins / totalRolls) * 100).toFixed(2) : 0;

  return (
    <div className="container">
      <div className="dice">{dice1}</div>
      <div className="dice">{dice2}</div>
      <button onClick={rollDice}>Jogar</button>
      <p id="message">{message}</p>
      <p id="score">Score: {wins}/{totalRolls} = {winPercentage}%</p>
    </div>
  );
}

export default App;
