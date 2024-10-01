import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <div className="flex items-center p-4 bg-black">
            {/* Logo - parte superior izquierda */}
            <p className="text-2xl font-bold text-white">Logo</p>
            {/* Navegación, centramos los elementos */}
            <nav className="flex-1 flex justify-center">
                <Link to="/" className={`mx-2 font-bold text-[1.3rem] hover:text-blue-800   ${location.pathname === '/' ? 'text-blue-500' : 'text-white'}`}>Reservas</Link>
                <Link to="/vehicles" className={`mx-2 font-bold text-[1.3rem] hover:text-blue-800   ${location.pathname === '/vehicles' ? 'text-blue-500' : 'text-white'}`}>Vehículos</Link>
                <Link to="/locations" className={`mx-2 font-bold text-[1.3rem] hover:text-blue-800   ${location.pathname === '/locations' ? 'text-blue-500' : 'text-white'}`}>Oficinas</Link>
                <Link to="/customer-support" className={`mx-2 font-bold text-[1.3rem] hover:text-blue-800   ${location.pathname === '/customer-support' ? 'text-blue-500' : 'text-white'}`}>Atención al cliente</Link>
                <Link to="/blog" className={`mx-2 font-bold text-[1.3rem] hover:text-blue-800   ${location.pathname === '/blog' ? 'text-blue-500' : 'text-white'}`}>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;