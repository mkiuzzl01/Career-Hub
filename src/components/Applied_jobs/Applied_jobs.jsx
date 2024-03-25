import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../../Utility/LocalStorage";
import Applied_job_cart from "../Applied_job_cart/Applied_job_cart";

const Applied_jobs = () => {
    const jobs = useLoaderData();
    const [AppliedJob,setAppliedJob] = useState([]);
    useEffect(()=>{
        const jobApplied = getJobApplication();
        if(jobApplied.length>0){
            const Applied = jobs.filter(job=>jobApplied.includes(job.id))
            setAppliedJob(Applied);
        }
    },[])
    return (
        <div>
            <h1 className="text-center text-3xl">Total Applied Jobs: {AppliedJob.length}</h1>
            {
                AppliedJob.map(job=>
                <Applied_job_cart key={job.id} job={job}></Applied_job_cart>
                )
            }
        </div>
    );
};

export default Applied_jobs;