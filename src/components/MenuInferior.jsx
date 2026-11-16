
export default function MenuInferior() {
  return (
    <nav className="fridgy-menu" aria-label="Menú principal">
      <button
        type="button"
        className="fridgy-menu-opcion activa"
        aria-current="page"
      >
        <span className="fridgy-menu-icono">🧊</span>
        <span>Mi nevera</span>
      </button>

      <button
        type="button"
        className="fridgy-menu-opcion"
        disabled
        title="Disponible en el Sprint 2"
      >
        <span className="fridgy-menu-icono">🍳</span>
        <span>Recetas</span>
      </button>

      <button
        type="button"
        className="fridgy-menu-opcion"
        disabled
        title="Disponible en el Sprint 3"
      >
        <span className="fridgy-menu-icono">🛒</span>
        <span>Compra</span>
      </button>
    </nav>
  );
}
