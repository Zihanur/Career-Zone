import React, { useEffect, useState } from "react";
import { getjobCart } from "../utilities/fakedb";
import ApplyJob from "./ApplyJob";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  
  //get localstore data
  const applyJobDb = getjobCart();
  const applyJoblist = [];
  for (const id in applyJobDb) {
    const newApplyJob = jobs.find((job) => job.id == id);
    applyJoblist.push(newApplyJob);
  }

  return (
    <div>
      <h1 className="my-12 font-extrabold text-3xl text-center">
        Applied Jobs
      </h1>
      <div className="my-container">
        <div className="text-right mb-4">
          <button
            className="border border-gray-600 text-xl rounded-lg bg-gray-100 py-2 px-4"
            type="checkbox"
          >
            Filter By
          </button>
        </div>
        <div className="flex flex-col gap-y-6">
          {applyJoblist.map((jb) =><ApplyJob key={jb.id} jb={jb}></ApplyJob>)}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
