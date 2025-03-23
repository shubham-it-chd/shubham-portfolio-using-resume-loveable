
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import { TooltipProvider } from "@/components/ui/tooltip";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ 
  children, 
  title = "Kumar Shubham | Senior Full Stack Developer",
  description = "Kumar Shubham - Senior Full Stack Developer with 9.5+ years of expertise in C#, .NET, React, Angular, JavaScript, Microservices, and more."
}: LayoutProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // For structured data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kumar Shubham",
    "jobTitle": "Senior Full Stack Developer",
    "description": "Well-qualified Full Stack Developer with 9.5+ years of experience.",
    "knowsAbout": ["C#", ".NET", "React", "Angular", "JavaScript", "Microservices"],
    "url": "https://lovable.dev"
  };

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={`https://lovable.dev${currentPath}`} />
          <script type="application/ld+json">
            {JSON.stringify(personSchema)}
          </script>
        </Helmet>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Layout;
