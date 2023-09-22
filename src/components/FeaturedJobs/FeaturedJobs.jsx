
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureTitle from '../FeatureTitle/FeatureTitle';
import FeaturedJob from './FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([])
    const [showJobs, setShowJobs] = useState(4)
    const [btnShow, setBtnShow] = useState(false)

    // console.log(showJobs)


    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    },[])
     
    // console.log(featuredJobs)
    const handleClickShowAllJobs = () => {
             
        setShowJobs(featuredJobs.length)
        setBtnShow(!btnShow)
    }
    return (
      <div>
        <FeatureTitle title={"Featured Jobs"}>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </FeatureTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {featuredJobs.slice(0, showJobs).map((job) => (
            <FeaturedJob key={job.id} job={job}></FeaturedJob>
          ))}
        </div>

        <div className={`text-center mt-10 ${btnShow ? 'hidden': ''}`}>
          <Link onClick={handleClickShowAllJobs} className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
            See All Jobs
          </Link>
        </div>
      </div>
    );
};

export default FeaturedJobs;