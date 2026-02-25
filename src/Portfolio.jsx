import { useState } from "react";
import "./Portfolio.css";
import profile from "./assets/Dog1.png";
import projectImage from "./assets/Dog1.png";
import { SocialIcon } from "react-social-icons";
import drink from "./assets/drink.png"
import finder from "./assets/finder.png"

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Never have I ever game",
            image: drink,
            description: "A game about Questions for a party to spend some time with friends. It is a Game where u have to do a punishment if u refuse from answering the Question given in the promt",
            details:
                ""
        },
        {
            id: 2,
            title: "Showfinder",
            image: finder,
            description: "A page which is supposed to help you find a new show to watch based from categories",
            details:
                ""
        },
        {
            id: 3,
            title: "",
            image: projectImage,
            description: "",
            details:
                ""
        },
        {
            id: 4,
            title: "",
            image: projectImage,
            description: "",
            details:
                ""
        }
    ];

    const toggleProject = (id) => {
        setSelectedProject(selectedProject === id ? null : id);
    };

    return (
        <div className="portfolio">

            <header className="header">
                <h1 className="logo">Jonas</h1>
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#links">Links</a>
                </nav>
            </header>

            <section className="hero">
                <div>
                    <h2>Informatiker Applikationsentwicklung</h2>
                    <p>
                        2. Lehrjahr IMS · Fokus auf React, Web & Software Development
                    </p>
                </div>
            </section>

            <section className="about" id="about">
                <img src={profile} alt="Profile" className="profile-pic" />
                <div>
                    <h2>Über mich</h2>
                    <p>
                        Ich bin
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
                <p>© 2025 André Bernet</p>
            </footer>
        </div>
    );
}