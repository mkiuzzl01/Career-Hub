import { useEffect, useState } from "react";
import Section from "../Section/Section";
import Jobs from "../Jobs/Jobs";

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength,setDataLength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(response=> response.json())
        .then(data=> setJobs(data));
    },[])
    return (
        <div>
            
            <Section headeing={'Job Category List'} Peragraph={'Explore thousands of job opportunities with all the information you need. Its your future'}></Section>


       <div className="my-4">
       <Section headeing={'Featured Jobs'} Peragraph={'Explore thousands of job opportunities with all the information you need. Its your future'}></Section>
        
        <div>
        <div className="grid grid-cols-2 gap-4 my-8">
        {
            jobs.slice(0,dataLength).map(job => <Jobs key={job.id} job={job}></Jobs>)
        }
        </div>
        <div className={dataLength=== jobs.length? "hidden":"flex justify-center"}>
            <button onClick={()=> setDataLength(jobs.length)} className="btn">Show All</button>
        </div>
        </div>
        </div>
       </div>
    );
};

export default Home;