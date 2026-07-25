import React, { useState, useEffect } from 'react';

function Testimonials() {
  const [activeTab, setActiveTab] = useState('all');

  // 🌟 Live Visitors Simulation (Frontend UI Demo)
  const [liveViewers, setLiveViewers] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
      setLiveViewers((prev) => Math.max(8, prev + change));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Filtered Testimonials Data
  const testimonials = [
    {
      id: 1,
      category: 'mandi',
      name: 'Karthik Traders',
      location: 'Bengaluru APMC Market',
      rating: 5,
      date: '2 days ago',
      comment: 'Daily fresh drumsticks received in excellent grading quality. Express transport to APMC market is very reliable and packaging ensures zero transit damage!'
    },
    {
      id: 2,
      category: 'export',
      name: 'Global Agro Exports',
      location: 'Chennai Port',
      rating: 5,
      date: '1 week ago',
      comment: 'Sourcing bulk export-quality drumsticks has never been easier. Strict adherence to size grading and cold chain logistics. Highly professional team.'
    },
    {
      id: 3,
      category: 'mandi',
      name: 'Suresh Mandi',
      location: 'Mysuru',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Best wholesale market rate compared to local sources. Good communication, transparent weight calculations, and neat gunny/mesh packing.'
    },
    {
      id: 4,
      category: 'retail',
      name: 'Organic Fresh Mart',
      location: 'Coimbatore',
      rating: 4,
      date: '3 weeks ago',
      comment: 'Consistent pulp-to-skin ratio and long shelf life. Our retail customers specifically ask for these premium farm-fresh drumsticks.'
    },
    {
      id: 5,
      category: 'export',
      name: 'Vasanth Overseas',
      location: 'Tuticorin',
      rating: 5,
      date: '1 month ago',
      comment: 'Timely dispatch for our container shipments. Quality standards met international phytosanitary parameters seamlessly. Excellent partnership!'
    }
  ];

  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeTab);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#fcfdfc' }}>
      
      {/* 🌟 Testimonials Hero Section */}
      <section style={{
        backgroundColor: '#0b2b18',
        color: '#fff',
        padding: '65px 20px',
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
            TRUSTED BY HUNDREDS OF BUYERS
          </span>
          <h1 style={{ fontSize: '2.5rem', margin: '20px 0 15px 0', lineHeight: '1.2' }}>
            Client Success & Testimonials
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#d1d5db', lineHeight: '1.6' }}>
            Discover why APMC mandi owners, wholesale distributors, and international exporters rely on us for consistent, premium-grade bulk drumstick supplies.
          </p>
        </div>
      </section>

      {/* 🌟 Content Section */}
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          
          {/* Card 1: Filter Tabs & Testimonial Grid */}
          <div style={{
            backgroundColor: '#fff',
            padding: '35px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            borderLeft: '6px solid #ffb703'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '25px' }}>
              <h3 style={{ color: '#0b2b18', fontSize: '1.4rem', margin: 0 }}>
                ⭐ Verified Buyer Experiences
              </h3>

              {/* Filter Buttons */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[
                  { key: 'all', label: 'All Reviews' },
                  { key: 'mandi', label: 'APMC Mandis' },
                  { key: 'export', label: 'Exporters' },
                  { key: 'retail', label: 'Retail Marts' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    style={{
                      backgroundColor: activeTab === tab.key ? '#0b2b18' : '#f3f4f6',
                      color: activeTab === tab.key ? '#ffb703' : '#4b5563',
                      border: 'none',
                      padding: '8px 14px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Testimonials List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {filteredTestimonials.map((item) => (
                <div key={item.id} style={{ 
                  padding: '20px', 
                  borderRadius: '12px', 
                  backgroundColor: '#f9fafb', 
                  border: '1px solid #f3f4f6',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <strong style={{ color: '#0b2b18', fontSize: '1.05rem', display: 'block' }}>{item.name}</strong>
                      <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>📍 {item.location}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ color: '#ffb703', fontSize: '1.1rem', letterSpacing: '2px' }}>
                        {'★'.repeat(item.rating)}
                      </span>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: '#9ca3af' }}>{item.date}</span>
                    </div>
                  </div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.5', fontStyle: 'italic' }}>
                    "{item.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Overall Ratings Breakdown */}
          <div style={{
            backgroundColor: '#fff',
            padding: '35px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}>
            <h3 style={{ color: '#0b2b18', fontSize: '1.4rem', marginTop: 0, marginBottom: '20px' }}>
              📊 Quality Performance Summary
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
              <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#0b2b18', display: 'block' }}>4.9 / 5.0</span>
                <span style={{ color: '#ffb703', fontSize: '1.1rem' }}>★★★★★</span>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.85rem', color: '#6b7280' }}>Overall Satisfaction Score</p>
              </div>

              <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#137333', display: 'block' }}>98.4%</span>
                <span style={{ fontSize: '1.1rem', visibility: 'hidden' }}>-</span>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.85rem', color: '#6b7280' }}>On-Time Mandi Dispatch Rate</p>
              </div>

              <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#b45309', display: 'block' }}>500+ Tons</span>
                <span style={{ fontSize: '1.1rem', visibility: 'hidden' }}>-</span>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.85rem', color: '#6b7280' }}>Monthly Bulk Supply Volume</p>
              </div>
            </div>
          </div>

          {/* 🌟 4. CURRENT LIVE BUSINESS POSITION CHARTS (Pie Chart Model) */}
          <div style={{
            backgroundColor: '#fff',
            padding: '35px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            borderLeft: '6px solid #137333'
          }}>
            <h3 style={{ color: '#0b2b18', fontSize: '1.4rem', marginTop: 0, marginBottom: '8px' }}>
              📈 Current Live Business Position & Distribution
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '30px' }}>
              Real-time structural breakdown of our client segments and supply destination share across domestic mandis and international ports.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
              
              {/* CSS Visual Pie Chart Representation */}
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'conic-gradient(#0b2b18 0deg 216deg, #ffb703 216deg 310deg, #137333 310deg 360deg)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                {/* Center Hole for Donut Effect */}
                <div style={{
                  position: 'absolute',
                  top: '40px',
                  left: '40px',
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase' }}>Share</span>
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#0b2b18' }}>100%</span>
                </div>
              </div>

              {/* Chart Legend / Breakdown Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: '1', minWidth: '240px' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '14px', height: '14px', backgroundColor: '#0b2b18', borderRadius: '4px', display: 'inline-block' }}></span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 'bold', color: '#0b2b18' }}>APMC Wholesale Mandis</span>
                  </div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 'bold', color: '#4b5563' }}>60%</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '14px', height: '14px', backgroundColor: '#ffb703', borderRadius: '4px', display: 'inline-block' }}></span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 'bold', color: '#0b2b18' }}>International Exporters</span>
                  </div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 'bold', color: '#4b5563' }}>26%</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '14px', height: '14px', backgroundColor: '#137333', borderRadius: '4px', display: 'inline-block' }}></span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 'bold', color: '#0b2b18' }}>Direct Retail Chains</span>
                  </div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 'bold', color: '#4b5563' }}>14%</span>
                </div>

              </div>

            </div>
          </div>

          {/* 🌟 LAST CARD: Live Website Visitors Tracker */}
          <div style={{
            backgroundColor: '#0b2b18',
            color: '#fff',
            padding: '25px 35px',
            borderRadius: '16px',
            border: '2px solid #ffb703',
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Green Pulsing Indicator */}
              <span style={{
                height: '14px',
                width: '14px',
                backgroundColor: '#25d366',
                borderRadius: '50%',
                display: 'inline-block',
                boxShadow: '0 0 10px #25d366'
              }}></span>
              
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>
                  Live Website Activity
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#d1d5db' }}>
                  Real-time active visitors currently browsing our portal
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgba(255,183,3,0.15)',
              border: '1px solid #ffb703',
              padding: '10px 20px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#ffb703', display: 'block' }}>
                {liveViewers}
              </span>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.5px' }}>
                Active Viewers
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Testimonials;