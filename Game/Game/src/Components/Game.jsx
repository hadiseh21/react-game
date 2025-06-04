import { useState } from "react";
import Board from "./Board";
import ErrorBoundary from "./ErrorBoundary";
export default function Game(){
    const [history, sethistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;
    const moves = history.map((squares,move)=>{
        let description;
        if(move > 0) {
            description = 'Go to move #'+move;
        }else {
            description = 'Go to game start';
        }
        return(
            <li>
                <button onClick={()=> jumpTo(move)}>{description}</button>
            </li>
        )
    })
    function handelPlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        sethistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }
    return(
        <div className="game">
        <div className="game-board">
        
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handelPlay} />
         </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    )
}