import { Link } from "react-router-dom";
import type { Service } from "../types";

export default function ServiceCard({ id, icon, title, description }: Service) {
  return (
    <div className="bg-gray-800 rounded-xl p-8 hover:bg-orange-500 transition-colors group">
      <i
        className={`${icon} text-3xl text-orange-400 group-hover:text-white mb-4 block`}
      />
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 group-hover:text-white text-sm leading-relaxed">
        {description}
      </p>
      <Link
        to={`/services/${id}`}
        className="mt-4 inline-block text-sm text-orange-400 group-hover:text-white underline"
      >
        Learn more
      </Link>
    </div>
  );
}
