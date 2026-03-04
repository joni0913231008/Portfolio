import { useState } from "react";
import "./Portfolio.css";
import profile from "./assets/Dog1.png";
import projectImage from "./assets/Dog1.png";
import { SocialIcon } from "react-social-icons";
import drink from "./assets/drink.png";
import finder from "./assets/finder.png";
import aceattourney from "./assets/cover.jpeg";

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Never Have I Ever",
            image: drink,
            description:
                "A fun party game with daring questions to break the ice and create laughs with friends.",
            details:
                "It is a game where you must perform a punishment if you refuse to answer the question given in the prompt.",
        },
        {
            id: 2,
            title: "Showfinder",
            image: finder,
            description:
                "Discover your next favorite show by exploring categories and recommendations tailored to your taste.",
            details:
                "A web app designed to help users find new shows to watch. Filter by genre, popularity, or personal preferences to get curated suggestions.",
        },
        {
            id: 3,
            title: "Courtroom Chronicles",
            image: aceattourney,
            description:
                "Step into the shoes of a defense lawyer and solve cases through critical thinking and courtroom drama.",
            details:
                "In this game you are playing as a lawyer and you are trying to free your client of all charges. It is a decision-based game where your choices decide the ending and it contains different difficulty settings.",
        },
        {
            id: 4,
            title: "Mood Mixer",
            image: projectImage,
            description:
                "A fun web app that generates stories, playlists, or mini-games based on your mood.",
            details:
                "Users can select their mood and get personalized recommendations or interactive experiences. Tech used: React, CSS, APIs.",
        },
    ];

    const toggleProject = (id) => {
        setSelectedProject(selectedProject === id ? null : id);
    };

    return (
        <div className="portfolio">
            <header className="header">
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#links">Links</a>
                </nav>
            </header>

            <section className="hero">
                <div>
                    <h2>Informatiker Applikationsentwicklung</h2>
                    <p>2. Lehrjahr IMS · Fokus auf React, Web & Software Development</p>
                </div>
            </section>

            <section className="about" id="about">
                <img src={profile} alt="Profile" className="profile-pic" />
                <div>
                    <h2>About me</h2>
                    <p>
                        私はジョルノ・ジョバァーナで、夢を持っている

                    </p>
                </div>
            </section>

            <section className="projects" id="projects">
                <h2>Projekte</h2>
                <div className="project-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-card ${
                                selectedProject === project.id ? "active" : ""
                            }`}
                            onClick={() => toggleProject(project.id)}
                        >
                            <img src={project.image} alt={project.title} />
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {selectedProject === project.id && (
                                    <div className="project-details">
                                        <p>{project.details}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="links" id="links">
                <div className="socials">
                    <SocialIcon url="https://github.com/joni0913231008" />
                    <SocialIcon url="https://www.youtube.com/watch?v=xvFZjo5PgG0" />
                    <SocialIcon url="https://discord.gg/23Q5Zy4h" />
                    <SocialIcon url="https://www.spotify.com" />
                </div>
            </section>

            <footer className="footer">
                <p>© 2026 Jonas Schmid</p>
                <p>jschmid8542@gmail.com</p>
            </footer>
        </div>
    );
}