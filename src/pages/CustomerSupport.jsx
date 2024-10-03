import React from 'react';
import CustomButton from '../components/CustomButton';
import GotReservation from "../components/GotReservation";

const CustomerSupport = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">
                {/* Título principal */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Soporte al Cliente</h1>

                {/* Sección de preguntas frecuentes */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Preguntas frecuentes sobre el alquiler de
                        los vehículos</h2>
                    <p className="text-gray-700 mb-4">
                        Obtenga respuestas instantáneas a las preguntas más comunes sobre el alquiler de automóviles.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Envíe una pregunta para nuestro equipo de soporte y le responderemos por correo electrónico.
                        <br/>Aplica únicamente para rentas en Colombia.
                    </p>
                    <CustomButton
                        text="Ver preguntas frecuentes"
                        icon="❓"
                        href="/faq"
                    />
                </div>

                {/* Sección de formulario de contacto */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Utilice nuestro formulario de
                        contacto</h2>
                    <p className="text-gray-700 mb-4">
                        Lo que sea que necesite, estamos aquí para ayudar.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Atención al cliente: +57 310 2001617
                    </p>
                    <CustomButton
                        text="Envíenos un mensaje"
                        icon="✉️"
                        href="/contact"
                    />
                </div>

                {/* Sección de formulario de denuncias */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Utilice nuestro formulario de
                        denuncias</h2>
                    <p className="text-gray-700 mb-4">
                        Alamo Rent a Car tiene un procedimiento formal para el manejo de situaciones que puedan
                        involucrar un posible conflicto de intereses entre los colaboradores y la Compañía. Cualquier
                        posible conflicto es manejado a través del Departamento de Auditoría Interno de la empresa, con
                        la aplicación de la ley que corresponda.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Envíe su denuncia para nuestro equipo de soporte y le responderemos por correo electrónico.
                        <br/>Aplica únicamente para rentas en Colombia.
                    </p>
                    <CustomButton
                        text="Envíenos una denuncia"
                        icon="⚠️"
                        href="/complaints"
                    />
                </div>
            </div>
            <GotReservation />
        </>
    );
};

export default CustomerSupport;

