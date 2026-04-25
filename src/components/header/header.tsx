import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css"

export default function Header () {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const paths = {
        search: "/",
        about: "/about",
    }

    const handleNavigation = (path: string) => {
        navigate(path);
        setIsOpen(false); 
    }

    return (
        <>
            <div className="btns desktop-footer">
                <div className="btns-header">
                    <button onClick={() => handleNavigation(paths.search)}>Pesquisa</button>
                    <button onClick={() => handleNavigation(paths.about)}>Sobre</button>
                </div>
            </div>

            {/* Versão Mobile - Menu Hamburguer no topo gulosito*/}
            <div className="mobile-menu">
                <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                
                <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                    <button onClick={() => handleNavigation(paths.search)}>Pesquisa</button>
                    <button onClick={() => handleNavigation(paths.about)}>Sobre</button>
                </div>
            </div>
        </>
    )
}