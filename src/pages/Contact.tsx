
import Layout from '@/components/Layout';
import ContactSection from '@/components/ContactSection';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Layout 
      title="Contact Kumar Shubham | Full Stack Developer"
      description="Get in touch with Kumar Shubham for collaboration, professional inquiries, or job opportunities related to full stack development."
    >
      <div className="pt-24 pb-6 px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Contact <span className="text-brand">Me</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Get in touch for collaboration or inquiries
            </p>
            
            <div className="flex items-center justify-center space-x-2 mt-4 text-sm">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
              <span className="text-brand">Contact</span>
            </div>
          </div>
        </div>
      </div>
      
      <ContactSection />
    </Layout>
  );
};

export default Contact;
