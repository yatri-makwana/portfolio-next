"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    technologies: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    technologies: ["React Native", "Flutter", "iOS", "Android", "Expo"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Supabase"]
  },
  {
    category: "DevOps",
    icon: <Code className="w-6 h-6" />,
    technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "Kubernetes"]
  },
  {
    category: "Design",
    icon: <Palette className="w-6 h-6" />,
    technologies: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design"]
  }
]

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovation Inc.",
    period: "2022 - Present",
    description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and architected microservices solutions."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect user interfaces."
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description: "Built responsive web applications and mobile apps. Focused on performance optimization and user experience improvements."
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I&apos;m a passionate full-stack developer with 5+ years of experience building 
              modern web applications. I love turning complex problems into simple, 
              beautiful solutions.
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Skills Section */}
          <BlurFade delay={0.4}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Personal Info */}
          <BlurFade delay={0.6}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                My Journey
              </h3>
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My journey in software development started with a curiosity about how 
                  websites work. What began as tinkering with HTML and CSS has evolved 
                  into a passion for creating full-stack applications that solve real-world problems.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I specialize in modern JavaScript frameworks, cloud technologies, and 
                  database design. I&apos;m always eager to learn new technologies and stay 
                  up-to-date with industry best practices.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  When I&apos;m not coding, you can find me contributing to open-source projects, 
                  writing technical blogs, or exploring the latest in web development trends.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Experience Section */}
        <BlurFade delay={0.8}>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
