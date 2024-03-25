import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const Applied_job_cart = ({job}) => {
    const {id,company_name, job_title, logo,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className="card card-compact p-6 bg-base-100 shadow-lg my-4">
       <div className="flex justify-between items-center">
       <div className="flex">
       <figure className="">
          <img
            src={logo}
            alt={job_title}
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{job_title}</h1>
          <p>{company_name}</p>
          <div className="space-x-2">
              <button className="border border-cyan-300 rounded hover:border-red-400 px-2">{job_type}</button>
              <button className="border border-cyan-300 rounded hover:border-red-400 px-2">{remote_or_onsite}</button>
          </div>
          <div className="flex space-x-2">
          <h1 className="flex items-center"><CiLocationOn className="text-2xl" />{location}</h1>
          <h1 className="flex items-center"><CiDollar className="text-2xl" />{salary}</h1>
          </div>
        </div>
       </div>
          <div className="card-actions">
            <Link to={`/Details/${id}`}>
            <button className="btn btn-info">View Details</button>
            </Link>
          </div>
       </div>
      </div>
    );
};

export default Applied_job_cart;