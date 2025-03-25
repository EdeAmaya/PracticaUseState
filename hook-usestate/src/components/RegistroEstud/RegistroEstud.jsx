import React, { useState } from 'react';
import './RegistroEstud.css'; 

const RegistroEstudiantes = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [carnet, setCarnet] = useState('');
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = () => {
    if (nombre && edad && carnet) {
      setEstudiantes([...estudiantes, { nombre, edad, carnet }]);
      setNombre('');
      setEdad('');
      setCarnet('');
    }
  };

  return (
    <div className="container">
      <h2>Registro de Estudiantes</h2>
      <input
        type="text"
        id="input-nombre"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        id="input-edad"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <input
        type="text"
        id="input-carnet"
        placeholder="Carnet"
        value={carnet}
        onChange={(e) => setCarnet(e.target.value)}
      />
      <button id="btn-agregar" onClick={agregarEstudiante}>Agregar</button>
      <h3>Listado:</h3>
      <ul>
        {estudiantes.map((estudiante, index) => (
          <li id= "liJuan" key={index}>
            Nombre: {estudiante.nombre} | Edad: {estudiante.edad} | Carnet: {estudiante.carnet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegistroEstudiantes;
