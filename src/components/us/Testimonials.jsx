import React from 'react';
import testimony from '../../constants/testimonials';

const Testimonials = () => {
  return (
    <div id='testimony' className="min-h-screen items-center p-8 flex flex-wrap w-full bg-gradient-to-b from-gray-900 via-gray-700 to-gray-700">
      <div className="mx-auto w-full max-w-7xl px-4">
        <h2 className="text-4xl font-semibold text-center mb-8 text-white">Lo que dicen nuestros estudiantes</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimony.map((test) => (
            <div
              key={test.id}
              className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-3xl shadow-sm shadow-gray-300 backdrop-blur-xs w-full sm:w-[500px]" // Cambié aquí
            >
              {/* Foto */}
              <img
                src={test.img}
                alt={test.name}
                className="w-32 h-32 sm:w-20 sm:h-20 object-contain rounded-sm"
              />
              {/* Contenido */}
              <div className="flex flex-col gap-4 sm:gap-2">
                {/* Rating */}
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                {/* Fin Rating */}

                {/* Información del Cliente */}
                <div className="text-sm">
                  <h3 className="font-semibold text-black">{test.name}</h3>
                  <span className="text-gray-600">{test.profesion}</span>
                </div>
                {/* Fin Información del Cliente */}

                {/* Testimonio */}
                <p className="text-justify text-sm/relaxed font-medium text-gray-600">
                  {test.testimony}
                </p>
                {/* Fin Testimonio */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;




{/* <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Lo que dicen nuestros estudiantes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimony.map((test) => (
          <TestimonialCard key={test.id} testimony={test} />
        ))}
      </div>
    </div> */}