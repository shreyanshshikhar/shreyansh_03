import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const socialLinks = [
  { name: 'LinkedIn', handle: 'Shreyansh Shikhar Srivastava', href: 'https://www.linkedin.com/in/shreyansh-shikhar-srivastava', mark: 'in' },
  { name: 'GitHub', handle: 'shreyanshshikhar', href: 'https://github.com/shreyanshshikhar', mark: 'gh' },
  { name: 'Instagram', handle: '@shreyanshsrivastava003', href: 'https://www.instagram.com/shreyanshh1409?stkn=OHNtZjg3d21tbG1y', mark: 'ig' },
  { name: 'Email', handle: 'shreyanshshikharsrivastava@gmail.com', href: 'mailto:shreyanshshikharsrivastava@gmail.com', mark: '@' },
  { name: 'WhatsApp', handle: '+91 93xxxxxxxx', href: 'https://wa.me/919336653962?text=Hi%20Shreyansh!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.', mark: 'wa' },
];

const Contact = () => {
  const [state, handleSubmit] = useForm('xykdvoqv');
  const [sentAgain, setSentAgain] = useState(false);

  if (state.succeeded && !sentAgain) {
    return (
      <section className="contact-section" id="contact">
        <div className="section-wrap">
          <div className="contact-success">
            <span className="section-kicker">06 / CONTACT</span>
            <span className="success-mark">✓</span>
            <h2>Message received.</h2>
            <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
            <button onClick={() => setSentAgain(true)}>Send another message</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap">
        <div className="contact-top">
          <div>
            <span className="section-kicker">06 / CONTACT</span>
            <h2>Let's make something<br /><em>worth opening.</em></h2>
          </div>
          <p>Have a role, product or idea in mind? Tell me what you're building and let's start a conversation.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-status">
              <span />
              Available for opportunities
            </div>

            <p className="contact-lead">
              I’m open to frontend, full-stack and web development opportunities where good engineering and thoughtful product design meet.
            </p>

            <div className="social-list">
              {socialLinks.map((social) => (
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="social-row" key={social.name}>
                  <span className="social-mark">{social.mark}</span>
                  <span className="social-name">{social.name}</span>
                  <span className="social-handle">{social.handle}</span>
                  <span className="social-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">01 <span>Your name</span></label>
              <input id="name" name="name" type="text" placeholder="John Doe" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="form-row">
              <label htmlFor="email">02 <span>Email address</span></label>
              <input id="email" name="email" type="email" placeholder="john@company.com" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="form-row">
              <label htmlFor="message">03 <span>What are you working on?</span></label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me a little about the role, project or idea..." required />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button className="contact-submit" type="submit" disabled={state.submitting}>
              {state.submitting ? 'Sending…' : <>Send message <span>↗</span></>}
            </button>

            {state.errors && state.errors.length > 0 && (
              <p className="form-error">Please check the fields above and try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
