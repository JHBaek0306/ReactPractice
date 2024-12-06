// src/App.tsx
import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => (
  <div>
    <h1>Expense Tracker</h1>
    <ExpenseForm />
    <ExpenseList />
  </div>
);

export default App;
