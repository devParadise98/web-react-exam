import { Component } from 'react';
import axios from 'axios';
import AlumnoForm from './AlumnoForm';
import ListaAlumnos from './ListaAlumnos';
import TablaAlumnosEliminados from './TablaAlumnosEliminados';
import BuscadorAlumno from './BuscadorAlumno';

const API_URL = 'http://localhost:3000/alumnos';

const FORM_INICIAL = {
  id: null,
  nombres: '',
  dni: '',
  celular: '',
  estado: true,
};

class GestionAlumnos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: [],
      inputForm: { ...FORM_INICIAL },
      isEdit: false,
      search: '',
    };
  }

  componentDidMount() {
    axios.get(API_URL)
      .then((res) => this.setState({ alumnos: res.data }))
      .catch((err) => console.error(err));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      inputForm: { ...prev.inputForm, [name]: value },
    }));
  };

  handleBuscar = (search) => {
    this.setState({ search });
  };

  handleLimpiar = () => {
    this.setState({ inputForm: { ...FORM_INICIAL }, isEdit: false });
  };

  handleEditar = (alumno) => {
    this.setState({ inputForm: { ...alumno }, isEdit: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputForm, isEdit, alumnos } = this.state;

    if (!inputForm.nombres || !inputForm.dni || !inputForm.celular) {
      alert('Nombres, DNI y celular son obligatorios');
      return;
    }

    if (isEdit) {
      axios.put(`${API_URL}/${inputForm.id}`, inputForm)
        .then((res) => {
          const actualizados = alumnos.map((alumno) =>
            alumno.id === inputForm.id ? res.data : alumno
          );
          this.setState({ alumnos: actualizados });
          this.handleLimpiar();
        })
        .catch((err) => console.error(err));
    } else {
      const nuevoAlumno = { ...inputForm, estado: true };
      delete nuevoAlumno.id;
      axios.post(API_URL, nuevoAlumno)
        .then((res) => {
          this.setState({ alumnos: [...alumnos, res.data] });
          this.handleLimpiar();
        })
        .catch((err) => console.error(err));
    }
  };

  handleEliminar = (alumno) => {
    if (!window.confirm(`¿Eliminar al alumno "${alumno.nombres}"?`)) return;

    const alumnoActualizado = { ...alumno, estado: false };
    axios.put(`${API_URL}/${alumno.id}`, alumnoActualizado)
      .then((res) => {
        const actualizados = this.state.alumnos.map((a) =>
          a.id === alumno.id ? res.data : a
        );
        this.setState({ alumnos: actualizados });
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { alumnos, inputForm, isEdit, search } = this.state;

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
            <BuscadorAlumno onBuscar={this.handleBuscar} />
            <ListaAlumnos
              alumnos={activos}
              onEditar={this.handleEditar}
              onEliminar={this.handleEliminar}
            />
            <TablaAlumnosEliminados alumnos={eliminados} />
          </div>

          <div className="col-12 col-md-5">
            <AlumnoForm
              inputForm={inputForm}
              isEdit={isEdit}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              onCancelar={this.handleLimpiar}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default GestionAlumnos;
