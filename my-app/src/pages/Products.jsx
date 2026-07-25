import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const productsList = [
    {
      id: "karur-drumstick",
      icon: "🫛",
      tag: "FARM FRESH PODS",
      title: "Karur Hybrid Drumstick (Moringa Pods)",
      desc: "Harvested at peak maturity with high pulp density and seed ratio. Known for high heat tolerance during transport and superior taste profile.",
      specs: [
        { label: "Grade", value: "Super Fine Grade-A" },
        { label: "Average Length", value: "45 cm to 60 cm per pod" },
        { label: "Color & Texture", value: "Deep Emerald Green, Firm Outer Skin" },
        { label: "Ideal Use", value: "Supermarkets, Hotels, and Fresh Produce Outlets" },
        { label: "Packing Option", value: "Aerated Ventilated Plastic Crates" }
      ]
    },
    {
      id: "leaf-powder",
      icon: "🌿",
      tag: "NUTRIENT RICH",
      title: "Dehydrated Moringa Leaf Powder",
      desc: "Processed using low-temperature shade drying to retain maximum Chlorophyll, Vitamin C, and Protein levels without color loss.",
      specs: [
        { label: "Processing Method", value: "Solar/Shade Dehydrated" },
        { label: "Fineness", value: "80-100 Mesh Fine Particle" },
        { label: "Color", value: "Vibrant Bright Green (No Synthetic Color)" },
        { label: "Ideal Use", value: "Nutraceuticals, Dietary Supplements, Smoothies" },
        { label: "Packing Option", value: "Double Polypropylene Vacuum Packets" }
      ]
    },
    {
      id: "pkm1-seeds",
      icon: "🌱",
      tag: "SEED STOCK",
      title: "PKM-1 / PKM-2 Moringa Seeds",
      desc: "Specially selected seed stock harvested from disease-free mother trees. Sorted based on seed weight and shell thickness for high yield.",
      specs: [
        { label: "Purity Level", value: "99% Cleaned & Hand-Picked" },
        { label: "Oil Content", value: "35% - 40% Extraction Yield Potential" },
        { label: "Germination Rate", value: "Tested 85%+ Germination" },
        { label: "Ideal Use", value: "Commercial Cultivation & Cold-Press Oil Extraction" },
        { label: "Packing Option", value: "Moisture-Barricade Sealed Bags" }
      ]
    },
    {
      id: "dried-leaves",
      icon: "🍃",
      tag: "HERBAL RAW MATERIAL",
      title: "Sorted Whole Moringa Leaves",
      desc: "Stemless, clean, and washed leaves dried under controlled hygienic conditions to maintain natural aroma and essential bio-active compounds.",
      specs: [
        { label: "Form", value: "Whole Leaf (Stem Removed < 2%)" },
        { label: "Moisture Content", value: "Below 7.5% Moisture" },
        { label: "Storage Life", value: "12 Months (Under Dry Cool Conditions)" },
        { label: "Ideal Use", value: "Herbal Teas, Extracts, and Animal Feed Formulations" },
        { label: "Packing Option", value: "High-Density Compressed Bales" }
      ]
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#fcfdfc' }}>
      
      {/* 🌟 Fresh Products Header */}
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
            FRESH HARVEST CATALOG
          </span>
          <h1 style={{ fontSize: '2.5rem', margin: '20px 0 15px 0', lineHeight: '1.2' }}>
            Our Premium Moringa Product Line
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#d1d5db', lineHeight: '1.6' }}>
            Explore our range of fresh drumsticks, pure powders, and sorted seed stocks harvested directly from our farms.
          </p>
        </div>
      </section>

      {/* 🌟 Vertical Stacked Section */}
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          {productsList.map((product, index) => (
            <div key={product.id} style={{
              backgroundColor: '#fff',
              padding: '35px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              borderLeft: '6px solid #25d366',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              
              {/* Product Top Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '2.5rem' }}>{product.icon}</span>
                  <h3 style={{ color: '#0b2b18', fontSize: '1.4rem', margin: 0 }}>
                    {product.title}
                  </h3>
                </div>
                <span style={{
                  backgroundColor: '#fef3c7',
                  color: '#92400e',
                  padding: '5px 14px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px'
                }}>
                  {product.tag}
                </span>
              </div>

              {/* Product Description */}
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                {product.desc}
              </p>

              {/* Specifications Block - Full Width Vertical Container */}
              <div style={{
                backgroundColor: '#f9fafb',
                padding: '20px',
                borderRadius: '10px',
                borderTop: '2px solid #ffb703',
                marginTop: '10px'
              }}>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '0.88rem', color: '#0b2b18', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Key Technical Specifications:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {product.specs.map((spec, idx) => (
                    <li key={idx} style={{ fontSize: '0.9rem', color: '#374151', lineHeight: '1.4' }}>
                      <strong style={{ color: '#0b2b18' }}>• {spec.label}:</strong> {spec.value}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Direct Inquiries Banner */}
      <section style={{
        backgroundColor: '#071f11',
        color: '#fff',
        padding: '50px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Need Customized Specifications or Packaging?</h2>
        <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto 25px auto', fontSize: '0.95rem' }}>
          Get in touch with our farm team to request specific grading, custom crate packing, or batch samples.
        </p>
        <Link to="/contact">
          <button style={{
            backgroundColor: '#ffb703',
            color: '#0b2b18',
            border: 'none',
            padding: '12px 32px',
            fontSize: '0.95rem',
            fontWeight: 'bold',
            borderRadius: '25px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(255,183,3,0.3)'
          }}>
            Contact Farm Team ➔
          </button>
        </Link>
      </section>

    </div>
  );
}

export default Products;