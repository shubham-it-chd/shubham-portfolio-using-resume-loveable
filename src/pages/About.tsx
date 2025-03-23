
import Layout from '@/components/Layout';
import AboutSection from '@/components/AboutSection';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout 
      title="About Kumar Shubham | Senior Full Stack Developer"
      description="Learn about Kumar Shubham's background, skills, and approach to full stack development with 9.5+ years of professional experience."
    >
      <div className="pt-24 pb-6 px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-brand">Me</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Learn more about my background, skills, and experience
            </p>
            
            <div className="flex items-center justify-center space-x-2 mt-4 text-sm">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
              <span className="text-brand">About</span>
            </div>
          </div>
        </div>
      </div>
      
      <AboutSection />
      
      <section className="py-20 px-8">
        <div className="container mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 opacity-0 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Approach to Work
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                As a Senior Full Stack Developer, I approach projects with a focus on delivering robust, 
                efficient solutions while maintaining code quality and readability. I believe in writing 
                clean, maintainable code that can be easily understood by other team members.
              </p>
              
              <p>
                My problem-solving methodology combines analytical thinking with creative solutions, 
                allowing me to tackle complex technical challenges effectively. I'm always eager to learn 
                new technologies and methodologies to stay at the cutting edge of development practices.
              </p>
              
              <p>
                I value collaboration and communication within teams, firmly believing that the best 
                solutions come from diverse perspectives working together. Throughout my career, I've 
                demonstrated adaptability in rapidly changing environments and technical requirements.
              </p>
              
              <p>
                Whether debugging complex issues with minimal documentation or architecting new systems 
                from the ground up, I bring a dedicated, detail-oriented approach to every project I work on.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Adaptability</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Quickly adapt to new technologies, requirements and environments
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Analytical approach to debugging and resolving complex technical issues
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Strong focus on teamwork and helping others succeed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
