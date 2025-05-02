import React from 'react'
import categorias from '../../constants/category';

const Categories = () => {
  console.log(categorias);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-extrabold text-fuchsia-700">Carreras</h2>

          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <div key={categoria.name} className="group relative">
                <div className="w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
                  <img
                    src={categoria.imageSrc}
                    alt={categoria.imageAlt}
                    className="h-64 w-full object-cover sm:h-72 md:h-80 lg:h-80 xl:h-96"
                  />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-fuchsia-700">
                  <a href={categoria.href}>
                    <span className="absolute inset-0" />
                    {categoria.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{categoria.description}</p>
                {/* <button className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500">
                  Ver Cursos </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
