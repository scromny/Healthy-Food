import "./about.scss";
import React from "react";
import AboutImg from "../img/About.png";

export default function About() {
    return (
        <>
            <div className="about" id="About">
                <div className="container">
                    <img className="about__img" src={AboutImg} alt="AboutImg" />
                    <div className="about__right">
                        <h3 className="about__right--name">ABOUT US</h3>
                        <h2 className="about__right--heading">Food Stalls with Persons but  to  Product marketing plane catlogues etc to. </h2>
                        <p className="about__right--text">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.</p>
                        <button className="about__right--btn">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}