import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToDb, getjobCart } from "../utilities/fakedb";

const JobsDetail = () => {
  //all jobs load and match by ID
  const jobs = useLoaderData();
  const { jobId } = useParams();
  const matchJobArray = jobs.filter((job) => job.id == jobId);
  const matchJob = matchJobArray[0];

  //click apply btn then save localStore
  const jobSaveDb = (applyId) => {
    addToDb(applyId);
  };

  return (
    <>
      <div className="my-container">
        <h1 className="my-14 font-extrabold text-3xl text-center">
          Job Detail
        </h1>
        <div className="grid grid-rows-2 lg:grid-cols-3	gap-y-3 lg:gap-x-3">
          <div className="lg:col-span-2">
            <p className="font-extrabold mb-6">
              Description:{" "}
              <span className="font-medium text-gray-500">
                {matchJob.description}
              </span>
            </p>
            <p className="font-extrabold mb-6">
              Responsibility:{" "}
              <span className="font-medium text-gray-500">
                {matchJob.responsibility}
              </span>
            </p>
            <p className="font-extrabold mb-6">
              Educational Requirements: <br /> <br />
              <span className="font-medium text-gray-500">
                {matchJob.requirements}
              </span>
            </p>
            <p className="font-extrabold mb-6">
              Experiences: <br /> <br />
              <span className="font-medium text-gray-500">
                {matchJob.experiences} Years in this field.
              </span>
            </p>
          </div>
          <div className="lg:col-span-1 flex flex-col gap-3">
            <div className="p-7 bg-gray-100 rounded-md">
              <h3 className="font-extrabold text-xl mb-6">Job Details</h3>
              <hr className="mb-6 border border-gray-300" />
              <div className="mb-4 font-bold text-lg flex gap-1">
                <img
                  className="h-6 w-6"
                  src={"../../public/Icons/Frame.png"}
                  alt=""
                />
                <p>
                  Salary :{" "}
                  <span className="font-medium">
                    {matchJob.salary} (Per Month)
                  </span>
                </p>
              </div>
              <div className="mb-4 font-bold text-lg flex gap-1">
                <img
                  className="h-6 w-6"
                  src={"../../public/Icons/Frame-1.png"}
                  alt=""
                />
                <p>
                  Job Title :{" "}
                  <span className="font-medium">{matchJob.jobTitle}</span>
                </p>
              </div>
              <h3 className="font-extrabold text-xl mb-6">
                Contact Information
              </h3>
              <hr className="mb-6 border border-gray-300" />
              <div className="mb-4 font-bold text-lg flex gap-1">
                <img
                  className="h-6 w-6"
                  src={"../../public/Icons/Frame-2.png"}
                  alt=""
                />
                <p>
                  Phone : <span className="font-medium">{matchJob.phone}</span>
                </p>
              </div>
              <div className="mb-4 font-bold text-lg flex gap-1">
                <img
                  className="h-6 w-6"
                  src={"../../public/Icons/Frame-3.png"}
                  alt=""
                />
                <p>
                  Email : <span className="font-medium">{matchJob.mail}</span>
                </p>
              </div>
              <div className="mb-4 font-bold text-lg flex gap-1">
                <img
                  className="h-6 w-6"
                  src={"../../public/Icons/Frame-4.png"}
                  alt=""
                />
                <p>
                  Address :{" "}
                  <span className="font-medium">{matchJob.location}</span>
                </p>
              </div>
            </div>
            <button
              className="my-btn w-full py-4 font-extrabold text-lg"
              onClick={() => jobSaveDb(matchJob.id)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsDetail;
