import React from "react";

const ServiceCard = ({
  image,
  title,
  description,
  isSpecial = false,
  showMore = false,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  if (isSpecial) {
    return (
      <div className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
        <div className="text-center text-white font-medium">
          Special product
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
          <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-700 text-base">
            <span className="font-medium underline">Our speciality is</span>{" "}
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6 text-center">
        <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-base">
          {showMore ? (
            <>
              {description.split("READ_MORE_SPLIT")[0]}
              {description.split("READ_MORE_SPLIT").length > 1 && (
                <>
                  {expanded ? (
                    <span>{description.split("READ_MORE_SPLIT")[1]}</span>
                  ) : (
                    <button
                      onClick={() => setExpanded(true)}
                      className="text-blue-500 hover:underline font-medium"
                    >
                      Read More
                    </button>
                  )}
                </>
              )}
            </>
          ) : (
            description
          )}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
