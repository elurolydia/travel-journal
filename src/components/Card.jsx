import React from "react";
import locationIcon from "./images/locationIcon.png";
import fuji from "./images/fuji.png";




export default function Card () {
    return (
        <div className="card">
            <img src={fuji} alt="location picture"  id="locationImg"/>
            <section>
                <p className="locationName"><img src={locationIcon} alt="Location Icon" id="icon"/> JAPAN <span id="view">View on Google Maps</span></p>
                <h1>Mount Fuji</h1>
                <h6>12 Jan, 2021 - 24 Jan, 2021</h6>
                <p id="description">Mount Fuji is the tallest mountain in Japan, 
                    standing at 3,776 meters (12,380 feet). 
                    Mount Fuji is the single most popular tourist site in Japan, 
                    for both Japanese and foreign tourists.
                </p>
            </section>
        </div>
    )
}