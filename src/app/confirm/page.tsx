import React from 'react';
import Link from 'next/link';

const ConfirmPage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/bgser.jpg')`, backgroundSize: 'cover' }}>
      {/* Apply blur effect using the filter property */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/bgser.jpg')`, filter: 'blur(8px)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for better text readability */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Adjust this div to position the content slightly lower in the middle */}
        <div className="flex flex-col items-center justify-center space-y-6 mt-40">
          <h1 className="text-3xl text-white font-bold mb-4">You can now Login to book your appointment</h1>
          <Link href="/login" className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-white font-bold py-3 px-16 rounded-full text-xl hover:from-purple-600 hover:to-pink-600 transition duration-300 ease-in-out">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPage;
