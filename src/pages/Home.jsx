import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useIsMobile from '../useIsMobile'

function Home() {
  const isMobile = useIsMobile()

  return (
    <div style={{ background: '#F5F0E8' }}>

      {/* Hero Section */}
      <div style={{
        background: '#F5F0E8', minHeight: '100vh',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
        padding: isMobile ? '100px 24px 60px' : '120px 64px 80px',
      }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '48px' : '80px',
            alignItems: 'center',
          }}>

            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '24px' }}
              >Trusted Real Estate Across India</motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: isMobile ? '52px' : 'clamp(52px, 6vw, 88px)',
                  fontWeight: '300', lineHeight: '0.95',
                  letterSpacing: '-0.02em', color: '#1A1A18',
                  marginBottom: '28px',
                }}
              >
                Discover Spaces<br />
                That <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Inspire</span><br />
                The Life You Want
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                style={{ fontSize: '15px', color: '#6B6B60', fontWeight: '300', lineHeight: '1.8', maxWidth: '380px', marginBottom: '48px' }}
              >
                From Mumbai's skyline to Bangalore's green avenues — we help you find a home that truly feels like yours.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  background: '#FDFCF9',
                  border: '1px solid rgba(201,168,76,0.3)',
                  boxShadow: '0 20px 60px rgba(26,26,24,0.08)',
                  maxWidth: '540px',
                }}
              >
                <div style={{ padding: '18px 24px', flex: 1, borderBottom: isMobile ? '1px solid rgba(201,168,76,0.2)' : 'none', borderRight: isMobile ? 'none' : '1px solid rgba(201,168,76,0.2)' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '6px' }}>City</div>
                  <input type="text" placeholder="Mumbai, Delhi, Bangalore..." style={{ border: 'none', background: 'transparent', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#1A1A18', outline: 'none', width: '100%', fontWeight: '300' }} />
                </div>
                <div style={{ padding: '18px 20px', borderBottom: isMobile ? '1px solid rgba(201,168,76,0.2)' : 'none', borderRight: isMobile ? 'none' : '1px solid rgba(201,168,76,0.2)' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '6px' }}>Type</div>
                  <select style={{ border: 'none', background: 'transparent', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#1A1A18', outline: 'none', fontWeight: '300', width: '100%' }}>
                    <option>All</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Estate</option>
                    <option>Townhouse</option>
                  </select>
                </div>
                <Link
                  to="/listings"
                  style={{
                    background: '#C9A84C', border: 'none',
                    padding: isMobile ? '16px' : '0 28px',
                    color: '#FDFCF9', fontSize: '11px',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    fontWeight: '500', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', transition: 'background 0.3s',
                  }}
                >Search</Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                style={{ display: 'flex', gap: isMobile ? '32px' : '48px', marginTop: '56px', flexWrap: 'wrap' }}
              >
                {[
                  { num: '1.8K+', label: 'Properties Listed' },
                  { num: '6', label: 'Cities Covered' },
                  { num: '96%', label: 'Happy Families' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: '300', color: '#1A1A18', lineHeight: 1 }}>{stat.num}</div>
                    <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6B60', marginTop: '4px' }}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Featured Card (hidden on mobile) */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div style={{ background: '#FDFCF9', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 30px 80px rgba(26,26,24,0.12)', overflow: 'hidden' }}>
                  <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                    <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" alt="Featured Property" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '16px', left: '16px', background: '#1A1A18', color: '#E8D5A3', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '6px 14px' }}>Featured</div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: '300', color: '#1A1A18' }}>₹4.5 Cr</div>
                    <div style={{ fontSize: '13px', color: '#6B6B60', marginTop: '4px', fontWeight: '300' }}>Oberoi Sky Heights, Worli Mumbai</div>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
                      {['4 Beds', '5 Baths', '4,200 sqft'].map((item, i) => (
                        <div key={i} style={{ fontSize: '12px', color: '#6B6B60' }}>{item}</div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: '#1A1A18', padding: '20px 24px', borderTop: '1px solid rgba(201,168,76,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C' }}>New Listing</div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '300', color: '#F5F0E8', marginTop: '2px' }}>₹1.8 Cr</div>
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(245,240,232,0.5)' }}>Koregaon Park, Pune</div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </div>

      {/* Why PropSphere */}
      <div style={{ background: '#FDFCF9', padding: isMobile ? '60px 24px' : '100px 64px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9A84C' }}>Why PropSphere</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: isMobile ? '36px' : 'clamp(36px, 4vw, 56px)', fontWeight: '300', color: '#1A1A18', marginBottom: '48px', lineHeight: 1.1 }}>Built for India.<br />Built for You.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '🏙️', num: '01', title: 'Pan India Coverage', desc: 'From metro cities to emerging neighbourhoods — we cover properties across every major Indian city.' },
              { icon: '💰', num: '02', title: 'Best Price Guarantee', desc: 'We negotiate on your behalf to ensure you always get the best value for your investment.' },
              { icon: '🤝', num: '03', title: 'Dedicated Support', desc: 'Your personal advisor guides you from the first visit to the final registration — always by your side.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                style={{ background: '#F5F0E8', padding: '40px 32px', border: '1px solid rgba(201,168,76,0.15)' }}
              >
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '48px', fontWeight: '300', color: '#C9A84C', opacity: 0.4, lineHeight: 1, marginBottom: '16px' }}>{item.num}</div>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '400', color: '#1A1A18', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: '#6B6B60', fontWeight: '300', lineHeight: '1.8' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home