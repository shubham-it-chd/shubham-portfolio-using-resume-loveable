
import Layout from '@/components/Layout';
import SkillsSection from '@/components/SkillsSection';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <Layout 
      title="Technical Skills | Kumar Shubham - Full Stack Developer" 
      description="Discover Kumar Shubham's comprehensive technical skills in backend technologies like C#, .NET, frontend frameworks including React and Angular, and cloud services."
    >
      <div className="pt-24 pb-6 px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-brand">Skills</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              A comprehensive overview of my technical capabilities
            </p>
            
            <div className="flex items-center justify-center space-x-2 mt-4 text-sm">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
              <span className="text-brand">Skills</span>
            </div>
          </div>
        </div>
      </div>
      
      <SkillsSection />
      
      <section className="py-20 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 opacity-0 animate-fade-in-delay-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Development
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I believe in continuous learning and staying updated with the latest technologies and best practices in the industry. Here's how I approach professional development:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-brand/10 p-1 rounded-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-brand"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Regular participation in online courses and technical workshops
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-brand/10 p-1 rounded-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-brand"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Following industry blogs, forums, and technical publications
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-brand/10 p-1 rounded-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-brand"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Contributing to open-source projects when time permits
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-brand/10 p-1 rounded-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-brand"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Building personal projects to explore new technologies
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 opacity-0 animate-fade-in-delay-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Soft Skills
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Technical skills are essential, but soft skills are equally important in delivering successful projects and working effectively in teams:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Team Collaboration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Working effectively with diverse teams
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Communication</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clear and effective in technical discussions
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Problem Solving</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Analytical approach to challenges
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Time Management</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Meeting deadlines consistently
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Adaptability</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Quick adjustment to changing requirements
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Mentoring</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Helping team members grow technically
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

export default Skills;
