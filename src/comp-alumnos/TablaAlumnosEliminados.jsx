const TablaAlumnosEliminados = ({ alumnos }) => {
  return (
    <>
      <p className="lead fs-6 mt-4">Alumnos eliminados ({alumnos.length})</p>
      {alumnos.length === 0 ? (
        <p className="text-muted">No hay alumnos eliminados.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombres</th>
                <th>DNI</th>
                <th>Celular</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno) => (
                <tr key={alumno.id} className="table-danger">
                  <td>{alumno.id}</td>
                  <td>{alumno.nombres}</td>
                  <td>{alumno.dni}</td>
                  <td>{alumno.celular}</td>
                  <td>Eliminado</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TablaAlumnosEliminados;
