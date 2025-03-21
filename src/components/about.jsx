import React, { useState } from "react";
import "../style/components/about.css";

export default function About() {
   

    return (
        <div id="about" className="about-container">
            <section className="about-section">
                <div className="about-image_container">
                    <img src="assets/photo.jpg" alt="About_Photo" className="about-image" />
                </div>
                <div className="about-text">
                    <h1 className="about-title">About Me</h1>
                    <h2 className="about-role">Full Stack Developer<span className="typing-symbol">|</span></h2>
                    <p className="about-description">
                        "Je suis un développeur Full Stack dynamique, spécialisé dans le développement front-end et back-end. Compétent dans des technologies comme ReactJS, Node.js, Express, PHP/Laravel, et les bases de données SQL/NoSQL, je combine créativité et expertise technique pour offrir des solutions performantes. Proactif, organisé et un joueur d'équipe fort, je suis toujours prêt à relever de nouveaux défis et à contribuer à des projets ambitieux."
                    </p>
                </div>
            </section>
        </div>
    );
}
