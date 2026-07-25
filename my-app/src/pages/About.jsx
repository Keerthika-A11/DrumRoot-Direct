import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const processSteps = [
    {
      step: "01",
      title: "Direct Harvest",
      desc: "Fresh drumsticks picked directly from our family-owned and partnered traditional farms early in the morning."
    },
    {
      step: "02",
      title: "Strict Quality Sorting",
      desc: "Manual grading based on exact length, fiber texture, thickness, and vibrant green tone to eliminate damaged yields."
    },
    {
      step: "03",
      title: "Ventilated Bulk Packing",
      desc: "Packed in specialized breathable gunny/mesh bags to prevent heat buildup and maintain crisp freshness during transit."
    },
    {
      step: "04",
      title: "Direct Market Dispatch",
      desc: "Loaded straight onto transport trucks headed to major wholesale mandis, exporters, and commercial chains."
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#fcfdfc' }}>
      
      {/* 🌟 About Hero Section */}
      <section style={{
        backgroundColor: '#0b2b18',
        color: '#fff',
        padding: '70px 20px',
        textAlign: 'center',
        borderBottom: '3px solid #ffb703'
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span style={{ 
            backgroundColor: 'rgba(255,183,3,0.15)', 
            color: '#ffb703', 
            padding: '6px 16px', 
            borderRadius: '20px', 
            fontSize: '0.85rem', 
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            AGRICULTURAL HERITAGE & DIRECT SUPPLY
          </span>
          <h1 style={{ fontSize: '2.6rem', margin: '20px 0 15px 0', lineHeight: '1.2' }}>
            From Family Roots to Bulk Supply Mastery
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#d1d5db', lineHeight: '1.6' }}>
            Building a seamless bridge between traditional Indian farming and large-scale commercial wholesale procurement.
          </p>
        </div>
      </section>

      {/* 🌟 Personal & Business Story */}
      <section style={{ padding: '70px 20px', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Block: Personal Legacy */}
          <div style={{ backgroundColor: '#f0f7f2', padding: '35px', borderRadius: '16px', borderLeft: '5px solid #25d366' }}>
            <h3 style={{ color: '#0b2b18', fontSize: '1.4rem', marginTop: 0 }}>
              🌱 Our Farm Backstory
            </h3>
            <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '0.98rem' }}>
              We started as a traditional farming family, cultivating drumsticks on our own land with deep respect for soil quality and natural harvesting techniques. Over 25 years of hands-on farming taught us exactly how to handle yield without damaging its natural crispness and nutritional value.
            </p>
          </div>

          {/* Right Block: Business Vision */}
          <div style={{ backgroundColor: '#0b2b18', color: '#fff', padding: '35px', borderRadius: '16px' }}>
            <h3 style={{ color: '#ffb703', fontSize: '1.4rem', marginTop: 0 }}>
              🏢 Our Commercial Operations
            </h3>
            <p style={{ color: '#e5e7eb', lineHeight: '1.7', fontSize: '0.98rem' }}>
              Today, DrumRoot Direct has expanded into a full-scale wholesale supplier. By working directly with trusted regional farmers alongside our own production, we eliminate unnecessary middlemen. This ensures fair value for growers and guarantees export-grade freshness for commercial buyers.
            </p>
          </div>
        </div>
      </section>

      {/* 🌟 Founder Profile Section (APPUNU - Capitalized & Compact Photo Size) */}
      <section style={{ padding: '50px 20px', backgroundColor: '#fff', textAlign: 'center', borderTop: '1px solid #edf2f7' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <h2 style={{ color: '#0b2b18', fontSize: '2rem', marginBottom: '25px' }}>
            Meet Our Founder
          </h2>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '30px 25px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            {/* 📸 Decreased Size Professional Avatar Frame */}
            <div style={{
              width: '110px',
              height: '110px',
              margin: '0 auto 15px auto',
              borderRadius: '50%',
              padding: '3px',
              background: 'linear-gradient(135deg, #25d366, #ffb703)',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="/owner.jpg" 
                alt="APPUNU - Founder" 
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  backgroundColor: '#fff'
                }}
              />
            </div>

            {/* 👑 Name in ALL CAPS */}
            <h3 style={{ 
              color: '#0b2b18', 
              margin: '5px 0 2px 0', 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              letterSpacing: '1px' 
            }}>
              APPUNU
            </h3>
            
            <p style={{ color: '#25d366', fontWeight: 'bold', fontSize: '0.9rem', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Founder & Lead Farmer
            </p>
            
            <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic', maxWidth: '500px', margin: '0 auto' }}>
              "25+ வருஷ விவசாயப் பாரம்பரியத்தோடு, எங்களோட லட்சியமே விவசாயிகளின் விளைபொருட்களுக்கு சரியான மதிப்பும், Wholesale Buyers-க்கு தரமான பொருட்களும் நேரடியா போய்ச்சேரணும்கிறதுதான்."
            </p>
          </div>
        </div>
      </section>

      {/* 🌟 Unique Farm-to-Truck Supply Process */}
      <section style={{ backgroundColor: '#f9fafb', padding: '70px 20px', borderTop: '1px solid #edf2f7', borderBottom: '1px solid #edf2f7' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#0b2b18', margin: '0 0 10px 0' }}>
              How We Maintain Supply Quality
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem' }}>
              Our step-by-step handling process ensures zero batch degradation during transit.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '25px'
          }}>
            {processSteps.map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#fff',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                position: 'relative'
              }}>
                <span style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#10b981',
                  opacity: 0.3,
                  position: 'absolute',
                  top: '15px',
                  right: '20px'
                }}>
                  {item.step}
                </span>
                <h3 style={{ color: '#0b2b18', fontSize: '1.15rem', marginTop: '10px', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 Call to Action */}
      <section style={{
        backgroundColor: '#071f11',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Partner with Direct Farm Suppliers</h2>
        <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto 30px auto' }}>
          Looking for consistent daily or weekly drumstick supply for wholesale markets or exporting? Let's discuss requirements.
        </p>
        <Link to="/contact">
          <button style={{
            backgroundColor: '#ffb703',
            color: '#0b2b18',
            border: 'none',
            padding: '14px 36px',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(255,183,3,0.3)'
          }}>
            Get Daily Wholesale Rates ➔
          </button>
        </Link>
      </section>

    </div>
  );
}

export default About;