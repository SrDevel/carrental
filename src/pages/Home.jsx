import React from 'react';
import Reservation from "../components/Reservation";
import GotReservation from "../components/GotReservation";
import ContactForm from "../components/ContactForm";

const Home = () => {
    return (
        <>
            <div className="p-0 m-0 bg-gray-200 text-center">
                {/* Ponemos un Background con una imagen, y centrado el texto */}
                <div
                    className="bg-cover bg-center h-[300px] w-full flex items-center justify-center"
                    style={{ backgroundImage: 'url(bg-main.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <p className="text-white text-4xl font-bold">Reserva tu vehículo con nosotros <p>¡Elige el que más te guste!</p></p>
                </div>
                <Reservation />
                <GotReservation />
                <ContactForm />
            </div>
        </>
    );
};

export default Home;