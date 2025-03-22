import React from "react";

export default function About() {
    return (
        <div id="about" className="flex justify-center items-center px-5 py-12 mt-32">
            <section className="flex flex-col md:flex-row items-center max-w-5xl gap-20">
                {/* Image Container */}
                <div className="flex-1 text-center">
                    <img
                        src="assets/photo.jpg"
                        alt="About_Photo"
                        className="w-72 h-72 object-cover rounded-lg animate-pulse"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 pl-5">
                    <h1 className="text-4xl font-bold opacity-0 animate-fade-in">About Me</h1>
                    <h2 className="text-3xl text-orange-500 font-bold overflow-hidden whitespace-nowrap w-0 animate-typing relative">
                        Full Stack Developer<span className="border-r-2 border-orange-500 ml-1 animate-blink">|</span>
                    </h2>
                    <p className="text-lg text-gray-600 opacity-0 mt-5 mb-6 animate-fade-in delay-200">
                        "Je suis un développeur Full Stack dynamique, spécialisé dans le développement front-end et back-end. Compétent dans des technologies comme ReactJS, Node.js, Express, PHP/Laravel, et les bases de données SQL/NoSQL, je combine créativité et expertise technique pour offrir des solutions performantes."
                    </p>

                    <button className="bg-gradient-to-r from-black to-orange-500 text-white text-lg px-6 py-3 rounded-lg transition-transform transform hover:scale-105">
                        Contact Me
                    </button>
                </div>
            </section>
        </div>
    );
}
