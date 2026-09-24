import { FaEdit, FaTrash } from 'react-icons/fa';

export const ListaAlumnos = ({ alumnos, onEditar, onEliminar }) => {
  return (
    <>
      <p className="lead fs-5">Alumnos registrados ({alumnos.length})</p>
      {alumnos.length === 0 && <p className="text-muted">No hay alumnos registrados.</p>}
      <div className="row g-3">
        {alumnos.map((alumno) => (
          <div className="col-12 col-md-6 col-lg-4" key={alumno.id}>
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                {alumno.nombres}
                <span>
                  <FaEdit role="button" className="me-2" title="Editar" onClick={() => onEditar(alumno)} />
                  <FaTrash role="button" title="Eliminar" onClick={() => onEliminar(alumno)} />
                </span>
              </div>
              <div className="card-body">
                <p className="card-text mb-1"><strong>DNI:</strong> {alumno.dni}</p>
                <p className="card-text mb-0"><strong>Celular:</strong> {alumno.celular}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

