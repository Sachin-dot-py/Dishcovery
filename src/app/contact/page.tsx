'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    copyToMe: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, copyToMe: e.target.checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // In a real implementation, you'd send this data to your server
    alert('Thank you for your message. We will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      copyToMe: false
    })
  }

  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1 text-center">
              <h1 className="text-white text-4xl md:text-5xl mb-4">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="flex justify-center space-x-2 text-white">
                  <li><Link href="/" className="hover:text-nbk-gold transition-colors">Home</Link></li>
                  <li className="before:content-['/'] before:mx-2">Contact Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="p-70 bg-nbk-cream">
        <div className="container-fluid px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <h2 className="m-title">Let's get in touch</h2>
              <p className="mb-4 text-gray-700">
                Have a specific question for us? You can always put it here, and a member of our experienced team
                will be in contact shortly.
              </p>
              <h3 className="italic maroon-text text-xl mb-8">
                No request is too large, no detail is too small.
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex">
                      <div className="bg-nbk-maroon w-10 h-10 flex items-center justify-center text-white">
                        <span>🧑</span>
                      </div>
                      <Input
                        type="text"
                        placeholder="Name *"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="flex-1 rounded-none focus-visible:ring-nbk-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="E-Mail *"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-none focus-visible:ring-nbk-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex">
                      <div className="bg-nbk-maroon w-10 h-10 flex items-center justify-center text-white">
                        <span>📱</span>
                      </div>
                      <Input
                        type="tel"
                        placeholder="Phone Number *"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 rounded-none focus-visible:ring-nbk-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex">
                      <div className="bg-nbk-maroon w-10 h-10 flex items-center justify-center text-white">
                        <span>📝</span>
                      </div>
                      <Input
                        type="text"
                        placeholder="Subject *"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="flex-1 rounded-none focus-visible:ring-nbk-gold"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Textarea
                    placeholder="Your Message Here *"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-28 rounded-none focus-visible:ring-nbk-gold"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="copyToMe"
                      name="copyToMe"
                      checked={formData.copyToMe}
                      onChange={handleCheckboxChange}
                      className="rounded text-nbk-maroon focus:ring-nbk-gold"
                    />
                    <label htmlFor="copyToMe">Copy to me</label>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      className="bg-nbk-maroon hover:bg-nbk-brown text-white"
                    >
                      Submit
                    </Button>
                    <Button
                      type="reset"
                      className="border border-nbk-gold bg-nbk-cream text-nbk-brown hover:bg-nbk-gold hover:text-white"
                      onClick={() => setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        copyToMe: false
                      })}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <div className="md:col-span-5">
              <Image
                src="https://ext.same-assets.com/3908720063/220412153.jpeg"
                alt="Contact Naveen's Bapu Ki Kutia"
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="highlight">
        <div className="container-fluid px-4">
          <div className="col-span-1 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              Enjoying a good food is only a call or a mail away.
            </h2>
            <p className="text-white mb-12">
              You can easily place your order using the below details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                <FaPhoneAlt className="text-nbk-maroon text-xl" />
              </div>
              <div>
                <p className="text-lg font-medium">Telephone</p>
                <p>+91-755-427 3779 / 4232410</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                <FaPhoneAlt className="text-nbk-maroon text-xl" />
              </div>
              <div>
                <p className="text-lg font-medium">For Quick Order Contact</p>
                <p>+91-6269191111</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-nbk-maroon text-xl" />
              </div>
              <div>
                <p className="text-lg font-medium">Email</p>
                <p>contact@nbkkfoods.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-70 bg1">
        <div className="container-fluid px-4">
          <div className="col-span-1 text-center max-w-3xl mx-auto mb-12">
            <h2 className="m-title">Our Locations</h2>
            <p className="mb-4 text-gray-700">
              Let's enjoy some yummy cuisine together. Visit our store today to enjoy a wide range of mouth watering food and great cuisines.
            </p>
            <h3 className="italic maroon-text text-xl mb-6">
              We like to stimulate you with tasteful dishes.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="maroon-text text-xl font-medium mb-4">Trilanga :</h3>
              <p className="mb-4">
                Shop No.1 & 2, Plot No.24 Ground Floor "SLK Nimbus Arcade, Trilanga Main Rd,
                opposite to Aura Mall, Bhopal, Madhya Pradesh 462039
              </p>
              <p className="font-medium">Tel: +91 755 490 8080</p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="maroon-text text-xl font-medium mb-4">MP Nagar :</h3>
              <p className="mb-4">
                No.123, Jyoti Shopping Complex, Service Rd, Zone-I, Maharana Pratap Nagar,
                Bhopal, Madhya Pradesh 462023
              </p>
              <p className="font-medium">Tel: +91 755 427 3779</p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="maroon-text text-xl font-medium mb-4">Lalghati :</h3>
              <p className="mb-4">
                STC Palm Square, Lalghati Chouraha, above Axis Bank, Madhya Pradesh 462030
              </p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="maroon-text text-xl font-medium mb-4">Indrapuri :</h3>
              <p className="mb-4">
                B-13, Near HDFC Bank, Indrapuri, Main, Raisen Rd, Indrapuri B Sector,
                BHEL, Bhopal, Madhya Pradesh 462022
              </p>
              <p className="font-medium">Tel: +91 755 492 6262</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
