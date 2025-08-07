import React from "react";
import Hero from "../components/Hero";
import myImage from "../assets/12.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";


export default function Home(){
    return(
        <>
            <Hero
                cName = "hero"
                heroImg = {myImage}
                title = "Your Journery Your Story"
                text = "Choose Your Favourite Destination"
                url = "/"
                btnText = "Travel Plans"
                btnClass = "show"
            />
            <Destination />
            <Trip />
        </>
    )
}