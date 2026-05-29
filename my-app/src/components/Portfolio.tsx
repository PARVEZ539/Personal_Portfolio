import WorkCard from "./WorkCard";
import { works } from "../data/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {works.map((work) => (
            <WorkCard key={work.title} {...work} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block border border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
}
