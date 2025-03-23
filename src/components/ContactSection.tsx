
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { sendEmail } from '@/utils/emailService';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        toast({
          title: "Message sent!",
          description: result.message,
          variant: "default",
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="text-brand">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Have a project in mind or want to discuss potential opportunities? Reach out to me!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 opacity-0 animate-fade-in-delay-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a 
                    href="mailto:shubham.it.chd@gmail.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors"
                  >
                    shubham.it.chd@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                  <a 
                    href="tel:+919779308242" 
                    className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors"
                  >
                    (+91) 97793-08242
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Hyderabad, India 500044
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Website & Profiles</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.shubhamit.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    https://www.shubhamit.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bold.pro/my/shubham-kumar-250320164912/344r" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    Bold Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 opacity-0 animate-fade-in-delay-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-medium rounded-md shadow-md transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
