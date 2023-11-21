// src/components/AnimalList.js
import React from 'react';

const AnimalList = ({ animals, onRemove, onToggleStatus }) => {
  return (
    <div>
      <h2>Animais Cadastrados</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            <img src={animal.photo} alt="Animal" />
            <p>Nome: {animal.name}</p>
            <p>Raça: {animal.breed}</p>
            <p>Local: {animal.location}</p>
            <p>Tipo: {animal.type}</p>
            <p>Status: {animal.status}</p>
            <button onClick={() => onRemove(animal.id)}>Remover</button>
            <button onClick={() => onToggleStatus(animal.id)}>Concluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
