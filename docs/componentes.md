
# 10 · Mapa de componentes — Sprint 1

| En la referencia (js/componentes.js) | En React | Nivel |
|---|---|---|
| MarcaSprint({ sprint }) | components/MarcaSprint.jsx | Átomo |
| Vacio({ icono, texto }) | components/Vacio.jsx | Átomo |
| EtiquetaCaducidad({ dias }) | components/EtiquetaCaducidad.jsx | Átomo |
| FilaProducto({ producto, hoy }) | components/FilaProducto.jsx | Molécula |
| ListaProductos({ productos, hoy }) | components/ListaProductos.jsx | Organismo |
| FormularioProducto() | components/FormularioProducto.jsx | Organismo |
| PantallaNevera({ estado }) | pages/Inicio.jsx | Pantalla |
| estado.productos | useState en pages/Inicio.jsx | Estado |
| nombre, cantidad, unidad, caduca | useState en components/FormularioProducto.jsx | Estado |
| dentroDeDias(0) | Sustituido por fechaHoy() en utils/logica.js | Lógica |
| diasHasta(fecha, hoy) | utils/logica.js | Lógica |
| fechaCorta(fecha) | utils/logica.js | Lógica |
| estadoCaducidad(dias) | utils/logica.js | Lógica |
| ordenarPorCaducidad(productos) | utils/logica.js | Lógica |
| anadirProducto(productos, producto) | utils/logica.js | Lógica |
| Acción de añadir producto (submit en app.js) | onSubmit en FormularioProducto.jsx y callback en Inicio.jsx | Evento |
| PRODUCTOS (js/datos.js) | data/datos.js | Datos |
| RECETAS (js/datos.js) | data/datos.js (se utilizará en Sprint 2) | Datos |

