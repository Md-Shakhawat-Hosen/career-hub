
import PropTypes from "prop-types";

const JobCategory = ({category}) => {

   
    const {availability,category_name,logo} = category;

    return (
      <div>
        <div className="bg-slate-300 pt-10 pr-20 pb-10 pl-10 rounded-xl">
          <img
            className="mb-8 bg-slate-200 p-3 rounded-lg"
            src={logo}
            alt=""
          />
          <div className="h-[100px]">
            <h1 className="font-bold">{category_name}</h1>
            <p>{availability}</p>
          </div>
        </div>
      </div>
    );
}
    
JobCategory.propTypes = {
    category: PropTypes.object.isRequired
}



export default JobCategory;