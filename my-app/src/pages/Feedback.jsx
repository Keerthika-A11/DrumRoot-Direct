import React, { useState, useEffect } from 'react';

function Feedback() {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 🌟 Live Visitors Simulation (Frontend UI Demo)
  const [liveViewers, setLiveViewers] = useState(14);

  useEffect(() => {
    // நேரலையில் பார்வையாளர்கள் மாறுவது போன்ற உணர்வைத் தர சிறிய Random Interval
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
      setLiveViewers((prev) => Math.max(8, prev + change));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#fcfdfc' }}>
      
      {/* 🌟 Feedback Hero Section */}
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
            CUSTOMER REVIEWS & FEEDBACK
          </span>
          <h1 style={{ fontSize: '2.5rem', margin: '20px 0 15px 0', lineHeight: '1.2' }}>
            What Our Bulk Buyers Say
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#d1d5db', lineHeight: '1.6' }}>
            We value your feedback! Share your experience regarding our drumstick quality, supply speed, and pricing.
          </p>
        </div>
      </section>

      {/* 🌟 Content Section */}
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          
          {/* Card 1: Feedback Form */}
          <div style={{
            backgroundColor: '#fff',
            padding: '35px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            borderLeft: '6px solid #ffb703'
          }}>
            <h3 style={{ color: '#0b2b18', fontSize: '1.4rem', marginTop: 0, marginBottom: '10px' }}>
              ⭐ Share Your Feedback
            </h3>

            {isSubmitted ? (
              <div style={{
                backgroundColor: '#e6f4ea',
                border: '1px solid #34a853',
                color: '#0b2b18',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                margin: '20px 0'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#137333' }}>🎉 Thank You for Your Feedback!</h3>
                <p style={{ margin: '5px 0' }}>Your review helps us improve our bulk supply services.</p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', location: '', comments: '' });
                    setRating(5);
                  }}
                  style={{
                    backgroundColor: '#0b2b18',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    marginTop: '15px'
                  }}
                >
                  Submit Another Feedback
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                
                {/* Rating Input */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 'bold', color: '#0b2b18', marginBottom: '8px' }}>
                    1. Overall Rating *
                  </label>
                  <div style={{ display: 'flex', gap: '8px', cursor: 'pointer' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        style={{
                          fontSize: '1.8rem',
                          color: star <= (hoverRating || rating) ? '#ffb703' : '#e5e7eb',
                          transition: 'color 0.2s'
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 'bold', color: '#0b2b18', marginBottom: '6px' }}>
                    2. Your Name / Business Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Mandi Owner"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Location */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 'bold', color: '#0b2b18', marginBottom: '6px' }}>
                    3. Location / Mandi City *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Bengaluru / Mysuru / Salem"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Comments */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 'bold', color: '#0b2b18', marginBottom: '6px' }}>
                    4. Your Feedback / Review Comments *
                  </label>
                  <textarea
                    name="comments"
                    required
                    rows="4"
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="Write about freshness, packaging quality, on-time delivery..."
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#0b2b18',
                    color: '#ffb703',
                    border: 'none',
                    padding: '14px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  Submit Feedback ➔
                </button>
              </form>
            )}
          </div>

          {/* Card 2: Sample Customer Reviews */}
          <div style={{
            backgroundColor: '#fff',
            padding: '35px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}>
            <h3 style={{ color: '#0b2b18', fontSize: '1.4rem', marginTop: 0, marginBottom: '20px' }}>
              💬 Recent Buyer Reviews
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              
              <div style={{ padding: '15px', borderRadius: '10px', backgroundColor: '#f9fafb', border: '1px solid #f3f4f6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <strong style={{ color: '#0b2b18' }}>Karthik Traders (Bengaluru)</strong>
                  <span style={{ color: '#ffb703' }}>★★★★★</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563' }}>
                  "Daily fresh drumsticks received in excellent grading quality. Express transport to APMC market is very reliable!"
                </p>
              </div>

              <div style={{ padding: '15px', borderRadius: '10px', backgroundColor: '#f9fafb', border: '1px solid #f3f4f6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <strong style={{ color: '#0b2b18' }}>Suresh Mandi (Mysuru)</strong>
                  <span style={{ color: '#ffb703' }}>★★★★★</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563' }}>
                  "Best wholesale market rate compared to local sources. Good communication and neat packaging."
                </p>
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
            justify: 'space-between',
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

export default Feedback;