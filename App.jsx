import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <nav style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)', transition: 'all 0.8s ease' }}>
        <div className="logo">
          <div className="logo-icon"></div>
          Nexus
        </div>
        <div>
          <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Login</button>
        </div>
      </nav>

      <main>
        <section className="hero" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.8s ease 0.2s' }}>
          <div className="badge">✨ Introducing Nexus 2.0</div>
          <h1>
            The Next Generation of <br />
            <span className="highlight">Digital Experiences</span>
          </h1>
          <p className="subtitle">
            Unleash the power of high-performance React applications. 
            Beautifully crafted, highly optimized, and ready for production.
          </p>
          <div className="cta-group">
            <button className="btn-primary">Get Started Free</button>
            <button className="btn-secondary">View Documentation</button>
          </div>
        </section>

        <section className="features" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.8s ease 0.4s' }}>
          <div className="card">
            <div className="card-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3>Lightning Fast</h3>
            <p>Optimized build process ensuring sub-second load times and silky smooth 60fps animations across all devices.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3>Enterprise Security</h3>
            <p>Built-in protections and containerized deployment via Docker ensure your application remains secure by default.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3>Beautiful Analytics</h3>
            <p>Stunning data visualizations and seamless dashboard integration to give you actionable insights instantly.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
