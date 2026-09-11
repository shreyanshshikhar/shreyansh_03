import { useState } from 'react';
import './Certifications.css';
import nodeCertificate from '../assets/nodecertificate.png';
import angularCertificate from '../assets/angular.png';
import jsCertificate from '../assets/js.png';
import cssCertificate from '../assets/css.png';
import googleCertificate from '../assets/google.png';

const certifications = [
  { id: 1, name: 'Node.js Certificate', issuer: 'HackerRank', category: 'Backend', date: '2024', image: nodeCertificate, link: 'https://www.hackerrank.com/certificates/00f21150a082', skills: ['Node.js', 'Express', 'JavaScript'] },
  { id: 2, name: 'Angular Certificate', issuer: 'HackerRank', category: 'Frontend', date: '2024', image: angularCertificate, link: 'https://www.hackerrank.com/certificates/e2d67f7b7d1d', skills: ['Angular', 'TypeScript', 'RxJS'] },
  { id: 3, name: 'JavaScript Certificate', issuer: 'HackerRank', category: 'Frontend', date: '2023', image: jsCertificate, link: 'https://www.hackerrank.com/certificates/1968551051b0', skills: ['JavaScript', 'ES6', 'DOM'] },
  { id: 4, name: 'CSS Certificate', issuer: 'HackerRank', category: 'Frontend', date: '2023', image: cssCertificate, link: 'https://www.hackerrank.com/certificates/a33f4bbf3046', skills: ['CSS3', 'Flexbox', 'Grid', 'Animations'] },
  { id: 5, name: 'Google Cloud Computing Foundations — Google Cloud Study Jam', issuer: 'Google Cloud', category: 'Cloud', date: '2023', image: googleCertificate, link: null, skills: ['Google Cloud', 'Cloud Computing'] },
];

const Certifications = () => {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? certifications : certifications.filter((item) => item.category === filter);

  return (
    <section className="section-paper cert-section" id="certifications">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="section-kicker">05 / CREDENTIALS</span>
            <h2>Proof of<br /><em>continuous learning.</em></h2>
          </div>
          <p>Verified certifications across frontend, backend and cloud technologies.</p>
        </div>

        <div className="filter-row cert-filter">
          {['All', 'Frontend', 'Backend', 'Cloud'].map((item) => (
            <button key={item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>

        <div className="cert-list">
          {visible.map((cert, index) => (
            <article className="cert-row" key={cert.id}>
              <div className="cert-preview">
                <img src={cert.image} alt={cert.name} />
              </div>
              <div className="cert-copy">
                <span className="cert-index">0{index + 1} / {cert.date}</span>
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
                <div className="cert-skills">
                  {cert.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
              <div className="cert-action">
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">Verify ↗</a>
                ) : (
                  <button onClick={() => window.open(cert.image, '_blank', 'noopener,noreferrer')}>View ↗</button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
