export default function MenuInferior() {
  return (
    <nav className="pestanas" aria-label="Menú principal">
      <button
        type="button"
        className="activa"
        aria-current="page"
      >
        <span>🧊</span>
        Mi nevera
      </button>

      <button
        type="button"
        disabled
        title="Disponible en el Sprint 2"
      >
        <span>🍳</span>
        Recetas
      </button>

      <button
        type="button"
        disabled
        title="Disponible en el Sprint 3"
      >
        <span>🛒</span>
        Compra
      </button>
    </nav>
  );
}