import React from 'react';

const LogIn = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-center">Iniciar Sesión</h1>
                <form className="flex flex-col items-center justify-center space-y-4 mt-4">
                    <input type="email" placeholder="Correo Electrónico" className="p-2 border border-gray-300 rounded-lg" />
                    <input type="password" placeholder="Contraseña" className="p-2 border border-gray-300 rounded-lg" />
                    <button type="submit" className="p-2 bg-primary text-white font-bold rounded-lg">Iniciar Sesión</button>
                </form>
            </div>
        </>
    );
};

export default LogIn;