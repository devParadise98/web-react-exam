import { useState } from 'react';

const BuscadorAlumno = ({ onBuscar }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onBuscar(value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar alumno por nombre o DNI..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default BuscadorAlumno;
