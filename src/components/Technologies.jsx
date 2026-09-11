import { useState } from 'react';
import './Technologies.css';

const technologies = [
  { name: 'HTML', category: 'Frontend', code: 'HT' },
  { name: 'CSS', category: 'Frontend', code: 'CS' },
  { name: 'Bootstrap', category: 'Frontend', code: 'BS' },
  { name: 'Tailwind', category: 'Frontend', code: 'TW' },
  { name: 'JavaScript', category: 'Frontend', code: 'JS' },
  { name: 'Angular', category: 'Frontend', code: 'NG' },
  { name: 'TypeScript', category: 'Frontend', code: 'TS' },
  { name: 'Node.js', category: 'Backend', code: 'NO' },
  { name: 'Express.js', category: 'Backend', code: 'EX' },
  { name: 'MongoDB', category: 'Database', code: 'DB' },
  { name: 'VS Code', category: 'Tools', code: 'VC' },
  { name: 'Postman', category: 'Tools', code: 'PM' },
  { name: 'GitHub', category: 'Tools', code: 'GH' },
];

const filters = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

const Technologies = () => {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? technologies : technologies.filter((item) => item.category === filter);

  return (
    <section className="section-paper tech-section" id="technologies">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="section-kicker">02 / TOOLKIT</span>
            <h2>Tools I use to<br /><em>make things work.</em></h2>
          </div>
          <p>
            A practical stack built around modern JavaScript, component-driven
            interfaces and dependable backend fundamentals.
          </p>
        </div>

        <div className="filter-row" role="tablist" aria-label="Technology categories">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? 'selected' : ''}
              onClick={() => setFilter(item)}
              role="tab"
              aria-selected={filter === item}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {visible.map((tech, index) => (
            <article className="tech-tile" key={tech.name}>
              <span className="tile-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="tile-code">{tech.code}</span>
              <div>
                <h3>{tech.name}</h3>
                <span>{tech.category}</span>
              </div>
              <span className="tile-arrow">↗</span>
            </article>
          ))}
        </div>

        <div className="section-statline">
          <span><b>{technologies.length}</b> technologies</span>
          <span>React / Angular / Node / MongoDB</span>
          <span>JavaScript ecosystem</span>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
