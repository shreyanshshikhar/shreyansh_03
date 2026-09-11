import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Portfolio Website Using Angular',
    description: 'Personal portfolio website using Angular, with AOS animation effects and Formspree form handling for a dynamic user experience.',
    tech: ['Angular', 'AOS', 'Formspree', 'CSS3'],
    category: 'Frontend',
    github: 'https://github.com/shreyanshshikhar/Portfolio_Using_Angular',
    demo: 'https://portfolio-using-angular-ez5x.vercel.app/',
    type: 'Frontend / Portfolio',
  },
  {
    id: 2,
    number: '02',
    title: 'Food Order Website',
    description: 'Angular food ordering interface with cart functionality and search, designed around a simple and useful browsing experience.',
    tech: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    category: 'Frontend',
    github: 'https://github.com/shreyanshshikhar/Food-order-Website-Angular',
    demo: null,
    type: 'Frontend / E-commerce',
  },
  {
    id: 3,
    number: '03',
    title: 'Blog Website Using MEAN Stack',
    description: 'Article platform with Angular on the frontend and an Express, Node.js and MongoDB backend for user management and data storage.',
    tech: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
    category: 'Full Stack',
    github: 'https://github.com/shreyanshshikhar/MEAN-STACK-BLOG-WEBSITE',
    demo: null,
    type: 'Full Stack / Content',
  },
  {
    id: 4,
    number: '04',
    title: 'Recipe Sharing Website',
    description: 'Recipe sharing platform built with MongoDB, Express.js, EJS and Node.js with straightforward recipe submission flows.',
    tech: ['MongoDB', 'Express.js', 'EJS', 'Node.js'],
    category: 'Full Stack',
    github: 'https://github.com/shreyanshshikhar/Recipe-sharing-website',
    demo: 'https://recipe-sharing-website.vercel.app/',
    type: 'Full Stack / Platform',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? projects : projects.filter((item) => item.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="section-wrap">
        <div className="projects-intro">
          <div>
            <span className="section-kicker">04 / SELECTED WORK</span>
            <h2>Work that turns<br /><em>ideas into interfaces.</em></h2>
          </div>
          <div className="projects-intro-side">
            <p>Selected builds from my frontend and full-stack work. Source code is available on GitHub.</p>
            <a href="https://github.com/shreyanshshikhar?tab=repositories" target="_blank" rel="noopener noreferrer">
              All repositories <span>↗</span>
            </a>
          </div>
        </div>

        <div className="project-filters">
          {['All', 'Frontend', 'Full Stack'].map((item) => (
            <button key={item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>

        <div className="projects-list">
          {visible.map((project) => (
            <article className="project-row" key={project.id}>
              <div className="project-number">{project.number}</div>
              <div className="project-title-wrap">
                <span>{project.type}</span>
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-list">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live ↗</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
