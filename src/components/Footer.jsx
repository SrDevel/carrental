import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white text-center p-4">
            <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
            <div>
                <a href="/about" className="text-gray-400 hover:text-white">Acerca de</a>
                <span className="mx-2">|</span>
                <a href="/contact" className="text-gray-400 hover:text-white">Contacto</a>
                <span className="mx-2">|</span>
                <a href="/privacy" className="text-gray-400 hover:text-white">Política de Privacidad</a>
            </div>
        </div>
    );
};

export default Footer;