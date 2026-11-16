
import Inicio from './pages/Inicio.jsx';
import MenuInferior from './components/MenuInferior.jsx';

export default function App() {
  return (
    <>
      <header className="cabecera">
        <h1>Fridgy</h1>
      </header>

      <main className="fridgy-contenido">
        <Inicio />
      </main>

      <MenuInferior />
    </>
  );
}
