'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const phrases = ["Contactless Delivery", "Premium Quality", "Fresh Ingredients", "Traditional Taste"]

const DeliveryHighlight = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        setIsVisible(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="highlight">
      <div className="container-fluid px-4">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-1 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              We are distinguished by{' '}
              <span className="transition-opacity duration-500 gold-text inline-block min-w-40" style={{ opacity: isVisible ? 1 : 0 }}>
                {phrases[currentPhraseIndex]}
              </span>
            </h2>
            <p className="text-white mb-8">
              Come, feel the healthy food with a delicious taste from us as our goal is to create food that not only restores and
              replenishes but also revives your senses.
            </p>
            <Link href="#" className="btn-column bg-nbk-maroon hover:bg-nbk-brown text-white border-nbk-brown">
              Order now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryHighlight
