import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const points = [
    "🎖️ 25+ Years Farming Mastery",
    "🚚 Guaranteed 1-Day Express Transport",
    "🌱 100% Direct Farm Sourcing",
    "⭐ Export Grade Premium Quality",
    "📦 Damage-Free Protective Packaging",
    "💰 Best Wholesale Market Rates",
    "⚡ Daily Fresh Harvest & Quick Dispatch",
    "🤝 Trusted Bulk Supply Partner"
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      
      {/* Dynamic CSS Keyframes for Ticker & 12 Floating Seeds */}
      <style>{`
        /* 1. Infinite Ticker Animation */
        @keyframes tickerMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: tickerMove 25s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }

        /* 2. Floating Seeds Animation */
        @keyframes floatSeed {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(35deg); opacity: 0.85; }
          100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
        }

        .floating-seed {
          position: absolute;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 50% 0 50% 50%; /* Seed Shape */
          animation: floatSeed 5s ease-in-out infinite;
          pointer-events: none;
        }

        /* 12 Distinct Seed Positions & Timing */
        .seed1 { top: 12%; left: 6%; width: 18px; height: 18px; animation-delay: 0s; }
        .seed2 { top: 65%; left: 10%; width: 12px; height: 12px; animation-delay: 1s; }
        .seed3 { top: 25%; right: 8%; width: 22px; height: 22px; animation-delay: 2s; }
        .seed4 { top: 78%; right: 14%; width: 14px; height: 14px; animation-delay: 1.5s; }
        .seed5 { top: 45%; left: 85%; width: 16px; height: 16px; animation-delay: 2.5s; }
        .seed6 { top: 15%; left: 45%; width: 10px; height: 10px; animation-delay: 3s; }
        .seed7 { top: 82%; left: 40%; width: 18px; height: 18px; animation-delay: 0.5s; }
        .seed8 { top: 35%; left: 22%; width: 14px; height: 14px; animation-delay: 3.5s; }
        .seed9 { top: 55%; right: 28%; width: 20px; height: 20px; animation-delay: 1.8s; }
        .seed10 { top: 10%; right: 30%; width: 12px; height: 12px; animation-delay: 2.2s; }
        .seed11 { top: 70%; left: 70%; width: 15px; height: 15px; animation-delay: 0.8s; }
        .seed12 { top: 30%; left: 75%; width: 11px; height: 11px; animation-delay: 3.2s; }
      `}</style>

      {/* Hero Banner Section */}
      <section style={{
        backgroundColor: '#0b2b18',
        color: '#fff',
        padding: '70px 20px 60px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* 🌟 12 Floating Drumstick Seeds */}
        <div className="floating-seed seed1"></div>
        <div className="floating-seed seed2"></div>
        <div className="floating-seed seed3"></div>
        <div className="floating-seed seed4"></div>
        <div className="floating-seed seed5"></div>
        <div className="floating-seed seed6"></div>
        <div className="floating-seed seed7"></div>
        <div className="floating-seed seed8"></div>
        <div className="floating-seed seed9"></div>
        <div className="floating-seed seed10"></div>
        <div className="floating-seed seed11"></div>
        <div className="floating-seed seed12"></div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Main Title */}
          <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', lineHeight: '1.2', marginTop: '0' }}>
            <span style={{ color: '#ffb703', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Fresh & High-Quality
            </span> <br />
            DrumRoot Direct
          </h1>

          <p style={{ fontSize: '1.25rem', marginBottom: '35px', color: '#e0e1dd', lineHeight: '1.6' }}>
            Directly sourced from farms. Export quality drumsticks for bulk orders at the best market prices!
          </p>

          {/* Wholesale Quote Button */}
          <Link to="/contact">
            <button style={{
              backgroundColor: '#2a9d8f',
              color: '#fff',
              border: 'none',
              padding: '14px 38px',
              fontSize: '1.15rem',
              fontWeight: 'bold',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(42, 157, 143, 0.5)'
            }}>
              Get Wholesale Quote 🌱
            </button>
          </Link>

        </div>
      </section>

      {/* 🌟 COLOR-MATCHED DARK FOREST TICKER BAR */}
      <div style={{
        backgroundColor: '#061e11', /* Darker Green matching the Hero Theme */
        color: '#ffb703',            /* Warm Yellow/Gold Text for rich contrast */
        padding: '14px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 183, 3, 0.25)',
        borderBottom: '1px solid rgba(255, 183, 3, 0.25)'
      }}>
        <div className="ticker-track">
          {[...points, ...points].map((item, index) => (
            <span key={index} style={{
              fontSize: '1rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              padding: '0 30px',
              display: 'inline-flex',
              alignItems: 'center',
              letterSpacing: '0.4px'
            }}>
              {item} <span style={{ marginLeft: '30px', color: '#2a9d8f' }}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Highlights Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '40px', color: '#0b2b18' }}>
          Why Choose Our Wholesale Supply?
        </h2>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '25px',
          flexWrap: 'wrap',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Card 1 */}
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={cardStyle('#2a9d8f')}>
              <h3 style={{ color: '#0b2b18', marginBottom: '10px' }}>🌱 Farm Fresh</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Directly harvested from our fields ensuring maximum freshness and long shelf life.
              </p>
              <span style={knowMoreStyle}>Know Our Story →</span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={cardStyle('#ffb703')}>
              <h3 style={{ color: '#0b2b18', marginBottom: '10px' }}>📦 Bulk & Export Ready</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Custom packaging options available for wholesale market dealers and exporters.
              </p>
              <span style={knowMoreStyle}>View Products →</span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={cardStyle('#2a9d8f')}>
              <h3 style={{ color: '#0b2b18', marginBottom: '10px' }}>🚚 1-Day Transport</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Fast and reliable same-day / 1-day transport dispatch for bulk orders.
              </p>
              <span style={knowMoreStyle}>Our Services →</span>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}

const cardStyle = (borderColor) => ({
  background: '#fff',
  padding: '30px 20px',
  borderRadius: '12px',
  boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
  width: '280px',
  borderTop: `4px solid ${borderColor}`,
  cursor: 'pointer',
  textAlign: 'center'
});

const knowMoreStyle = {
  display: 'inline-block',
  marginTop: '15px',
  color: '#2a9d8f',
  fontWeight: 'bold',
  fontSize: '0.9rem'
};

export default Home;