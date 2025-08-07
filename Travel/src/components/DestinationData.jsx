
import React from "react";
import mountain1 from "../assets/1.jpg";
import mountain2 from "../assets/2.jpg";

export default function DestinationData(props){
    return(
        <>
            <div className={props.cName}>
                <div className="des-text">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="image">
                    <img src={props.img1} alt="mountain" />
                    <img src={props.img2} alt="mountain" />
                </div>
            </div>
 
        </>
    )
}