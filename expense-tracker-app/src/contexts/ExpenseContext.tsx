// src/contexts/ExpenseContext.tsx
import React, { createContext, useReducer, useContext, Children, ReactNode } from 'react';

type Expense = {
    id: string;
    title: string;
    amount: number;
    date: string;
    category: string;
};

type State = {
    expenses: Expense[];
};

type Action =
    | { type: 'ADD_EXPENSE'; payload: Expense }
    | { type: 'DELETE_EXPENSE'; payload: string }
    | { type: 'EDIT_EXPENSE'; payload: Expense };

const ExpenseReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return { ...state, expenses: [...state.expenses, action.payload] };
        case 'DELETE_EXPENSE':
            return { ...state, expenses: state.expenses.filter(exp => exp.id !== action.payload) };
        case 'EDIT_EXPENSE':
            return { ...state, expenses: state.expenses.map(exp => exp.id === action.payload.id ? action.payload : exp) };
        default:
            return state;
    }
};

export const ExpenseContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

type ExpenseProviderProps = {
    children: ReactNode;
};

export const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
    const [state, dispatch] = useReducer(ExpenseReducer, { expenses: [] });
    return <ExpenseContext.Provider value={{ state, dispatch }}>{children}</ExpenseContext.Provider>;
};

export const useExpenseContest = () => {
    const context = useContext(ExpenseContext);
    if (!context) throw new Error('error');
    return context;
};