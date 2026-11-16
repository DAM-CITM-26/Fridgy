
export function fechaHoy() {
  const fecha = new Date();

  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');

  return `${año}-${mes}-${dia}`;
}

export function diasHasta(fecha, hoy) {
  const fechaProducto = Date.parse(`${fecha}T00:00:00Z`);
  const fechaActual = Date.parse(`${hoy}T00:00:00Z`);

  return Math.round(
    (fechaProducto - fechaActual) / (1000 * 60 * 60 * 24)
  );
}

export function fechaCorta(fecha) {
  return new Date(`${fecha}T00:00:00Z`).toLocaleDateString(
    'es-ES',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC'
    }
  );
}

export function estadoCaducidad(dias) {
  if (dias < 0) return 'Caducado';
  if (dias <= 3) return 'Caduca pronto';
  return 'En buen estado';
}

export function ordenarPorCaducidad(productos) {
  return [...productos].sort(
    (a, b) => a.caduca.localeCompare(b.caduca)
  );
}

export function anadirProducto(productos, producto) {
  return [...productos, producto];
}
