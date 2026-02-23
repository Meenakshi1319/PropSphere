import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import properties from '../data/properties.json'

function PropertyDetail() {
  const { id } = useParams()
  const property = properties.find(p => p.id === parseInt(id))

  if (!property) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        background: '#F5F0E8',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '60px', marginBottom: '16px' }}>🏚️</div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '32px', fontWeight: '300',
            color: '#1A1A18', marginBottom: '24px',
          }}>Property not found</h2>
          <Link
            to="/listings"
            style={{
              background: '#C9A84C', color: '#FDFCF9',
              padding: '12px 32px', textDecoration: 'none',
              fontSize: '11px', letterSpacing: '0.2em',
              textTransform: 'uppercase', fontWeight: '500',
            }}
          >Back to Listings</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh', paddingTop: '90px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>

        {/* Back Button */}
        <Link
          to="/listings"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#C9A84C', textDecoration: 'none',
            fontSize: '12px', letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: '32px',
            fontWeight: '500',
          }}
        >
          ← Back to Listings
        </Link>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            height: '420px', overflow: 'hidden',
            position: 'relative', marginBottom: '40px',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <img
            src={property.image}
            alt={property.name}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
            }}
          />
          {/* Overlay tag */}
          <div style={{
            position: 'absolute', top: '20px', left: '20px',
            background: '#1A1A18', color: '#E8D5A3',
            fontSize: '10px', letterSpacing: '0.2em',
            textTransform: 'uppercase', padding: '6px 16px',
          }}>{property.type}</div>
        </motion.div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '2fr 1fr', gap: '32px' }}>

          {/* Left — Main Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Title Block */}
            <div style={{
              background: '#FDFCF9',
              border: '1px solid rgba(201,168,76,0.15)',
              padding: '36px', marginBottom: '24px',
            }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '48px', fontWeight: '300', color: '#1A1A18',
              }}>{property.priceLabel}</div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '28px', fontWeight: '400',
                color: '#1A1A18', marginTop: '8px',
              }}>{property.name}</div>
              <div style={{
                fontSize: '13px', color: '#6B6B60',
                fontWeight: '300', marginTop: '6px',
              }}>📍 {property.location}</div>
            </div>

            {/* Details Block */}
            <div style={{
              background: '#FDFCF9',
              border: '1px solid rgba(201,168,76,0.15)',
              padding: '36px', marginBottom: '24px',
            }}>
              <div style={{
                fontSize: '11px', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: '#C9A84C',
                marginBottom: '24px',
              }}>Property Details</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {[
                  { icon: '🛏', label: 'Bedrooms', value: property.beds },
                  { icon: '🚿', label: 'Bathrooms', value: property.baths },
                  { icon: '📐', label: 'Square Feet', value: property.sqft },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: '#F5F0E8',
                    border: '1px solid rgba(201,168,76,0.15)',
                    padding: '24px', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '28px', fontWeight: '300', color: '#1A1A18',
                    }}>{item.value}</div>
                    <div style={{
                      fontSize: '10px', letterSpacing: '0.15em',
                      textTransform: 'uppercase', color: '#6B6B60', marginTop: '4px',
                    }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Block */}
            <div style={{
              background: '#FDFCF9',
              border: '1px solid rgba(201,168,76,0.15)',
              padding: '36px',
            }}>
              <div style={{
                fontSize: '11px', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: '#C9A84C',
                marginBottom: '16px',
              }}>About This Property</div>
              <p style={{
                fontSize: '14px', color: '#6B6B60',
                fontWeight: '300', lineHeight: '1.9',
              }}>{property.description}</p>
            </div>
          </motion.div>

          {/* Right — Agent Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div style={{
              background: '#FDFCF9',
              border: '1px solid rgba(201,168,76,0.15)',
              padding: '32px', position: 'sticky', top: '100px',
            }}>
              {/* Agent */}
              <div style={{
                fontSize: '11px', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: '#C9A84C',
                marginBottom: '20px',
              }}>Your Agent</div>

              <div style={{
                display: 'flex', alignItems: 'center',
                gap: '12px', marginBottom: '24px',
                paddingBottom: '24px',
                borderBottom: '1px solid rgba(201,168,76,0.15)',
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: '#E8D5A3', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px', fontWeight: '400', color: '#8B6F47',
                  flexShrink: 0,
                }}>{property.agent[0]}</div>
                <div>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '20px', fontWeight: '400', color: '#1A1A18',
                  }}>{property.agent}</div>
                  <div style={{
                    fontSize: '11px', color: '#C9A84C',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>Senior Advisor</div>
                </div>
              </div>

              {/* Contact Form */}
              <form
                onSubmit={e => {
                  e.preventDefault()
                  alert(`Message sent to ${property.agent}! They will contact you shortly.`)
                  e.target.reset()
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                {['Your Name', 'Your Email', 'Your Phone'].map((placeholder, i) => (
                  <input
                    key={i}
                    type={i === 1 ? 'email' : i === 2 ? 'tel' : 'text'}
                    placeholder={placeholder}
                    required={i < 2}
                    style={{
                      border: '1px solid rgba(201,168,76,0.2)',
                      background: '#F5F0E8', padding: '12px 16px',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px', color: '#1A1A18',
                      outline: 'none', fontWeight: '300',
                    }}
                  />
                ))}
                <textarea
                  placeholder={`I'm interested in ${property.name}...`}
                  rows={4}
                  style={{
                    border: '1px solid rgba(201,168,76,0.2)',
                    background: '#F5F0E8', padding: '12px 16px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px', color: '#1A1A18',
                    outline: 'none', resize: 'none', fontWeight: '300',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#1A1A18', color: '#E8D5A3',
                    border: 'none', padding: '14px',
                    fontSize: '11px', letterSpacing: '0.2em',
                    textTransform: 'uppercase', cursor: 'pointer',
                    fontFamily: 'DM Sans, sans-serif', fontWeight: '500',
                    transition: 'background 0.3s', marginTop: '4px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#C9A84C'}
                  onMouseLeave={e => e.currentTarget.style.background = '#1A1A18'}
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default PropertyDetail