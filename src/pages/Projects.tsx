import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';
import FashionShop from '../public/images/FashionShop.png';
import Portfolio from '../public/images/Portfolio.png';

interface Project {
  id: number;
  title: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

interface Category {
  name: string;
  color: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Fashion Website',
      descriptionKey: 'fashionWebsite',
      image: FashionShop,
      tags: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      category: 'Web Development',
      liveUrl: 'https://example.com/fashion-website',
      githubUrl: 'https://github.com/SecondNot2/202-Fashion-Web',
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      descriptionKey: 'portfolioWebsite',
      image: Portfolio,
      tags: ['TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'],
      category: 'Web Development',
      liveUrl: 'https://202-portfolio.netlify.app/',
      githubUrl: 'https://github.com/SecondNot2/Portfolio',
    },
  ];

  const categories: Category[] = [
    { name: 'all', color: '#3B82F6' },
    { name: 'webDevelopment', color: '#EF4444' },
    { name: 'mobileApplications', color: '#10B981' },
    { name: 'desktopSoftware', color: '#F59E0B' },
    { name: 'dataScience', color: '#6366F1' },
    { name: 'artificialIntelligence', color: '#8B5CF6' },
    { name: 'internetOfThings', color: '#EC4899' },
    { name: 'gameDevelopment', color: '#14B8A6' },
    { name: 'cloudComputing', color: '#06B6D4' },
    { name: 'cybersecurity', color: '#64748B' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Helmet>
        <title>{t('projects.title')} | {t('siteTitle')}</title>
        <meta name="description" content={t('projects.description')} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-600 dark:text-primary-400">
          {t('projects.title')}
        </h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 flex flex-wrap justify-center"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category.name)}
              className={`m-2 px-4 py-2 rounded-full text-white transition-colors duration-300`}
              style={{ backgroundColor: category.color }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`projects.categories.${category.name}`)}
            </motion.button>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {t(`projects.projectDescriptions.${project.descriptionKey}`)}
                    </p>
                    <div className="flex flex-wrap mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded mr-2 mb-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex items-center">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary flex items-center">
                        <Github size={16} className="mr-2" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {t('projects.noProjects')}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Projects;
