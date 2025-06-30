"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  GraduationCap,
  Users,
  Baby,
  Heart,
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Star,
  Shield,
  Clock,
  Award,
  Zap,
  BookOpen,
  Code,
  ShoppingBag,
  Gamepad2,
  Stethoscope,
  LogIn,
} from "lucide-react"
import Link from "next/link"
import { useStore } from "@/lib/store"
import { useToast } from "@/hooks/use-toast"
import { NotificationCenter } from "@/components/notification-center"
import { UserDashboard } from "@/components/user-dashboard"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const { user, isAuthenticated, login, cart, addNotification } = useStore()
  const { toast } = useToast()

  // Demo login function
  const handleDemoLogin = (role: "student" | "adult" | "parent" | "elderly") => {
    const demoUser = {
      id: "1",
      name: "Demo User",
      email: "demo@example.com",
      role,
      preferences: {
        notifications: true,
        theme: "light" as const,
        language: "en",
      },
      progress: {
        coursesCompleted: Math.floor(Math.random() * 10),
        challengesSolved: Math.floor(Math.random() * 50),
        totalPoints: Math.floor(Math.random() * 1000),
        level: Math.floor(Math.random() * 5) + 1,
      },
    }

    login(demoUser)
    addNotification({
      title: "Welcome!",
      message: `Welcome to Everything You Need, ${demoUser.name}!`,
      type: "success",
      read: false,
    })
    setShowLogin(false)
    toast({
      title: "Login Successful",
      description: `Welcome back, ${demoUser.name}!`,
    })
  }

  const demographics = [
    {
      id: "students",
      title: "Students",
      description: "Free courses, coding practice, and study resources",
      icon: GraduationCap,
      color: "bg-blue-500",
      features: ["Free Programming Courses", "LeetCode Practice", "Study Resources", "Career Guidance"],
    },
    {
      id: "adults",
      title: "Adults",
      description: "Daily needs, shopping, and lifestyle products",
      icon: Users,
      color: "bg-green-500",
      features: ["Daily Essentials", "Fashion & Style", "Home & Living", "Electronics"],
    },
    {
      id: "children",
      title: "Children",
      description: "Age-appropriate products and educational content",
      icon: Baby,
      color: "bg-purple-500",
      features: ["Educational Toys", "Safety Products", "Arts & Crafts", "Books & Games"],
    },
    {
      id: "elderly",
      title: "Elderly",
      description: "Health products, medicines, and daily living aids",
      icon: Heart,
      color: "bg-red-500",
      features: ["Health Monitoring", "Medicines", "Mobility Aids", "24/7 Support"],
    },
  ]

  const stats = [
    { label: "Active Users", value: "100K+", icon: Users },
    { label: "Courses Available", value: "500+", icon: BookOpen },
    { label: "Products Listed", value: "10K+", icon: ShoppingBag },
    { label: "Success Rate", value: "98%", icon: Award },
  ]

  const handleSectionClick = (sectionId: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to access this section.",
      })
      setShowLogin(true)
      return
    }
    window.open(`/${sectionId}`, "_blank")
  }

  // Auto-add welcome notifications
  useEffect(() => {
    if (isAuthenticated && user) {
      const welcomeNotifications = [
        {
          title: "New Course Available!",
          message: "Check out our latest Python Advanced course",
          type: "info" as const,
          read: false,
        },
        {
          title: "Special Offer",
          message: "20% off on all electronics this week!",
          type: "success" as const,
          read: false,
        },
      ]

      welcomeNotifications.forEach((notif) => {
        setTimeout(() => addNotification(notif), Math.random() * 3000)
      })
    }
  }, [isAuthenticated, user, addNotification])

  if (showDashboard && isAuthenticated) {
    return <UserDashboard />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Everything You Need
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="#students" className="text-gray-700 hover:text-blue-600 transition-colors">
                Students
              </Link>
              <Link href="#adults" className="text-gray-700 hover:text-blue-600 transition-colors">
                Adults
              </Link>
              <Link href="#children" className="text-gray-700 hover:text-blue-600 transition-colors">
                Children
              </Link>
              <Link href="#elderly" className="text-gray-700 hover:text-blue-600 transition-colors">
                Elderly
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search..." className="pl-10 w-64" />
              </div>

              {isAuthenticated ? (
                <>
                  <NotificationCenter />
                  <Button variant="ghost" size="sm" onClick={() => setShowDashboard(!showDashboard)}>
                    <User className="w-4 h-4 mr-2" />
                    {user?.name}
                  </Button>
                  <Button variant="ghost" size="sm" className="relative">
                    <ShoppingCart className="w-4 h-4" />
                    {cart.length > 0 && (
                      <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                        {cart.length}
                      </Badge>
                    )}
                  </Button>
                </>
              ) : (
                <Dialog open={showLogin} onOpenChange={setShowLogin}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <LogIn className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Welcome to Everything You Need</DialogTitle>
                      <DialogDescription>Choose your role to get started with a demo account</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3">
                      <Button
                        onClick={() => handleDemoLogin("student")}
                        className="w-full justify-start bg-blue-500 hover:bg-blue-600"
                      >
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Login as Student
                      </Button>
                      <Button
                        onClick={() => handleDemoLogin("adult")}
                        className="w-full justify-start bg-green-500 hover:bg-green-600"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Login as Adult
                      </Button>
                      <Button
                        onClick={() => handleDemoLogin("parent")}
                        className="w-full justify-start bg-purple-500 hover:bg-purple-600"
                      >
                        <Baby className="w-4 h-4 mr-2" />
                        Login as Parent
                      </Button>
                      <Button
                        onClick={() => handleDemoLogin("elderly")}
                        className="w-full justify-start bg-red-500 hover:bg-red-600"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Login as Elderly
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Input placeholder="Search..." className="w-full" />
                <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link href="#students" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Students
                </Link>
                <Link href="#adults" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Adults
                </Link>
                <Link href="#children" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Children
                </Link>
                <Link href="#elderly" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Elderly
                </Link>
                <div className="flex space-x-2 pt-2">
                  {isAuthenticated ? (
                    <>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        {user?.name}
                      </Button>
                      <Button variant="outline" size="sm">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => setShowLogin(true)}
                    >
                      Login
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-3 h-3 mr-1" />
              Trusted by 100K+ Users
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Everything You Need
              </span>
              <br />
              <span className="text-gray-700">In One Place</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover personalized experiences for students, adults, children, and elderly. From free courses to daily
              essentials, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => (!isAuthenticated ? setShowLogin(true) : setShowDashboard(true))}
              >
                {isAuthenticated ? "Go to Dashboard" : "Get Started Free"}
                <Zap className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Categories
                <Search className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-green-500" />
                Secure & Safe
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-blue-500" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1 text-purple-500" />
                Quality Assured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demographics Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your demographic to access personalized content, products, and services tailored just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demographics.map((demo) => (
              <Card
                key={demo.id}
                className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-2 hover:border-blue-300 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-purple-50"
                onClick={() => handleSectionClick(demo.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 ${demo.color} rounded-3xl mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                  >
                    <demo.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {demo.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">{demo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 transform group-hover:scale-105">
                    Explore {demo.title}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section id="students" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <GraduationCap className="w-3 h-3 mr-1" />
              For Students
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Free Learning Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access free programming courses, coding practice, and study materials to enhance your skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Free Courses */}
            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleSectionClick("students")}
            >
              <CardHeader>
                <BookOpen className="w-8 h-8 text-blue-500 mb-2" />
                <CardTitle>Free Courses</CardTitle>
                <CardDescription>Learn programming from basics to advanced</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Python Programming</li>
                  <li>• JavaScript & React</li>
                  <li>• Web Development</li>
                  <li>• Data Structures</li>
                </ul>
                <Button className="w-full mt-4">Start Learning</Button>
              </CardContent>
            </Card>

            {/* Coding Practice */}
            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleSectionClick("students")}
            >
              <CardHeader>
                <Code className="w-8 h-8 text-green-500 mb-2" />
                <CardTitle>Coding Practice</CardTitle>
                <CardDescription>Solve problems and improve your skills</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Algorithm Challenges</li>
                  <li>• Data Structure Problems</li>
                  <li>• Interview Preparation</li>
                  <li>• Progress Tracking</li>
                </ul>
                <Button className="w-full mt-4">Start Coding</Button>
              </CardContent>
            </Card>

            {/* Study Tools */}
            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleSectionClick("students")}
            >
              <CardHeader>
                <Gamepad2 className="w-8 h-8 text-purple-500 mb-2" />
                <CardTitle>Study Tools</CardTitle>
                <CardDescription>Essential tools for academic success</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• GPA Calculator</li>
                  <li>• Study Planner</li>
                  <li>• Note Taking</li>
                  <li>• Cheat Sheets</li>
                </ul>
                <Button className="w-full mt-4">Access Tools</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Adults Section */}
      <section id="adults" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Users className="w-3 h-3 mr-1" />
              For Adults
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Daily Essentials & Shopping</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover products tailored to your lifestyle and daily needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Men's Collection",
                items: ["Fashion", "Grooming", "Electronics", "Sports"],
                color: "bg-blue-500",
              },
              {
                title: "Women's Collection",
                items: ["Fashion", "Beauty", "Accessories", "Wellness"],
                color: "bg-pink-500",
              },
              { title: "Home & Living", items: ["Furniture", "Decor", "Kitchen", "Garden"], color: "bg-green-500" },
              { title: "Electronics", items: ["Smartphones", "Laptops", "Gadgets", "Audio"], color: "bg-purple-500" },
            ].map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleSectionClick("adults")}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-2`}>
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {category.items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">Shop Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Children Section */}
      <section id="children" className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Baby className="w-3 h-3 mr-1" />
              For Children
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Age-Appropriate Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Safe, educational, and fun products for every stage of childhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { age: "0-2 Years", items: ["Baby Care", "Toys", "Feeding", "Safety"], color: "bg-pink-400" },
              { age: "2-4 Years", items: ["Learning Toys", "Books", "Art Supplies", "Puzzles"], color: "bg-blue-400" },
              { age: "4-6 Years", items: ["Educational Games", "Sports", "Crafts", "Music"], color: "bg-green-400" },
              {
                age: "6-8 Years",
                items: ["Science Kits", "Board Games", "Books", "Building Sets"],
                color: "bg-yellow-400",
              },
              {
                age: "8-12 Years",
                items: ["Electronics", "Sports Gear", "Art Kits", "STEM Toys"],
                color: "bg-purple-400",
              },
            ].map((group, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleSectionClick("children")}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 ${group.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                  >
                    <Baby className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{group.age}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {group.items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" size="sm">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Elderly Section */}
      <section id="elderly" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-3 h-3 mr-1" />
              For Elderly
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Health & Daily Living Support</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Products and services designed for comfort, health, and independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Health Monitoring",
                icon: Stethoscope,
                items: ["Blood Pressure Monitors", "Glucose Meters", "Heart Rate Monitors", "Thermometers"],
                color: "bg-red-500",
              },
              {
                title: "Mobility Aids",
                icon: Heart,
                items: ["Walking Aids", "Wheelchairs", "Grab Bars", "Shower Chairs"],
                color: "bg-blue-500",
              },
              {
                title: "Daily Living",
                icon: Shield,
                items: ["Pill Organizers", "Emergency Alerts", "Comfort Products", "Easy-Use Tools"],
                color: "bg-green-500",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleSectionClick("elderly")}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-2`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>Essential products for health and comfort</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">Shop Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 24/7 Support Banner */}
          <div className="mt-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white text-center">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">24/7 Support Available</h3>
            <p className="text-red-100 mb-4">Our dedicated support team is always here to help you</p>
            <Button variant="secondary" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Everything You Need</span>
              </div>
              <p className="text-gray-400">
                Your one-stop platform for personalized experiences across all demographics.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#students" className="hover:text-white transition-colors">
                    Students
                  </Link>
                </li>
                <li>
                  <Link href="#adults" className="hover:text-white transition-colors">
                    Adults
                  </Link>
                </li>
                <li>
                  <Link href="#children" className="hover:text-white transition-colors">
                    Children
                  </Link>
                </li>
                <li>
                  <Link href="#elderly" className="hover:text-white transition-colors">
                    Elderly
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Everything You Need. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
