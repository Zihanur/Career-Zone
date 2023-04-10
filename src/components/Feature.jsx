import React from "react";

const Feature = ({ feature }) => {
  console.log(feature);
  return (
    <>
      <div className="w-full p-10 border border-gray-300 rounded-lg">
        <img className="mb-5 lg:mb-7" src={feature.logo} alt="" />
        <h3 className="font-extrabold text-2xl mb-2 text-gray-700">
          {feature.jobTitle}
        </h3>
        <p className="text-xl font-semibold text-gray-400 mb-4">
          {feature.companyName}
        </p>
        <p className="flex gap-3">
          {feature.status.map((st) => (
            <p className="text-blue-500 font-bold px-2.5 py-1.5 rounded-md border border-blue-500 mb-4">
              {st}
            </p>
          ))}
        </p>
        <div className="flex items-center gap-4 mb-5">
          <p className="font-semibold	text-xl text-gray-500">
            {feature.location}
          </p>
          <p className="font-semibold	text-xl text-gray-500">
            Salary: {feature.salary}
          </p>
        </div>
        <button className="my-btn py-2 px-3 font-medium text-xl">View Details</button>
      </div>
    </>
  );
};

export default Feature;
