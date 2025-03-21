import React, { useState, useEffect } from "react";
import "../style/components/hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
    const names = [
        { text: "Yassine", color: "orange" },
        { text: "Echadani", color: "red" },
    ];

    const socialLinks = [
        { href: "https://www.facebook.com/profile.php?id=61572773007779#", icon: <FaFacebookF />, label: "Facebook" },
        { href: "https://www.instagram.com/oky_webcraft/", icon: <FaInstagram />, label: "Instagram" },
        { href: "https://www.linkedin.com/company/106179526", icon: <FaLinkedinIn />, label: "LinkedIn" },
        { href: "https://wa.me/+212717923103", icon: <FaWhatsapp />, label: "WhatsApp" },
    ];

    const [currentNameIndex, setCurrentNameIndex] = useState(0);
    const [displayName, setDisplayName] = useState("");
    const [isRemoving, setIsRemoving] = useState(false);
    const [hoverText, setHoverText] = useState({ contact: "Contact Me", cv: "Download CV" });

    useEffect(() => {
        let index = isRemoving ? names[currentNameIndex].text.length : 0;
        let interval = setInterval(() => {
            setDisplayName((prev) => isRemoving ? prev.slice(0, -1) : names[currentNameIndex].text.slice(0, index + 1));
            index = isRemoving ? index - 1 : index + 1;

            if (index < 0 || index > names[currentNameIndex].text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsRemoving(!isRemoving);
                    if (!isRemoving) setCurrentNameIndex((prev) => (prev + 1) % names.length);
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [isRemoving, currentNameIndex]);

    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-text">
                    <h1 className="name" style={{ color: names[currentNameIndex].color }}>
                        <span style={{ color: "black" }}>Hi I'm </span>{displayName}
                    </h1>
                    <h2 className="username">Web Developer</h2>
                    <p className="paragraphe">
                        I am a passionate web developer skilled in modern technologies like React, Node.js,
                        and more. Let's build something amazing together!
                    </p>

                    <div className="cta-buttons">
                        {/* Contact Me Button */}
                        <button
                            onMouseEnter={() => setHoverText({ ...hoverText, contact: "Contact Me" })}
                        >
                            {hoverText.contact}
                        </button>

                        {/* Download CV Button */}
                        <button
                            onMouseEnter={() => setHoverText({ ...hoverText, cv: "Download CV" })}
                        >
                            <a href="/cv.pdf" download="Echadani_Yassine_CV.pdf" className="download-link">
                                {hoverText.cv}
                            </a>
                        </button>
                    </div>

                    <div className="social-icons">
                        <a href="https://github.com/yassine14522" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/yassine-echadani-5904b8268" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} className="icon" />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="assets/photo.jpg" alt="Profile" className="profile-image" />
                </div>

                <div className="arrow-container">
                    <span className="arrow">&#8595;</span>
                </div>
            </section>
        </div>
    );
}
