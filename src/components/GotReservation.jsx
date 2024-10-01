import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from  'react-icons/fa';

const GotReservation = () => {
    return (
        <div
            className="w-full h-[50vh] bg-contain bg-center flex flex-col justify-center items-center text-center mt-2"
            style={{ backgroundImage: `url('bg-reservation.png')` }}
        >
            {/* Lupa */}
            <FaSearch className="text-6xl text-white mb-4 bg-amber-300 p-2 rounded-full" />

            {/* Título */}
            <h1 className="text-white text-4xl font-bold mb-2">¿Tiene una reserva?</h1>

            {/* Texto pequeño */}
            <p className="text-white text-center text-lg mb-8">
                ¿Necesita verificar los detalles o hacer un <br /> cambio en su reserva?
            </p>

            {/* Botón */}
            <Link to="/reservations">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                    BUSCAR RESERVACIÓN
                </button>
            </Link>
        </div>
    );
};

export default GotReservation;
