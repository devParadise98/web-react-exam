import { Component } from 'react';
import { productos } from '../data';

class BusquedaProductos extends Component {
  state = {
    search: '',
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filtrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(search.toLowerCase()) ||
      producto.marca.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <main className="container mt-5">
        <h4 className="mb-3">Búsqueda de Productos</h4>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre o marca..."
            value={search}
            onChange={this.handleChange}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {filtrados.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.marca}</td>
                  <td>{producto.modelo}</td>
                  <td>S/ {producto.precio}</td>
                </tr>
              ))}
              {filtrados.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted">Sin resultados</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default BusquedaProductos;
