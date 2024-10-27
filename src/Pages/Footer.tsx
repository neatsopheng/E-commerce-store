import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 w-screen text-white py-6">
      <div className="container  mx-auto flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-start md:items-center px-10">
        <div className="flex md:flex-row flex-col items-center gap-5">
          <span className="text-lg font-semibold">Suphengmarket</span>
          <nav className=" gap-2 flex flex-col md:flex-row">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
        <div>
          <p className='italic py-2'>NSopheng</p>
          <p>Contact Us</p>
          <div className='flex flex-col items-start'>
            <p>Tel: 016 397 341</p>
            <p>Email: nsopheng04@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="text-sm">&copy; 2024 Supermarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
