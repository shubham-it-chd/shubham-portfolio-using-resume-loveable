
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-lg opacity-0 animate-fade-in">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full mb-8">
          <span className="text-6xl text-red-500 dark:text-red-400">404</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-medium rounded-md shadow-md transition-all duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
