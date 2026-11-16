
import { estadoCaducidad } from '../utils/logica.js';

export default function EtiquetaCaducidad({ dias }) {
  const estado = estadoCaducidad(dias);

  let texto;

  if (dias < 0) {
    texto = 'Caducado';
  } else if (dias === 0) {
    texto = 'Hoy';
  } else if (dias === 1) {
    texto = '1 día';
  } else {
    texto = `${dias} días`;
  }

  const colores = {
    'Caducado': {
      backgroundColor: '#f8dede',
      color: '#842020'
    },
    'Caduca pronto': {
      backgroundColor: '#ffedd0',
      color: '#925000'
    },
    'En buen estado': {
      backgroundColor: '#dff1e8',
      color: '#145b46'
    }
  };

  return (
    <span
      className="tag"
      style={{
        ...colores[estado],
        borderRadius: '999px',
        padding: '5px 12px',
        fontWeight: 600,
        whiteSpace: 'nowrap'
      }}
    >
      {texto}
    </span>
  );
}