'use client'

import Link from 'next/link'
import Image from 'next/image'

const OurStory = () => {
  return (
    <section className="p-70 bg-nbk-cream">
      <div className="container-fluid px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/1218719127/1912251209.jpeg"
                alt="Bapu Ki Kutia Bhopal"
                width={335}
                height={434}
                className="mx-auto md:mx-0"
              />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="pt-8">
              <h2 className="m-title">Our Story</h2>
              <p className="mb-6 text-gray-700">
                Naveen's Bapu Ki Kutia is a pure vegetarian restaurant serving delicious food cooked with freshest ingredients.
                Over the years the brand is recognized for its uncompromising levels in food &amp; service.
              </p>
              <h3 className="italic maroon-text text-xl mb-6">
                Whisper to us about your feelings, and we will prepare what you need now.
              </h3>
              <Link href="/our-legacy" className="btn-column">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
