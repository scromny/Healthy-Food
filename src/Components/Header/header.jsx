import "./header.scss";
import React from "react";
import Logo from "../img/Logotip.svg";

function Header() {
    const xRef = React.useRef();
    return (
        <>
            <div className="header" id="Home">
                <div className="container">
                    <div className="header__left">
                        <a href="#Home">
                            <img src={Logo} alt="Logo" />
                        </a>
                        <div className="header__blok">
                            <nav className="header__nav " ref={xRef}>
                                <ul className="header__ul">
                                    <button className="closebtn"
                                        onClick={() => {
                                            xRef.current.classList.remove("absolute");
                                        }
                                        }>
                                    </button>
                                    <li className="header__ul--li">
                                        <a className="header__li--a" href="#Home">Home</a>
                                    </li>
                                    <li className="header__ul--li">
                                        <a className="header__li--a" href="#About">About us</a>
                                    </li>
                                    <li className="header__ul--li">
                                        <a className="header__li--a" href="#Menu">Menu</a>
                                    </li>
                                    <li className="header__ul--li">
                                        <a className="header__li--a" href="#Features">Features</a>
                                    </li>
                                    <li className="header__ul--li">
                                        <a className="header__li--a" href="#Contact">Contact us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="menu__btns">
                        <button className="header__btn">Booking Now</button>
                        <button className="menubtn"
                            onClick={() => {
                                xRef.current.classList.add("absolute");
                            }
                            }>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;