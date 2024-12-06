// src/components/ExpenseForm.tsx
import React, { useState } from 'react';
import { useExpenseContest } from '../contexts/ExpenseContext';

const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const { dispatch } = useExpenseContest();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newExpence = {
            id: Date.now().toString(),
            title,
            amount,
            date,
            category,
        };
        dispatch({ type: 'ADD_EXPENSE', payload: newExpence });
        setTitle('');
        setAmount(0);
        setDate('');
        setCategory('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder='Amount' required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category' required />
            <button type='submit'>Add Expense</button>
        </form>
    )
};

export default ExpenseForm;
