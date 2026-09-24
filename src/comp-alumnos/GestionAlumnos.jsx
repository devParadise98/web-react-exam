import { useEffect, useState } from 'react';
import axios from 'axios';
import { AlumnoForm } from './AlumnoForm';
import { ListaAlumnos } from './ListaAlumnos';
import { TablaAlumnosEliminados } from './TablaAlumnosEliminados';
import { BuscadorAlumno } from './BuscadorAlumno';

const API_URL = 'http://localhost:3000/alumnos';

const FORM_INICIAL = {
  id: null,
  nombres: '',
  dni: '',
  celular: '',
  estado: true,
};

function GestionAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [inputForm, setInputForm] = useState({ ...FORM_INICIAL });
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(API_URL)
      .then((res) => setAlumnos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuscar = (nuevoSearch) => {
    setSearch(nuevoSearch);
  };

  const handleLimpiar = () => {
    setInputForm({ ...FORM_INICIAL });
    setIsEdit(false);
  };

  const handleEditar = (alumno) => {
    setInputForm({ ...alumno });
    setIsEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputForm.nombres || !inputForm.dni || !inputForm.celular) {
      alert('Nombres, DNI y celular son obligatorios');
      return;
    }

    if (isEdit) {
      axios.put(`${API_URL}/${inputForm.id}`, inputForm)
        .then((res) => {
          setAlumnos((prev) => prev.map((alumno) =>
            alumno.id === inputForm.id ? res.data : alumno
          ));
          handleLimpiar();
        })
        .catch((err) => console.error(err));
    } else {
      const nuevoAlumno = { ...inputForm, estado: true };
      delete nuevoAlumno.id;
      axios.post(API_URL, nuevoAlumno)
        .then((res) => {
          setAlumnos((prev) => [...prev, res.data]);
          handleLimpiar();
        })
        .catch((err) => console.error(err));
    }
  };

  const handleEliminar = (alumno) => {
    if (!window.confirm(`¿Eliminar al alumno "${alumno.nombres}"?`)) return;

    const alumnoActualizado = { ...alumno, estado: false };
    axios.put(`${API_URL}/${alumno.id}`, alumnoActualizado)
      .then((res) => {
        setAlumnos((prev) => prev.map((a) =>
          a.id === alumno.id ? res.data : a
        ));
      })
      .catch((err) => console.error(err));
  };

  const filtrados = alumnos.filter((alumno) =>
    alumno.nombres.toLowerCase().includes(search.toLowerCase()) ||
    alumno.dni.toLowerCase().includes(search.toLowerCase())
  );

  const activos = filtrados.filter((alumno) => alumno.estado);
  const eliminados = filtrados.filter((alumno) => !alumno.estado);

  return (
    <main className="container mt-5">
      <h4 className="mb-3">Gestión de Alumnos</h4>

      <div className="row g-4">
        <div className="col-12 col-md-7">
          <BuscadorAlumno onBuscar={handleBuscar} />
          <ListaAlumnos
            alumnos={activos}
            onEditar={handleEditar}
            onEliminar={handleEliminar}
          />
          <TablaAlumnosEliminados alumnos={eliminados} />
        </div>

        <div className="col-12 col-md-5">
          <AlumnoForm
            inputForm={inputForm}
            isEdit={isEdit}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancelar={handleLimpiar}
          />
        </div>
      </div>
    </main>
  );
}

export default GestionAlumnos;
