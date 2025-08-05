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
              <h1 className="text-5xl md:text-7xl font-bold text-white-smoke mb-4">
                Girish  <span className="text-gold">Data Professional</span>
              </h1>
              <div className="flex items-center justify-center space-x-4 text-gray">
                <TrendingUp className="h-6 w-6" />
                <span className="text-xl md:text-2xl">Data Science</span>
                <Database className="h-6 w-6" />
              </div>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray max-w-3xl mx-auto mb-8 leading-relaxed"
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
                className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
              
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 hover:scale-105"
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