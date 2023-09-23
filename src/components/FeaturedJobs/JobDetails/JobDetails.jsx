import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';


const JobDetails = () => {
   const jobs = useLoaderData()
  //  console.log(jobs)
   const idx = useParams()
  //  console.log(idx)

   const parsInId = parseInt(idx.id);
   const singleJob = jobs.find((job) => parsInId === job.id);
    // console.log(singleJob)
   

 const {
   id,
   job_description,
   job_responsibility,
   educational_requirements,
   experiences,
   salary,
   job_title,
   contact_information,
 } = singleJob;
    return (
      <div>
        <h1 className='font-bold text-center'>Job Details</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="col-span-3 border-2 space-y-3">
            <div>
              <h1 className="font-bold">Job Description:</h1>
              <p>{job_description}</p>
            </div>
            <div>
              <h1 className="font-bold">Job Responsibility:</h1>
              <p>{job_responsibility}</p>
            </div>
            <div>
              <h1 className="font-bold">Educational Requirement:</h1>
              <p>{educational_requirements}</p>
            </div>
            <div>
              <h1 className="font-bold">Experience:</h1>
              <p>{experiences}</p>
            </div>
          </div>

          <div className="border-2 space-y-3">
            <h1 className="font-bold">Job Details</h1>
            <div className='space-y-3'>
              <div>
                <h1>
                  <span className="font-bold">Salary:</span>
                  {salary}
                </h1>
                <h1>
                  <span className="font-bold">Job Title:</span>
                  {job_title}
                </h1>
              </div>
              <h1 className="font-bold">Contact Information</h1>
              <hr />
              <div className='space-y-2'>
                <h1>
                  <span>Phone:</span>
                  {contact_information.phone}
                </h1>
                <h1>
                  <span>Email:</span>
                  {contact_information.email}
                </h1>
                <h2>
                  <span>Address:</span>
                  {contact_information.address}
                </h2>
              </div>
              <Link to={`/applyJob/${id}`} className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white w-full">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobDetails;