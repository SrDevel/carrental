import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CustomButton from "./CustomButton";

const Header = () => {
    const location = useLocation();

    return (
        <div className="flex items-center p-4 bg-black h-24">
            {/* Logo - parte superior izquierda */}
            <a href="/" className="text-2xl font-bold text-primary hover:text-primary-700">RentCar</a>
            {/* Navegación, centramos los elementos */}
            <nav className="flex-1 flex justify-center">
                <Link to="/"
                      className={`mx-2 font-bold text-[1.3rem] hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-white'}`}>Reservas</Link>
                <Link to="/vehicles"
                      className={`mx-2 font-bold text-[1.3rem] hover:text-primary ${location.pathname === '/vehicles' ? 'text-primary' : 'text-white'}`}>Vehículos</Link>
                <Link to="/locations"
                      className={`mx-2 font-bold text-[1.3rem] hover:text-primary ${location.pathname === '/locations' ? 'text-primary' : 'text-white'}`}>Oficinas</Link>
                <Link to="/customer-support"
                      className={`mx-2 font-bold text-[1.3rem] hover:text-primary ${location.pathname === '/customer-support' ? 'text-primary' : 'text-white'}`}>Atención
                    al cliente</Link>
                <Link to="/blog"
                      className={`mx-2 font-bold text-[1.3rem] hover:text-primary ${location.pathname === '/blog' ? 'text-primary' : 'text-white'}`}>Blog</Link>
            </nav>
            {/* Botón de inicio de sesión */}
            <Link to="/login">
                <div className="flex items-center">
                    <CustomButton
                        href={"/login"}
                        text={"Iniciar Sesión"}
                        animate={false}
                        styles={"text-white px-2 py-2 rounded-lg transition-none hover:text-white"}
                        textStyles={"text-white"}
                        iconStyles={"text-white"}
                    />
                </div>
            </Link>
            <p className="font-bold text-white pr-4">O</p>
            <Link to={"/signin"}>
                <div className="flex items-center">
                    <CustomButton
                        href={"/signin"}
                        text={"Registrarse"}
                        animate={false}
                        styles={"text-white px-2 py-2 rounded-lg transition-none hover:text-white"}
                        textStyles={"text-white"}
                        iconStyles={"text-white"}
                    />
                </div>
            </Link>
        </div>
    );
};

export default Header;