import { Link, Outlet } from 'react-router-dom';
import { productos } from '../data';

const ListadoProductos = () => {
  return (
    <main className="container mt-5">
      <h4 className="mb-3">Detalle de Productos</h4>
      <div className="row g-4">
        <div className="col-12 col-md-5">
          <ul className="list-group">
            {productos.map((producto) => (
              <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  <span className="fw-semibold">{producto.nombre}</span> - {producto.marca}
                </span>
                <Link to={`/detalle-productos/${producto.id}`} className="btn btn-primary btn-sm">Ver Detalle</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-7">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default ListadoProductos;
