import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 SkillChain. All rights reserved.</p>
        <p className="mt-2">Powered by blockchain technology for secure and verifiable skill credentials.</p>
      </div>
    </footer>
  );
};

export default Footer;