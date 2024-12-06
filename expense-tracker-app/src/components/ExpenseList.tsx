// src/components/ExpenseList.tsx
import React from 'react';
import ExpenseItem from './ExpenseItem';
import { useExpenseContest } from '../contexts/ExpenseContext';


const ExpenseList = () => {
    const { state, dispatch } = useExpenseContest();

    return (
        <ul>
            {state.expenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} onDelete={() => dispatch({ type: 'DELETE_EXPENSE', payload: expense.id })} />
            ))}
        </ul>
    )
};

export default ExpenseList;
