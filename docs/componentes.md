| En la referencia                     | En React                           | Nivel     |
|--------------------------------------|------------------------------------|-----------|
| MarcaSprint({ sprint })              | components/MarcaSprint.jsx         | Átomo     |
| Vacio({ icono, texto })              | components/Vacio.jsx               | Molécula  |
| FilaProducto({ producto, hoy })      | components/FilaProducto.jsx        | Molécula  |
| ListaProductos({ productos, hoy })   | components/ListaProductos.jsx      | Organismo |
| FormularioProducto()                 | components/FormularioProducto.jsx  | Organismo |
| PantallaNevera({ estado })           | pages/Nevera.jsx                   | Pantalla  |
| estado.productos                     | useState en App.jsx                | Estado    |
| nombre, cantidad, unidad, caduca     | useState en FormularioProducto.jsx | Estado    |
| dentroDeDias(0)                      | utils/logica.js                    | Lógica    |
| cuantosCaducanPronto(productos, hoy) | utils/logica.js                    | Lógica    |
| ordenarPorCaducidad(productos)       | utils/logica.js                    | Lógica    |
| Datos de js/datos.js                 | data/datos.js                      | Datos     |


