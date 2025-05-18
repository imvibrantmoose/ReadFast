import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const About: React.FC = () => {
  const stats = [
    { label: "Active Users", value: "10,000+" },
    { label: "Average WPM Improvement", value: "40%" },
    { label: "Countries", value: "120+" },
    { label: "Reading Tests Completed", value: "1M+" },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "Reading enthusiast with a background in cognitive psychology and education technology.",
    },
    {
      name: "Sarah Chen",
      role: "Chief Product Officer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      bio: "Former educator with expertise in curriculum development and learning methodologies.",
    },
    {
      name: "Marcus Williams",
      role: "Head of AI Research",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      bio: "AI researcher specializing in natural language processing and educational technology.",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO
        title="About ReadFast - Our Mission and Team"
        description="Learn about ReadFast's mission to improve reading speed and comprehension worldwide, and meet the team behind the platform."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Our Mission
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                At ReadFast, we're on a mission to help people worldwide improve
                their reading speed and comprehension, unlocking their full
                potential for learning and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">Join Our Community</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  ReadFast began in 2023 when our founder, Alex Johnson,
                  recognized the need for an accessible, science-based approach
                  to improving reading speed and comprehension.
                </p>
                <p>
                  After struggling with slow reading throughout college, Alex
                  discovered techniques that dramatically improved his reading
                  speed while maintaining comprehension. Inspired by this
                  transformation, he assembled a team of educators,
                  psychologists, and technologists to create ReadFast.
                </p>
                <p>
                  Today, ReadFast has helped thousands of users worldwide read
                  faster, learn more efficiently, and rediscover the joy of
                  reading.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-lg overflow-hidden aspect-video"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80"
                alt="Person reading a book"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Values
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Accessible Education</h3>
              <p className="text-muted-foreground">
                We believe that reading improvement tools should be accessible
                to everyone, regardless of background or resources.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Community-Driven</h3>
              <p className="text-muted-foreground">
                We foster a supportive community where users can share
                experiences, tips, and celebrate each other's progress.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Impact</h3>
              <p className="text-muted-foreground">
                We're committed to improving literacy and reading efficiency
                worldwide, breaking down language and educational barriers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The passionate individuals behind ReadFast's mission and
              technology
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-card rounded-lg overflow-hidden shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Join Our Reading Revolution
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start your journey to faster reading and better comprehension
                today.
              </p>
              <Button size="lg" className="px-8">
                Get Started For Free
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
