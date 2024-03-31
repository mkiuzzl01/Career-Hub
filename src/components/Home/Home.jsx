import { useEffect, useState } from "react";
import Section from "../Section/Section";
import Jobs from "../Jobs/Jobs";
import Hero from "../Hero/Hero";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
        <div>
            <Hero></Hero>
        </div>
      <div className="my-32">
        <Section
          heading={"Job Category List"}
          Paragraph={
            "Explore thousands of job opportunities with all the information you need. Its your future"
          }
        ></Section>
      </div>

      <div className="my-4">
        <div>
          <Section
            heading={"Featured Jobs"}
            Paragraph={
              "Explore thousands of job opportunities with all the information you need. Its your future"
            }
          ></Section>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
            {jobs.slice(0, dataLength).map((job) => (
              <Jobs key={job.id} job={job}></Jobs>
            ))}
          </div>
          <div
            className={
              dataLength === jobs.length ? "hidden" : "flex justify-center"
            }
          >
            <button onClick={() => setDataLength(jobs.length)} className="btn">
              Show All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
