import { useTab } from "../hooks/useTab";
import type { TabId } from "../types";
import user from "../assets/user1.jpg";

const tabs: { id: TabId; label: string }[] = [
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "github", label: "GitHub" },
];

export default function About() {
  const { activeTab, setActiveTab } = useTab("skills");

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <img
          src={user}
          alt="Parvez Ahmed"
          className="w-50 h-64 object-cover rounded-xl"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 mb-6">As a web developer...</p>

          {/* Tab nav */}
          <div className="flex gap-6 mb-6 border-b border-gray-200">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`pb-2 text-sm font-medium transition-colors ${
                  activeTab === t.id
                    ? "border-b-2 border-orange-500 text-orange-500"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "skills" && (
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Web Design</strong> — Website Design
              </li>
              <li>
                <strong>Web Development</strong> — Web app Development
              </li>
            </ul>
          )}
          {activeTab === "education" && (
            <ul className="text-sm">
              <li>
                <strong>2022</strong> — Japan International College of
                Technology
              </li>
            </ul>
          )}
          {activeTab === "github" && (
            <ul className="text-sm">
              <li>
                <a
                  href="https://github.com/PARVEZ539"
                  className="text-orange-500 underline"
                >
                  github.com/PARVEZ539
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
