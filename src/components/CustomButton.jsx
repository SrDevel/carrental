import React from 'react';

const CustomButton = ({ text, icon, href, styles, textStyles, iconStyles, animate }) => {
    return (
        <a href={href} className={`flex flex-row items-center bg-transparent underline ${animate ? 'hover:text-decoration-thickness-4 transition duration-300' : ''} font-bold text-brandeis_blue ${styles}`}>
            <span className={`transition-all ${animate ? 'hover:mr-2 duration-300' : ''} ${textStyles}`}>{text}</span>
            <span className={`ml-2 ${animate ? 'transition-transform duration-300' : ''} ${iconStyles}`}>{icon}</span>
        </a>
    );
};

export default CustomButton;