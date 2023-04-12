import React, { useEffect, useState } from "react";
import Feature from "./Feature";

const FeaturedJobs = () => {
  const [features, setFeatures] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    fetch("featured-jobs.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <>
      <div className="my-container">
        <h1 className="font-extrabold text-5xl text-center mb-4 text-gray-800">
          Featured Jobs
        </h1>
        <p className="font-medium text-base text-gray-500 text-center mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="my-container grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-y-5">
        {showMore
          ? features.map((feature) => (
              <Feature key={feature.id} feature={feature}></Feature>
            ))
          : features
              .slice(0, 4)
              .map((feature) => (
                <Feature key={feature.id} feature={feature}></Feature>
              ))}
      </div>
      <div className="my-container text-center my-8">
        {!showMore && (
          <button
            className="my-btn py-3 px-4 text-2xl"
            onClick={() => setShowMore(!showMore)}
          >
            Show More
          </button>
        )}
      </div>
    </>
  );
};

export default FeaturedJobs;
