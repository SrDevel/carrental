import React from 'react';
import GotReservation from "../components/GotReservation";
import Card from "../components/Card";

const Vehicles = () => {
    /*
    *
<div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
<img src={vehicle.image} alt={vehicle.model} className="w-full h-48 object-cover" />
<p className="text-lg font-bold text-gray-800">{vehicle.type}</p>
<p className="text-2xl font-bold text-gray-800">{vehicle.price}</p>
<p className="text-gray-600">{vehicle.brand} {vehicle.model}</p>
<p className="text-gray-600"><i className="fas fa-cogs"></i> {vehicle.transmission}</p>
<div className="flex justify-around w-full">
    <p className="text-gray-600"><i className="fas fa-user"></i> {vehicle.passengers}</p>
    <p className="text-gray-600"><i className="fas fa-door-open"></i> {vehicle.doors}</p>
    <p className="text-gray-600"><i className="fas fa-suitcase"></i> {vehicle.luggage}</p>
</div>
<button className="bg-blue-800 text-white p-2 rounded hover:bg-blue-700 transition duration-300 mt-4">
    Ver detalles
</button>
</div>
*/
    const vehicles = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
            type: 'Sedán',
            price: 'Desde $200',
            brand: 'Toyota',
            model: 'Corolla',
            transmission: 'Automática',
            passengers: 5,
            doors: 4,
            luggage: 3,
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
            type: 'Sedán',
            price: 'Desde $200',
            brand: 'Toyota',
            model: 'Corolla',
            transmission: 'Automática',
            passengers: 5,
            doors: 4,
            luggage: 3,
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
            type: 'Sedán',
            price: 'Desde $200',
            brand: 'Toyota',
            model: 'Corolla',
            transmission: 'Automática',
            passengers: 5,
            doors: 4,
            luggage: 3,
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
            type: 'Sedán',
            price: 'Desde $200',
            brand: 'Toyota',
            model: 'Corolla',
            transmission: 'Automática',
            passengers: 5,
            doors: 4,
            luggage: 3,
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
            type: 'Sedán',
            price: 'Desde $200',
            brand: 'Toyota',
            model: 'Corolla',
            transmission: 'Automática',
            passengers: 5,
            doors: 4,
            luggage: 3,
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
            type: 'Sedán',
            price: 'Desde $200',
            brand: 'Toyota',
            model: 'Corolla',
            transmission: 'Automática',
            passengers: 5,
            doors: 4,
            luggage: 3,
        },
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
            type: 'Sedán',
            price: 'Desde $200',
            brand: 'Toyota',
            model: 'Corolla',
            transmission: 'Automática',
            passengers: 5,
            doors: 4,
            luggage: 3,
        },
        {
            id: 8,
            image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
            type: 'Sedán',
            price: 'Desde $200',
            brand: 'Toyota',
            model: 'Corolla',
            transmission: 'Automática',
            passengers: 5,
            doors: 4,
            luggage: 3,
        }
        ];
    return (
        <div>
            {vehicles.map((vehicle) => (
                <Card key={vehicle.id} vehicle={vehicle} />
            ))}
            <GotReservation />
        </div>
    );
};

export default Vehicles;