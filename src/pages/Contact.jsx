import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9A84C' }}>
              Get In Touch
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: '300', color: '#1A1A18', marginBottom: '12px',
          }}>Let's Find Your<br />Perfect Space</h1>
          <p style={{ fontSize: '14px', color: '#6B6B60', fontWeight: '300', maxWidth: '400px', lineHeight: '1.8' }}>
            Have a question about a property? Want to list your home?
            Our team is ready to help you every step of the way.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', gap: '40px' }}>

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Info Cards */}
            {[
              { icon: '📍', title: 'Address', value: 'PropSphere HQ, Banjara Hills, Hyderabad' },
              { icon: '📞', title: 'Phone', value: '+91 98765 43210' },
              { icon: '📧', title: 'Email', value: 'hello@propsphere.in' },
              { icon: '🕐', title: 'Working Hours', value: 'Mon - Sat, 9AM to 7PM IST' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: '#FDFCF9',
                  border: '1px solid rgba(201,168,76,0.15)',
                  padding: '24px 28px',
                  display: 'flex', alignItems: 'center', gap: '20px',
                  transition: 'box-shadow 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 30px rgba(26,26,24,0.08)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ fontSize: '28px' }}>{item.icon}</div>
                <div>
                  <div style={{
                    fontSize: '10px', letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: '#C9A84C', marginBottom: '4px',
                  }}>{item.title}</div>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '18px', fontWeight: '400', color: '#1A1A18',
                  }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* Agents */}
            <div style={{
              background: '#FDFCF9',
              border: '1px solid rgba(201,168,76,0.15)',
              padding: '28px',
            }}>
              <div style={{
                fontSize: '11px', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: '#C9A84C', marginBottom: '20px',
              }}>Our Top Agents</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'Arjun Mehta', role: 'Senior Advisor', city: 'Mumbai' },
                  { name: 'Priya Sharma', role: 'Luxury Specialist', city: 'Delhi' },
                  { name: 'Sneha Reddy', role: 'Property Consultant', city: 'Hyderabad' },
                ].map((agent, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    paddingBottom: i < 2 ? '16px' : '0',
                    borderBottom: i < 2 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      background: '#E8D5A3', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '18px', color: '#8B6F47', flexShrink: 0,
                    }}>{agent.name[0]}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '17px', fontWeight: '400', color: '#1A1A18',
                      }}>{agent.name}</div>
                      <div style={{ fontSize: '11px', color: '#6B6B60' }}>{agent.role}</div>
                    </div>
                    <div style={{
                      fontSize: '10px', letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: '#C9A84C',
                    }}>{agent.city}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: '#FDFCF9',
              border: '1px solid rgba(201,168,76,0.15)',
              padding: '40px',
            }}
          >
            {submitted ? (
              <div style={{
                height: '100%', display: 'flex',
                flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', textAlign: 'center', padding: '60px 0',
              }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>✉️</div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '32px', fontWeight: '300',
                  color: '#1A1A18', marginBottom: '12px',
                }}>Message Sent!</h3>
                <p style={{
                  fontSize: '13px', color: '#6B6B60',
                  fontWeight: '300', lineHeight: '1.8', marginBottom: '32px',
                }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: 'transparent',
                    border: '1px solid #C9A84C', color: '#C9A84C',
                    padding: '12px 32px', cursor: 'pointer',
                    fontSize: '11px', letterSpacing: '0.2em',
                    textTransform: 'uppercase',
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
                >Send Another Message</button>
              </div>
            ) : (
              <>
                <div style={{
                  fontSize: '11px', letterSpacing: '0.3em',
                  textTransform: 'uppercase', color: '#C9A84C', marginBottom: '24px',
                }}>Send Us a Message</div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {['First Name', 'Last Name'].map((placeholder, i) => (
                      <div key={i}>
                        <div style={{
                          fontSize: '10px', letterSpacing: '0.15em',
                          textTransform: 'uppercase', color: '#6B6B60', marginBottom: '6px',
                        }}>{placeholder}</div>
                        <input
                          type="text" required
                          placeholder={i === 0 ? 'Rahul' : 'Sharma'}
                          style={{
                            width: '100%',
                            border: '1px solid rgba(201,168,76,0.2)',
                            background: '#F5F0E8', padding: '12px 16px',
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '13px', color: '#1A1A18',
                            outline: 'none', fontWeight: '300',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {[
                    { label: 'Email', type: 'email', placeholder: 'rahul@example.com' },
                    { label: 'Phone', type: 'tel', placeholder: '+91 98765 43210' },
                  ].map((field, i) => (
                    <div key={i}>
                      <div style={{
                        fontSize: '10px', letterSpacing: '0.15em',
                        textTransform: 'uppercase', color: '#6B6B60', marginBottom: '6px',
                      }}>{field.label}</div>
                      <input
                        type={field.type} required
                        placeholder={field.placeholder}
                        style={{
                          width: '100%',
                          border: '1px solid rgba(201,168,76,0.2)',
                          background: '#F5F0E8', padding: '12px 16px',
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '13px', color: '#1A1A18',
                          outline: 'none', fontWeight: '300',
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <div style={{
                      fontSize: '10px', letterSpacing: '0.15em',
                      textTransform: 'uppercase', color: '#6B6B60', marginBottom: '6px',
                    }}>I'm Interested In</div>
                    <select style={{
                      width: '100%',
                      border: '1px solid rgba(201,168,76,0.2)',
                      background: '#F5F0E8', padding: '12px 16px',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px', color: '#6B6B60',
                      outline: 'none', fontWeight: '300',
                    }}>
                      <option>Buying a Property</option>
                      <option>Selling a Property</option>
                      <option>Renting a Property</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '10px', letterSpacing: '0.15em',
                      textTransform: 'uppercase', color: '#6B6B60', marginBottom: '6px',
                    }}>Message</div>
                    <textarea
                      required rows={4}
                      placeholder="Tell us how we can help..."
                      style={{
                        width: '100%',
                        border: '1px solid rgba(201,168,76,0.2)',
                        background: '#F5F0E8', padding: '12px 16px',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px', color: '#1A1A18',
                        outline: 'none', resize: 'none', fontWeight: '300',
                      }}
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
                  >Send Message</button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact