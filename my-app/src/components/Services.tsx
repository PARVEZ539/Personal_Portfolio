import ServiceCard from "./ServiceCard";
import { services } from "../data/portfolio";
import { Link } from "react-router-dom";

export default function Services() {
  const [featured, ...rest] = services;

  return (
    <section id="services" className="min-h-screen py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-12 text-sm transition-colors"
        >
          <i className="fa-solid fa-arrow-left" /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">My Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            From frontend interfaces to backend APIs and cloud infrastructure —
            I handle the full stack so your product ships fast and scales well.
          </p>
        </div>

        {/* Featured card */}
        {featured && (
          <div className="mb-6">
            <ServiceCard {...featured} featured />
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i + 1} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center border border-gray-700 rounded-2xl p-10">
          <h3 className="text-xl font-semibold text-white mb-3">
            Have a project in mind?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Let's talk about how I can help you build it.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
