import { Link, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import GestionAlumnos from './comp-alumnos/GestionAlumnos';
import NumerosPrimos from './comp-primos/NumerosPrimos';
import TableroKanban from './comp-kanban/TableroKanban';
import BusquedaProductos from './comp-productos/BusquedaProductos';
import ListadoProductos from './comp-productos/ListadoProductos';
import DetalleProducto from './comp-productos/DetalleProducto';

const Navega = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Examen React</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/numeros-primos">Números Primos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/numeros-primos-auto">Primos Automático</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tablero-kanban">Tablero Kanban</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/busqueda-productos">Búsqueda Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/detalle-productos">Detalle Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gestion-alumnos">Gestión Alumnos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/numeros-primos" element={<NumerosPrimos />} />
        <Route path="/numeros-primos-auto" element={<NumerosPrimos autoAvance={true} />} />
        <Route path="/tablero-kanban" element={<TableroKanban />} />
        <Route path="/busqueda-productos" element={<BusquedaProductos />} />
        <Route path="/detalle-productos" element={<ListadoProductos />}>
          <Route path=":id" element={<DetalleProducto />} />
        </Route>
        <Route path="/gestion-alumnos" element={<GestionAlumnos />} />
      </Routes>
    </div>
  );
};

export default Navega;
