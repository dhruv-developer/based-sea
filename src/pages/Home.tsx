import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to SkillChain</h1>
      <p className="text-xl mb-8">Verify, showcase, and enhance your skills with blockchain-powered credentialing.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Shield className="w-12 h-12 text-blue-500" />}
          title="Tamper-Proof Credentials"
          description="Store your certifications and qualifications securely on the blockchain."
        />
        <FeatureCard
          icon={<Award className="w-12 h-12 text-green-500" />}
          title="Skill Showcase"
          description="Display your verified skills to employers and organizations."
        />
        <FeatureCard
          icon={<BookOpen className="w-12 h-12 text-purple-500" />}
          title="Continuous Learning"
          description="Take assessments and engage in gamified learning to upskill."
        />
      </div>
      
      <Link to="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
        Get Started
      </Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Home;