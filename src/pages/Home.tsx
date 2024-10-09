import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('home.title')} | {t('siteTitle')}</title>
        <meta name="description" content={t('home.description')} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-primary-600 dark:text-primary-400">
          {t('home.greeting')}
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          {t('home.intro')}
        </p>
        <Link
          to="/projects"
          className="btn btn-primary flex items-center space-x-2"
        >
          <span>{t('home.cta')}</span>
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </>
  );
};

export default Home;