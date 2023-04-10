import React from "react";
import JobCategories from "./JobCategories";
import FeaturedJobs from "./FeaturedJobs";

const HomePage = () => {
  return (
    <>
      {/*header*/}
      <div className="my-container grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="py-20 flex flex-col gap-y-7 items-start">
          <div className="font-extrabold text-7xl text-gray-700">
            <h1>One Step Closer To Your</h1>
            <h1 className=" text-blue-400">Dream Job</h1>
          </div>
          <p className="font-medium	text-lg">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="my-btn py-4 px-5">Get Started</button>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="object-fit: cover"
            src={"/public/All Images/cover.png"}
            alt=""
          />
        </div>
      </div>

      {/*job catagoryg*/}
      <JobCategories></JobCategories>

      {/*Featured Jobs*/}
      <FeaturedJobs></FeaturedJobs>
    </>
  );
};

export default HomePage;
