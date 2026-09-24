export const AlumnoForm = ({ inputForm, isEdit, onChange, onSubmit, onCancelar }) => {
  return (
    <form className="p-3 border rounded shadow" onSubmit={onSubmit}>
      <h5>{isEdit ? 'Editar' : 'Registrar'} Alumno</h5>

      <div className="mb-3 row">
        <label htmlFor="nombres" className="col-sm-3 col-form-label">Nombres</label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="nombres" name="nombres" value={inputForm.nombres} onChange={onChange} />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="dni" className="col-sm-3 col-form-label">DNI</label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="dni" name="dni" value={inputForm.dni} onChange={onChange} />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="celular" className="col-sm-3 col-form-label">Celular</label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="celular" name="celular" value={inputForm.celular} onChange={onChange} />
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button type="submit" className={`btn ${isEdit ? 'btn-warning' : 'btn-primary'}`}>
          {isEdit ? 'Actualizar' : 'Registrar'}
        </button>
        {isEdit && <button type="button" className="btn btn-secondary" onClick={onCancelar}>Cancelar</button>}
      </div>
    </form>
  );
}
