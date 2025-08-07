import React from "react";
import myImage from "../assets/12.jpg"
import { Link } from "react-router-dom";
import "./HeroStyles.css"

export default function Hero(props){
    return(
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="" />

                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <Link to = {props.url} className={props.btnClass}>
                        {props.btnText}
                    </Link>
                </div>
            </div>
        </>
    )
}