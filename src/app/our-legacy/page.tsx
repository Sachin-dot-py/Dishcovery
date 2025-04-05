'use client'

import Link from 'next/link'
import Image from 'next/image'

const locations = [
  {
    id: '01',
    title: 'MP Nagar',
    address: 'No.123, Jyoti Shopping Complex, Service Rd, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462023'
  },
  {
    id: '02',
    title: 'Gulmohar',
    address: 'Shop No.1 & 2, Plot No.24 Ground Floor "SLK Nimbus Arcade, Trilanga Main Rd, opposite to Aura Mall, Bhopal, Madhya Pradesh 462039'
  },
  {
    id: '03',
    title: 'Lalghati',
    address: 'STC Palm Square, Lalghati Chouraha, above Axis Bank, Madhya Pradesh 462030'
  },
  {
    id: '04',
    title: 'Indrapuri',
    address: 'B-13, Near HDFC Bank, Indrapuri, Main, Raisen Rd, Indrapuri B Sector, BHEL, Bhopal, Madhya Pradesh 462022'
  },
  {
    id: '05',
    title: 'Hoshagabad',
    address: 'Rishi Business Park, Hoshangabad Rd, in-front of RKDF Collage, Bhopal, Madhya Pradesh 462047'
  },
  {
    id: '06',
    title: 'Ayodhya',
    address: 'Shop No 03, Ground floor Ganesh Galaxy City shopping complex Gate, No. 02, Ayodhya Bypass Rd, near Minal, Bhopal, Madhya Pradesh 462021'
  },
  {
    id: '07',
    title: 'Bittan Market',
    address: 'E 5/4, 1st floor, opp. Police Station, Arera Colony, Bhopal, Madhya Pradesh 462016'
  },
  {
    id: '08',
    title: 'Bagmugaliya',
    address: 'Hall No 1 Dwarika Parisar, Katara Hills Rd, Near Navjeevan Hospital, Arvind Vihar, Bhopal, Madhya Pradesh 462043'
  },
  {
    id: '09',
    title: 'Awadhpuri',
    address: '6FJR+5VG, Regal Town, Awadhpuri, Bhopal, Madhya Pradesh 462022'
  }
]

const OurLegacyPage = () => {
  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1 text-center">
              <h1 className="text-white text-4xl md:text-5xl mb-4">Our Legacy</h1>
              <nav aria-label="breadcrumb">
                <ol className="flex justify-center space-x-2 text-white">
                  <li><Link href="/" className="hover:text-nbk-gold transition-colors">Home</Link></li>
                  <li className="before:content-['/'] before:mx-2">Our Legacy</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="p-70">
        <div className="container-fluid px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="col-span-1 brown-bg p-8 md:p-12 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <h2 className="m-title white-text">Legacy</h2>
                  <h3 className="italic pb-4 gold-text text-xl">
                    Our restaurant has been present for over 20 years in the market.
                  </h3>
                  <p className="white-text">
                    Naveens' Bapu Ki Kitiya (NBKK Foods Pvt Ltd) was established on 17 th Dec 2003 by two
                    veterans of Food & Beverage industry: Mr.Jeetu Sujwani and Mr Naveen Sujwani We have
                    multiple stores in Bhopal to fulfil the increasing demand of families and office going staff at
                    different parts of the city. Among various multicuisine restaurants in Bhopal, NBKK is known
                    as one of the preferred and most economical dining restaurants in the hospitality industry.
                    With the recent set up of our branches in Baghmughlia and Indrapuri NBKK is expanding
                    with velocity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlight">
        <div className="container-fluid px-4">
          <div className="col-span-1 text-center max-w-3xl mx-auto">
            <h2 className="m-title white-text">Vision</h2>
            <p className="text-white">
              We aim to surpass your experience every time you visit us and give us an opportunity to serve you and your family.
            </p>
          </div>
        </div>
      </section>

      <section className="p-70 bg1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="col-span-1 text-center">
              <h2 className="m-title">Journey</h2>
            </div>

            <div className="col-span-1 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-nbk-gold"></div>

              <div className="space-y-12">
                {locations.map((location, index) => (
                  <div key={location.id} className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                      <div className="bg-nbk-cream p-6 rounded-md relative">
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-nbk-gold z-10 left-full md:left-auto md:right-0 -mr-3"></div>
                        <h3 className="maroon-text text-xl font-medium mb-2">
                          {location.id} - {location.title}
                        </h3>
                        <p className="text-gray-700">{location.address}</p>
                      </div>
                    </div>
                    <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                      <div className="flex items-center justify-center md:justify-start">
                        <div className="bg-nbk-gold text-white w-10 h-10 rounded-full flex items-center justify-center">
                          {location.id}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurLegacyPage
