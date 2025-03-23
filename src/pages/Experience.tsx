
import Layout from '@/components/Layout';
import ExperienceSection from '@/components/ExperienceSection';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <Layout 
      title="Experience | Kumar Shubham - Full Stack Developer"
      description="Explore Kumar Shubham's professional experience as a Senior Full Stack Developer across multiple companies including Insight Software, Wipro, FIS, and JnG IT Solutions."
    >
      <div className="pt-24 pb-6 px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-brand">Experience</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              A detailed look at my professional journey and accomplishments
            </p>
            
            <div className="flex items-center justify-center space-x-2 mt-4 text-sm">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
              <span className="text-brand">Experience</span>
            </div>
          </div>
        </div>
      </div>
      
      <ExperienceSection />

      <section className="py-20 px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key <span className="text-brand">Accomplishments</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 opacity-0 animate-fade-in-delay-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Projects & Contributions
              </h3>
              
              <ul className="space-y-4 mt-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-brand/10 p-1 rounded-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-brand"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Documented and Migrated .Net Framework project to .Net Core
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-brand/10 p-1 rounded-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-brand"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Integrated third-party APIs to enhance functionality and improve overall user experience
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-brand/10 p-1 rounded-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-brand"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed functional databases, applications and servers to support websites on back-end
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-brand/10 p-1 rounded-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-brand"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Setup new acquired projects and helped with project comprehension
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 opacity-0 animate-fade-in-delay-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Recognition & Achievements
              </h3>
              
              <div className="mt-4 space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    MAD (Make a Difference) Award
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Received while working at FIS for exceptional contribution to projects and team success
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Technical Leadership
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Helped team members complete their sprint work on time and mentored junior developers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
