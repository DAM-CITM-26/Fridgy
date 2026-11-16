
import { useState } from 'react';

const formularioInicial = {
  nombre: '',
  cantidad: '1',
  unidad: 'ud',
  caduca: ''
};

export default function FormularioProducto({ onAnadir }) {
  const [formulario, setFormulario] = useState(formularioInicial);

  function cambiarCampo(evento) {
    const { name, value } = evento.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value
    }));
  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    if (!formulario.nombre.trim()) return;

    const producto = {
      id: Date.now(),
      nombre: formulario.nombre.trim(),
      cantidad: Number(formulario.cantidad),
      unidad: formulario.unidad,
      caduca: formulario.caduca
    };

    onAnadir(producto);
    setFormulario(formularioInicial);
  }

  return (
    <form
      className="formulario stack"
      aria-label="Añadir producto"
      onSubmit={enviarFormulario}
    >
      <h2>Añadir producto</h2>

      <label className="field">
        Nombre
        <input
          name="nombre"
          type="text"
          placeholder="Por ejemplo: tomates"
          value={formulario.nombre}
          onChange={cambiarCampo}
          required
        />
      </label>

      <div className="row">
        <label className="field" style={{ flex: 1 }}>
          Cantidad
          <input
            name="cantidad"
            type="number"
            min="1"
            value={formulario.cantidad}
            onChange={cambiarCampo}
            required
          />
        </label>

        <label className="field" style={{ flex: 1 }}>
          Unidad
          <select
            name="unidad"
            value={formulario.unidad}
            onChange={cambiarCampo}
          >
            <option value="ud">ud</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="l">l</option>
          </select>
        </label>
      </div>

      <label className="field">
        Caduca el
        <input
          name="caduca"
          type="date"
          value={formulario.caduca}
          onChange={cambiarCampo}
          required
        />
      </label>

      <button className="btn" type="submit">
        Añadir a la nevera
      </button>
    </form>
  );
}
