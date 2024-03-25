import "./take.scss";
import React from "react";
import Apple from "../img/apple.svg";
import Play from "../img/Play.svg";
import TakeImg from "../img/TakeImg.png";

export default function Take() {
    
    return (
        <>
            <div className="take">
                <div className="container">
                    <div className="take__left">
                        <div className="take__left--name">TAKE AWAY</div>
                        <h2 className="take__left--heading">Food Stalls with Persons but to Product marketing plane.</h2>
                        <p className="take__left--text">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.</p>
                        <div className="take__left--btns">
                            <button className="take__btns--btn1">
                                <img src={Apple} alt="App store" />App store
                            </button>
                            <button className="take__btns--btn2">
                                <img src={Play} alt="Google Play" />Google Play
                            </button>
                        </div>
                    </div>

                    <img className="take__img" src={TakeImg} alt="Take Img" />
                </div>
            </div>
        </>
    )
}