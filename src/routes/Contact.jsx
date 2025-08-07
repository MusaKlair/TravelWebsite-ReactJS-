import React from "react";
import Hero from "../components/Hero";
import myImage from "../assets/2.jpg"
import ContactForm from "../components/ContactForm";


export default function Contact(){
    return(
        <>
            <Hero
                cName = "hero-mid"
                heroImg = {myImage}
                title = "Contact"
                btnClass = "hide"
            />
            <ContactForm />
        </>
    )
}