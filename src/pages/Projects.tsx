import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import pdfExtractorImg from './pdf-extrator.png';
import n8nInfluencerImg from './N8N.png';
import signalMinerImg from './Signal Miner.png';
import inventoryAnalysisImg from './Inventory.png';
import flaskAppImg from './Todo List.png';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pdf Extrator',
      subtitle: 'Pdf sumarization with the file upload',
      description: 'Developed because finding the gap between the AI Technology.',
      image: pdfExtractorImg,
      tech: ['Python', 'Flask','My-sql'],
      github: 'https://github.com/Girishs07/pdf-text-extractor',
    },
    {
      id: 2,
      title: 'n8n-brand-influencer',
      subtitle: 'This project demonstrates the use of an agentic AI system built with n8n to automate and optimize influencer marketing.',
      description: 'Brands and marketers face significant challenges in efficiently identifying the right influencers, optimizing campaign performance, and measuring return on investment (ROI) in the fast-evolving influencer marketing landscape',
      image: n8nInfluencerImg,
      tech: ['Google APIs', 'n8n', 'Python', 'Local Memory'],
      github: 'https://github.com/Girishs07/n8n-brand-influencer',
    },
    {
      id: 3,
      title: 'Signal-Miner',
      subtitle: 'Extract and analyze hiring signals to detect early indicators of startup growth',
      description: 'Signal Miner uncovers startup growth trends by analyzing hiring patterns from LinkedIn job postings. It extracts signals like product launches, global expansion, leadership hires, and GTM shifts from Indian tech startup job data.',
      image: signalMinerImg,
      tech: ['Web Scraping', 'Charts', 'PowerBI', 'Notion'],
      github: 'https://github.com/Girishs07/Signal-Miner',
    },
    {
      id: 4,
      title: 'Inventory-Optimization-Analysis',
      subtitle: 'Analysing the data of the grocery store',
      description: 'Analyze retail inventory data to identify overstock issues, optimize stock levels, and improve inventory turnover rates',
      image: inventoryAnalysisImg,
      tech: ['Data Cleaning', 'Statistics', 'Data Analysis', 'B2B Solving'],
      github: 'https://github.com/Girishs07/Inventory-Optimization-Analysis',
    },
    {
      id: 5,
      title: 'Flask_App',
      subtitle: 'With the Python Flask Making an interactive to-do list with the my-sql database',
      description: 'This is a simple Flask application for managing a to-do list. The application is connected to a MySQL database, allowing users to add, update, and delete tasks.',
      image: flaskAppImg,
      tech: ['Python','SQL','Flask'],
      github: 'https://github.com/Girishs07/Flask_App',
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
            My <span className="text-gold">Projects</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
          A curated collection of projects showcasing my skills in data science, machine learning, and analytics to solve real-world problems across industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-charcoal rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white-smoke mb-1">{project.title}</h3>
                  <p className="text-gold text-sm">{project.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gold/20 text-gold text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-gold/10 text-gold py-2 px-4 rounded-lg hover:bg-gold/20 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Github Link
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;