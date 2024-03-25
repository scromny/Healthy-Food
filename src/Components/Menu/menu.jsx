import "./menu.scss";
import React from "react";
import MenuImg1 from "../img/Vegie.png";
import MenuImg2 from "../img/Salads.png";
import MenuImg3 from "../img/Burger.png";
import MenuImg4 from "../img/Delmonico.png";
import MenuImg5 from "../img/EgMasala.png";
import MenuImg6 from "../img/Peach.png";
import plus from "../img/+.png";
import score from "../img/zvyozdcka.png";

export default function Menu() {
    const menu = [
        {
            img: MenuImg1,
            alt: "Vegie Muffen",
            title: "Vegie Muffen",
            cost: "16$",
            order: plus,
            score: score
        },
        {
            img: MenuImg2,
            alt: "Salads",
            title: "Salads",
            cost: "12$",
        },
        {
            img: MenuImg3,
            alt: "Burger",
            title: "Burger",
            cost: "10$",
        },
        {
            img: MenuImg4,
            alt: "Delmonico Steack dish",
            title: "Delmonico Steack dish",
            cost: "14$",
        },
        {
            img: MenuImg5,
            alt: "Egg Masala",
            title: "Egg Masala",
            cost: "9$",
        },
        {
            img: MenuImg6,
            alt: "Peach Melba dish",
            title: "Peach Melba dish",
            cost: "15$",
        }
    ]
    return (
        <>
            <div className="menu">
                <div className="container" id="Menu">
                    <h3 className="menu__name">MENU</h3>
                    <h2 className="menu__heading">Food Full of treaty Love</h2>
                    <p className="menu__text">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers,</p>
                    <div className="menu__grid">
                        {menu.map(food => (
                            <div className="menu__grid--boxes">
                                <img className="menu__grid--img" src={food.img} alt={food.alt + "img"} />
                                <div className="menu__grid--box">
                                    <div className="menu__grid--headings">
                                        <h2 className="menu__grid--heading">{food.title}</h2>
                                        <h2 className="menu__grid--heading">{food.cost}</h2>
                                    </div>
                                    <p className="menu__grid--text">There are many things are needed to start the Fast Food Business.</p>
                                    <div className="menu__grid--bottom">
                                        <img className="menu__gridb--img" src={plus} alt="Plus" />
                                        <img className="menu__gridb--img" src={score} alt="score" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="menu__btn">Learn More</button>
                </div>
            </div>
        </>
    )
}