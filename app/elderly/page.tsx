"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Star,
  Phone,
  Clock,
  Shield,
  Stethoscope,
  Pill,
  Home,
  ShoppingCart,
  Headphones,
  AlertTriangle,
  Users,
  Award,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ElderlyPage() {
  const [activeTab, setActiveTab] = useState("health")

  const healthProducts = [
    {
      id: 1,
      name: "Digital Blood Pressure Monitor",
      price: 89.99,
      rating: 4.8,
      features: ["Large Display", "Memory Storage", "Easy Operation", "Bluetooth Sync"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Health Monitoring",
      warranty: "2 years",
    },
    {
      id: 2,
      name: "Automatic Pill Dispenser",
      price: 129.99,
      rating: 4.9,
      features: ["28-Day Capacity", "Audio Alerts", "Secure Lock", "App Control"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Medication",
      warranty: "1 year",
    },
    {
      id: 3,
      name: "Glucose Monitoring Kit",
      price: 79.99,
      rating: 4.7,
      features: ["Quick Results", "Large Screen", "100 Test Strips", "Data Tracking"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Health Monitoring",
      warranty: "3 years",
    },
    {
      id: 4,
      name: "Pulse Oximeter",
      price: 39.99,
      rating: 4.6,
      features: ["Finger Clip Design", "OLED Display", "Battery Included", "Carrying Case"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Health Monitoring",
      warranty: "1 year",
    },
    {
      id: 5,
      name: "Digital Thermometer",
      price: 24.99,
      rating: 4.8,
      features: ["Fast Reading", "Fever Alert", "Memory Function", "Waterproof"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Health Monitoring",
      warranty: "2 years",
    },
    {
      id: 6,
      name: "Heart Rate Monitor",
      price: 149.99,
      rating: 4.7,
      features: ["Chest Strap", "Wireless", "App Compatible", "Long Battery"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Health Monitoring",
      warranty: "2 years",
    },
  ]

  const mobilityProducts = [
    {
      id: 4,
      name: "Adjustable Walking Cane",
      price: 34.99,
      rating: 4.6,
      features: ["Lightweight", "Non-Slip Grip", "Height Adjustable"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Mobility",
    },
    {
      id: 5,
      name: "Shower Safety Chair",
      price: 89.99,
      rating: 4.8,
      features: ["Non-Slip Feet", "Drainage Holes", "Tool-Free Assembly"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Bathroom Safety",
    },
    {
      id: 6,
      name: "Grab Bar Set",
      price: 49.99,
      rating: 4.7,
      features: ["Stainless Steel", "Easy Install", "Weight Tested"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Home Safety",
    },
  ]

  const comfortProducts = [
    {
      id: 7,
      name: "Heated Therapy Pad",
      price: 59.99,
      rating: 4.8,
      features: ["6 Heat Settings", "Auto Shut-off", "Washable Cover"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Pain Relief",
    },
    {
      id: 8,
      name: "Compression Socks Set",
      price: 24.99,
      rating: 4.6,
      features: ["Graduated Compression", "Moisture Wicking", "3-Pack"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Circulation",
    },
    {
      id: 9,
      name: "Memory Foam Cushion",
      price: 39.99,
      rating: 4.7,
      features: ["Ergonomic Design", "Removable Cover", "Portable"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Comfort",
    },
  ]

  const emergencyProducts = [
    {
      id: 10,
      name: "Medical Alert System",
      price: 199.99,
      rating: 4.9,
      features: ["24/7 Monitoring", "GPS Tracking", "Waterproof"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Emergency",
    },
    {
      id: 11,
      name: "Fall Detection Watch",
      price: 149.99,
      rating: 4.7,
      features: ["Automatic Detection", "Emergency Contacts", "Heart Rate Monitor"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Safety",
    },
    {
      id: 12,
      name: "Emergency Kit",
      price: 79.99,
      rating: 4.8,
      features: ["First Aid Supplies", "Emergency Food", "Flashlight"],
      image: "/placeholder.svg?height=200&width=200",
      category: "Preparedness",
    },
  ]

  const supportServices = [
    {
      title: "24/7 Health Support",
      description: "Round-the-clock medical assistance",
      icon: Phone,
      color: "bg-red-500",
    },
    {
      title: "Medication Reminders",
      description: "Never miss your medication",
      icon: Pill,
      color: "bg-blue-500",
    },
    {
      title: "Home Safety Assessment",
      description: "Professional safety evaluation",
      icon: Home,
      color: "bg-green-500",
    },
    {
      title: "Emergency Response",
      description: "Immediate help when needed",
      icon: AlertTriangle,
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Elderly Care Hub
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 shadow-lg"
              >
                <Clock className="w-3 h-3 mr-1" />
                24/7 Support Available
              </Badge>
              <Button variant="outline" className="border-2 border-red-200 hover:bg-red-50 shadow-md bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                Emergency: 911
              </Button>
              <Button variant="outline" className="border-2 border-red-200 hover:bg-red-50 bg-transparent">
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-3 h-3 mr-1" />
              Caring for Your Health
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Health & Comfort Solutions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover products and services designed to support your health, safety, and independence at home.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Satisfied Customers", value: "25K+", icon: Users },
              { label: "Health Products", value: "500+", icon: Stethoscope },
              { label: "Support Hours", value: "24/7", icon: Clock },
              { label: "Safety Rating", value: "5★", icon: Award },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Products for Daily Living</h2>
            <p className="text-xl text-gray-600">Carefully selected products to support your health and independence</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="health">Health Monitoring</TabsTrigger>
              <TabsTrigger value="mobility">Mobility Aids</TabsTrigger>
              <TabsTrigger value="comfort">Comfort & Relief</TabsTrigger>
              <TabsTrigger value="emergency">Emergency & Safety</TabsTrigger>
            </TabsList>

            {/* Health Products */}
            <TabsContent value="health">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {healthProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{product.category}</Badge>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                      <div className="text-2xl font-bold text-red-600 mb-2">${product.price}</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Add to Cart</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Mobility Products */}
            <TabsContent value="mobility">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mobilityProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{product.category}</Badge>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                      <div className="text-2xl font-bold text-red-600 mb-2">${product.price}</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Add to Cart</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Comfort Products */}
            <TabsContent value="comfort">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comfortProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{product.category}</Badge>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                      <div className="text-2xl font-bold text-red-600 mb-2">${product.price}</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Add to Cart</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Emergency Products */}
            <TabsContent value="emergency">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergencyProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{product.category}</Badge>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                      <div className="text-2xl font-bold text-red-600 mb-2">${product.price}</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Add to Cart</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 24/7 Support Banner */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
              <Headphones className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold">24/7 Support Available</h2>
              <p className="text-red-100">Our caring team is always here to help</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="w-4 h-4 mr-2" />
              Call Now: 1-800-CARE-NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              Live Chat Support
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Safety is Our Priority</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All our products are carefully selected and tested for safety, reliability, and ease of use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Tested</h3>
              <p className="text-gray-600">Every product meets strict quality standards</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Approved</h3>
              <p className="text-gray-600">Recommended by healthcare professionals</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Family Trusted</h3>
              <p className="text-gray-600">Trusted by thousands of families</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
