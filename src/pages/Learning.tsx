import React from 'react';
import { Book, Award, TrendingUp } from 'lucide-react';
import detectEthereumProvider from '@metamask/detect-provider';

const Learning: React.FC = () => {
  const courses = [
    { id: 1, title: "Advanced JavaScript Concepts", level: "Intermediate", xp: 500 },
    { id: 2, title: "React Hooks Mastery", level: "Advanced", xp: 750 },
    { id: 3, title: "Node.js Fundamentals", level: "Beginner", xp: 300 },
  ];

  // Function to handle MetaMask popup
  const handleMetaMaskConnect = async () => {
    const provider: any = await detectEthereumProvider();

    if (provider) {
      try {
        // Request account access (this will trigger the MetaMask popup)
        const accounts = await provider.request({ method: 'eth_requestAccounts' });
        console.log('Connected to MetaMask:', accounts[0]);
      } catch (error) {
        console.error('User rejected the connection request:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Learning Hub</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-blue-500" /> Your Progress
        </h2>
        <div className="flex items-center mb-4">
          <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <span className="text-sm font-medium">60%</span>
        </div>
        <p className="text-gray-600">Keep up the great work! You're making steady progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">Level: {course.level}</p>
            <div className="flex items-center justify-between">
              <span className="flex items-center text-yellow-500">
                <Award className="mr-1" size={18} />
                {course.xp} XP
              </span>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 flex items-center"
                onClick={handleMetaMaskConnect}
              >
                <Book className="mr-2" size={18} />
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300" onClick={handleMetaMaskConnect}>
          Explore More Courses
        </button>
      </div>
    </div>
  );
};

export default Learning;
