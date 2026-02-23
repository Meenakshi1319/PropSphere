import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Listings from './pages/Listings'
import PropertyDetail from './pages/PropertyDetail'
import Contact from './pages/Contact'
import AddProperty from './pages/AddProperty'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>

        <footer style={{ background: '#1A1A18', borderTop: '1px solid rgba(201,168,76,0.1)' }}>

          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 64px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px' }}>

            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '300', letterSpacing: '0.3em', color: '#F5F0E8', marginBottom: '16px' }}>
                PROP<span style={{ color: '#C9A84C' }}>SPHERE</span>
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.4)', fontWeight: '300', lineHeight: '1.8', maxWidth: '260px', marginBottom: '24px' }}>
                Discover spaces that inspire the life you want. Premium properties across India's finest cities.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[{ icon: '📘', label: 'Facebook' }, { icon: '📸', label: 'Instagram' }, { icon: '💼', label: 'LinkedIn' }].map((s, i) => (
                  <a key={i} href="#" title={s.label}
                    style={{ width: '36px', height: '36px', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', textDecoration: 'none', transition: 'border-color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#C9A84C'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'}
                  >{s.icon}</a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '20px' }}>Quick Links</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[{ label: 'Home', path: '/' }, { label: 'Listings', path: '/listings' }, { label: 'List Property', path: '/add-property' }, { label: 'Contact', path: '/contact' }].map((link, i) => (
                  <a key={i} href={link.path}
                    style={{ fontSize: '13px', color: 'rgba(245,240,232,0.4)', textDecoration: 'none', fontWeight: '300', transition: 'color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.4)'}
                  >{link.label}</a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '20px' }}>Cities</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'].map((city, i) => (
                  <a key={i} href="/listings"
                    style={{ fontSize: '13px', color: 'rgba(245,240,232,0.4)', textDecoration: 'none', fontWeight: '300', transition: 'color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.4)'}
                  >{city}</a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '20px' }}>Contact Us</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: '📍', value: 'Banjara Hills, Hyderabad' },
                  { icon: '📞', value: '+91 98765 43210' },
                  { icon: '📧', value: 'hello@propsphere.in' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '14px', marginTop: '1px' }}>{item.icon}</span>
                    <span style={{ fontSize: '13px', color: 'rgba(245,240,232,0.4)', fontWeight: '300', lineHeight: '1.6' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', padding: '20px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '12px', color: 'rgba(245,240,232,0.25)' }}>
              © 2025 PropSphere. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '32px' }}>
              {['Privacy Policy', 'Terms of Use', 'Careers'].map((link, i) => (
                <a key={i} href="#"
                  style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.25)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.25)'}
                >{link}</a>
              ))}
            </div>
          </div>

        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App