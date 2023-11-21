// src/components/AnimalForm.js
import React, { useState } from 'react';

const AnimalForm = ({ onAnimalSubmit }) => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Perdido', 'Resgatado');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onAnimalSubmit({ photo, name, breed, location, type });
    setPhoto('');
    setName('');
    setBreed('');
    setLocation('');
    setType('Perdido', 'Resgatado');
  };

  return (
    <form>
      <label>Foto:</label>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />

      {photo && <img src={photo} alt="Animal" style={{ maxWidth: '100px', height: 'auto' }} />}

      <label>Nome:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Raça:</label>
      <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />

      <label>Local Encontrado/Perdido:</label>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

      <label>Tipo:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Perdido">Perdido</option>
        <option value="Resgatado">Resgatado</option>
      </select>

      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  );
};

export default AnimalForm;
