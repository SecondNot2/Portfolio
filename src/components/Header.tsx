import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLinks = () => (
    <>
      <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('header.home')}</Link>
      <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('header.about')}</Link>
      <Link to="/skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('header.skills')}</Link>
      <Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('header.projects')}</Link>
      <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</Link>
    </>
  );

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {t('header.logo')}
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={t('header.toggleTheme')}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={t('header.toggleLanguage')}
            >
              <Globe size={20} />
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  aria-label={t('header.toggleTheme')}
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  aria-label={t('header.toggleLanguage')}
                >
                  <Globe size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;