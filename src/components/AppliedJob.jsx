import React from "react";

const AppliedJob = ({ job }) => {
  const { logo, jobTitle, companyName, status, location, salary } = job;
  console.log(job)
  return (
    <>
      <div className="border border-gray-400 rounded-lg p-7 flex">
        <div>1</div>
        <div>3</div>
      </div>
    </>
  );
};

export default AppliedJob;
