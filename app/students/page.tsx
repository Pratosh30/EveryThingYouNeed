"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  BookOpen,
  Code,
  Trophy,
  Clock,
  Star,
  Play,
  CheckCircle,
  Target,
  Zap,
  Calculator,
  Calendar,
  FileText,
  Brain,
  Globe,
  GitBranch,
  Lightbulb,
  Users,
  TrendingUp,
  BookMarked,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function StudentsPage() {
  const [activeTab, setActiveTab] = useState("courses")
  const [selectedCourse, setSelectedCourse] = useState(null)

  const courses = [
    {
      id: 1,
      title: "Python Programming Fundamentals",
      description: "Learn Python from scratch with hands-on projects and real-world applications",
      duration: "8 weeks",
      level: "Beginner",
      students: "12.5K",
      rating: 4.8,
      progress: 0,
      instructor: "Dr. Sarah Johnson",
      modules: 24,
      projects: 6,
      certificate: true,
      skills: ["Variables", "Functions", "OOP", "Data Structures", "File Handling"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "JavaScript & React Development",
      description: "Build modern web applications with React and JavaScript ES6+",
      duration: "10 weeks",
      level: "Intermediate",
      students: "8.2K",
      rating: 4.9,
      progress: 0,
      instructor: "Mark Thompson",
      modules: 32,
      projects: 8,
      certificate: true,
      skills: ["ES6+", "React", "Hooks", "State Management", "API Integration"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Master DSA for coding interviews and competitive programming",
      duration: "12 weeks",
      level: "Advanced",
      students: "15.3K",
      rating: 4.7,
      progress: 0,
      instructor: "Prof. Alex Chen",
      modules: 40,
      projects: 10,
      certificate: true,
      skills: ["Arrays", "Trees", "Graphs", "Dynamic Programming", "Sorting"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      description: "Complete web development with MERN stack",
      duration: "16 weeks",
      level: "Advanced",
      students: "6.8K",
      rating: 4.8,
      progress: 0,
      instructor: "Lisa Rodriguez",
      modules: 48,
      projects: 12,
      certificate: true,
      skills: ["MongoDB", "Express", "React", "Node.js", "Authentication"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Machine Learning Basics",
      description: "Introduction to ML with Python and scikit-learn",
      duration: "14 weeks",
      level: "Intermediate",
      students: "9.1K",
      rating: 4.6,
      progress: 0,
      instructor: "Dr. Michael Park",
      modules: 36,
      projects: 8,
      certificate: true,
      skills: ["Pandas", "NumPy", "Scikit-learn", "Data Visualization", "Model Training"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Mobile App Development",
      description: "Build iOS and Android apps with React Native",
      duration: "12 weeks",
      level: "Intermediate",
      students: "7.3K",
      rating: 4.7,
      progress: 0,
      instructor: "Emma Wilson",
      modules: 30,
      projects: 6,
      certificate: true,
      skills: ["React Native", "Navigation", "State Management", "API Integration", "Publishing"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const codingChallenges = [
    {
      id: 1,
      title: "Two Sum Problem",
      difficulty: "Easy",
      category: "Arrays",
      solved: false,
      attempts: 0,
      description: "Find two numbers in an array that add up to a target sum",
      timeLimit: "30 min",
      points: 10,
    },
    {
      id: 2,
      title: "Binary Tree Traversal",
      difficulty: "Medium",
      category: "Trees",
      solved: false,
      attempts: 0,
      description: "Implement inorder, preorder, and postorder traversal",
      timeLimit: "45 min",
      points: 25,
    },
    {
      id: 3,
      title: "Dynamic Programming - Fibonacci",
      difficulty: "Hard",
      category: "DP",
      solved: false,
      attempts: 0,
      description: "Optimize fibonacci calculation using dynamic programming",
      timeLimit: "60 min",
      points: 50,
    },
    {
      id: 4,
      title: "String Manipulation",
      difficulty: "Easy",
      category: "Strings",
      solved: false,
      attempts: 0,
      description: "Reverse words in a string while preserving spaces",
      timeLimit: "25 min",
      points: 15,
    },
    {
      id: 5,
      title: "Graph Shortest Path",
      difficulty: "Hard",
      category: "Graphs",
      solved: false,
      attempts: 0,
      description: "Find shortest path between two nodes using Dijkstra's algorithm",
      timeLimit: "75 min",
      points: 75,
    },
    {
      id: 6,
      title: "Stack Implementation",
      difficulty: "Medium",
      category: "Data Structures",
      solved: false,
      attempts: 0,
      description: "Implement a stack with min() operation in O(1) time",
      timeLimit: "40 min",
      points: 30,
    },
  ]

  const studyTools = [
    {
      title: "GPA Calculator",
      description: "Calculate your GPA with different grading systems",
      icon: Calculator,
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      features: ["Multiple grading scales", "Semester tracking", "Export reports"],
    },
    {
      title: "Study Planner",
      description: "Plan and track your study schedule effectively",
      icon: Calendar,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      features: ["Calendar integration", "Reminder notifications", "Progress tracking"],
    },
    {
      title: "Note Taking",
      description: "Organize and sync your notes across devices",
      icon: FileText,
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      features: ["Rich text editor", "Cloud sync", "Search functionality"],
    },
    {
      title: "Memory Palace",
      description: "Improve memory with visualization techniques",
      icon: Brain,
      color: "bg-gradient-to-r from-red-500 to-red-600",
      features: ["Memory techniques", "Practice exercises", "Progress analytics"],
    },
    {
      title: "Code Editor",
      description: "Online code editor with syntax highlighting",
      icon: Code,
      color: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      features: ["Multiple languages", "Auto-completion", "Live preview"],
    },
    {
      title: "Flashcards",
      description: "Create and study with digital flashcards",
      icon: BookMarked,
      color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      features: ["Spaced repetition", "Image support", "Sharing options"],
    },
  ]

  const resources = [
    {
      title: "Programming Cheat Sheets",
      description: "Quick reference guides for popular languages",
      icon: FileText,
      category: "Reference",
      items: 25,
    },
    {
      title: "Interview Preparation",
      description: "Get ready for technical interviews",
      icon: Target,
      category: "Career",
      items: 150,
    },
    {
      title: "Career Guidance",
      description: "Plan your tech career path",
      icon: TrendingUp,
      category: "Career",
      items: 40,
    },
    {
      title: "Study Groups",
      description: "Join collaborative learning communities",
      icon: Users,
      category: "Community",
      items: 50,
    },
    {
      title: "Coding Best Practices",
      description: "Write clean, maintainable code",
      icon: Code,
      category: "Skills",
      items: 75,
    },
    {
      title: "Project Ideas",
      description: "Build impressive portfolio projects",
      icon: Lightbulb,
      category: "Projects",
      items: 100,
    },
    {
      title: "Tech News & Trends",
      description: "Stay updated with latest technology",
      icon: Globe,
      category: "News",
      items: 200,
    },
    {
      title: "Open Source Projects",
      description: "Contribute to open source communities",
      icon: GitBranch,
      category: "Community",
      items: 80,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Students Hub
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">
                <Trophy className="w-3 h-3 mr-1" />
                Level 1 Scholar
              </Badge>
              <Button
                variant="outline"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:shadow-lg"
              >
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg">
              <Zap className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Free Learning Platform</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Master Your Skills
              </span>
              <br />
              <span className="text-gray-700">Build Your Future</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access premium programming courses, practice coding challenges, and use advanced study tools to excel in
              your academic and professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Learning Now
                <Play className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 bg-transparent"
              >
                Explore Courses
                <BookOpen className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Free Courses", value: "100+", icon: BookOpen, color: "from-blue-500 to-blue-600" },
              { label: "Coding Problems", value: "2000+", icon: Code, color: "from-green-500 to-green-600" },
              { label: "Active Students", value: "50K+", icon: Users, color: "from-purple-500 to-purple-600" },
              { label: "Success Rate", value: "98%", icon: Trophy, color: "from-yellow-500 to-orange-500" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0"
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg">
              <TabsTrigger
                value="courses"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Free Courses
              </TabsTrigger>
              <TabsTrigger
                value="coding"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Code className="w-4 h-4 mr-2" />
                Coding Practice
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Study Tools
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white transition-all duration-300"
              >
                <FileText className="w-4 h-4 mr-2" />
                Resources
              </TabsTrigger>
            </TabsList>

            {/* Enhanced Free Courses Tab */}
            <TabsContent value="courses" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <Dialog key={course.id}>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-0 overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-8 h-8 text-white ml-1" />
                            </div>
                          </div>
                          <div className="absolute top-4 left-4">
                            <Badge
                              variant={
                                course.level === "Beginner"
                                  ? "secondary"
                                  : course.level === "Intermediate"
                                    ? "default"
                                    : "destructive"
                              }
                              className="bg-white/90 text-gray-800"
                            >
                              {course.level}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4 flex items-center bg-white/90 rounded-full px-2 py-1">
                            <Star className="w-3 h-3 text-yellow-500 mr-1" />
                            <span className="text-xs font-medium text-gray-800">{course.rating}</span>
                          </div>
                        </div>
                        <CardHeader className="pb-4">
                          <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                            {course.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 line-clamp-2">{course.description}</CardDescription>
                          <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {course.duration}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {course.students}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {course.skills.slice(0, 3).map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {course.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{course.skills.length - 3} more
                              </Badge>
                            )}
                          </div>
                          <Progress value={course.progress} className="mb-4" />
                          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform group-hover:scale-105">
                            {course.progress > 0 ? "Continue Learning" : "Start Course"}
                          </Button>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{course.title}</DialogTitle>
                        <DialogDescription className="text-lg">{course.description}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{course.modules}</div>
                            <div className="text-sm text-gray-600">Modules</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{course.projects}</div>
                            <div className="text-sm text-gray-600">Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">{course.students}</div>
                            <div className="text-sm text-gray-600">Students</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-600">{course.rating}</div>
                            <div className="text-sm text-gray-600">Rating</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">What you'll learn:</h4>
                          <div className="flex flex-wrap gap-2">
                            {course.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500">
                            Enroll Now - Free
                          </Button>
                          <Button variant="outline">Preview Course</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            {/* Enhanced Coding Practice Tab */}
            <TabsContent value="coding" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Coding Challenges
                  </h3>
                  <div className="space-y-6">
                    {codingChallenges.map((challenge, index) => (
                      <Card
                        key={challenge.id}
                        className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0"
                      >
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <h4 className="font-bold text-lg">{challenge.title}</h4>
                                <Badge
                                  variant={
                                    challenge.difficulty === "Easy"
                                      ? "secondary"
                                      : challenge.difficulty === "Medium"
                                        ? "default"
                                        : "destructive"
                                  }
                                  className={
                                    challenge.difficulty === "Easy"
                                      ? "bg-green-100 text-green-800"
                                      : challenge.difficulty === "Medium"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                  }
                                >
                                  {challenge.difficulty}
                                </Badge>
                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                  {challenge.category}
                                </Badge>
                              </div>
                              <p className="text-gray-600 mb-3">{challenge.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {challenge.timeLimit}
                                </div>
                                <div className="flex items-center">
                                  <Trophy className="w-4 h-4 mr-1" />
                                  {challenge.points} points
                                </div>
                                <div>Attempts: {challenge.attempts}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 ml-6">
                              {challenge.solved && <CheckCircle className="w-6 h-6 text-green-500" />}
                              <Button
                                size="lg"
                                className={
                                  challenge.solved
                                    ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                                }
                              >
                                {challenge.solved ? "Review Solution" : "Solve Challenge"}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <Card className="sticky top-24 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Your Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">0/500</div>
                        <p className="text-gray-600">Problems Solved</p>
                      </div>
                      <Progress value={0} className="h-3" />
                      <div className="space-y-3">
                        {[
                          { label: "Easy", solved: 0, total: 150, color: "bg-green-500" },
                          { label: "Medium", solved: 0, total: 250, color: "bg-yellow-500" },
                          { label: "Hard", solved: 0, total: 100, color: "bg-red-500" },
                        ].map((level, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className={`w-3 h-3 ${level.color} rounded-full mr-2`}></div>
                              <span className="font-medium">{level.label}</span>
                            </div>
                            <span className="text-gray-600">
                              {level.solved}/{level.total}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t">
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold text-purple-600">0</div>
                          <div className="text-sm text-gray-600">Total Points</div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500">
                          View Leaderboard
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Enhanced Study Tools Tab */}
            <TabsContent value="tools" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studyTools.map((tool, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-0 overflow-hidden"
                  >
                    <div className={`h-2 ${tool.color}`}></div>
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-20 h-20 ${tool.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                      >
                        <tool.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-300">
                        {tool.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {tool.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform group-hover:scale-105">
                        Open Tool
                        <Zap className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Enhanced Resources Tab */}
            <TabsContent value="resources" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0"
                  >
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <resource.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-orange-600 transition-colors duration-300">
                        {resource.title}
                      </CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                      <Badge variant="outline" className="mt-2 bg-orange-50 text-orange-700 border-orange-200">
                        {resource.items} items
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                        Access Resource
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who are already building their future with our comprehensive learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Start Learning Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 transition-all duration-300 bg-transparent"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
