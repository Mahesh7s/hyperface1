import { ExternalLink, Github } from 'lucide-react';
// import Farm from "../utils/Farm.png"
import Farm from "../utils/videos/Farm.mp4"
import Podcast from "../utils/videos/Podcast.mp4"
import Memory from "../utils/videos/Memory.mp4"
const Projects = () => {
  const projects = [
    {
      title: 'Farm-to-Kitchen Platform',
      description:
        'Farm to Kitchen is a comprehensive full-stack web application that connects local farmers directly with consumers. The platform enables farmers to showcase and sell their fresh produce while allowing consumers to browse, purchase, and communicate directly with farmers in real-time.',
      video: `${Farm}`,
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Tailwind CSS','Socket.IO'],
      liveUrl: 'https://farm-to-kitchen.netlify.app/',
      githubUrl: 'https://github.com/Mahesh7s/FarmtoKitchen_Project',
    },
    {
      title: 'PodCast Hub App',
      description:
        'A podcast platform designed for users, creators, and admins, providing seamless audio streaming, community engagement, and powerful creator tools. With the growing popularity of podcasts, PodHub offers audio uploads, subscriptions, loyalty rewards, and analytics, making it easier for creators to share content and for users to enjoy and interact with it.',
      video: `${Podcast}`,
      techStack: ['React','Material-UI','Node.js','Express','Cloudinary'],
      liveUrl: 'https://podcasthub7.netlify.app/',
      githubUrl: 'https://github.com/Mahesh7s/podhub_project/tree/main',
    },
    {
      title: 'MemoryLane-Preserve your Memeories',
      description:
        'MemoryLane_Personal is a full-stack multimedia timeline web application designed to help users preserve, organize, and relive their most cherished memories. The core idea is to provide a private, secure, and beautifully designed digital space where users can upload photos, videos, voice notes, and tag them by date, album, location, and event milestones.',
      video: `${Memory}`,
      techStack: ['HTML','CSS','Java Script','DOM','Firebase','Cloudinary'],
      liveUrl: 'https://memorylane7.netlify.app/',
      githubUrl: 'https://github.com/Mahesh7s/Unit4/tree/main/My_Memory_lane_Project',
    },
  
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center pb-10 mb-16 bg-gradient-to-r from-saffron-500 via-green-500 to-saffron-600 bg-clip-text text-transparent animate-fade-in">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-saffron-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up border border-gray-200 dark:border-gray-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48 sm:h-56">
               <video
    src={project.video}
    title={project.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    autoPlay
    loop
    muted
    playsInline
  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-300 transform hover:scale-110"
                  >
                    <ExternalLink size={24} className="text-saffron-600" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-300 transform hover:scale-110"
                  >
                    <Github size={24} className="text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 line-clamp-10 md:line-clamp-7 lg:line-clamp-8">
  {project.description}
</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-white dark:bg-gray-900 text-saffron-600 dark:text-saffron-400 rounded-full border border-saffron-300 dark:border-saffron-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white text-sm font-semibold rounded-lg hover:from-saffron-600 hover:to-saffron-700 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-saffron-500 dark:hover:border-saffron-500 transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
