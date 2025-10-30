import {
  Code2,
  Server,
  Wrench,
  FileCode,
  Database,
  Layout,
  Layers,
  Palette,
  Box,
  GitBranch,
  Terminal,
  FileJson,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout size={32} />,
      skills: [
        { name: 'React.js', icon: <Code2 size={20} /> },
        { name: 'JavaScript', icon: <FileCode size={20} /> },
        { name: 'TypeScript', icon: <FileCode size={20} /> },
        { name: 'Redux', icon: <Layers size={20} /> },
        { name: 'Tailwind CSS', icon: <Palette size={20} /> },
        { name: 'HTML5', icon: <FileCode size={20} /> },
        { name: 'CSS3', icon: <Palette size={20} /> },
       ],
    },
    {
      title: 'Backend',
      icon: <Server size={32} />,
      skills: [
        { name: 'Node.js', icon: <Server size={20} /> },
        { name: 'Express.js', icon: <Server size={20} /> },
        { name: 'MongoDB', icon: <Database size={20} /> },
        { name: 'TypeScript', icon: <FileCode size={20} /> },
         { name: 'REST APIs', icon: <Box size={20} /> },
         { name: 'System Design', icon: <Layers size={20} /> },
      ],
    },
    {
      title: 'Tools',
      icon: <Wrench size={32} />,
      skills: [
        { name: 'VS Code', icon: <Terminal size={20} /> },
        { name: 'Git', icon: <GitBranch size={20} /> },
        { name: 'GitHub', icon: <GitBranch size={20} /> },
        { name: 'Postman', icon: <FileJson size={20} /> },
         { name: 'Figma', icon: <Palette size={20} /> },
       ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-saffron-50 via-white to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-saffron-500 via-green-500 to-saffron-600 bg-clip-text text-transparent animate-fade-in">
          Tools & Technologies I Work With
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-saffron-200 dark:border-saffron-800">
                <div className="p-3 bg-gradient-to-br from-saffron-500 to-green-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group/skill flex items-center gap-3 p-3 bg-gradient-to-r from-saffron-50 to-green-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:from-saffron-100 hover:to-green-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer border border-transparent hover:border-saffron-300 dark:hover:border-saffron-600"
                  >
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg text-saffron-600 dark:text-saffron-400 group-hover/skill:text-green-600 dark:group-hover/skill:text-green-400 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
