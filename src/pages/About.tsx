import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';
import profile from '../public/images/Avatar.jpg';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t('about.title')} | {t('siteTitle')}
        </title>
        <meta name="description" content={t('about.description')} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-600 dark:text-primary-400">
          {t('about.title')}
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={profile}
              alt={t('about.imageAlt')}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div>
            <p className="text-lg mb-4">{t('about.paragraph1')}</p>
            <p className="text-lg mb-4">{t('about.paragraph2')}</p>
            <p className="text-lg mb-6">{t('about.paragraph3')}</p>
            <a
              href="/path-to-your-resume.pdf"
              download
              className="btn btn-primary flex items-center space-x-2"
            >
              <FileText size={20} />
              <span>{t('about.downloadResume')}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
