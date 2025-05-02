import React from "react";
import products from "../../constants/products";

const Incentives = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-white">
      <div className="pt-7 pb-40 sm:pt-24 sm:pb-20 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Preparados para el futuro
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              "Somos tu mejor aliado para crecer: combinamos experiencia, pasión
              y un enfoque personalizado para que logres tus objetivos. Eleginos
              y descubrí por qué miles de estudiantes nos eligen para
              transformar su futuro."
            </p>
          </div>
          <div>
            <div className="hidden lg:block mt-10">
              {/* Decorative image grid for large screens */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                  <div className="flex items-center space-x- lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt={products[0].name}
                          src={products[0].img}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt={products[1].name}
                          src={products[1].img}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt={products[2].name}
                          src={products[2].img}
                          className="size-full object-contain"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt={products[3].name}
                          src={products[3].img}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt={products[4].name}
                          src={products[4].img}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt={products[5].name}
                          src={products[5].img}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt={products[6].name}
                          src={products[6].img}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <a
              href="#why"
              className="mt-5 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
            >
              ¿Por qué elegirnos?
            </a>
          </div>

          {/* Single image for small screens */}
          <div className="lg:hidden mt-7 ">
            <div className="h-80 w-full overflow-hidden rounded-lg">
              <img
                alt={products[2].name}  
                src={products[2].img}
                className="size-full object-contain w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incentives;