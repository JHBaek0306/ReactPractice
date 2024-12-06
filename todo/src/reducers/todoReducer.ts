import { Todo } from "../types/types";

type Action =
    | { type: "ADD"; text: string }
    | { type: "REMOVE"; id: number }
    | { type: "TOGGLE"; id: number };

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: Date.now(), text: action.text, completed: false }];
        case "REMOVE":
            return state.filter((todo) => todo.id !== action.id);
        case "TOGGLE":
            return state.map((todo) => (
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            ));
        default:
            return state;
    }
};

