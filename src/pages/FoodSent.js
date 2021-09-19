import React from "react";
import tick from "./../assets/tick.jpg";
import logoFull from "./../assets/logoFull.png";
import { Link } from "react-router-dom";

const FoodSent = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh", width: "100vw" }}>
            <img src={tick} alt="Tick"></img>
            <p className="font-weight-bold text-center" style={{ fontSize: "1.5rem" }}>You have been connected. You will receive an official email shortly.</p>
            <Link to="/">
                <img alt="ZWaste" src={logoFull} style={{ borderRadius: "1rem" }}></img>
            </Link>
        </div>
    )
}

export default FoodSent;