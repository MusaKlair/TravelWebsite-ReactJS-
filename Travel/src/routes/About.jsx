import React from "react";
import Hero from "../components/Hero";
import myImage from "../assets/night.jpg"
import AboutUs from "../components/AboutUs";


export default function About(){
    return(
        <>
            <Hero
                cName = "hero-mid"
                heroImg = {myImage}
                title = "About"
                btnClass = "hide"
            />
            <AboutUs />
        </>
    )
}