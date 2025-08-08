import { motion } from 'framer-motion';
import { Code, TrendingUp, Award, BookOpen, Users } from 'lucide-react';
import SkillChart from '../components/SkillChart';


const About = () => {
  const skills = [
    { name: 'Python', level: 70 },
    { name: 'Machine Learning', level: 60 },
    { name: 'SQL', level: 80 },
    { name: 'EXCEL', level: 80 },
    { name: 'POWER BI', level: 85 },
    { name: 'AWS', level: 75 },
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

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              <p className="text-gray leading-relaxed mb-4">
              ✨ My journey began with a love for solving puzzles and understanding how things work. In college, I discovered data science and realized how powerful data can be in telling stories and driving decisions. I completed a degree in Computer Science, took online courses in machine learning and SQL, and gained hands-on experience through two internships where I helped analyze customer data and build dashboards.
              </p>
              <p className="text-gray leading-relaxed">
              🛠️ I built a sales analytics dashboard that helped a small business track their KPIs and developed a Python app that automates expense tracking from bank statements.I’m currently focused on building robust analytics pipelines and visualizations, with the aspiration to help organizations make smarter, data-driven decisions.
                
              </p>
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