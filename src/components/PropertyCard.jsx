import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function PropertyCard({ property }) {
  const gradients = [
    'linear-gradient(135deg, #D4C4A8 0%, #B8A688 50%, #C9A84C 100%)',
    'linear-gradient(135deg, #C4B8A4 0%, #A89070 100%)',
    'linear-gradient(135deg, #D4BF98 0%, #C9A84C 100%)',
    'linear-gradient(135deg, #B8C4C8 0%, #8BA8B8 100%)',
    'linear-gradient(135deg, #C4C9B0 0%, #A0A882 100%)',
    'linear-gradient(135deg, #C9C4D4 0%, #8B82A4 100%)',
  ]
  const icons = ['🏙️', '🏛️', '🌿', '🏠', '🌊', '🏡']
  const gradient = gradients[property.id % gradients.length]
  const icon = icons[property.id % icons.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        background: '#FDFCF9',
        border: '1px solid rgba(201,168,76,0.15)',
        overflow: 'hidden',
        transition: 'transform 0.4s, box-shadow 0.4s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(26,26,24,0.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
<div style={{
  height: '220px', position: 'relative', overflow: 'hidden',
}}>
  <img
    src={property.image}
    alt={property.name}
    style={{
      width: '100%', height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s cubic-bezier(.23,1,.32,1)',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
  />
        {/* Tag */}
        <div style={{
          position: 'absolute', top: '16px', left: '16px',
          background: '#1A1A18', color: '#E8D5A3',
          fontSize: '9px', letterSpacing: '0.2em',
          textTransform: 'uppercase', padding: '5px 12px',
        }}>{property.type}</div>
      </div>

      {/* Body */}
      <div style={{ padding: '24px' }}>

        {/* Price */}
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '28px', fontWeight: '300', color: '#1A1A18',
        }}>{property.priceLabel}</div>

        {/* Name */}
        <div style={{
          fontSize: '15px', fontWeight: '400',
          color: '#1A1A18', marginTop: '4px',
          fontFamily: 'Cormorant Garamond, serif',
        }}>{property.name}</div>

        {/* Location */}
        <div style={{
          fontSize: '12px', color: '#6B6B60',
          fontWeight: '300', marginTop: '4px',
        }}>📍 {property.location}</div>

        {/* Details */}
        <div style={{
          display: 'flex', gap: '20px', marginTop: '16px',
          paddingTop: '16px', borderTop: '1px solid rgba(201,168,76,0.15)',
        }}>
          {[
            { icon: '🛏', val: `${property.beds} Beds` },
            { icon: '🚿', val: `${property.baths} Baths` },
            { icon: '📐', val: `${property.sqft} sqft` },
          ].map((item, i) => (
            <div key={i} style={{ fontSize: '12px', color: '#6B6B60' }}>
              {item.icon} {item.val}
            </div>
          ))}
        </div>

        {/* Agent + Button */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginTop: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: '#E8D5A3', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '16px', fontWeight: '500', color: '#8B6F47',
            }}>{property.agent[0]}</div>
            <div style={{ fontSize: '12px', color: '#6B6B60' }}>{property.agent}</div>
          </div>

          <Link
            to={`/property/${property.id}`}
            style={{
              fontSize: '10px', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#C9A84C',
              textDecoration: 'none', fontWeight: '500',
              transition: 'letter-spacing 0.3s',
              border: '1px solid rgba(201,168,76,0.4)',
              padding: '8px 16px',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#C9A84C'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            View →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PropertyCard