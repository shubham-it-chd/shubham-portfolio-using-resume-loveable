
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-brand">Summary</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Get to know more about my experience, skills and approach to work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 opacity-0 animate-fade-in-delay-1">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Well-qualified Full Stack Developer familiar with wide range of programming 
              utilities and languages. Knowledgeable of backend and frontend development 
              requirements. Handles any part of process with ease. Collaborative team 
              player with excellent technical abilities offering 9.5 years of related 
              experience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Skilled in C#, Angular React, JavaScript, Microservices, Micro Frontend, API, 
              SQL, etc. with strong focus on team collaboration and delivering impactful results. 
              Adaptable, reliable, and effective in meeting changing project needs while ensuring 
              high-quality outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 opacity-0 animate-fade-in-delay-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-brand/10 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-brand" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Professional Experience</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  9.5+ years of experience in Full Stack Development across multiple industries
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-brand/10 p-3 rounded-full">
                <Award className="h-6 w-6 text-brand" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Awards & Recognition</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  MAD (Make a Difference) award at FIS for exceptional contribution
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-brand/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-brand" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Education</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  B.C.A from R.S.D College, Ferozepur, Punjab with 68% GPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
