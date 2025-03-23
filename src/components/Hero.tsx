
import { ArrowDownCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-2">
            Full Stack Developer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Kumar <span className="text-brand">Shubham</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Senior Full Stack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed">
            Well-qualified Full Stack Developer with 9.5+ years of experience. Skilled in C#, Angular, React, JavaScript, Microservices, and more.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand hover:bg-brand-dark transition duration-300 ease-in-out"
            >
              Contact Me
            </Link>
            <Link 
              to="/experience" 
              className="inline-flex items-center justify-center px-6 py-3 border border-brand rounded-md shadow-sm text-base font-medium text-brand bg-transparent hover:bg-brand/5 transition duration-300 ease-in-out"
            >
              My Experience
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center opacity-0 animate-fade-in-delay-1">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-brand/20 to-brand-light/20 flex items-center justify-center">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white dark:bg-gray-900 p-2 shadow-xl">
                <div className="w-full h-full rounded-full border-4 border-brand flex items-center justify-center relative overflow-hidden">
                  <span className="absolute h-full w-1 bg-brand"></span>
                  <div className="flex flex-col items-center justify-center text-brand z-10">
                    <span className="text-6xl md:text-7xl font-display font-bold">K</span>
                    <span className="text-6xl md:text-7xl font-display font-bold">S</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg">
              <p className="text-sm font-medium text-center">9.5+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="/about" aria-label="Scroll down">
          <ArrowDownCircle className="h-10 w-10 text-brand opacity-80" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
