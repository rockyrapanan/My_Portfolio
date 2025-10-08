import '../CSS/Home.css';
const Home = () => {
  return (
    <section className="home">
      <h1>Portfolio Website</h1>
      <p>Hello Everyone, My name is Leonardo L. Rapanan, but you can call me Rocky.
        I'm a passionate software engineer with a knack for creating efficient and scalable web applications.
        Welcome to my portfolio website where I showcase my projects and skills.
        
      </p>
      <div>
        <h2 className="project-showcase">Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
        <ul className="project-list">
          <li>
            <strong>Project 1:</strong> E-commerce Website - A full-stack e-commerce platform built with React, Node.js, and MongoDB.
          </li>
          <li>
            <strong>Project 2:</strong> Task Manager App - A task management application using TypeScript and Express.
          </li>
          <li>
            <strong>Project 3:</strong> Portfolio Website - This very website built with React and CSS.
          </li>
        </ul>
      </div>
      <footer className="footer">
        <p>Leonardo L. Rapanan. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Home;
