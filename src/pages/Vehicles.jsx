import React from 'react';
import GotReservation from "../components/GotReservation";
import Card from "../components/Card";

const Vehicles = () => {
    const vehicles = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
            type: 'Sedán',
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
            brand: 'Toyota',
            model: 'Corolla',
            transmission: 'Automática',
            passengers: 5,
            doors: 4,
            luggage: 3,
        }
        ];
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vehicles.map((vehicle) => (
                    <Card key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>,
            <GotReservation />
        </>
    );
};

export default Vehicles;