import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppliedJobs = () => {
  const [applyJobs,setApplyJobs] = useState([]);
  const jobs = useLoaderData()
  const {applyId} = useParams()

  useEffect(()=>{
    const applyJob = jobs.find(job=>job.id == applyId);
    console.log(applyJob)
    const newApplyJob = [...applyJobs, applyJob]
    setApplyJobs(newApplyJob)
  },[applyId])
  //console.log(applyId)
  console.log(applyJobs)
  return (
    <div>
      <h1 className="my-14 font-extrabold text-3xl text-center">
          Applied Jobs
        </h1>
    </div>
  );
};

export default AppliedJobs;