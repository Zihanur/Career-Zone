import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const JobCategories = () => {
  const jobCategories = useLoaderData();
  return (
    <>
      <div className="my-container my-20">
        <h1 className="font-extrabold text-5xl text-center mb-4 text-gray-800">
          Job Category List
        </h1>
        <p className="font-medium text-base text-gray-500 text-center mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
          {jobCategories.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobCategories;
