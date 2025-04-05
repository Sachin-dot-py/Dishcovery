'use client'

import Image from 'next/image'
import Link from 'next/link'

const FinalSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="col-span-1">
                <Image
                  src="https://ext.same-assets.com/1218719127/3623347791.jpeg"
                  alt="Indian chef preparing food"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              <div className="col-span-1">
                <div className="bg-nbk-maroon p-6 rounded-md h-full flex flex-col justify-center">
                  <h2 className="text-white text-2xl mb-4">Our Chef</h2>
                  <p className="text-white mb-6">
                    Our chefs always have something new and wonderful to serve you.
                  </p>
                  <Link href="/our-legacy" className="btn-column bg-transparent border-white text-white hover:bg-white hover:text-nbk-maroon inline-block w-fit">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="col-span-1 order-last sm:order-first">
                <div className="bg-nbk-maroon p-6 rounded-md h-full flex flex-col justify-center">
                  <h2 className="text-white text-2xl mb-4">Our Menu</h2>
                  <p className="text-white mb-6">
                    Our goal is to create food that restores, replenishes and revives.
                  </p>
                  <Link href="#" className="btn-column bg-transparent border-white text-white hover:bg-white hover:text-nbk-maroon inline-block w-fit">
                    Order Now
                  </Link>
                </div>
              </div>
              <div className="col-span-1 order-first sm:order-last">
                <Image
                  src="https://ext.same-assets.com/1218719127/4232467310.jpeg"
                  alt="Food delivery bhopal"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalSection
