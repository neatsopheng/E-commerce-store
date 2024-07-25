import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 sticky">
      <div className="container  mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">MyCompany</span>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
        <div>
          <p className="text-sm">&copy; 2024 Supermarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
