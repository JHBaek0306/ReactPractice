// src/reducers/GameReducer.ts
export type GameState = {
    board: string[];
    xIsNext: boolean;
    winner: string | null;
    history: string[][];
};

export type GameAction =
    | { type: "MOVE"; index: number }
    | { type: "RESET" };

export const initialState: GameState = {
    board: Array(9).fill(""),
    xIsNext: true,
    winner: null,
    history: [],
};

const calculateWinner = (board: string[]): string | null => {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
    }
    }
    return board.includes("") ? null : "Draw";
};

export const gameReducer = (state: GameState, action: GameAction): GameState => {
    switch (action.type) {
    case "MOVE":
        const { index } = action;
        if (state.board[index] || state.winner) return state;

        const newBoard = state.board.slice();
        newBoard[index] = state.xIsNext ? "X" : "O";
        const newWinner = calculateWinner(newBoard);

        return {
        ...state,
        board: newBoard,
        xIsNext: !state.xIsNext,
        winner: newWinner,
        history: [...state.history, newBoard],
        };
    
    case "RESET":
        return initialState;
    
    default:
        return state;
    }
};
