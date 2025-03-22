import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
    const names = [
        { text: "Yassine", color: "text-orange-500" },
        { text: "Echadani", color: "text-red-500" },
    ];

    const socialLinks = [
        { href: "https://www.linkedin.com/company/106179526", icon: <FaLinkedinIn />, label: "LinkedIn" },
        { href: "https://github.com/echadaniyassine", icon: <FaGithub />, label: "Github" },
        { href: "https://www.facebook.com/profile.php?id=61572773007779#", icon: <FaFacebookF />, label: "Facebook" },
        { href: "https://www.instagram.com/oky_webcraft/", icon: <FaInstagram />, label: "Instagram" },
        { href: "https://wa.me/+212717923103", icon: <FaWhatsapp />, label: "WhatsApp" },
    ];

    const [currentNameIndex, setCurrentNameIndex] = useState(0);
    const [displayName, setDisplayName] = useState("");
    const [isRemoving, setIsRemoving] = useState(false);

    useEffect(() => {
        let index = isRemoving ? names[currentNameIndex].text.length : 0;
        let interval = setInterval(() => {
            setDisplayName((prev) =>
                isRemoving ? prev.slice(0, -1) : names[currentNameIndex].text.slice(0, index + 1)
            );
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
        <div className="flex justify-center items-center px-5 py-12 mx-auto max-w-6xl">
            <section className="flex flex-col md:flex-row items-center w-full gap-10">
                {/* Left Content */}
                <div className="text-left md:w-1/2 space-y-6">
                    <h1 className={`text-5xl md:text-7xl font-bold ${names[currentNameIndex].color}`}>
                        <span className="text-black">Hi, I'm </span>{displayName}
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-500 animate-pulse">
                        Web Developer
                    </h2>
                    <p className="text-gray-600 text-lg">
                        I am a passionate web developer skilled in modern technologies like React, Node.js,
                        and more. Let's build something amazing together!
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-6 mt-5">
                        <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-orange-500 transition">
                            Contact Me
                        </button>
                        <a
                            href="/cv.pdf"
                            download="Echadani_Yassine_CV.pdf"
                            className="bg-gradient-to-r from-black to-orange-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-5 mt-6">
                        {socialLinks.map(({ href, icon, label }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-orange-500 text-2xl hover:scale-110 transition"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="assets/photo.jpg"
                        alt="Profile"
                        className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full animate-fadeIn"
                    />
                </div>
            </section>

            {/* Animated Arrow */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
                <span className="text-5xl text-orange-500">&#8595;</span>
            </div>
        </div>
    );
}
