import React from "react";
import "/workspaces/MyResume/client/src/Resume.css";

const Resume = () => {
    return (
    <div className="resume">
        <header className="header">
        <h1>Sarayu Reddy Kancharla</h1>
        <p>13950 ne 12th st, bellevue USA, 98007 | (206) 880-5232 | sarayuredi8@email.com</p>
        </header>

        <section className="section">
            <h2>Education</h2>
            <div className="education">
            <h3>Master of Science in Computer Science</h3>
            <p>city university of seattle, seattle USA | april 2025</p>
            <p>GPA: 3.8/4.0</p>

            <h3>Bachelor of Science in Computer Science</h3>
            <p>vignan university , hyderabad telangana | june 2021</p>
            <p>GPA: 3.7/4.0</p>
            </div>
        </section>
        <section className="section">
        <h2>Projects</h2>
        <div className="projects">
            <h3>Personal Website</h3>
            <p>Built a personal website using React and deployed it on GitHub Pages.</p>
            <p>
            Source code: <a 
                href="https://github.com/KancharlaSarayu-ai/MyResume" 
                target="_blank" 
                rel="noopener noreferrer"
            >https://github.com/KancharlaSarayu-ai</a>
            </p>

            <h3>Skills</h3>
            <p>Java, Python, C++, React</p>
        </div>
        </section>
    </div>
    );
};

export default Resume;
