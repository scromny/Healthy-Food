import "./footer.scss";
import React from "react";
import FooterLogo from "../img/Logotip.svg";
import Instagram from "../img/Instagram.png";
import Facebook from "../img/Facebook.png";
import Twitter from "../img/Twitter.png";
import YouTube from "../img/YouTube.png";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <ul className="footer__item">
                        <a href="#Home">
                            <img className="footer__logo" src={FooterLogo} alt="Footer Logo" />
                        </a>
                        <li className="footer__item--list">www.company name.com</li>
                        <li className="footer__item--list">companyname@gmail.com</li>
                        <li className="footer__item--list">Phone: +7 485-118-03-25</li>
                    </ul>
                    <ul className="footer__item">
                        <h4 className="footer__item--title">Home</h4>
                        <li className="footer__item--list">Landingpage</li>
                        <li className="footer__item--list">Documentation</li>
                        <li className="footer__item--list">Referral Program</li>
                        <li className="footer__item--list">UI & UX Design</li>
                        <li className="footer__item--list">Web Design</li>
                    </ul>
                    <ul className="footer__item">
                        <h4 className="footer__item--title">Menu</h4>
                        <li className="footer__item--list">Landingpage</li>
                        <li className="footer__item--list">Documentation</li>
                        <li className="footer__item--list">Referral Program</li>
                        <li className="footer__item--list">UI & UX Design</li>
                        <li className="footer__item--list">Web Design</li>
                    </ul>
                    <ul className="footer__item">
                        <h4 className="footer__item--title">Company</h4>
                        <li className="footer__item--list">Landingpage</li>
                        <li className="footer__item--list">Documentation</li>
                        <li className="footer__item--list">Referral Program</li>
                        <div className="footer__item--box">
                            <img className="footer__item--img" src={Instagram} alt="Instagram" />
                            <img className="footer__item--img" src={Facebook} alt="Facebook" />
                            <img className="footer__item--img" src={Twitter} alt="Twitter" />
                            <img className="footer__item--img" src={YouTube} alt="YouTube" />
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}