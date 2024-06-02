import React, { useState, useEffect } from 'react';
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}-mode`}>
      <Header toggleTheme={toggleTheme} />
      <ListarTarefa />
    </div>
  );
}

export default App;