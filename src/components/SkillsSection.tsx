
import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCategory {
  title: string;
  skills: string[];
}

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            const skills = document.querySelectorAll('.skill-item');
            let delay = 0;
            
            skills.forEach((skill) => {
              setTimeout(() => {
                setVisibleSkills(prev => [...prev, skill.id]);
              }, delay);
              delay += 50;
            });
          }, 300);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend",
      skills: ["C#", ".Net Core", "ASP.Net", "Web API", "Web Service", "REST", "GraphQL", "Microservices", "ADO.NET", "EF", "Dapper", "SQL", "NoSQL"]
    },
    {
      title: "Frontend",
      skills: ["React", "Angular", "JavaScript", "jQuery", "Micro-frontend", "HTML", "CSS", "Material Design", "Flex"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Azure App Services", "Azure Logic Apps", "AWS EC2", "AWS Lambda", "Git", "BitBucket", "SSRS"]
    },
    {
      title: "Design Patterns",
      skills: [".Net Design Patterns", "Blazor"]
    }
  ];
  
  return (
    <section ref={sectionRef} className="py-20 px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-brand">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            A comprehensive overview of my technical capabilities and proficiency
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={cn(
                "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8",
                "opacity-0",
                index === 0 ? "animate-fade-in-delay-1" : 
                index === 1 ? "animate-fade-in-delay-2" : 
                index === 2 ? "animate-fade-in-delay-3" : 
                "animate-fade-in-delay-4"
              )}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    id={`${category.title}-${skill}`}
                    key={`${category.title}-${skill}`}
                    className={cn(
                      "skill-item flex items-center space-x-2 p-2 rounded-lg",
                      visibleSkills.includes(`${category.title}-${skill}`) ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 opacity-0 animate-fade-in-delay-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["English", "Hindi", "Punjabi"].map((language) => (
              <div 
                key={language}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-gray-900 dark:text-white font-medium">{language}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
