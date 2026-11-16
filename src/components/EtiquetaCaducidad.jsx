
import { estadoCaducidad } from '../utils/logica.js';

export default function EtiquetaCaducidad({ dias }) {
  const estado = estadoCaducidad(dias);

  return (
    <span className="tag">
      {estado}
    </span>
  );
}
