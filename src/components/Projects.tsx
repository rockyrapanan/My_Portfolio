import React from 'react';
import'../CSS/Projects.css';
interface Project {
  title: string;
  description: string;
  link?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'E-commerce App',
    description:
      'A responsive website to showcase my projects and skills. Requiring user login/register. Data stored in Firebase along with cart and cart history.',
    link: 'https://github.com/rockyrapanan/e-commerce-app',
    technologies: ['React', 'TypeScript', 'CSS'],
  },
  {
    title: 'Task Management',
    description: 'A web application to manage daily tasks efficiently.',
    link: 'https://github.com/yourusername/task-manager',
    technologies: ['React', 'TypeScript'],
  },
  {
    title: 'Marvel-Characters',
    description: 'Using both front-end and back-end development.',
    link: 'https://github.com/rockyrapanan/Marvel-Characters.git',
    technologies: ['React', 'SQL', 'Python'],
  },
  {
    title: 'Moon-base',
    description: 'Using C# final project to create a moon-base simulation of new arrivals.',
    link: 'https://github.com/rockyrapanan/Final_Project-Moonbase2.git',
    technologies: ['C#'],
  },
];

const Projects: React.FC = () => (
  <section id="projects">
    <h2 className="project-showcase">Projects</h2>
    <div className="projects-grid">
      {projects.map((p, i) => (
        <div key={i} className="project-card">
          <h3 className="project-title">{p.title}</h3>
          <p className="project-description">{p.description}</p>

          <div className="project-tech">
            {p.technologies.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>

          {p.link && (
            <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;