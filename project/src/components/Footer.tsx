import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Hello Mahesh, I am from your Portfolio');
    const body = encodeURIComponent(
      'Hi,\n\nI came across your portfolio and would love to connect with you.\n\nBest regards'
    );
    window.location.href = `mailto:${import.meta.env.VITE_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            <a
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-saffron-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={24}
                className="text-saffron-600 dark:text-saffron-400 group-hover:text-blue-600 transition-colors duration-300"
              />
            </a>
            <a
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-saffron-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github
                size={24}
                className="text-saffron-600 dark:text-saffron-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
              />
            </a>
            <button
              onClick={handleEmailClick}
              className="group p-4 bg-gradient-to-br from-saffron-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail
                size={24}
                className="text-saffron-600 dark:text-saffron-400 group-hover:text-green-600 transition-colors duration-300"
              />
            </button>
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Mahesh Moka
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              Designed and developed with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
