import React from "react";

const Card = ({ name, title, img, desc, link, children }) => {
  return (
    <div className="w-80 bg-white shadow-xl rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={img}
          alt={title || name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {title && <h4 className="text-sm text-gray-500 uppercase">{title}</h4>}
        {name && (
          <h3 className="text-xl font-bold text-gray-800 mt-1">{name}</h3>
        )}
        {desc && <p className="text-gray-600 text-sm mt-2 mb-4">{desc}</p>}

        {link && (
          <button
            onClick={() => window.open(link, "_blank")}
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Visit
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
