import type { Work } from "../types";

export default function WorkCard({ image, title, description, link }: Work) {
  return (
    <div className="relative overflow-hidden rounded-xl group cursor-pointer">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="absolute inset-0 bg-orange-500/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center p-6">
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-white/90 text-sm mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="self-start text-white border border-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-white hover:text-orange-500 transition-colors"
        >
          <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
        </a>
      </div>
    </div>
  );
}
