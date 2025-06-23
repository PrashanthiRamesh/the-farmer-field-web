import Link from "next/link"
import { Leaf, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">The Farmer Field</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Leading the future of sustainable agriculture through innovative hydroponic farming solutions. Growing
              fresh, healthy produce without soil, using 90% less water.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@thefarmerfield.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Hydroponic Systems</li>
              <li className="text-gray-600">Consultation</li>
              <li className="text-gray-600">Installation</li>
              <li className="text-gray-600">Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} The Farmer Field. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
