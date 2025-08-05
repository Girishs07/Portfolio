import React from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-charcoal rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white-smoke hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl font-bold text-white-smoke mb-2">{project.title}</h2>
            <p className="text-gold text-lg">{project.subtitle}</p>
          </div>
        </div>

        <div className="p-8">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-navy/50 rounded-xl">
              <TrendingUp className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="text-gray text-sm">Accuracy</p>
              <p className="text-2xl font-bold text-white-smoke">{project.metrics.accuracy}</p>
            </div>
            <div className="text-center p-4 bg-navy/50 rounded-xl">
              <Users className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="text-gray text-sm">Business Impact</p>
              <p className="text-2xl font-bold text-white-smoke">{project.metrics.impact}</p>
            </div>
            <div className="text-center p-4 bg-navy/50 rounded-xl">
              <Calendar className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="text-gray text-sm">Timeline</p>
              <p className="text-2xl font-bold text-white-smoke">{project.metrics.timeline}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white-smoke mb-4">Project Overview</h3>
            <p className="text-gray leading-relaxed mb-4">{project.fullDescription}</p>
          </div>

          {/* Challenges & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-gold mb-3">Challenges</h4>
              <p className="text-gray leading-relaxed">{project.challenges}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gold mb-3">Solution</h4>
              <p className="text-gray leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white-smoke mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gold/20 text-gold rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-navy transition-colors"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;