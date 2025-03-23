
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-10 rounded-full border-2 border-brand flex items-center justify-center relative overflow-hidden">
            <span className="absolute h-full w-0.5 bg-brand"></span>
            <span className="font-display font-bold text-lg text-brand">KS</span>
          </div>
          <span className="text-lg font-medium hidden sm:block text-gray-900 dark:text-white">Kumar Shubham</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'nav-item text-sm font-medium transition-colors hover:text-brand',
                location.pathname === link.path 
                  ? 'text-brand active' 
                  : 'text-gray-600 dark:text-gray-300'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-900 dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-xl font-medium transition-colors',
                location.pathname === link.path 
                  ? 'text-brand' 
                  : 'text-gray-600 dark:text-gray-300'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
