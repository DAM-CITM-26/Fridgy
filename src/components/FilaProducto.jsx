
import EtiquetaCaducidad from './EtiquetaCaducidad.jsx';
import { fechaCorta, diasHasta } from '../utils/logica.js';

export default function FilaProducto({ producto, hoy }) {
  return (
    <li>
      <span
        className="avatar"
        style={{ background: 'var(--color-primario)' }}
      >
        {producto.nombre[0]}
      </span>

      <div className="crece">
        <h3>{producto.nombre}</h3>

        <p className="card-meta">
          {producto.cantidad} {producto.unidad}
          {' · caduca el '}
          {fechaCorta(producto.caduca)}
        </p>
      </div>

      <EtiquetaCaducidad
        dias={diasHasta(producto.caduca, hoy)}
      />

      <button
        type="button"
        className="btn-icono"
        disabled
        title="Disponible en el Sprint 3"
        aria-label={`Quitar ${producto.nombre} (Sprint 3)`}
      >
        🗑️
      </button>
    </li>
  );
}