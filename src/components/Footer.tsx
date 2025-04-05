'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-nbk-darkBrown text-white py-8" style={{
      backgroundImage: `url('https://ext.same-assets.com/1218719127/3464282238.jpeg')`,
      backgroundSize: 'cover',
      backgroundBlendMode: 'darken'
    }}>
      <div className="container-fluid px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-12">
                <h5 className="text-lg font-semibold mb-4">Naveen's Bapu Ki Kutia</h5>
              </div>

              <div className="md:col-span-5">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <li className="text-sm">MP Nagar</li>
                  <li className="text-sm">Trilanga</li>
                  <li className="text-sm">Lalghati</li>
                  <li className="text-sm">Indrapuri</li>
                  <li className="text-sm">Ayodhya Bypass</li>
                  <li className="text-sm">Bittan Market</li>
                  <li className="text-sm">Katara Hills</li>
                  <li className="text-sm">Neelbad</li>
                  <li className="text-sm">Narmadapuram Road</li>
                  <li className="text-sm">Vidisha</li>
                  <li className="text-sm">Bengaluru</li>
                </ul>
              </div>

              <div className="md:col-span-7">
                <p className="text-sm mb-4">
                  Telephone : +91-755-427 3779 / 4232410<br />
                  For Quick Order Contact : +91-6269191111<br />
                  Email : contact@nbkkfoods.com<br />
                  Add : 123, Bapu ki Kutia Shopping Complex, Bhopal 462011
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <Link href="https://play.google.com/store/apps/details?id=com.synques.nbkquickbuy" target="_blank">
                  <Image
                    src="https://ext.same-assets.com/1218719127/1513708838.png"
                    alt="Google Play Store"
                    width={105}
                    height={31}
                  />
                </Link>
                <Link href="https://apps.apple.com/us/app/id1529577477" target="_blank">
                  <Image
                    src="https://ext.same-assets.com/1218719127/788518813.png"
                    alt="Apple App Store"
                    width={105}
                    height={31}
                  />
                </Link>
              </div>

              <div className="flex justify-end">
                <Link href="https://www.facebook.com/naveensbapukikutia" target="_blank" className="bg-nbk-maroon w-8 h-8 rounded-full flex items-center justify-center">
                  <FaFacebookF className="text-white" />
                </Link>
              </div>

              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <li><Link href="/disclaimer" className="hover:text-nbk-gold transition-colors">Disclaimer</Link></li>
                <li><Link href="/privacy" className="hover:text-nbk-gold transition-colors">Privacy Policy</Link></li>
                <li><Link href="/sitemap" className="hover:text-nbk-gold transition-colors">Site Map</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-12 border-t border-gray-700 pt-4 mt-2">
            <div className="flex flex-col md:flex-row justify-between">
              <p className="text-sm">© 2021 Nbkk Foods Pvt.Ltd. All rights reserved.</p>
              <p className="text-sm">Powered by <Link href="https://synques.in/" target="_blank" className="text-nbk-gold hover:underline">SynQues</Link></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
