import { useState } from 'react'
import { motion } from 'framer-motion'
import properties from '../data/properties.json'
import PropertyCard from '../components/PropertyCard'
import useIsMobile from '../useIsMobile'

function Listings() {
  const isMobile = useIsMobile()
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All')
  const [sort, setSort] = useState('default')

  const types = ['All', 'Villa', 'Penthouse', 'Estate', 'Townhouse']

  const filtered = properties
    .filter(p => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())
      const matchType = type === 'All' || p.type === type
      return matchSearch && matchType
    })
    .sort((a, b) => {
      if (sort === 'low') return a.price - b.price
      if (sort === 'high') return b.price - a.price
      return 0
    })

  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 24px' : '0 64px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9A84C' }}>Available Now</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: isMobile ? '36px' : 'clamp(36px, 4vw, 56px)', fontWeight: '300', color: '#1A1A18', marginBottom: '8px' }}>All Properties</h1>
          <p style={{ fontSize: '13px', color: '#6B6B60', fontWeight: '300' }}>Showing {filtered.length} curated properties across India</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: '#FDFCF9', border: '1px solid rgba(201,168,76,0.2)', padding: isMobile ? '20px' : '24px 32px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '40px' }}
        >
          <input
            type="text"
            placeholder="Search by name or city..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, minWidth: '200px', border: '1px solid rgba(201,168,76,0.2)', background: '#F5F0E8', padding: '12px 18px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#1A1A18', outline: 'none', fontWeight: '300' }}
          />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {types.map(t => (
              <button
                key={t}
                onClick={() => setType(t)}
                style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.3)', background: type === t ? '#1A1A18' : 'transparent', color: type === t ? '#E8D5A3' : '#6B6B60', padding: '10px 16px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.3s' }}
              >{t}</button>
            ))}
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{ border: '1px solid rgba(201,168,76,0.2)', background: '#F5F0E8', padding: '12px 18px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#6B6B60', outline: 'none', fontWeight: '300' }}
          >
            <option value="default">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </motion.div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
            {filtered.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontSize: '60px', marginBottom: '16px' }}>🏚️</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '300', color: '#1A1A18', marginBottom: '8px' }}>No properties found</h3>
            <p style={{ fontSize: '13px', color: '#6B6B60' }}>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Listings