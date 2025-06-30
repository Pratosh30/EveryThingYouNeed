"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Star,
  Filter,
  Search,
  ShoppingCart,
  User,
  Truck,
  Shield,
  CreditCard,
  Smartphone,
  Home,
  Shirt,
  Car,
  ShoppingBag,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdultsPage() {
  const [activeTab, setActiveTab] = useState("men")
  const [cartItems, setCartItems] = useState(0)

  const menProducts = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      rating: 4.5,
      reviews: 128,
      image: "/placeholder.svg?height=200&width=200",
      category: "Fashion",
      discount: 20,
    },
    {
      id: 2,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      rating: 4.8,
      reviews: 256,
      image: "/placeholder.svg?height=200&width=200",
      category: "Electronics",
      discount: 0,
    },
    {
      id: 3,
      name: "Sports Running Shoes",
      price: 119.99,
      rating: 4.6,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=200",
      category: "Sports",
      discount: 15,
    },
    {
      id: 4,
      name: "Leather Wallet",
      price: 49.99,
      rating: 4.7,
      reviews: 203,
      image: "/placeholder.svg?height=200&width=200",
      category: "Accessories",
      discount: 0,
    },
    {
      id: 5,
      name: "Smart Watch",
      price: 199.99,
      rating: 4.4,
      reviews: 145,
      image: "/placeholder.svg?height=200&width=200",
      category: "Electronics",
      discount: 25,
    },
    {
      id: 6,
      name: "Casual Jeans",
      price: 79.99,
      rating: 4.3,
      reviews: 167,
      image: "/placeholder.svg?height=200&width=200",
      category: "Fashion",
      discount: 10,
    },
    {
      id: 7,
      name: "Gaming Mouse",
      price: 59.99,
      rating: 4.9,
      reviews: 312,
      image: "/placeholder.svg?height=200&width=200",
      category: "Electronics",
      discount: 0,
    },
    {
      id: 8,
      name: "Gym Bag",
      price: 39.99,
      rating: 4.5,
      reviews: 98,
      image: "/placeholder.svg?height=200&width=200",
      category: "Sports",
      discount: 20,
    },
  ]

  const womenProducts = [
    {
      id: 9,
      name: "Elegant Summer Dress",
      price: 79.99,
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=200",
      category: "Fashion",
      discount: 15,
    },
    {
      id: 10,
      name: "Skincare Beauty Set",
      price: 49.99,
      rating: 4.9,
      reviews: 203,
      image: "/placeholder.svg?height=200&width=200",
      category: "Beauty",
      discount: 0,
    },
    {
      id: 11,
      name: "Designer Handbag",
      price: 159.99,
      rating: 4.4,
      reviews: 67,
      image: "/placeholder.svg?height=200&width=200",
      category: "Accessories",
      discount: 30,
    },
    {
      id: 12,
      name: "Yoga Mat Set",
      price: 34.99,
      rating: 4.8,
      reviews: 189,
      image: "/placeholder.svg?height=200&width=200",
      category: "Fitness",
      discount: 0,
    },
    {
      id: 13,
      name: "Jewelry Collection",
      price: 89.99,
      rating: 4.6,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=200",
      category: "Accessories",
      discount: 20,
    },
    {
      id: 14,
      name: "High Heels",
      price: 99.99,
      rating: 4.3,
      reviews: 78,
      image: "/placeholder.svg?height=200&width=200",
      category: "Fashion",
      discount: 25,
    },
    {
      id: 15,
      name: "Makeup Kit",
      price: 69.99,
      rating: 4.7,
      reviews: 234,
      image: "/placeholder.svg?height=200&width=200",
      category: "Beauty",
      discount: 10,
    },
    {
      id: 16,
      name: "Fitness Tracker",
      price: 129.99,
      rating: 4.5,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=200",
      category: "Electronics",
      discount: 15,
    },
  ]

  const categories = [
    { name: "Fashion & Style", icon: Shirt, count: "2.5K+ items" },
    { name: "Electronics", icon: Smartphone, count: "1.8K+ items" },
    { name: "Home & Living", icon: Home, count: "3.2K+ items" },
    { name: "Automotive", icon: Car, count: "950+ items" },
  ]

  const addToCart = (productId: number) => {
    setCartItems(cartItems + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Adults Marketplace
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-64 border-2 border-green-100 focus:border-green-300"
                />
              </div>
              <Button variant="outline" className="border-2 border-green-200 hover:bg-green-50 bg-transparent">
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
              <Button variant="outline" className="relative border-2 border-green-200 hover:bg-green-50 bg-transparent">
                <ShoppingCart className="w-4 h-4" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-red-500 to-pink-500">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Everything for Your Daily Needs</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover quality products tailored for men and women. From fashion to electronics, we have everything you
              need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Shop Men's Collection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Shop Women's Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.count}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Browse Category</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between mb-8">
              <TabsList>
                <TabsTrigger value="men">Men's Collection</TabsTrigger>
                <TabsTrigger value="women">Women's Collection</TabsTrigger>
              </TabsList>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Men's Products */}
            <TabsContent value="men">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {menProducts.map((product) => (
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
                        <span className="text-2xl font-bold text-green-600">${product.price}</span>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button className="flex-1" onClick={() => addToCart(product.id)}>
                          Add to Cart
                        </Button>
                        <Button variant="outline">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Women's Products */}
            <TabsContent value="women">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {womenProducts.map((product) => (
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
                        <span className="text-2xl font-bold text-green-600">${product.price}</span>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button className="flex-1" onClick={() => addToCart(product.id)}>
                          Add to Cart
                        </Button>
                        <Button variant="outline">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment processing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Get the latest deals and new arrivals delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="bg-white text-gray-900" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
