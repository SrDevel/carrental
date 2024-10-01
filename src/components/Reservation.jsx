import React, { useState } from 'react';

const Reservation = () => {
    // Estados para almacenar los valores del formulario
    const [pickupOffice, setPickupOffice] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [driverAge, setDriverAge] = useState('');

    // Función para manejar la búsqueda de vehículos
    const handleSearchVehicles = () => {
        console.log('Buscando vehículos...');
    };

    // Función para mostrar reservas existentes
    const handleShowReservations = () => {
        console.log('Mostrando reservas existentes...');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Reservación de Vehículo</h2>

            <div className="grid grid-cols-2 gap-4 items-center">
                {/* Oficina de recogida */}
                <div className="flex flex-col">
                    <label className="block text-gray-700 mb-1">Oficina de recogida:</label>
                    <input
                        type="text"
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={pickupOffice}
                        onChange={(e) => setPickupOffice(e.target.value)}
                        placeholder="Introduce la oficina de recogida"
                    />
                </div>

                {/* Edad del conductor */}
                <div className="flex flex-col">
                    <label className="block text-gray-700 mb-1">Edad del conductor:</label>
                    <input
                        type="number"
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={driverAge}
                        onChange={(e) => setDriverAge(e.target.value)}
                        placeholder="Introduce la edad del conductor"
                    />
                </div>

                {/* Fecha y hora de recogida */}
                <div className="flex flex-col">
                    <label className="block text-gray-700 mb-1">Fecha de recogida:</label>
                    <input
                        type="date"
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="block text-gray-700 mb-1">Hora de recogida:</label>
                    <input
                        type="time"
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                    />
                </div>

                {/* Fecha y hora de devolución */}
                <div className="flex flex-col">
                    <label className="block text-gray-700 mb-1">Fecha de devolución:</label>
                    <input
                        type="date"
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="block text-gray-700 mb-1">Hora de devolución:</label>
                    <input
                        type="time"
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={returnTime}
                        onChange={(e) => setReturnTime(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex justify-between mt-6">
                {/* Botón para buscar vehículos */}
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                    onClick={handleSearchVehicles}
                >
                    Buscar Vehículos
                </button>

                {/* Botón para mostrar reservas existentes */}
                <button
                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
                    onClick={handleShowReservations}
                >
                    Mostrar Reservas Existentes
                </button>
            </div>
        </div>
    );
};

export default Reservation;
