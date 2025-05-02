import React from 'react';

const TestimonialCard = ({ testimony }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={testimony.img} alt={testimony.name} className="w-24 h-24 rounded-full mx-auto " />
      <h3 className="text-lg font-semibold text-center mt-4">{testimony.name}</h3>
      <p className="text-sm text-gray-600 text-center">{testimony.profesion}</p>
      <p className="text-xl font-semibold text-gray-800 text-center mt-2">{testimony.title}</p>
      <p className="text-base text-gray-700 mt-4">{testimony.testimony}</p>
    </div>
  );
};

export default TestimonialCard;

