import { useState } from "react"
import Square from "./Square"
export default function Board(){
    const [squares, setSquares]= useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(squares);
    console.log(winner)
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

    return(
        <>
        <div className="status">{status}</div>
         <div className="board-row">
        <Square value = {squares[0]} onsquareClick={() =>handleClick(0)}/>
        <Square value = {squares[1]}onsquareClick={()=>handleClick(1)}/>
        <Square value = {squares[2]} onsquareClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value = {squares[3]} onsquareClick={()=>handleClick(3)}/>
        <Square value = {squares[4]} onsquareClick={()=>handleClick(4)}/>
        <Square value = {squares[5]} onsquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value = {squares[6]} onsquareClick={()=>handleClick(6)}/>
        <Square value = {squares[7]} onsquareClick={()=>handleClick(7)}/>
        <Square value = {squares[8]} onsquareClick={()=>handleClick(8)}/>
      </div>
        </>
    )
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
          }

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
          } else {
            nextSquares[i] = "O";
          }
        setSquares(nextSquares);
        setXIsNext(!xIsNext)
      }
      function calculateWinner(squares) {
        const Lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let i =0; i< Lines.length; i++) {
            const [a,b,c] = Lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a]=== squares[c]) {
                return squares[a];
            }
        }
        return null;
      }
}