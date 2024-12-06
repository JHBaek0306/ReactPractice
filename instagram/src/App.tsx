import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <UserProfile />
      <Feed />
    </div>
  );
}

export default App;