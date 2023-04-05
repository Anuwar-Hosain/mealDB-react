import React from "react";
import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";

const Product = () => {
  const countries = useLoaderData();
  return (
    <section className="w-4/5 mx-auto">
      <h1>Countries: {countries.length}</h1>
      <div className="grid grid-cols-5 gap-2">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </section>
  );
};

export default Product;
