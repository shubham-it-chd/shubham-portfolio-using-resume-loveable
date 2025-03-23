
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-brand flex items-center justify-center relative overflow-hidden">
                <span className="absolute h-full w-0.5 bg-brand"></span>
                <span className="font-display font-bold text-lg text-brand">KS</span>
              </div>
              <span className="text-lg font-medium text-gray-900 dark:text-white">Kumar Shubham</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Senior Full Stack Developer with expertise in both frontend and backend technologies.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Hyderabad, India 500044
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand" />
                <a 
                  href="tel:+919779308242" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand transition-colors"
                >
                  (+91) 97793-08242
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand" />
                <a 
                  href="mailto:shubham.it.chd@gmail.com" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand transition-colors"
                >
                  shubham.it.chd@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="h-4 w-4 text-brand" />
                <a 
                  href="https://www.shubhamit.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand transition-colors"
                >
                  https://www.shubhamit.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Kumar Shubham. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.shubhamit.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand transition-colors"
              aria-label="Website"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://bold.pro/my/shubham-kumar-250320164912/344r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand transition-colors"
              aria-label="Bold Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
