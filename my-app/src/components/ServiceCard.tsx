import { Link } from "react-router-dom";
import type { Service } from "../types";

interface ServiceCardProps extends Service {
  featured?: boolean;
  index?: number;
}

export default function ServiceCard({
  id,
  icon,
  title,
  description,
  tags,
  featured = false,
  index,
}: ServiceCardProps) {
  if (featured) {
    return (
      <Link
        to={`/services/${id}`}
        className="group block bg-gray-800 border border-orange-500/30 hover:border-orange-500 rounded-2xl p-8 transition-all"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Icon */}
          <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
            <i className={`${icon} text-2xl text-orange-400`} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-orange-400 font-medium tracking-widest uppercase">
                Featured
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>

            {tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Arrow */}
          <div className="text-gray-600 group-hover:text-orange-400 transition-colors shrink-0">
            <i className="fa-solid fa-arrow-right text-lg" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/services/${id}`}
      className="group flex flex-col bg-gray-800 border border-gray-700 hover:border-orange-500/50 rounded-2xl p-6 transition-all"
    >
      {/* Number + Icon row */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-gray-700 group-hover:bg-orange-500/10 flex items-center justify-center transition-colors">
          <i
            className={`${icon} text-xl text-gray-400 group-hover:text-orange-400 transition-colors`}
          />
        </div>
        {index !== undefined && (
          <span className="text-xs font-mono text-gray-600 group-hover:text-orange-400/60 transition-colors">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      {/* Text */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Tags */}
      {tags && (
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-gray-700">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-gray-700/80 text-gray-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Learn more */}
      <div className="flex items-center gap-1 mt-4 text-sm text-gray-500 group-hover:text-orange-400 transition-colors">
        <span>Learn more</span>
        <i className="fa-solid fa-arrow-right text-xs translate-x-0 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
