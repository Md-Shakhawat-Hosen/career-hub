
import PropTypes from "prop-types";
const FeatureTitle = ({title,children}) => {

   
    return (
      <div>
        <div className="text-center space-y-2 mt-32">
          <h1 className="font-bold text-4xl">{title}</h1>
          <p>
            {children}
          </p>
        </div>
      </div>
    );
};

FeatureTitle.propTypes = {
    title:PropTypes.string,
    children: PropTypes.string
}

export default FeatureTitle;