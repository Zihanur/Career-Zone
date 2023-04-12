import React from "react";
import { Link } from "react-router-dom";

const ApplyJob = ({ jb }) => {
  const { id, logo, jobTitle, companyName, status, location, salary } = jb;
  return (
    <>
      <div className="border border-gray-400 rounded-md p-7 flex">
        <div className="h-56 w-56 p-2 flex gap-x-5 justify-center items-center bg-gray-300 rounded-md">
          <img className="cover" src={logo} alt="" />
        </div>
        <div className="w-full flex justify-between items-center ml-0 md:ml-2 lg:ml-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-2">{jobTitle}</h2>
            <p className="text-2xl font-semibold mb-2 text-gray-500">
              {companyName}
            </p>
            <div className="flex gap-4 mb-2 font-semibold text-lg text-blue-500">
              <p className="py-1 px-2 border border-blue-600 rounded ">
                {status[0]}
              </p>
              <p className="py-1 px-2 border border-blue-600 rounded">
                {status[1]}
              </p>
            </div>
            <div className="flex gap-4 font-lg text-xl text-gray-400">
              <div className="flex gap-1">
                <img
                  className="h-6 w-6"
                  src={"https://i.ibb.co/bRkL53b/Frame-4.png"}
                  alt=""
                />
                {location}
              </div>
              <div className="flex gap-1">
                <img
                  className="h-6 w-6"
                  src={"https://i.ibb.co/8cWSgJP/Frame.png"}
                  alt=""
                />
                <p>Salary: {salary}</p>
              </div>
            </div>
          </div>
          <div>
            <Link to={`/jobdetail/${id}`} className="my-btn py-3 px-4">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyJob;
