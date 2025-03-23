
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const [animateItems, setAnimateItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animating items with a delay
          setTimeout(() => {
            setAnimateItems(prev => [...Array(5).keys()]);
          }, 300);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Insight Software",
      location: "Hyderabad, India (Remote)",
      period: "12/2023 to CURRENT",
      description: [
        "Comprehend the entire project line by line through debugging, even in the absence of documentation.",
        "Setup new project acquired project",
        "Helping DevOps team to keep the Cloud and On-prem project up and running",
        "Helping other Team Members to complete there sprint work on time.",
        "Reviewed code, debugged problems, and corrected issues.",
        "Developed functional databases, applications and servers to support websites on back-end.",
        "Integrated third-party APIs to enhance functionality and improve overall user experience on web platforms and Windows Excel and Word Clients."
      ]
    },
    {
      title: "Sr. Software Engineer",
      company: "Wipro - Blackstone",
      location: "Gurugram, Haryana",
      period: "11/2020 to 12/2023",
      description: [
        "Company Overview: Wipro Limited is a leading global information technology, consulting and business process services company",
        "Wipro harnesses the power of cognitive computing, hyper-automation, robotics, cloud, analytics and emerging technologies to help our clients adapt to the digital world and make them successful",
      ]
    },
    {
      title: "Sr. Software Engineer",
      company: "FIS",
      location: "Mohali",
      period: "04/2018 to 11/2020",
      description: [
        "Company Overview: FIS(Fidelity Information Services) is the world's largest global provider dedicated to financial technology solutions",
        "FIS empowers the financial world with software, services, consulting and outsourcing solutions focused on retail and institutional banking, payments, asset and wealth management, risk and compliance, trade enablement, transaction processing and record-keeping",
      ]
    },
    {
      title: "Sr. Software Engineer",
      company: "JnG IT Solutions",
      location: "Mohali",
      period: "07/2015 to 04/2018",
      description: [
        "Company Overview: It's a software development company which provides custom services to clients and mainly focuses on the development of parcel delivery services",
      ]
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-brand">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            A chronological history of my professional career path
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:translate-x-0 translate-x-4"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 md:w-1/2"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-0 h-4 w-4 rounded-full bg-brand border-4 border-white dark:border-gray-900 transform md:translate-x-0 md:-translate-x-2 z-10"></div>
                
                <div 
                  className={`ml-12 md:ml-0 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg md:w-1/2 timeline-card ${
                    animateItems.includes(index) ? 'animate-fade-in' : ''
                  } ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                      <p className="text-brand font-medium">{experience.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{experience.location}</p>
                    </div>
                    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      <Calendar className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{experience.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {experience.description.map((item, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
