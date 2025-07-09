"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  MapPin,
  Home,
  User,
  Briefcase,
  Code,
  MessageCircle,
  Star,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "../src/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../src/components/card";
import { Badge } from "../src/components/badge";
import { Input } from "../src/components/input";
import { Textarea } from "../src/components/textarea";

const LeetCodeIcon = () => (
  <svg
    className="h-5 w-5 relative z-10"
    viewBox="0 0 50 50"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M29.8 7.6L14.2 23.2C12.2 25.2 12.2 28.2 14.2 30.2L29.8 45.8" />
    <path d="M35.8 14L43.6 21.8C45.6 23.8 45.6 26.8 43.6 28.8L35.8 36.6" />
  </svg>
);

// Mock data (in real app, this would come from Django API)
import tourBuilderImg from "./assets/tourbuilder.png";
import mediFlowImg from "./assets/Mediflow.png";
import quizImg from "./assets/quiz.png";
import ideaForgeImg from "./assets/ideaforge.png";

const mockProjects = [
  {
    id: 1,
    title: "Tour Builder App",
    description:
      "Interactive tool with live editing experience. Includes tour steps, dynamic editor, responsive UI, animations, and live preview.",
    tech_stack: ["TypeScript", "JavaScript", "Tailwind CSS"],
    featured: true,
    image: tourBuilderImg,
    live_link: "https://tour-builder.netlify.app/",
    github_link: "https://github.com/saqibbbbb/tour_builder",
    year: "2025",
  },
  {
    id: 2,
    title: "MediFlowAI App",
    description:
      "AI-powered platform for smart healthcare: symptom-based queue, ambulance tracking, vacancy detection, AI scheduler, and chatbot.",
    tech_stack: ["HTML5", "CSS", "JavaScript"],
    featured: true,
    image: mediFlowImg,
    live_link: "https://mediflow1.netlify.app/",
    github_link: "https://github.com/saqibbbbb/MediFlow",
    year: "2025",
  },
  {
    id: 3,
    title: "Quiz App",
    description:
      "Multiple-choice quiz app with timer, score tracking, dynamic questions, and responsive UI.",
    tech_stack: ["React.js", "Tailwind CSS"],
    featured: true,
    image: quizImg,
    live_link: "https://qu1z1.netlify.app/",
    github_link: "https://github.com/saqibbbbb/quiz_app",
    year: "2025",
  },
  {
    id: 4,
    title: "IdeaForge",
    description:
      "Frontend-only platform to explore and share startup ideas. Includes login/register, clean UI, and responsive homepage.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    featured: true,
    image: ideaForgeImg,
    live_link: "https://papaya-croquembouche-4e1119.netlify.app/",
    github_link: "https://github.com/saqibbbbb/ideaforge",
    year: "2025",
  },
];

const mockSkills = {
  frontend: [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "TypeScript", level: 85, icon: "📘" },
    { name: "Tailwind CSS", level: 98, icon: "🎨" },
    { name: "Vue.js", level: 80, icon: "💚" },
  ],
  backend: [
    { name: "Django", level: 92, icon: "🐍" },
    { name: "Python", level: 95, icon: "🐍" },
    { name: "PostgreSQL", level: 85, icon: "🐘" },
    { name: "REST APIs", level: 90, icon: "🔗" },
    { name: "GraphQL", level: 75, icon: "📊" },
  ],
  tools: [
    { name: "Git", level: 95, icon: "📝" },
    { name: "Docker", level: 80, icon: "🐳" },
    { name: "AWS", level: 75, icon: "☁️" },
    { name: "Linux", level: 85, icon: "🐧" },
    { name: "Figma", level: 70, icon: "🎨" },
  ],
};

const mockExperience = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description:
      "Led development of scalable web applications using Django and React, mentored junior developers",
    duration: "Present",
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Built responsive web applications and RESTful APIs, improved system performance by 40%",
    duration: "1 year",
  },
  {
    year: "2022",
    title: "Frontend Developer",
    company: "Creative Agency",
    description:
      "Developed modern user interfaces and collaborated with design teams on UX improvements",
    duration: "1 year",
  },
  {
    year: "2021",
    title: "Junior Developer",
    company: "StartUp Hub",
    description:
      "Started my journey in web development, learned modern frameworks and best practices",
    duration: "1 year",
  },
];

const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

// Enhanced Typing Effect Hook with Looping
const useTypingEffect = (
  text,
  typingSpeed = 100,
  pauseDuration = 2000,
  deletingSpeed = 50
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          if (displayText.length > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex(0);
          }
        } else {
          if (currentIndex < text.length) {
            setDisplayText((prev) => prev + text[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          } else {
            setIsPaused(true);
          }
        }
      },
      isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    text,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    isDeleting,
    isPaused,
    displayText,
  ]);

  return displayText;
};

// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          <div className="w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const typedText = useTypingEffect("Hi, I'm Mohd Saqib", 150, 3000, 75);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Vertical Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full z-50 group">
        {/* Hover trigger area - invisible but detects hover */}
        <div className="absolute left-0 top-0 w-4 h-full z-10"></div>

        {/* Sidebar Container */}
        <div className="relative h-full">
          {/* Sidebar - hidden by default, appears on hover */}
          <div className="w-16 h-full bg-black/20 dark:bg-black/40 backdrop-blur-md border-r border-white/10 dark:border-white/5 shadow-2xl transition-all duration-300 transform -translate-x-full group-hover:translate-x-0">
            {/* Logo/Brand */}
            <div className="p-4 border-b border-white/10 dark:border-white/5">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/143735628?s=400&u=16d72de10ddf46caef9e4f981e663279bac3857e&v=4" // <-- Replace with your actual image path
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="py-6 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <div key={item.id} className="relative group/item">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center justify-center px-4 py-3 text-left transition-all duration-300 relative ${
                        isActive
                          ? "text-white bg-white/20"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-r-full" />
                      )}

                      {/* Icon */}
                      <Icon className="h-5 w-5" />
                    </button>

                    {/* Tooltip */}
                    <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-2 rounded-lg opacity-0 group/item-hover:opacity-100 pointer-events-none transition-all duration-200 z-20 whitespace-nowrap shadow-lg">
                      {item.label}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dark Mode Toggle */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="relative group/toggle">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-full justify-center p-1 transition-colors duration-300
    ${
      darkMode
        ? "bg-white text-black hover:bg-white/80"
        : "bg-gray-900 text-white hover:bg-gray-800"
    }`}
                >
                  {darkMode ? (
                    <Sun className="h-7 w-7" />
                  ) : (
                    <Moon className="h-7 w-7" />
                  )}
                </Button>

                {/* Tooltip for dark mode */}
                <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-2 rounded-lg opacity-0 group/toggle-hover:opacity-100 pointer-events-none transition-all duration-200 z-20 whitespace-nowrap shadow-lg">
                  {darkMode ? "Light Mode" : "Dark Mode"}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
        >
          {mobileMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Mohd Saqib
              </h2>
            </div>
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center px-3 py-2 text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                  variant="ghost"
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full justify-start"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5 mr-3" />
                  ) : (
                    <Moon className="h-5 w-5 mr-3" />
                  )}
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - no left margin since navbar is hidden */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 relative overflow-hidden"
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated Gradient Orbs */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Geometric Shapes */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rotate-45 animate-spin-slow"></div>
            <div className="absolute top-40 right-32 w-6 h-6 bg-white/15 rounded-full animate-bounce delay-300"></div>
            <div className="absolute bottom-32 left-32 w-3 h-3 bg-white/25 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-5 h-5 bg-white/20 rounded-full animate-ping delay-700"></div>

            {/* Floating Particles */}
            <FloatingParticles />
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>

          <div className="text-center text-white px-4 relative z-10">
            <div className="animate-in fade-in duration-1000">
              {/* Profile Image with Enhanced Design */}
              <div className="mb-8">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  {/* Rotating Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-bounce p-1">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 p-1">
                      <img
                        src="https://avatars.githubusercontent.com/u/143735628?s=400&u=16d72de10ddf46caef9e4f981e663279bac3857e&v=4"
                        alt="Mohd Saqib"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-12 -right-6 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute top-1/2 -right-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-ping">
                    <Star className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Typing Effect Title */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-in slide-in-from-bottom duration-1000 delay-200">
                  <span className="inline-block">
                    {typedText}
                    <span className="animate-blink text-yellow-400">|</span>
                  </span>
                </h1>
              </div>

              {/* Subtitle with Enhanced Animation */}
              <div className="text-xl md:text-2xl mb-8 opacity-90 animate-in slide-in-from-bottom duration-1000 delay-1500">
                <div className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent font-semibold">
                    Aspiring Software Developer | React & DSA Enthusiast
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur-sm"></div>
                </div>
              </div>

              {/* Enhanced Description */}
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-80 animate-in slide-in-from-bottom duration-1000 delay-2000 leading-relaxed">
                Passionate about creating{" "}
                <span className="text-yellow-300 font-semibold">beautiful</span>
                ,{" "}
                <span className="text-green-300 font-semibold">functional</span>{" "}
                web interfaces with{" "}
                <span className="text-blue-300 font-semibold">
                  modern technologies
                </span>
                . I specialize in React-based frontend development and
                continually enhance my{" "}
                <span className="text-purple-300 font-semibold">
                  problem-solving
                </span>{" "}
                skills through Java and DSA.
              </p>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-1000 delay-2500">
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Briefcase className="mr-2 h-5 w-5" />
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 transition-all duration-300 transform hover:scale-105 shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Get In Touch</span>
                </Button>
              </div>

              {/* Social Links with Enhanced Design */}
              <div className="flex justify-center space-x-6 mt-12 animate-in slide-in-from-bottom duration-1000 delay-3000">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/saqibbbbb",
                    label: "GitHub",
                    color: "hover:bg-gray-600",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/mo-saqib/",
                    label: "LinkedIn",
                    color: "hover:bg-blue-600",
                  },
                  {
                    icon: Mail,
                    href: "mailto:mo.saqib369@gmail.com",
                    label: "Email",
                    color: "hover:bg-red-600",
                  },
                  {
                    icon: X,
                    href: "https://x.com/Mohd_Saqib_",
                    label: "X",
                    color: "hover:bg-gray-800",
                  },
                  {
                    icon: Code,
                    href: "https://leetcode.com/u/mosaqib369/",
                    label: "Leetcode",
                    color: "hover:bg-yellow-500",
                  },
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={` w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white ${social.color} transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg relative overflow-hidden group`}
                    style={{ animationDelay: `${3000 + index * 200}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                    <social.icon className="h-5 w-5 relative z-10" />
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center animate-bounce">
                <div className="text-white/70 text-sm mb-2 animate-pulse">
                  Scroll Down
                </div>
                <ChevronDown
                  className="h-8 w-8 text-white opacity-70 cursor-pointer hover:opacity-100 transition-opacity"
                  onClick={() => scrollToSection("about")}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-800/50 bg-[size:20px_20px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-in fade-in duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
                About Me
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-ping"></div>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm"></div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                I'm a 3rd-year B.Tech student at NSUT, Delhi (2023–2027),
                passionate about crafting user-friendly web interfaces using
                modern technologies like React, Tailwind CSS, and TypeScript.
                I’ve built 10+ frontend projects and have been consistently
                solving Data Structures & Algorithms problems for the past year
                on platforms like LeetCode and GeeksforGeeks using Java.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-in slide-in-from-left duration-1000">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 p-1 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    <img
                      src="https://avatars.githubusercontent.com/u/143735628?s=400&u=16d72de10ddf46caef9e4f981e663279bac3857e&v=4"
                      alt="Mohd Saqib"
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                  {/* Enhanced Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce">
                    <div className="text-center">
                      <div className="text-lg font-bold">400+</div>
                      <div className="text-xs"> DSA </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                    <div className="text-center">
                      <div className="text-xl font-bold">6</div>
                      <div className="text-xs">Projects</div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-spin-slow">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-8 animate-in slide-in-from-right duration-1000">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative">
                    My Journey
                    <Sparkles className="absolute -top-1 -right-6 h-5 w-5 text-purple-500 animate-pulse" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    My journey began with a curiosity for how websites function.
                    Over time, I learned HTML, CSS, JavaScript, and advanced
                    into React and Tailwind CSS to build real-world frontend
                    projects. In parallel, I’ve dedicated the past year to
                    mastering Data Structures and Algorithms using Java through
                    consistent practice on platforms like LeetCode and
                    GeeksforGeeks. My goal is to grow as a software developer by
                    continuously learning and building impactful projects.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl relative overflow-hidden group hover:scale-105 transition-transform">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        1+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Years of DSA
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl relative overflow-hidden group hover:scale-105 transition-transform">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        6
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Projects
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    Education
                    <div className="ml-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                  </h4>

                  <div className="flex items-start space-x-4 animate-in slide-in-from-right duration-500 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        2023
                      </div>
                    </div>

                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        B.Tech in Mechanical Engineering with specialization in
                        Electric Vehicles (MEEV)
                      </h5>
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                        Netaji Subhas University of Technology, Delhi
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Currently in 3rd year, pursuing technical and software
                        development skills alongside academic coursework.
                      </p>
                      <span className="inline-block mt-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400">
                        2023 – 2027
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-in fade-in duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
                Featured Projects
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-full animate-ping"></div>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm"></div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Here are some of my recent projects that showcase my skills in
                Software Development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {mockProjects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <div
                    key={project.id}
                    className="group animate-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <a
                            href={project.live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              size="sm"
                              className="bg-black/60 backdrop-blur-sm border-white/30 text-white hover:bg-black/70 relative overflow-hidden group/btn"
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                              <ExternalLink className="h-4 w-4 relative z-10" />
                            </Button>
                          </a>
                          <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              size="sm"
                              className="bg-black/60 backdrop-blur-sm border-white/30 text-white hover:bg-black/70 relative overflow-hidden group/btn"
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                              <Github className="h-4 w-4 relative z-10" />
                            </Button>
                          </a>
                        </div>
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                            Featured
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tech_stack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-0 hover:scale-105 transition-transform relative overflow-hidden group/badge"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-500"></div>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>

            {/* Other Projects Grid */}
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {mockProjects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <div
                    key={project.id}
                    className="group animate-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <Card className="h-full overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 right-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="p-1.5 h-auto"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="p-1.5 h-auto"
                          >
                            <Github className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-gray-900 dark:text-white">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1">
                          {project.tech_stack.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-0"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech_stack.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.tech_stack.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div> */}
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-800/50 bg-[size:30px_30px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-in fade-in duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
                Skills & Technologies
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full animate-ping"></div>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm"></div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                My technical expertise spans across various technologies and
                frameworks
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="animate-in slide-in-from-bottom duration-1000">
                <Card className="h-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-gray-900 dark:text-white text-xl flex items-center justify-center">
                      Frontend
                      <div className="ml-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                    </CardTitle>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-center text-gray-700 dark:text-gray-300">
                    <div>React.js</div>
                    <div>Tailwind CSS</div>
                    <div>TypeScript</div>
                    <div>JavaScript (ES6+)</div>
                    <div>HTML5 & CSS3</div>
                  </CardContent>
                </Card>
              </div>

              {/* Programming & DSA */}
              <div
                className="animate-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: "200ms" }}
              >
                <Card className="h-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-gray-900 dark:text-white text-xl flex items-center justify-center">
                      Programming & DSA
                      <div className="ml-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                    </CardTitle>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-center text-gray-700 dark:text-gray-300">
                    <div>Java (DSA)</div>
                    <div>C++ / C</div>
                    <div>SQL</div>
                    <div>Object-Oriented Programming (OOPs)</div>
                    <div>Data Structures & Algorithms</div>
                  </CardContent>
                </Card>
              </div>

              {/* Tools & Others */}
              <div
                className="animate-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: "400ms" }}
              >
                <Card className="h-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-gray-900 dark:text-white text-xl flex items-center justify-center">
                      Tools & Others
                      <div className="ml-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                    </CardTitle>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-center text-gray-700 dark:text-gray-300">
                    <div>Git & GitHub</div>
                    <div>DBMS</div>
                    <div>REST APIs</div>
                    <div>Operating Systems</div>
                    <div>OpenAI API / Generative AI</div>
                    <div>Netlify</div>
                    <div>NLP</div>
                    <div>Soft Skills: Communication, Leadership</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 relative overflow-hidden"
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Floating Geometric Shapes */}
            <div className="absolute top-32 right-32 w-4 h-4 bg-white/20 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-32 left-32 w-6 h-6 bg-white/15 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-20 w-3 h-3 bg-white/25 rotate-45 animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-in fade-in duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
                Get In Touch
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
              </h2>
              <div className="w-24 h-1 bg-white/30 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-white/50 rounded-full blur-sm"></div>
              </div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                I'm always open to discussing new opportunities and interesting
                projects
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8 animate-in slide-in-from-left duration-1000">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    Let's Connect
                    <Sparkles className="ml-2 h-6 w-6 text-yellow-300 animate-pulse" />
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-white/90 p-4 bg-white/10 backdrop-blur-sm rounded-xl relative overflow-hidden group hover:bg-white/20 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <Mail className="h-6 w-6 text-white relative z-10" />
                      <div className="relative z-10">
                        <div className="font-semibold">Email</div>
                        <div className="text-sm">mo.saqib369@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-white/90 p-4 bg-white/10 backdrop-blur-sm rounded-xl relative overflow-hidden group hover:bg-white/20 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <MapPin className="h-6 w-6 text-white relative z-10" />
                      <div className="relative z-10">
                        <div className="font-semibold">Location</div>
                        <div className="text-sm">Delhi</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    Follow Me
                    <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/saqibbbbb",
                        label: "GitHub",
                        color: "hover:bg-gray-600",
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/mo-saqib/",
                        label: "LinkedIn",
                        color: "hover:bg-blue-600",
                      },
                      {
                        icon: Mail,
                        href: "mailto:mo.saqib369@gmail.com",
                        label: "Email",
                        color: "hover:bg-red-600",
                      },
                    ].map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg ${social.color} relative overflow-hidden group`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                        <social.icon className="h-6 w-6 relative z-10" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="animate-in slide-in-from-right duration-1000">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-white text-xl flex items-center">
                      Send a Message
                      <Zap className="ml-2 h-5 w-5 text-yellow-300 animate-pulse" />
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      I'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 transition-colors"
                      />
                      <Input
                        placeholder="Last Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 transition-colors"
                      />
                    </div>
                    <Input
                      placeholder="Email"
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 transition-colors"
                    />
                    <Input
                      placeholder="Subject"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 transition-colors"
                    />
                    <Textarea
                      placeholder="Your message..."
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 transition-colors resize-none"
                    />
                    <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg font-semibold py-3 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <Mail className="mr-2 h-5 w-5 relative z-10" />
                      <span className="relative z-10">Send Message</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 dark:bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent relative">
                  Mohd Saqib
                  <div className="absolute -top-1 -right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
                </h3>
                <p className="text-gray-400 mt-2">
                  Software Developer & Tech Enthusiast
                </p>
              </div>

              <div className="flex justify-center space-x-6 mb-8">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "#", label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>

              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400">
                  &copy; 2025 Mohd Saqib. All rights reserved.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Built with React, Vite, and Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
