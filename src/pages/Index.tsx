
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <Layout 
      title="Kumar Shubham | Senior Full Stack Developer"
      description="Kumar Shubham is a Senior Full Stack Developer with 9.5+ years of experience in C#, Angular, React, JavaScript, and more."
    >
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
