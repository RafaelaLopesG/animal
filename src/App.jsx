// src/App.js
import React, { useState } from 'react';
import './App.css';
import AnimalForm from './components/AnimalForm';
import AnimalList from './components/AnimalList';

function App() {
  const [animals, setAnimals] = useState([]);

  const handleAnimalSubmit = (animal) => {
    setAnimals([...animals, { ...animal, id: Date.now(), status: 'Pendente' }]);
  };

  const handleRemove = (id) => {
    setAnimals(animals.filter((animal) => animal.id !== id));
  };

  const handleToggleStatus = (id) => {
    setAnimals(
      animals.map((animal) =>
        animal.id === id ? { ...animal, status: animal.status === 'Pendente' ? 'Concluido' : 'Pendente' } : animal
      )
    );
  };

  return (
    <div>
      <h1>Cadastro de Animais Perdidos</h1>
      <AnimalForm onAnimalSubmit={handleAnimalSubmit} />
      <AnimalList animals={animals} onRemove={handleRemove} onToggleStatus={handleToggleStatus} />
    </div>
  );
}

export default App;
