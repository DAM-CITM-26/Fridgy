
import Vacio from './Vacio.jsx';
import FilaProducto from './FilaProducto.jsx';

export default function ListaProductos({ productos, hoy }) {
  if (productos.length === 0) {
    return (
      <Vacio
        icono="🧊"
        texto="Tu nevera está vacía. Añade tu primer producto."
      />
    );
  }

  return (
    <ul className="list">
      {productos.map((producto) => (
        <FilaProducto
          key={producto.id}
          producto={producto}
          hoy={hoy}
        />
      ))}
    </ul>
  );
}
