
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getDataFromLocalStorage } from "../Statistics/saveLocalStorage/saveLocalStorage";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyCircleDollar } from "react-icons/pi";

const AppliedJobs = () => {
    const [appliedJob, setaAppliedJob] = useState([])
     const getData = getDataFromLocalStorage();
    
    
     useEffect(()=>{
            fetch('jobs.json')
            .then(res => res.json())
            .then (data => setaAppliedJob(data))
     },[])
     
     const applied = appliedJob.filter(job => {
        for (let item of getData) {

            if (item === job.id) {
                   return job;
            }
        }
     })


    

       
    return (
      <div>
        {
            applied.map(job => {
                 const {
                   id,
                   job_title,
                   company_name,
                   job_type,
                   remote_or_onsite,
                   logo,
                   salary,
                   location,
                 } = job;
                return (
                  <div
                    key={job.id}
                    className="space-y-3 border border-[#474747] p-10 rounded-lg mb-4"
                  >
                    <img src={logo} alt="" />
                    <h1 className="font-bold">{job_title}</h1>
                    <p>{company_name}</p>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <button className="border px-2 py-1 border-[#7E90FE] rounded-lg">
                          {remote_or_onsite}
                        </button>
                        <button className="border px-2 py-1 border-[#7E90FE] rounded-lg">
                          {job_type}
                        </button>
                      </div>
                      <div>
                        <Link
                          to={`/jobDetails/${id}`}
                          className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex gap-1 items-center">
                        <MdOutlineLocationOn /> <h1>{location}</h1>
                      </div>
                      <div className="flex gap-1 items-center justify-center">
                        <PiCurrencyCircleDollar />
                        <h2>
                          Salary : <span>{salary}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                );
            })
        }
        
      </div>
    );
};

export default AppliedJobs;