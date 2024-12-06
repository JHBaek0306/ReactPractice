// src/components/ExpenseItem.tsx
import React from 'react';

type Expense = {
    id: string;
    title: string;
    amount: number;
    date: string;
    category: string;
};

type ExpenseItemProps = {
    expense: Expense;
    onDelete: () => void;
};

const ExpenseItem = ({ expense, onDelete }: ExpenseItemProps) => (
    <li>
        {expense.title} - ${expense.amount} on {expense.date} [{expense.category}]
        <button onClick={onDelete}>Delete</button>
    </li>
);

export default ExpenseItem;
