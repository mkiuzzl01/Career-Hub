import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { SaveJobApplication } from "../../Utility/LocalStorage";

const Job_Details = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const ID = parseInt(id);

  const info = jobs.find((job) => job.id === ID);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    job_title,
  } = info;
  const handleAppliedJob = ()=>{
      toast.success("Application Submitted Successfully!", {
        position: "top-center"
      });
      
      SaveJobApplication(ID);
  }
  return (
    <div className="h-screen">
      <h1 className="text-4xl text-center my-4">Job Details</h1>
      <div className="grid grid-cols-3">
        <div className="space-y-4 col-span-2">
          <p>
            <span className="font-extrabold">Job Description: </span>
            <span>{job_description}</span>
          </p>
          <p>
            <span className="font-extrabold">Job Description: </span>
            <span>{job_responsibility}</span>
          </p>
          <p>
            <span className="font-extrabold">Job Description: </span>
            <span>{educational_requirements}</span>
          </p>
          <p>
            <span className="font-extrabold">Job Description: </span>
            <span>{experiences}</span>
          </p>
        </div>
        <div>
         <div className="bg-slate-200 p-4 rounded my-2">
         <div>
            <h1 className="text-xl font-bold">Job Details</h1>
            <p>Salary: {salary}</p>
            <p>Job Title: {job_title}</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Contact Information</h1>
            <h2>{contact_information.phone}</h2>
            <h2>{contact_information.email}</h2>
            <h2>{contact_information.address}</h2>
          </div>
         </div>
          <div>
            <button onClick={handleAppliedJob} className="btn w-full">Apply Now</button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job_Details;
