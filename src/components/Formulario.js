import React, { Fragment, useState } from 'react';

const Formulario = () => {

    //Creamos State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    // Agregamos un segundo state para las validaciones
    const [ error, actualizarError ] = useState(false)

    //Función que se ejecuta cada vez que un usuario escribe en un input
    //En este caso, utilizamos un onChange, por lo que el evento debe ser llamado continuamente (siempre que el usuario escriba algo en el formulario)
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Saber cuando el formulario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();

        // Validar; Usamos .trim() para eliminar espacios en blanco

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return; 
            // Agregamos un return para que si hay un error, no continue.
        }

        // Asignar un ID

        // Crear la cita

        // Reiniciar el form


    }

    return (
        <Fragment>
            <h2>Crear cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className="u-full-width"
                    placeholder='Nombre mascota'
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className="u-full-width"
                    placeholder='Nombre dueño de la mascota'
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}

                />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}

                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}

                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar cita
                </button>
            </form>
        </Fragment>
    );
}

export default Formulario;