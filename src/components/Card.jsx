import React from 'react';

const Card = ({ vehicle }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            {/* Imagen */}
            <img src={vehicle.image} alt={vehicle.model} className="w-full h-48 object-cover" />
            {/* Tipo de vehículo */}
            <p className="text-lg font-bold text-gray-800">{vehicle.type}</p>
            {/* Precio */}
            <p className="text-2xl font-bold text-gray-800">{vehicle.price}</p>
            {/* Marca y Modelo */}
            <p className="text-gray-600">{vehicle.brand} {vehicle.model}</p>
            {/* (Icono) + Transmisión */}
            <p className="text-gray-600"><i className="fas fa-cogs"></i> {vehicle.transmission}</p>
            {/* Iconos de pasajeros, puertas y equipaje */}
            <div className="flex justify-around w-full">
                <p className="text-gray-600"><i className="fas fa-user"></i> {vehicle.passengers}</p>
                <p className="text-gray-600"><i className="fas fa-door-open"></i> {vehicle.doors}</p>
                <p className="text-gray-600"><i className="fas fa-suitcase"></i> {vehicle.luggage}</p>
            </div>
            {/* Botón ver detalles, dispara el modal */}
            <button className="bg-blue-800 text-white p-2 rounded hover:bg-blue-700 transition duration-300 mt-4">
                Ver detalles
            </button>
        </div>
    );
};

export default Card;