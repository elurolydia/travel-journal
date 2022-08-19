import React from "react";
import locationIcon from "./images/locationIcon.png";




export default function Card (props) {
    return (
        <div className="card">
            <img src={props.img} alt="location picture"  id="locationImg"/>
            <section>
                <p className="locationName"><img src={locationIcon} alt="Location Icon" id="icon"/> {props.country} <span id="view">View on Google Maps</span></p>
                <h1>{props.location}</h1>
                <h6>{props.date}</h6>
                <p id="description"> {props.desc} </p>
            </section>
        </div>
    )
}