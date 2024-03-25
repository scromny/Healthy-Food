import "./hero.scss";
import React from "react";
import HeroImg from "../img/Hero.png";

export default function Hero() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero__left">
                        <h1 className="hero__left--heading">Making time a good time by making food the good food.</h1>
                        <p className="hero__left--text">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                        <div className="hero__left--btns">
                            <button className="hero__btns--btn1">Order Now</button>
                            <button className="hero__btns--btn2">Food Details</button>
                        </div>
                    </div>
                    <img className="hero__img" src={HeroImg} alt="HeroImg" />
                </div>
            </div>
        </>
    )
}