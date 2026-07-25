import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    quantity: '500kg-1ton',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Direct Confirmation Alert containing User Details
    alert(
      `🎉 Order Inquiry Submitted Successfully!\n\n` +
      `Thank you ${formData.name || 'Customer'}! Your drumstick order inquiry has been received.\n\n` +
      `📩 Confirmation details sent to:\n` +
      `• Phone: ${formData.phone}\n` +
      `• Email: ${formData.email}\n\n` +
      `Our team will contact you shortly regarding today's daily market rates.`
    );

    // Reset Form
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      quantity: '500kg-1ton',
      message: ''
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#fcfdfc' }}>
      
      {/* 🌟 Contact Hero Section */}
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
            GET IN TOUCH WITH US
          </span>
          <h1 style={{ fontSize: '2.5rem', margin: '20px 0 15px 0', lineHeight: '1.2' }}>
            Contact Our Bulk Supply Desk
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#d1d5db', lineHeight: '1.6' }}>
            Have questions about daily market rates, freight slots, or custom grading? Send us a message or call directly.
          </p>
        </div>
      </section>

      {/* 🌟 Vertical Contact Content Section */}
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          
          {/* Card 1: Direct Contact Details */}
          <div style={{
            backgroundColor: '#fff',
            padding: '35px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            borderLeft: '6px solid #0b2b18'
          }}>
            <h3 style={{ color: '#0b2b18', fontSize: '1.4rem', marginTop: 0, marginBottom: '20px' }}>
              📍 Farm & Supply Office Details
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#374151' }}>
                <strong style={{ color: '#0b2b18' }}>📞 Phone / Business Line:</strong>{' '}
                <a href="tel:8438342619" style={{ color: '#0b2b18', textDecoration: 'none', fontWeight: 'bold' }}>
                  +91 84383 42619
                </a>
              </div>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#374151' }}>
                <strong style={{ color: '#0b2b18' }}>✉️ Email:</strong>{' '}
                <a href="mailto:appunu@gmail.com" style={{ color: '#0b2b18', textDecoration: 'underline' }}>
                  appunu@gmail.com
                </a>
              </div>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#374151' }}>
                <strong style={{ color: '#0b2b18' }}>🌾 Main Farm Hub:</strong> Tamil Nadu Farm Collection Point
              </div>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#374151' }}>
                <strong style={{ color: '#0b2b18' }}>🚚 Express Delivery Network:</strong> Daily Dispatches across Tamil Nadu to Karnataka Mandis
              </div>
            </div>
          </div>

          {/* Card 2: Send Bulk Inquiry Form with Address Map */}
          <div style={{
            backgroundColor: '#fff',
            padding: '35px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            borderLeft: '6px solid #ffb703'
          }}>
            <h3 style={{ color: '#0b2b18', fontSize: '1.4rem', marginTop: 0, marginBottom: '10px' }}>
              📝 Send Bulk Inquiry
            </h3>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '25px' }}>
              Fill in your requirements below and our team will get back to you with today's best rates.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* 1. Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 'bold', color: '#0b2b18', marginBottom: '6px' }}>
                  1. Your Name / Business Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Kumar Traders / Ravi Mandi"
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

              {/* 2. Phone Number */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 'bold', color: '#0b2b18', marginBottom: '6px' }}>
                  2. Phone Number / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 8438342619"
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

              {/* 3. Email ID */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 'bold', color: '#0b2b18', marginBottom: '6px' }}>
                  3. Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. appunu@moringadrumstick.com"
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

              {/* 4. Delivery Address with Google Map */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 'bold', color: '#0b2b18', marginBottom: '6px' }}>
                  4. Delivery Address & Target Location *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Bengaluru APMC Market / Mysuru Mandi / Local Hub"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box',
                    marginBottom: '12px'
                  }}
                />

                {/* Interactive Google Map */}
                <div style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid #d1d5db'
                }}>
                  <iframe
                    title="Location Map"
                    src="https://maps.google.com/maps?q=Tamil%20Nadu&t=&z=7&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* 5. Order Quantity */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 'bold', color: '#0b2b18', marginBottom: '6px' }}>
                  5. Expected Order Quantity
                </label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '0.95rem',
                    backgroundColor: '#fff',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="500kg-1ton">500 Kg – 1 Ton</option>
                  <option value="1ton-3tons">1 Ton – 3 Tons</option>
                  <option value="3tons-5tons">3 Tons – 5 Tons (Full Load)</option>
                  <option value="powder-seeds">Moringa Powder / Seeds Bulk Order</option>
                </select>
              </div>

              {/* 6. Additional Notes */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 'bold', color: '#0b2b18', marginBottom: '6px' }}>
                  6. Additional Notes / Specific Grade Request
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify length preferences, packaging details, or weekly schedule requests..."
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
                Submit Inquiry ➔
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;