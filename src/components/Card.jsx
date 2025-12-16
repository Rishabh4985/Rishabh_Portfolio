import React from "react";
import { FiGithub } from "react-icons/fi";

const Card = ({ 
  name, 
  title, 
  img, 
  desc, 
  link, 
  githubLink, 
  isDark,
  children 
}) => {
  return (
    <div className="w-full max-w-sm group">
      {/* Card Container */}
      <div className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700"
          : "bg-gradient-to-br from-white via-slate-50 to-white border-slate-200 hover:border-slate-300"
      }`}>
        
        {/* Image Container */}
        <div className={`relative h-56 w-full overflow-hidden ${isDark ? "bg-slate-950" : "bg-slate-200"}`}>
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-t from-slate-900 via-transparent to-transparent" : "bg-gradient-to-t from-white via-transparent to-transparent"} opacity-60`}></div>
        </div>

        {/* Content Container */}
        <div className="p-6">
          {/* Category Tag */}
          {title && (
            <div className="inline-block mb-3">
              <span className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full transition-all duration-300 ${
                isDark
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-cyan-600 bg-cyan-100"
              }`}>
                {title}
              </span>
            </div>
          )}

          {/* Project Name */}
          {name && (
            <h3 className={`text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              {name}
            </h3>
          )}

          {/* Description */}
          {desc && (
            <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              {desc}
            </p>
          )}

          {/* Button Container */}
          <div className="flex gap-3 items-center">
            {link && (
              <button
                onClick={() => window.open(link, "_blank")}
                className={`flex-1 py-3 px-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center ${
                  isDark
                    ? "bg-slate-700 hover:bg-slate-600 text-white"
                    : "bg-slate-200 hover:bg-slate-300 text-slate-900"
                }`}
              >
                View Live
              </button>
            )}

            {githubLink && (
              <button
                onClick={() => window.open(githubLink, "_blank")}
                className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
                  isDark
                    ? "bg-slate-700 hover:bg-slate-600 text-white"
                    : "bg-slate-200 hover:bg-slate-300 text-slate-900"
                }`}
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