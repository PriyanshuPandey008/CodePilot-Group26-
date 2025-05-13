
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import FeatureCard from '../components/FeatureCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle, 
  Github, 
  Gauge, 
  Cpu, 
  Activity 
} from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Security Scans',
    description: 'Detect vulnerabilities and security flaws in your code before they become problems.'
  },
  {
    icon: CheckCircle,
    title: 'Best Practices',
    description: 'Get recommendations aligned with industry standard best practices and coding conventions.'
  },
  {
    icon: Github,
    title: 'Github Syncs',
    description: 'Seamlessly integrate with your GitHub repositories for continuous code reviews.'
  },
  {
    icon: Gauge,
    title: 'Performance Syncs',
    description: 'Identify performance bottlenecks and get optimization suggestions.'
  },
  {
    icon: Cpu,
    title: 'AI Powered Fields',
    description: 'Leverage advanced AI to analyze your code and provide intelligent feedback.'
  },
  {
    icon: Activity,
    title: 'Health Score',
    description: 'Get a comprehensive health score to track the quality of your codebase over time.'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary tracking-tight">
            AI Powered code review in seconds
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Integrated GEMINI 2.0 Flash which can review 1000 lines of a code at a time
          </p>
          <p className="text-md md:text-lg text-gray-600 mb-8">
            Get instant feedback on bugs, security flaws, and best practices directly in the workflow
          </p>
          <Link to="/signup">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-light hover:opacity-90">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            "CodePilot cuts out review time by 60%"
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Index;
