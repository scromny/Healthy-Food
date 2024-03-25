import "./testimonial.scss";
import React from "react";
import TestimonialImg from "../img/Testimonial.png";
import TestLeft from "../img/left-strelka.png";
import TestNext from "../img/next-strelka.png";
import score from "../img/zvyozdcka.png";

export default function Testimonial() {
    return (
        <>
            <div className="test">
                <div className="container">
                    <div className="test__name">TESTIMONIAL</div>
                    <h2 className="test__heading">Making Food great again and again</h2>
                    <p className="test__text">You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>
                    <div className="test__box">
                        <img className="test__left--strelka" src={TestLeft} alt="Left strelka" />
                        <div className="test__three">
                            <img className="test__img" src={TestimonialImg} alt="Testimonial User" />
                            <p className="test__center--text">You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
                            <img className="text__center--score" src={score} alt="Baho beramiz" />
                            <div className="text__center--box">
                                <h3 className="text__box--name">AUGUSTA W.REYNOSO</h3>
                                <p className="text__box--text">UI&UX DESIGNER</p>
                            </div>
                        </div>
                        <img className="test__next" src={TestNext} alt="Next strelka" />
                    </div>
                </div>
            </div>
        </>
    )
}