import "./contact.scss";
import React from "react";

export default function Contact() {
    return (
        <>
            <div className="contact" id="Contact">
                <div className="container">
                    <div className="test__name">CONTACT</div>
                    <h2 className="test__heading">Food Stalls with Persons but also specialized equipment, Skills to manage.</h2>
                    <form className="contact__form">
                        <input className="contact__form--input" type="text" placeholder="Enter your message"/>
                        <button className="contact__form--btn" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}