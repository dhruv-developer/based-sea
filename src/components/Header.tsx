import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Shield size={24} />
          <span className="text-xl font-bold">SkillChain</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
            <li><Link to="/assessment" className="hover:text-blue-200">Skill Assessment</Link></li>
            <li><Link to="/learning" className="hover:text-blue-200">Learning</Link></li>
            <li><Link to="/profile" className="flex items-center hover:text-blue-200"><User size={18} className="mr-1" /> Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;