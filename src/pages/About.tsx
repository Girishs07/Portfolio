import { motion } from 'framer-motion';
import { Code, TrendingUp, Award, BookOpen, Users, Building, Calendar, MapPin, GraduationCap, Globe } from 'lucide-react';
import SkillChart from '../components/SkillChart';

// Experience Widget Component
const ExperienceWidget = () => {
  const experiences = [
    {
      company: "Syncner",
      duration: "7 mos",
      type: "Hybrid",
      positions: [
        {
          title: "Data Engineer/Data Analyst",
          type: "Internship",
          period: "Jul 2025 - Present • 2 mos",
          location: "Coimbatore South, Tamil Nadu, India",
          skills: ["Project Management", "Asana", "+1 skill"]
        },
        {
          title: "Business Data Analyst",
          type: "Trainee",
          period: "Feb 2025 - Jul 2025 • 6 mos",
          location: "Coimbatore, Tamil Nadu, India",
          skills: ["Notion Productivity Software", "Google Sheets", "+3 skills"]
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-charcoal rounded-2xl p-6 w-full"
    >
      {experiences.map((exp, expIndex) => (
        <div key={expIndex} className="space-y-4">
          {/* Company Header */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-500 rounded-lg p-2 flex-shrink-0">
              <Building className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white-smoke">{exp.company}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray">
                <span className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.duration}</span>
                </span>
                <span className="text-gold">{exp.type}</span>
              </div>
            </div>
          </div>

          {/* Positions */}
          <div className="ml-8 space-y-6">
            {exp.positions.map((position, posIndex) => (
              <motion.div
                key={posIndex}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: posIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-6 top-2 w-3 h-3 bg-gold rounded-full border-2 border-charcoal"></div>
                
                {/* Position content */}
                <div className="space-y-2">
                  <div>
                    <h4 className="text-white-smoke font-semibold text-base">
                      {position.title}
                    </h4>
                    <p className="text-gold text-sm font-medium">{position.type}</p>
                  </div>
                  
                  <p className="text-gray text-sm">{position.period}</p>
                  
                  <div className="flex items-center space-x-1 text-gray text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{position.location}</span>
                  </div>
                  
                  {/* Skills */}
                  <div className="flex items-start space-x-2 mt-3">
                    <Award className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                    <div className="flex flex-wrap gap-1">
                      {position.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-2 py-1 bg-gold/20 text-gold rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline line */}
                {posIndex < exp.positions.length - 1 && (
                  <div className="absolute -left-5 top-8 w-0.5 h-12 bg-gray/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const About = () => {
  const skills = [
    { name: 'Python', level: 70 },
    { name: 'Machine Learning', level: 60 },
    { name: 'SQL', level: 80 },
    { name: 'EXCEL', level: 80 },
    { name: 'POWER BI', level: 85 },
    { name: 'Data Science', level: 75 },
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Intro To Data Analytics',
      description: 'Simplilearn - Data Science Specialization',
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Published Research',
      description: 'International Journal for Science and Advance Research in Technology (IJSART)',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Team Leadership',
      description: 'Led a team of 16 data analysts for a trainee in the syncner',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white-smoke mb-6">
            About <span className="text-gold">Me</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Passionate about uncovering stories hidden in data and building intelligent systems that make a difference.
          </p>
        </motion.div>

        {/* Story Section with Experience Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-charcoal rounded-2xl p-8">
              <img
                src="/My ChatGPT image.png"
                alt="Girish S"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h2 className="text-2xl font-bold text-white-smoke text-center mb-4">
                Data Science Professional
              </h2>
              <p className="text-gray text-center">
                Fresher Looking For The Data Science Role.
              </p>
            </div>
            
            {/* Experience Widget */}
            <ExperienceWidget />

            {/* Languages Section - Moved here */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-charcoal rounded-2xl p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-5 w-5 text-gold" />
                <h4 className="text-lg font-semibold text-gold">Languages</h4>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="bg-charcoal/50 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-white-smoke font-medium">English</span>
                  <span className="text-gold text-sm">Professional working proficiency</span>
                </div>
                <div className="bg-charcoal/50 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-white-smoke font-medium">Tamil</span>
                  <span className="text-gold text-sm">Native or bilingual proficiency</span>
                </div>
                <div className="bg-charcoal/50 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-white-smoke font-medium">Hindi</span>
                  <span className="text-gold text-sm">Elementary proficiency</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white-smoke mb-4">My Journey</h3>
              <p className="text-gray leading-relaxed mb-6">
                Hi, I'm Girish S – a passionate Data Analyst and AI Enthusiast with experience in data visualization, ETL workflows, and AI-driven projects. I've also explored full-stack development (MERN) through internships and hands-on projects.
                My goal is to build intelligent, data-driven solutions and grow into the Data Science & AI domain, eventually leading my own company in this field.
              </p>
              
              {/* Education Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <GraduationCap className="h-5 w-5 text-gold" />
                  <h4 className="text-lg font-semibold text-gold">Education</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-charcoal/50 rounded-lg p-4 border-l-4 border-gold/50">
                    <h5 className="text-white-smoke font-medium">B.Tech, Artificial Intelligence & Data Science</h5>
                    <p className="text-gold text-sm font-medium">SNS Institutions</p>
                    <p className="text-gray text-sm">Nov 2022 - May 2026</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="text-xs px-2 py-1 bg-gold/20 text-gold rounded-full">Microsoft Office</span>
                      <span className="text-xs px-2 py-1 bg-gold/20 text-gold rounded-full">Decision-Making</span>
                      <span className="text-xs px-2 py-1 bg-gold/20 text-gold rounded-full">Design Thinking</span>
                    </div>
                  </div>
                  
                  <div className="bg-charcoal/50 rounded-lg p-4 border-l-4 border-blue-500/50">
                    <h5 className="text-white-smoke font-medium">HSC (Higher Secondary Certificate)</h5>
                    <p className="text-blue-400 text-sm font-medium">Little Flower Convent HR SEC School</p>
                    <p className="text-gray text-sm">Mar 2020 - Feb 2022 • Grade: 83%</p>
                    <p className="text-gray text-xs mt-1">Maths, Computer Science, Physics, Chemistry</p>
                    <div className="mt-2">
                      <p className="text-gray text-xs">🏀 District Winner in Basketball • Scout Member • Community Service</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">Resilience & Discipline</span>
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">Team Collaboration</span>
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">Event Organization</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-charcoal/50 rounded-lg p-4 border-l-4 border-green-500/50">
                    <h5 className="text-white-smoke font-medium">SSLC (Secondary School Leaving Certificate)</h5>
                    <p className="text-green-400 text-sm font-medium">Little Flower Convent HR SEC School</p>
                    <p className="text-gray text-sm">May 2019 - Mar 2020 • Grade: 70%</p>
                    <p className="text-gray text-xs mt-1">General Studies</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gold/20 p-3 rounded-lg">
                <Code className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white-smoke">Technical Excellence</h4>
                <p className="text-gray">Proficient in Python, SQL, and Power BI with a focus on scalable solutions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gold/20 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white-smoke">Business Impact</h4>
                <p className="text-gray">Track record of delivering insights that increased revenue by 25% and reduced costs by 30%.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white-smoke text-center mb-12">Technical Skills</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-gold mb-6">Skill Proficiency</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white-smoke">{skill.name}</span>
                      <span className="text-gold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray/20 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-gold to-gold/70 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SkillChart />
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white-smoke text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-charcoal rounded-xl p-6 text-center hover:bg-charcoal/80 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/20 rounded-lg mb-4 text-gold">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-white-smoke mb-2">{achievement.title}</h4>
                <p className="text-gray">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;