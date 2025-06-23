import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Leaf, Target } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About The Farmer Field</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about revolutionizing agriculture through innovative hydroponic solutions that benefit
              both growers and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, The Farmer Field emerged from a simple vision: to make sustainable, high-yield farming
                accessible to everyone. Our founders, agricultural engineers with decades of experience, recognized the
                urgent need for farming solutions that could address water scarcity, climate change, and food security.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small research project has grown into a leading provider of hydroponic systems,
                serving everyone from home gardeners to commercial farms across the country.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to innovate and push the boundaries of what's possible in sustainable agriculture,
                helping our customers grow more with less.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="The Farmer Field team working on hydroponic systems"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  To democratize sustainable farming by providing innovative, efficient, and accessible hydroponic
                  solutions that enable anyone to grow fresh, healthy produce while conserving natural resources and
                  protecting the environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  A world where sustainable, soil-free farming is the norm, where fresh produce is grown locally
                  year-round, and where agriculture works in harmony with nature to feed the growing global population.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that showcase our commitment to sustainable farming</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50M+</div>
              <div className="text-gray-600">Gallons Water Saved</div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">Plants Grown</div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-green-100">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Sustainability</h3>
              <p className="text-green-100">
                We're committed to developing solutions that protect and preserve our planet for future generations.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-green-100">
                We continuously push the boundaries of what's possible in agriculture through cutting-edge technology.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Accessibility</h3>
              <p className="text-green-100">
                We believe everyone should have access to fresh, healthy food and the tools to grow it themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
