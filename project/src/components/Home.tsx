import { useState, useEffect } from 'react';
import { Download, Mail, Linkedin, Github, Code2 } from 'lucide-react';
import My_Profile from "../utils/My_Profile.jpg"
import Mahesh_Moka_resume from "../utils/Mahesh_Moka_resume.pdf"
const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-saffron-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-start order-1 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-saffron-400 to-green-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src={`${My_Profile}`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left order-2 lg:order-2 space-y-6 animate-slide-up">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Mahesh Moka
              </h1>
              <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-saffron-500 via-green-500 to-saffron-600 bg-clip-text text-transparent animate-fade-in">
                  {roles[currentRole]}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href={`${Mahesh_Moka_resume}`}
                download
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-saffron-600 dark:text-saffron-400 font-semibold rounded-full shadow-lg border-2 border-saffron-500 hover:bg-saffron-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Mail size={20} className="group-hover:animate-bounce" />
                Contact Info
              </button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start pt-4">
              <a
                href={import.meta.env.VITE_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Linkedin
                  size={24}
                  className="text-saffron-600 dark:text-saffron-400 group-hover:text-blue-600"
                />
              </a>
              <a
                href={import.meta.env.VITE_LEETCODE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Code2
                  size={24}
                  className="text-saffron-600 dark:text-saffron-400 group-hover:text-orange-600"
                />
              </a>
              <a
                href={import.meta.env.VITE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Github
                  size={24}
                  className="text-saffron-600 dark:text-saffron-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
