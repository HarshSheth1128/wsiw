import React from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <LoginPage isLogin={true} />
    </div>
  );
}

export default App;
