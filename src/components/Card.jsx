import React from "react";
import { FiGithub } from "react-icons/fi";

const Card = ({ 
  name, 
  title, 
  img, 
  desc, 
  link, 
  githubLink, 
  children 
}) => {
  return (
    <div className="w-full max-w-sm group">
      {/* Card Container */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-700">
        
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-950">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Content Container */}
        <div className="p-6">
          {/* Category Tag */}
          {title && (
            <div className="inline-block mb-3">
              <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase px-3 py-1 bg-cyan-400/10 rounded-full">
                {title}
              </span>
            </div>
          )}

          {/* Project Name */}
          {name && (
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              {name}
            </h3>
          )}

          {/* Description */}
          {desc && (
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {desc}
            </p>
          )}

          {/* Button Container */}
          <div className="flex gap-3 items-center">
            {link && (
              <button
                onClick={() => window.open(link, "_blank")}
                className="flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Live
              </button>
            )}

            {githubLink && (
              <button
                onClick={() => window.open(githubLink, "_blank")}
                className="p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </button>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
