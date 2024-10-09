import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('notFound.title')} | {t('siteTitle')}</title>
        <meta name="description" content={t('notFound.description')} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-6xl font-bold mb-4 text-primary-600 dark:text-primary-400">404</h1>
        <p className="text-xl mb-8 text-center">{t('notFound.message')}</p>
        <Link to="/" className="btn btn-primary flex items-center space-x-2">
          <Home size={20} />
          <span>{t('notFound.homeButton')}</span>
        </Link>
      </motion.div>
    </>
  );
};

export default NotFound;