
import { useState } from 'react';

import { PRODUCTOS } from '../data/datos.js';

import ListaProductos from '../components/ListaProductos.jsx';
import FormularioProducto from '../components/FormularioProducto.jsx';

import {
  fechaHoy,
  ordenarPorCaducidad,
  anadirProducto
} from '../utils/logica.js';

export default function Inicio() {
  const [productos, setProductos] = useState(PRODUCTOS);

  const hoy = fechaHoy(new Date());

  function agregarProducto(producto) {
    setProductos((anteriores) =>
      anadirProducto(anteriores, producto)
    );
  }

  
  return (
    <>
      <h2>Mi nevera</h2>

      <section className="seccion stack">
        <p className="card-meta">
          {productos.length} productos · primero, lo que caduca antes
        </p>

        <ListaProductos
          productos={ordenarPorCaducidad(productos)}
          hoy={hoy}
        />
      </section>

      <section className="seccion">
        <FormularioProducto onAnadir={agregarProducto} />
      </section>
    </>
  );

}
