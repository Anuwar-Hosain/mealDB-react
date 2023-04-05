import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  //   console.log(country);
  const { name, flags, population } = country;
  return (
    <div className="border p-4 rounded-md">
      <img className="rounded-md mb-3  h-52" src={flags.png} alt="" />
      <h1 className="text-2xl font-bold">{name.common}</h1>
      <p className="mb-3">Population:{population}</p>
      <div className="flex justify-between">
        <Link
          to={`/country/${name.common}`}
          className="text-base border border-purple-400 p-1 rounded"
        >
          Details
        </Link>
        <button className="text-base border-b border-purple-400 ">
          Details
        </button>
      </div>
    </div>
  );
};

export default Country;
