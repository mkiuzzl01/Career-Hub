import { useEffect, useState } from "react";
import Job_Category_Card from "../Job_Category_Card/Job_Category_Card";

const Section = ({heading,Paragraph}) => {
    const [jobList, setJobList] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(response=> response.json())
        .then(data=> setJobList(data));
    },[])
    return (
        <div className="text-center">
            <div className="mb-6">
            <h1 className="text-4xl font-semibold">{heading}</h1>
            <p>{Paragraph}</p>
            </div>

            <dir className="flex flex-col items-center gap-4 lg:flex-row justify-between">
                {heading ===  'Job Category List' &&  
                jobList.map(job => <Job_Category_Card key={job.id} job={job}></Job_Category_Card>)
                }
            </dir>

        </div>
    );
};

export default Section;