import React from 'react';
import { FaSearch } from 'react-icons/fa';
import CustomButton from "./CustomButton";

const GotReservation = () => {
    return (
        <div className="flex justify-center top-4">
            <div
                className="w-[95%] h-[50vh] top-4 content-center bg-contain bg-center flex flex-col justify-center items-center text-center mt-2 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
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
                <CustomButton
                    href={"/reservations"}
                    icon={<FaSearch />}
                    text={"Ver Reserva"}
                />
            </div>
        </div>
    );
};

export default GotReservation;