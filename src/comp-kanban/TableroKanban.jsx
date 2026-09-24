import { Component } from 'react';
import { proyectos } from '../data';

class TableroKanban extends Component {
  renderColumna(titulo, tareas, claseAlert) {
    return (
      <div className="col-12 col-md-4">
        <h5 className="mb-3">{titulo}</h5>
        {tareas.length === 0 && <p className="text-muted">Sin tareas</p>}
        {tareas.map((tarea) => (
          <div key={`${tarea.proyecto}-${tarea.id}`} className={`alert ${claseAlert}`}>
            <strong>{tarea.nombre}</strong>
            <p className="mb-1">Proyecto: {tarea.proyecto}</p>
            <p className="mb-0">Dificultad: {tarea.dificultad} | Avance: {tarea.avance}%</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const sinIniciar = [];
    const enProgreso = [];
    const finalizadas = [];

    proyectos.forEach((proyecto) => {
      proyecto.tareas.forEach((tarea) => {
        const item = { ...tarea, proyecto: proyecto.nombre, dificultad: proyecto.dificultad };
        if (tarea.avance === 0) sinIniciar.push(item);
        else if (tarea.avance === 100) finalizadas.push(item);
        else enProgreso.push(item);
      });
    });

    return (
      <main className="container mt-5">
        <h4 className="mb-3">Tablero Kanban</h4>
        <div className="row g-3">
          {this.renderColumna('Sin Iniciar (0%)', sinIniciar, 'alert-danger')}
          {this.renderColumna('En Progreso', enProgreso, 'alert-primary')}
          {this.renderColumna('Finalizadas (100%)', finalizadas, 'alert-success')}
        </div>
      </main>
    );
  }
}

export default TableroKanban;
