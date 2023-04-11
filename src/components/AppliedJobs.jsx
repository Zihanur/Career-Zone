import React, { useEffect, useState } from 'react';
import { getjobCart } from '../utilities/fakedb';

const AppliedJobs = () => {
  const [applyJobs,setApplyJobs] = useState([])
  const [jobs,setJobs] = useState([]);
  //load all jobs
  useEffect(()=>{
    fetch('../../public/featured-jobs.json')
    .then(res=>res.json())
    .then(data=>setJobs(data))
  },[])

  //get localstore data
  const applyJobDb = getjobCart();
  useEffect(()=>{
    const newApplyJob = [...applyJobs,applyJobDb];
    setApplyJobs(newApplyJob);
  },[])
  
  console.log(applyJobs)
  

  return (
    <div>
      <h1 className="my-14 font-extrabold text-3xl text-center">
          Applied Jobs
        </h1>
        <div>
          
        </div>
    </div>
  );
};

export default AppliedJobs;