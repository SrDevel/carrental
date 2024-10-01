import React from 'react';

const ContactForm = () => {
    return (
        <div className="p-8 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-center mb-6">Nos pondremos en contacto contigo</h2>
            <form action="" className="flex flex-col items-center">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="p-3 my-2 w-3/4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                    type="email"
                    placeholder="Correo"
                    className="p-3 my-2 w-3/4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                    placeholder="Mensaje"
                    className="p-3 my-2 w-3/4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows="5"
                ></textarea>
                <button
                    className="bg-blue-800 text-white p-3 w-3/4 rounded hover:bg-blue-700 transition duration-300"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ContactForm;