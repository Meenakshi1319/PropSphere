import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import useIsMobile from '../useIsMobile'

function Navbar() {
  const location = useLocation()
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { path: '/', label: 'Home' },
    { path: '/listings', label: 'Listings' },
    { path: '/add-property', label: 'List Property' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav style={{
      background: 'rgba(245,240,232,0.92)',
      borderBottom: '1px solid rgba(201,168,76,0.2)',
      backdropFilter: 'blur(20px)',
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: isMobile ? '16px 24px' : '20px 64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: isMobile ? '22px' : '26px',
          fontWeight: '300', letterSpacing: '0.3em',
          color: '#1A1A18', textDecoration: 'none',
        }}>
          PROP<span style={{ color: '#C9A84C' }}>SPHERE</span>
        </Link>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '40px' }}>
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontSize: '11px', letterSpacing: '0.15em',
                  textTransform: 'uppercase', fontWeight: '400',
                  color: location.pathname === link.path ? '#C9A84C' : '#6B6B60',
                  textDecoration: 'none',
                  borderBottom: location.pathname === link.path
                    ? '1px solid #C9A84C' : '1px solid transparent',
                  paddingBottom: '2px', transition: 'color 0.3s',
                }}
              >{link.label}</Link>
            ))}
          </div>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <Link
            to="/listings"
            style={{
              fontSize: '11px', letterSpacing: '0.15em',
              textTransform: 'uppercase', fontWeight: '500',
              color: '#1A1A18', border: '1px solid #C9A84C',
              padding: '10px 24px', textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#C9A84C'
              e.currentTarget.style.color = '#FDFCF9'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#1A1A18'
            }}
          >Browse Properties</Link>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none',
              cursor: 'pointer', fontSize: '24px', color: '#1A1A18',
            }}
          >{menuOpen ? '✕' : '☰'}</button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          background: '#FAF7F2',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          padding: '16px 24px',
          display: 'flex', flexDirection: 'column', gap: '16px',
        }}>
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '13px', letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: location.pathname === link.path ? '#C9A84C' : '#6B6B60',
                textDecoration: 'none', fontWeight: '500',
                padding: '8px 0',
                borderBottom: '1px solid rgba(201,168,76,0.1)',
              }}
            >{link.label}</Link>
          ))}
          <Link
            to="/listings"
            onClick={() => setMenuOpen(false)}
            style={{
              background: '#C9A84C', color: '#FDFCF9',
              textAlign: 'center', padding: '12px',
              textDecoration: 'none', fontSize: '11px',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: '500', marginTop: '8px',
            }}
          >Browse Properties</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar