import { useState } from 'react';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Technology',
    field: 'Computer Science',
    institution: 'IIMT College Of Engineering',
    location: 'Greater Noida, Uttar Pradesh',
    duration: '2020 — 2024',
    percentage: '70%',
    status: 'Completed',
    year: '2024',
    description: 'Completed B.Tech in Computer Science with 70% aggregate. Gained a strong foundation in programming, web development and database management.',
    subjects: ['Data Structures', 'Algorithms', 'Web Development', 'Database Management', 'Operating Systems', 'Computer Networks'],
  },
  {
    id: 2,
    degree: 'Intermediate (12th)',
    field: 'Science (PCM)',
    institution: 'Central Board of Secondary Education (CBSE)',
    location: 'Gorakhpur, Uttar Pradesh',
    duration: '2019 — 2020',
    percentage: '86.6%',
    status: 'Completed',
    year: '2020',
    description: 'Completed intermediate education with a focus on Physics, Chemistry and Mathematics.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
  },
  {
    id: 3,
    degree: 'High School (10th)',
    field: 'General',
    institution: 'Central Board of Secondary Education (CBSE)',
    location: 'Gorakhpur, Uttar Pradesh',
    duration: '2018 — 2019',
    percentage: '85%',
    status: 'Completed',
    year: '2018',
    description: 'Completed high school education with a strong academic record.',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies'],
  },
];

const Education = () => {
  const [year, setYear] = useState('All');
  const visible = year === 'All' ? educationData : educationData.filter((item) => item.year === year);

  return (
    <section className="section-ink education-section" id="education">
      <div className="section-wrap">
        <div className="section-heading ink-heading">
          <div>
            <span className="section-kicker">03 / EDUCATION</span>
            <h2>Where the<br /><em>foundation started.</em></h2>
          </div>
          <p>Academic training in computer science, backed by hands-on web development and continuous learning.</p>
        </div>

        <div className="education-controls">
          <span>FILTER BY YEAR</span>
          <div>
            {['All', '2024', '2020', '2018'].map((item) => (
              <button key={item} className={year === item ? 'selected' : ''} onClick={() => setYear(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="education-list">
          {visible.map((item, index) => (
            <article className="education-row" key={item.id}>
              <div className="edu-index">0{index + 1}</div>
              <div className="edu-main">
                <div className="edu-meta-line">
                  <span>{item.duration}</span>
                  <span>{item.status}</span>
                </div>
                <h3>{item.degree}</h3>
                <p className="edu-field">{item.field}</p>
                <p className="edu-institution">{item.institution} <i>·</i> {item.location}</p>
                <div className="edu-details">
                  <p>{item.description}</p>
                  <div className="subject-list">
                    {item.subjects.map((subject) => <span key={subject}>{subject}</span>)}
                  </div>
                </div>
              </div>
              <div className="edu-score">
                <strong>{item.percentage}</strong>
                <span>aggregate</span>
              </div>
            </article>
          ))}
        </div>

        <div className="education-summary">
          <div><strong>70%</strong><span>B.Tech aggregate</span></div>
          <div><strong>2024</strong><span>Graduation</span></div>
          <div><strong>3</strong><span>Qualifications</span></div>
          <div><strong>CS</strong><span>Specialisation</span></div>
        </div>
      </div>
    </section>
  );
};

export default Education;
