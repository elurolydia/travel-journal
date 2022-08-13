import React from "react";
import worldImg from "./images/worldImg.png"


export default function Navbar () {
    return (
        <nav>
            <img src={worldImg} alt="world image" />
            <p>my travel journal.</p>
        </nav>
    )
}