import { GraduationCap } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Full Stack Web Development',
      institution: 'Masai School',
      duration: 'February,2025 - Present',
    },
    {
      degree: 'Bachelor of Science in Mathematics,Physics and Computer Science',
      institution: 'Sri Sai Baba National Degree College, Ananthapur',
      duration: '2022 - 2025',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-saffron-500 via-green-500 to-saffron-600 bg-clip-text text-transparent animate-fade-in">
          About Me
        </h2>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-16 animate-slide-up">
          <p>
            I am a passionate Full Stack Developer with expertise in building modern web
            applications. With a strong foundation in both frontend and backend technologies, I
            create scalable, efficient, and user-friendly solutions that solve real-world problems.
          </p>
          <p>
           My journey in software development began during my undergraduate studies, where I developed a passion for building impactful digital solutions. After graduation, I joined Masai’s Full Stack Web Development course, gaining hands-on experience with technologies like React, Redux, JavaScript, Node.js, Express, and Mongoose. I’ve built responsive UIs, secure authentication systems, and RESTful APIs, strengthening both my frontend and backend development skills.
          </p>
          <p>
            I believe in writing clean, maintainable code and staying up-to-date with the latest
            technologies and industry best practices. When I'm not coding, you can find me
            contributing to open-source projects, learning new technologies, or sharing my knowledge
            with the developer community.
          </p>
        </div>

        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-saffron-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up border border-saffron-200 dark:border-gray-600"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 p-3 bg-white dark:bg-gray-900 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-saffron-600 dark:text-saffron-400" size={24} />
                </div>
                <div className="pr-12">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {edu.degree}
                  </h4>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-4 py-2 bg-saffron-600 dark:bg-saffron-500 text-white text-sm font-semibold rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
