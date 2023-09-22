
import { useEffect } from 'react';
import { useState } from 'react';
import FeatureTitle from '../FeatureTitle/FeatureTitle';
import JobCategory from './JobCategory/JobCategory';

const JobCategoryList = () => {

    const [jobCategory, setJobCategory] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then (data => setJobCategory(data))
    },[])
  
    return (
      <div>
        <FeatureTitle title={"Job Category List"}>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </FeatureTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {jobCategory.map((category) => (
            <JobCategory key={category.id} category={category}></JobCategory>
          ))}
        </div>
      </div>
    );
};

export default JobCategoryList;