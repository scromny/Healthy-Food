import "./features.scss";
import React from "react";
import QualityFood from "../img/Quality-Food.png";
import FoodDelivery from "../img/food-delivery.png";
import SuperTaste from "../img/super-taste.png";

export default function Features() {
    return (
        <>
            <div className="features" id="Features">
                <div className="container">
                    <h3 className="features__name">FEATURES</h3>
                    <h2 className="features__heading">Food With A New Passion</h2>
                    <div className="features__boxes">
                        <div className="features__box">
                            <div className="features__box--imgb">
                                <img className="features__box--img" src={QualityFood} alt="QualityFood" />
                            </div>
                            <h2 className="features__box--name">Quality Food</h2>
                            <p className="features__box--text">It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                        </div>
                        <div className="features__box">
                            <div className="features__box--imgb fooddelivery">
                                <img className="features__box--img" src={FoodDelivery} alt="FoodDelivery" />
                            </div>
                            <h2 className="features__box--name">Food Delivery</h2>
                            <p className="features__box--text">It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                        </div>
                        <div className="features__box">
                            <div className="features__box--imgb supertaste">
                                <img className="features__box--img" src={SuperTaste} alt="SuperTaste" />
                            </div>
                            <h2 className="features__box--name">Super Taste</h2>
                            <p className="features__box--text">It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}