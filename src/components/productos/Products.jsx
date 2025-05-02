import React from "react";
import ProductCard from "./ProductCard";
import ProductDescription from "./ProductDescription";

import { getProducts, getOffers } from "https://skillboost-academy.onrender.com/api/productsApi";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      const prodData = await getProducts();
      const offerData = await getOffers();
      setProducts(prodData);
      setOffers(offerData);
    };

    fetchData();
  }, []);

  return (
    <div id="allcourses" className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-extrabold text-fuchsia-700">
            Nuestros Cursos
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 ">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <h2
            id="oferta"
            className="mt-7 text-4xl font-extrabold text-fuchsia-700 scroll-m-8"
          >
            Ofertas
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5">
            {offers.map((offer) => (
              <ProductCard key={offer._id} product={offer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
