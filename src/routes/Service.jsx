import React from "react";
import Hero from "../components/Hero";
import myImage from "../assets/2.jpg"
import Trip from "../components/Trip";


export default function Service(){
    return(
        <>
            <Hero
                cName = "hero-mid"
                heroImg = {myImage}
                title = "Service"
                btnClass = "hide"
            />
            <Trip />
        </>
    )
}