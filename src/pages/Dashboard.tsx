import React from 'react';
import { Award, BookOpen, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const skills = [
    { name: 'JavaScript', level: 'Advanced', lastVerified: '2024-03-15' },
    { name: 'React', level: 'Intermediate', lastVerified: '2024-02-28' },
    { name: 'Node.js', level: 'Beginner', lastVerified: '2024-03-10' },
  ];

  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon', date: '2023-11-20' },
    { name: 'Google Cloud Professional', issuer: 'Google', date: '2023-09-05' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Skill Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-blue-500" /> Verified Skills
          </h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index} className="mb-2 pb-2 border-b last:border-b-0">
                <span className="font-medium">{skill.name}</span> - {skill.level}
                <br />
                <span className="text-sm text-gray-600">Last verified: {skill.lastVerified}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2 text-green-500" /> Certifications
          </h2>
          <ul>
            {certifications.map((cert, index) => (
              <li key={index} className="mb-2 pb-2 border-b last:border-b-0">
                <span className="font-medium">{cert.name}</span>
                <br />
                <span className="text-sm text-gray-600">Issued by {cert.issuer} on {cert.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-purple-500" /> Skill Improvement Suggestions
        </h2>
        <ul className="list-disc list-inside">
          <li>Take an advanced React course to level up your skills</li>
          <li>Practice Node.js with real-world projects to gain experience</li>
          <li>Consider getting a TypeScript certification to complement your JavaScript skills</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;