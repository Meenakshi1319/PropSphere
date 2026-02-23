import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function AddProperty() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', location: '', price: '',
    type: 'Villa', beds: '', baths: '', sqft: '',
    description: '', agent: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    border: '1px solid rgba(201,168,76,0.2)',
    background: '#F5F0E8', padding: '12px 16px',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '13px', color: '#1A1A18',
    outline: 'none', fontWeight: '300',
  }

  const labelStyle = {
    fontSize: '10px', letterSpacing: '0.15em',
    textTransform: 'uppercase', color: '#6B6B60', marginBottom: '6px',
    display: 'block',
  }

  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: window.innerWidth < 768 ? '0 24px' : '0 48px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{
              fontSize: '11px', letterSpacing: '0.4em',
              textTransform: 'uppercase', color: '#C9A84C',
            }}>List With Us</span>
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: '300', color: '#1A1A18', marginBottom: '12px',
          }}>List Your Property</h1>
          <p style={{
            fontSize: '14px', color: '#6B6B60',
            fontWeight: '300', lineHeight: '1.8',
          }}>
            Fill in the details below and we'll get your property listed within 24 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              background: '#FDFCF9',
              border: '1px solid rgba(201,168,76,0.15)',
              padding: '80px 40px', textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '36px', fontWeight: '300',
              color: '#1A1A18', marginBottom: '12px',
            }}>Property Submitted!</h3>
            <p style={{
              fontSize: '14px', color: '#6B6B60',
              fontWeight: '300', lineHeight: '1.8',
              maxWidth: '400px', margin: '0 auto 40px',
            }}>
              Thank you! Your property has been submitted for review.
              Our team will contact you within 24 hours to confirm your listing.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(201,168,76,0.4)',
                  color: '#C9A84C', padding: '12px 32px',
                  cursor: 'pointer', fontSize: '11px',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: '500',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#C9A84C'
                  e.currentTarget.style.color = '#FDFCF9'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#C9A84C'
                }}
              >Add Another</button>
              <button
                onClick={() => navigate('/listings')}
                style={{
                  background: '#1A1A18', color: '#E8D5A3',
                  border: 'none', padding: '12px 32px',
                  cursor: 'pointer', fontSize: '11px',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: '500',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.background = '#1A1A18'}
              >View Listings</button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: '#FDFCF9',
              border: '1px solid rgba(201,168,76,0.15)',
              padding: '48px',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              <div>
                <label style={labelStyle}>Property Name *</label>
                <input
                  type="text" name="name" required
                  value={form.name} onChange={handleChange}
                  placeholder="e.g. Sunset Heights"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Location *</label>
                <input
                  type="text" name="location" required
                  value={form.location} onChange={handleChange}
                  placeholder="e.g. Banjara Hills, Hyderabad"
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Price (₹) *</label>
                  <input
                    type="number" name="price" required
                    value={form.price} onChange={handleChange}
                    placeholder="e.g. 15000000"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Property Type *</label>
                  <select
                    name="type" value={form.type} onChange={handleChange}
                    style={{ ...inputStyle, color: '#6B6B60' }}
                  >
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Estate</option>
                    <option>Townhouse</option>
                    <option>Apartment</option>
                    <option>House</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                {[
                  { label: 'Bedrooms *', name: 'beds', placeholder: 'e.g. 4' },
                  { label: 'Bathrooms *', name: 'baths', placeholder: 'e.g. 3' },
                  { label: 'Square Feet *', name: 'sqft', placeholder: 'e.g. 3500' },
                ].map((field, i) => (
                  <div key={i}>
                    <label style={labelStyle}>{field.label}</label>
                    <input
                      type="number" name={field.name} required
                      value={form[field.name]} onChange={handleChange}
                      placeholder={field.placeholder}
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label style={labelStyle}>Your Name (Agent / Owner) *</label>
                <input
                  type="text" name="agent" required
                  value={form.agent} onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Description *</label>
                <textarea
                  name="description" required rows={4}
                  value={form.description} onChange={handleChange}
                  placeholder="Describe your property..."
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: '#1A1A18', color: '#E8D5A3',
                  border: 'none', padding: '16px',
                  fontSize: '11px', letterSpacing: '0.2em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: '500',
                  transition: 'background 0.3s', marginTop: '8px',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.background = '#1A1A18'}
              >Submit Property</button>

            </form>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AddProperty