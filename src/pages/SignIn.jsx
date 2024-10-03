import React from 'react';

const SignIn = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-center">Registrarse</h1>
                <form className="flex flex-col items-center justify-center space-y-4 mt-4">
                    <input type="text" placeholder="Nombre" className="p-2 border border-gray-300 rounded-lg" />
                    <input type="text" placeholder="Apellido" className="p-2 border border-gray-300 rounded-lg" />
                    <input type="email" placeholder="Correo Electrónico" className="p-2 border border-gray-300 rounded-lg" />
                    <input type="password" placeholder="Contraseña" className="p-2 border border-gray-300 rounded-lg" />
                    <input type="password" placeholder="Confirmar Contraseña" className="p-2 border border-gray-300 rounded-lg" />
                    <button type="submit" className="p-2 bg-primary text-white font-bold rounded-lg">Registrarse</button>
                </form>
            </div>

        </>
    );
};

export default SignIn;