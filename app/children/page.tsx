"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Baby,
  Star,
  Shield,
  Heart,
  BookOpen,
  Palette,
  Gamepad2,
  ShoppingCart,
  Award,
  Users,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ChildrenPage() {
  const [activeAge, setActiveAge] = useState("0-2")

  const ageGroups = [
    { id: "0-2", label: "0-2 Years", color: "bg-pink-500" },
    { id: "2-4", label: "2-4 Years", color: "bg-blue-500" },
    { id: "4-6", label: "4-6 Years", color: "bg-green-500" },
    { id: "6-8", label: "6-8 Years", color: "bg-yellow-500" },
    { id: "8-12", label: "8-12 Years", color: "bg-purple-500" },
  ]

  const productsByAge = {
    "0-2": [
      {
        id: 1,
        name: "Soft Plush Teddy Bear",
        price: 24.99,
        rating: 4.8,
        safety: "BPA Free",
        image: "/placeholder.svg?height=200&width=200",
        category: "Toys",
        ageRange: "0-24 months",
      },
      {
        id: 2,
        name: "Baby Feeding Set",
        price: 19.99,
        rating: 4.9,
        safety: "Food Grade",
        image: "/placeholder.svg?height=200&width=200",
        category: "Feeding",
        ageRange: "6-24 months",
      },
      {
        id: 3,
        name: "Musical Mobile",
        price: 34.99,
        rating: 4.7,
        safety: "Non-Toxic",
        image: "/placeholder.svg?height=200&width=200",
        category: "Development",
        ageRange: "0-12 months",
      },
      {
        id: 4,
        name: "Baby Bath Toys",
        price: 16.99,
        rating: 4.6,
        safety: "Waterproof",
        image: "/placeholder.svg?height=200&width=200",
        category: "Bath Time",
        ageRange: "6-24 months",
      },
      {
        id: 5,
        name: "Teething Rings",
        price: 12.99,
        rating: 4.8,
        safety: "BPA Free",
        image: "/placeholder.svg?height=200&width=200",
        category: "Teething",
        ageRange: "3-18 months",
      },
      {
        id: 6,
        name: "Baby Monitor",
        price: 89.99,
        rating: 4.7,
        safety: "Certified Safe",
        image: "/placeholder.svg?height=200&width=200",
        category: "Safety",
        ageRange: "0-24 months",
      },
    ],
    "2-4": [
      {
        id: 7,
        name: "Building Blocks Set",
        price: 29.99,
        rating: 4.6,
        safety: "Choking Safe",
        image: "/placeholder.svg?height=200&width=200",
        category: "Educational",
        ageRange: "2-4 years",
      },
      {
        id: 8,
        name: "Picture Books Collection",
        price: 39.99,
        rating: 4.8,
        safety: "Paper Safe",
        image: "/placeholder.svg?height=200&width=200",
        category: "Books",
        ageRange: "2-5 years",
      },
      {
        id: 9,
        name: "Art & Craft Kit",
        price: 22.99,
        rating: 4.5,
        safety: "Non-Toxic",
        image: "/placeholder.svg?height=200&width=200",
        category: "Creative",
        ageRange: "3-6 years",
      },
      {
        id: 10,
        name: "Wooden Puzzle Set",
        price: 18.99,
        rating: 4.7,
        safety: "Smooth Edges",
        image: "/placeholder.svg?height=200&width=200",
        category: "Puzzles",
        ageRange: "2-4 years",
      },
      {
        id: 11,
        name: "Musical Instruments",
        price: 34.99,
        rating: 4.4,
        safety: "Sound Safe",
        image: "/placeholder.svg?height=200&width=200",
        category: "Music",
        ageRange: "2-5 years",
      },
      {
        id: 12,
        name: "Dress-Up Costumes",
        price: 26.99,
        rating: 4.6,
        safety: "Fabric Safe",
        image: "/placeholder.svg?height=200&width=200",
        category: "Imaginative Play",
        ageRange: "3-6 years",
      },
    ],
    "4-6": [
      {
        id: 7,
        name: "Educational Puzzle Set",
        price: 27.99,
        rating: 4.7,
        safety: "Age Appropriate",
        image: "/placeholder.svg?height=200&width=200",
        category: "Learning",
      },
      {
        id: 8,
        name: "Musical Instruments Set",
        price: 44.99,
        rating: 4.6,
        safety: "Sound Safe",
        image: "/placeholder.svg?height=200&width=200",
        category: "Music",
      },
      {
        id: 9,
        name: "Sports Activity Kit",
        price: 32.99,
        rating: 4.8,
        safety: "Impact Safe",
        image: "/placeholder.svg?height=200&width=200",
        category: "Sports",
      },
    ],
    "6-8": [
      {
        id: 10,
        name: "Science Experiment Kit",
        price: 49.99,
        rating: 4.9,
        safety: "Lab Safe",
        image: "/placeholder.svg?height=200&width=200",
        category: "STEM",
      },
      {
        id: 11,
        name: "Board Games Collection",
        price: 35.99,
        rating: 4.7,
        safety: "Family Safe",
        image: "/placeholder.svg?height=200&width=200",
        category: "Games",
      },
      {
        id: 12,
        name: "Advanced Building Set",
        price: 59.99,
        rating: 4.8,
        safety: "Quality Tested",
        image: "/placeholder.svg?height=200&width=200",
        category: "Construction",
      },
    ],
    "8-12": [
      {
        id: 13,
        name: "Coding Board Game",
        price: 39.99,
        rating: 4.8,
        safety: "Educational",
        image: "/placeholder.svg?height=200&width=200",
        category: "Technology",
      },
      {
        id: 14,
        name: "Art Supplies Premium Kit",
        price: 54.99,
        rating: 4.9,
        safety: "Art Safe",
        image: "/placeholder.svg?height=200&width=200",
        category: "Creative",
      },
      {
        id: 15,
        name: "Sports Equipment Set",
        price: 69.99,
        rating: 4.6,
        safety: "Sports Grade",
        image: "/placeholder.svg?height=200&width=200",
        category: "Athletics",
      },
    ],
  }

  const safetyFeatures = [
    {
      title: "Safety First",
      description: "All products are tested for child safety",
      icon: Shield,
      color: "bg-green-500",
    },
    {
      title: "Age Appropriate",
      description: "Products matched to developmental stages",
      icon: Baby,
      color: "bg-blue-500",
    },
    {
      title: "Quality Assured",
      description: "Premium materials and construction",
      icon: Award,
      color: "bg-purple-500",
    },
    {
      title: "Parent Approved",
      description: "Recommended by parents worldwide",
      icon: Heart,
      color: "bg-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              Everything You Need - Children
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Shield className="w-3 h-3 mr-1" />
                Safety Certified
              </Badge>
              <Button variant="outline">
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
              <Baby className="w-3 h-3 mr-1" />
              Safe & Educational
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Safe Products for Every Age</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover age-appropriate toys, books, and educational materials that are safe, fun, and promote healthy
              development.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Safety Tested", value: "100%", icon: Shield },
              { label: "Happy Parents", value: "50K+", icon: Users },
              { label: "Products", value: "2K+", icon: Gamepad2 },
              { label: "Age Groups", value: "5", icon: Baby },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Parents Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Based Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Age Group</h2>
            <p className="text-xl text-gray-600">Find the perfect products for your child's developmental stage</p>
          </div>

          <Tabs value={activeAge} onValueChange={setActiveAge} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {ageGroups.map((group) => (
                <TabsTrigger key={group.id} value={group.id} className="text-sm">
                  {group.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(productsByAge).map(([age, products]) => (
              <TabsContent key={age} value={age}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
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
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {product.safety}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full">Add to Cart</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Educational Categories */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Educational Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "STEM Learning", icon: Award, description: "Science, Technology, Engineering, Math" },
              { title: "Creative Arts", icon: Palette, description: "Drawing, Painting, Crafts" },
              { title: "Reading & Books", icon: BookOpen, description: "Stories, Educational Books" },
              { title: "Active Play", icon: Gamepad2, description: "Sports, Outdoor Activities" },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Explore</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources for Parents</h2>
            <p className="text-xl text-gray-600">Expert advice and guides to help you choose the best products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Age-Appropriate Guide", description: "Learn what's suitable for each age" },
              { title: "Safety Checklist", description: "Ensure products meet safety standards" },
              { title: "Development Tips", description: "Support your child's growth" },
            ].map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Safety is Our Priority</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every product is rigorously tested and certified safe for children. We partner with trusted brands and
            follow international safety standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              View Safety Standards
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
