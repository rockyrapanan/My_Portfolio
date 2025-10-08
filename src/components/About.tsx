import React from 'react';
import Resume from '../assets/Resume.pdf';
import '../CSS/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>

      <p className="about-intro">
        Hello! My name is Leonardo, but you can call me Rocky. I’m a passionate, detail-oriented
        software engineer with hands-on experience designing and developing modern, user-focused
        web applications. My expertise includes building scalable front-end and back-end solutions
        with React, TypeScript, Node.js, and I also engineer systems in <strong>Python</strong>,
        work with relational data using <strong>SQL</strong>, and develop robust applications in
        <strong> C#</strong> and <strong>C++</strong>.
      </p>

      <p className="about-intro">
        Beyond coding, I thrive in collaborative environments where I can share ideas, solve
        challenging problems, and learn from my team. I actively expand my skill set—exploring new
        languages and frameworks, and diving into cloud/DevOps practices.
      </p>

      <p className="about-intro">
        In my free time, I build personal projects (including experimenting with my own coding
        language), take family road trips, and enjoy the Pacific Northwest. I’m always eager to
        take on new challenges and contribute to projects that push technology forward.
      </p>

      <h2 className="about-subtitle">Skills & Experience</h2>
      <ul className="skills-list">
        <li>
          <strong>Frontend:</strong> React, TypeScript, JavaScript, HTML, CSS, Redux
        </li>
        <li>
          <strong>Backend & APIs:</strong> Node.js, Express, REST APIs, <span className="hl">Python (FastAPI/Flask)</span>
        </li>
        <li>
          <strong>Data & Databases:</strong> <span className="hl">SQL</span> (PostgreSQL, MySQL, SQLite), schema design, query optimization
        </li>
        <li>
          <strong>Systems & App Dev:</strong> <span className="hl">C#</span> (ASP.NET/Unity basics), <span className="hl">C++</span> (OOP, STL)
        </li>
        <li>
          <strong>Tools:</strong> Git, Docker, Jest, Webpack, CI/CD (GitHub Actions)
        </li>
        <li>
          <strong>Education:</strong> B.S. in Computer Science
        </li>
        <li>
          <strong>Experience:</strong> 1+ years in web development
        </li>
      </ul>

      {/* Optional: tech badges row */}
      <div className="tech-badges">
        {['Python', 'SQL', 'C#', 'C++', 'React', 'TypeScript', 'Node.js'].map(t => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      <div className="resume-block">
        <h2>Resume</h2>
        <a className="resume-link" href={Resume} target="_blank" rel="noopener noreferrer">
          Download Resume (PDF)
        </a>

        {/* Inline viewer (optional) — place resume.pdf in /public */}
        {/* <div className="resume-viewer">
          <iframe src="/resume.pdf" title="Resume" width="100%" height="600"></iframe>
        </div> */}
      </div>
    </section>
  );
};

export default About;