// src/components/TicTacToe.tsx
import React, { useReducer } from "react";
import { gameReducer, initialState } from "../hooks/GameReducer";

const TicTacToe = () => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const handleClick = (index: number) => {
        dispatch({ type: "MOVE", index });
    };

    const resetGame = () => {
        dispatch({ type: "RESET" });
    };

    const renderSquare = (index: number) => (
        <button className="square" onClick={() => handleClick(index)}>
            {state.board[index]}
        </button>
    );

    const renderStatus = () => {
        if (state.winner) {
            return state.winner === "Draw" ? "It's a draw!" : `Winner: ${state.winner}`;
        }
        return `Next player: ${state.xIsNext ? "X" : "O"}`;
    };

    return (
        <div className="game">
            <h1>Tic Tac Toe</h1>
            <div className="status">{renderStatus()}</div>
            <div className="board">
                <div className="board-row">
                    {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
                </div>
            </div>
            <button onClick={resetGame} className="reset-button">Reset Game</button>
            <div className="history">
                <h2>Game History</h2>
                {state.history.map((board, move) => (
                    <div key={move} className="history-item">
                        <span>Move {move + 1}: </span>
                        <span>{board.join(" | ")}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicTacToe;
