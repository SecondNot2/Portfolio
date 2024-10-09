import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      name: 'Languages',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'C#', level: 70 },
        { name: 'Python', level: 70 },
        { name: 'Java', level: 40 },
      ],
    },
    {
      name: 'Frameworks',
      skills: [
        { name: 'ReactJS', level: 50 },
        { name: 'React Native', level: 55 },
        { name: 'Tailwind CSS', level: 60 },
        { name: 'Bootstrap', level: 70 },
      ],
    },
    {
      name: 'Database Management Systems',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'SQL Server', level: 75 },
        { name: 'MongoDB', level: 30 },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('skills.title')} | {t('siteTitle')}</title>
        <meta name="description" content={t('skills.description')} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-600 dark:text-primary-400">
          {t('skills.title')}
        </h1>
        {skillCategories.map((category) => (
          <div key={category.name} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-600 dark:text-secondary-400">
              {category.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-primary-600 dark:bg-primary-400 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;