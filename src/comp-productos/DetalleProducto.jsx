import { useParams } from 'react-router-dom';
import { productos } from '../data';

const DetalleProducto = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <p className="text-muted">Selecciona un producto para ver el detalle.</p>;
  }

  return (
    <div className="card shadow-sm">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="card-img-top"
        style={{ maxHeight: '220px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="mb-1"><strong>Marca:</strong> {producto.marca}</p>
        <p className="mb-1"><strong>Modelo:</strong> {producto.modelo}</p>
        <p className="mb-1"><strong>Precio:</strong> S/ {producto.precio}</p>
        <p className="mb-0">{producto.descripcion}</p>
      </div>
    </div>
  );
};

export default DetalleProducto;
