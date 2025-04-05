'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const ExploreUs = () => {
  return (
    <section className="p-70 bg2">
      <div className="container-fluid px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <h2 className="m-title">Explore Us</h2>
            <p className="mb-6 text-gray-700">
              At Naveen's Bapu Ki Kutia, we understand that every family needs a
              quality time well spent. So, whether it's dine in or celebrating a special
              occasion, we provides unparalleled level of food, favor and personal
              services along with genuine hospitality in its true sense.
            </p>
            <h3 className="italic maroon-text text-xl mb-6">
              Right blend of unparalleled services and exceptionally tasty cuisine.
            </h3>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="col-span-1">
                <div className="relative group overflow-hidden rounded-md h-80">
                  <Image
                    src="https://ext.same-assets.com/1218719127/331942832.jpeg"
                    alt="Catering services bhopal"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nbk-darkBrown/80 to-transparent flex flex-col justify-end p-4">
                    <h4 className="text-xl text-white font-medium mb-2">Bespoke Catering</h4>
                    <p className="text-white mb-4">We are the best in town to cater your functions and parties.</p>
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                      <FaArrowRight className="text-nbk-maroon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 flex flex-col gap-4">
                <div className="bg-nbk-maroon p-8 rounded-md h-80 flex flex-col justify-center">
                  <h2 className="text-white text-2xl mb-4">Our Legacy</h2>
                  <p className="text-white mb-6">
                    Savour the authentic taste of delectable indian cuisine served in a platter with royal generosity.
                  </p>
                  <Link href="/our-legacy" className="btn-column bg-transparent border-white text-white hover:bg-white hover:text-nbk-maroon inline-block w-fit">
                    Know more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreUs
