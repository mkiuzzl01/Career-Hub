import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../../Utility/LocalStorage";
import Applied_job_cart from "../Applied_job_cart/Applied_job_cart";

const Applied_jobs = () => {
  const jobs = useLoaderData();
  const [AppliedJob, setAppliedJob] = useState([]);
  const [displayJobs,setDisplayJobs] = useState([]);

  useEffect(() => {
    const jobApplied = getJobApplication();
    if (jobApplied.length > 0) {
      const Applied = jobs.filter(job => jobApplied.includes(job.id));
      setAppliedJob(Applied);
      setDisplayJobs(Applied);
    }
  }, [jobs]);

  const handleJobs = short =>{
    if(short === 'All'){
        setDisplayJobs(AppliedJob);
    }else if(short ==='remote'){
        const remoteJobs = AppliedJob.filter(job=> job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs);
    }else if (short === 'onsite'){
        const onsite = AppliedJob.filter(job=> job.remote_or_onsite ==='Onsite');
        setDisplayJobs(onsite);
    }
  }
  return (
    <div>
      <h1 className="text-center text-3xl">
        Total Applied Jobs: {AppliedJob.length}
      </h1>
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={()=>handleJobs('All')}>
              <a>All</a>
            </li>
            <li onClick={()=>handleJobs('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={()=>handleJobs('onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {displayJobs.map((job) => (
          <Applied_job_cart key={job.id} job={job}></Applied_job_cart>
        ))}
      </div>
    </div>
  );
};

export default Applied_jobs;
