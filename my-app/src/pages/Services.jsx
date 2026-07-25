import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const serviceItems = [
    {
      icon: "📦",
      title: "Bulk Wholesale Supply (500 Kg - 5 Tons)",
      desc: "We specialize in consistent, reliable wholesale delivery ranging from 500 kilograms up to 5 tons per dispatch, perfectly tailored for regional mandis and vendors."
    },
    {
      icon: "⭐",
      title: "Export & Premium Grade Sorting",
      desc: "Every batch is meticulously hand-sorted and graded based on length, thickness, and fresh green texture to meet high market standards."
    },
    {
      icon: "🚚",
      title: "1-Day Express Transport Logistics",
      desc: "Fast and secure dispatch system ensuring farm-fresh drumsticks reach your destination within 24 hours, retaining maximum crispness and shelf life."
    },
    {
      icon: "🛡️",
      title: "Breathable Protective Packaging",
      desc: "Specially engineered ventilated bags and secure crating that prevent heat accumulation and transit damage during long-distance delivery."
    },
    {
      icon: "🤝",
      title: "Regular Vendor & Mandi Contracts",
      desc: "Reliable weekly or daily scheduled supply partnerships for local market merchants, vegetable distributors, and commercial caterers."
    },
    {
      icon: "📞",
      title: "Direct WhatsApp Rate Negotiations",
      desc: "Transparent, daily market pricing with direct communication channels via WhatsApp for quick order confirmations and custom quantity requests."
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#fcfdfc' }}>
      
      {/* 🌟 Services Hero Section */}
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
            PROFESSIONAL B2B SOLUTIONS
          </span>
          <h1 style={{ fontSize: '2.6rem', margin: '20px 0 15px 0', lineHeight: '1.2' }}>
            Our Wholesale Supply Services
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#d1d5db', lineHeight: '1.6' }}>
            Reliable daily fulfillment from 500 KGs to 5 Tons, optimized for wholesale markets, distributors, and commercial partners.
          </p>
        </div>
      </section>

      {/* 🌟 Services Grid Section */}
      <section style={{ padding: '70px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0b2b18', margin: '0 0 10px 0' }}>
            What We Offer Our Bulk Buyers
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem' }}>
            Designed specifically to handle commercial demands with zero quality drop.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {serviceItems.map((item, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              padding: '35px 30px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              transition: 'transform 0.2s ease',
              borderTop: '4px solid #25d366'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{item.icon}</div>
              <h3 style={{ color: '#0b2b18', fontSize: '1.3rem', marginBottom: '12px', marginTop: 0 }}>
                {item.title}
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Capacity Highlight Banner */}
      <section style={{ backgroundColor: '#f0f7f2', padding: '50px 20px', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ color: '#0b2b18', fontSize: '1.6rem', marginBottom: '15px' }}>
            Need Specific Quantities Between 500 Kg and 5 Tons?
          </h3>
          <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px' }}>
            Whether you need a mid-scale truck load of 500 KGs or heavy commercial dispatches up to 5 Tons, Appunu and our team ensure on-time delivery with flexible scheduling.
          </p>
          <Link to="/contact">
            <button style={{
              backgroundColor: '#0b2b18',
              color: '#ffb703',
              border: 'none',
              padding: '12px 30px',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '25px',
              cursor: 'pointer'
            }}>
              Discuss Your Order Requirement ➔
            </button>
          </Link>
        </div>
      </section>

      {/* 🌟 Call to Action */}
      <section style={{
        backgroundColor: '#071f11',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Ready to Partner for Bulk Supplies?</h2>
        <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto 30px auto' }}>
          Connect with us instantly on WhatsApp to check today's wholesale rates and book your slots.
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

export default Services;