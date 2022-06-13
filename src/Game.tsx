import React, { useEffect } from 'react';
import {useState} from 'react';
import './Game.css';

const Game = () => {

    const ROCK = 0;
    const PAPER = 1;
    const SCISSORS = 2;

    const choices = [ROCK, PAPER, SCISSORS];
    const playerChoicesText = ['Rock', 'Paper', 'Scissors', '...'];
    const botChoicesText = ['Rock', 'Paper', 'Scissors', '...'];

    const [playerWinCount, setPlayerWinCount] = useState(0);
    const [botWinCount, setBotWinCount] = useState(0);
    const [botChoice, setBotChoice] = useState(3);
    const [playerChoice, setPlayerChoice] = useState(3);


    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        setPlayerChoice(choices[Number(event.currentTarget.value)]);

        let botMove = choices[botChoose()];
        let playerMove = choices[Number(event.currentTarget.value)];

        checkWin(playerMove, botMove);

    }

    const botChoose= (): number => {
        // randomly select a move
        let choice = Math.floor(Math.random()*3);
        setBotChoice(choices[choice]);
        return choice;

    }

    const checkWin = (playerMove: number, botMove: number) => {
        // determine game result after user makes a move
        if (playerMove === botMove) {/* nothing happens */}
        else if (playerMove === ROCK) {
            if (botMove === PAPER) setBotWinCount(botWinCount + 1);
            else setPlayerWinCount(playerWinCount + 1);
        }
        else if (playerMove === PAPER) {
            if (botMove === SCISSORS) setBotWinCount(botWinCount + 1);
            else setPlayerWinCount(playerWinCount + 1);
        }
        else if (playerMove === SCISSORS) {
            if (botMove === ROCK) setBotWinCount(botWinCount + 1);
            else setPlayerWinCount(playerWinCount + 1);
        }
    }

    return (
        <div className='game'>
            <div className='container'>
            <h4>*The bot randomly chooses a move after player makes a move</h4>
                <div className='score'>
                    <h1>Score</h1>
                    <h2>Player vs Bot</h2>
                    <h3>{playerWinCount} : {botWinCount}</h3>
                </div>
            </div>
            
            <div>
                <h1>Bot</h1>
                <h2 className='move'>{botChoicesText[botChoice]}</h2>
                <h1>Player</h1>
                <h2 className='move'>{playerChoicesText[playerChoice]}</h2>
                <button value="0" onClick={onClick}>Rock</button>
                <button value="1" onClick={onClick}>Paper</button>
                <button value="2" onClick={onClick}>Scissors</button>    
            </div>
        </div>
        
    )
}

export default Game;