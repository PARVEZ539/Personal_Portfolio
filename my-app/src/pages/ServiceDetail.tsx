import { useParams, Link } from "react-router-dom";
import { services } from "../data/portfolio";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Service not found</h2>
        <Link to="/" className="text-orange-400 underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-10 text-sm"
        >
          <i className="fa-solid fa-arrow-left" /> Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
            <i className={`${service.icon} text-2xl text-white`} />
          </div>
          <h1 className="text-4xl font-bold">{service.title}</h1>
        </div>

        {/* Overview */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-orange-400 mb-3">
            Overview
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {service.details.overview}
          </p>
        </div>

        {/* Features */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-orange-400 mb-4">
            What's included
          </h2>
          <ul className="space-y-3">
            {service.details.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-gray-300 text-sm"
              >
                <i className="fa-solid fa-check text-orange-400 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-orange-400 mb-4">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.details.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-700 text-gray-200 text-sm px-4 py-1.5 rounded-full border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
