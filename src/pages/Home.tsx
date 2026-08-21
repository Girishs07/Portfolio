import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, TrendingUp, Database, Brain } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen"
    >
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="mb-4 text-4xl font-bold text-white-smoke sm:text-5xl md:text-7xl">
                Girish  <span className="text-gold">Data Professional</span>
              </h1>
              <div className="flex items-center justify-center gap-3 text-gray sm:gap-4">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-lg sm:text-xl md:text-2xl">Data Science</span>
                <Database className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray sm:text-xl md:text-2xl"
            >
              Transforming complex data into actionable insights that drive business growth. 
              Specializing in machine learning, statistical analysis, and data visualization.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="/Girish -Associate Product Engineer.pdf"
                download
                className="inline-flex w-full items-center justify-center rounded-lg bg-gold px-6 py-3 font-semibold text-navy shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gold/90 sm:w-auto sm:px-8 sm:py-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
              
              <Link
                to="/projects"
                className="inline-flex w-full items-center justify-center rounded-lg border-2 border-gold px-6 py-3 font-semibold text-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-navy sm:w-auto sm:px-8 sm:py-4"
              >
                See My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative py-20 bg-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
                <Brain className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-3xl font-bold text-white-smoke mb-2">50+</h3>
              <p className="text-gray">Data Visualization</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
                <Database className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-3xl font-bold text-white-smoke mb-2">50K</h3>
              <p className="text-gray">Data Points Analyzed</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-3xl font-bold text-white-smoke mb-2">80%</h3>
              <p className="text-gray">Accuracy Rate</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;