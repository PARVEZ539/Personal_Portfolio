import ServiceCard from "./ServiceCard";
import { services } from "../data/portfolio";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
