import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Cliente: <span>{cita.mascota}</span></p>
        <p>Asunto: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Comentarios: <span>{cita.sintomas}</span></p>

        <button
        className=" eliminar u-full-width"
        onClick={ () => eliminarCita(cita.id) }
        >Eliminar &times;</button>
    </div>
)
 
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;