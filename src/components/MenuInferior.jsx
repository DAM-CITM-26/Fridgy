import nevera from '../images/nevera.png';
import recetas from '../images/recetas.png';
import calendario from '../images/calendario.png';
export default function MenuInferior() {
  return (
    <nav className="pestanas" aria-label="Menú principal">
      <button
        type="button"
        className="activa"
        aria-current="page"
      >
        <span> <img src={nevera} alt="logotip" style={{width: '30px', objectFit:'cover'}}/></span>
      </button>

      <button
        type="button"
        disabled
        title="Disponible en el Sprint 2"
      >
        <span> <img src={recetas} alt="logotip" style={{width: '30px', objectFit:'cover'}}/></span>
      </button>

      <button
        type="button"
        disabled
        title="Disponible en el Sprint 3"
      >
        <span> <img src={calendario} alt="logotip" style={{width: '30px', objectFit:'cover'}}/></span>
      </button>
    </nav>
  );
}