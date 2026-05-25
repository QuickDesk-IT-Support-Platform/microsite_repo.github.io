// JSX-only component — explicit React import not required
import Header from "../Header";

import container_architecture from "../../assets/updated_container_diagram.png";

const stateOfArtRows = [
  {
    feature: "Ticket Creation and Tracking",
    quickdesk: true,
    glpi: true,
    bud: true,
    servicenow: true,
  },
  {
    feature: "In-app Chat",
    quickdesk: true,
    glpi: false,
    bud: false,
    servicenow: true,
  },
  {
    feature: "Dashboard with Real Time Metrics",
    quickdesk: true,
    glpi: true,
    bud: false,
    servicenow: true,
  },
  {
    feature: "Mobile Responsiveness",
    quickdesk: true,
    glpi: false,
    bud: true,
    servicenow: true,
  },
  {
    feature: "Friendly User Interface",
    quickdesk: true,
    glpi: false,
    bud: false,
    servicenow: true,
  },
  {
    feature: "Ease of Use",
    quickdesk: true,
    glpi: false,
    bud: true,
    servicenow: true,
  },
];

const applicationFeatures = [
  "Full ticket lifecycle management, with history, status tracking, and priority changes.",
  "Integrated chat system for fast and direct communication.",
  "Email notification system for timely updates and better follow-up.",
  "Category creation and editing.",
  "Service catalog management.",
  "Form creation and editing.",
  "Staff and specialty management.",
];

const technicalFeatures = [
  "Automatic ticket assignment based on technician expertise and current workload.",
  "Role-based access control (RBAC) with Keycloak and a custom authentication page.",
  "Centralized frontend API client for standardized and efficient request management.",
  "Security middleware for improved API protection.",
  "Consistent HTTP responses with standardized status codes.",
  "Real-time live logs for monitoring and diagnostics.",
  "System successfully deployed.",
  "Backup mechanism for reliability and data recovery.",
];

const personas = [
  {
    title: "Client / End-User",
    description:
      "Typical user within the organization who reports technical issues in daily work. Needs an intuitive platform to create, track, and manage support requests.",
  },
  {
    title: "Support Staff",
    description:
      "Responsible for resolving assigned requests. Needs a consolidated ticket view and automatic triage features to prioritize work.",
  },
  {
    title: "Organization Administrator",
    description:
      "Manages technicians within the organization. Uses dashboards and management features for technicians, permissions, and tickets.",
  },
];

const userStories = [
  {
    actor: "Student",
    story:
      "As a student with a tuition payment problem, I want to get a new payment reference and personal support, so that I can fix the payment quickly and easily.",
  },
  {
    actor: "Staff",
    story:
      "As a technician, upon receiving an email notification about a new ticket, I want to quickly access and view the ticket's full details, so that I can understand the issue and resolve it efficiently.",
  },
  {
    actor: "Org Admin",
    story:
      "As an administrator, I want to manage a technician's work profile so that tickets can be automatically assigned to the most suitable technician.",
  },
  {
    actor: "Org Admin",
    story:
      "As an administrator, I want to edit an existing form so that I can quickly customize the system and adapt it to different needs.",
  },
];

const CheckCell = ({ enabled }: { enabled: boolean }) => (
  <span
    className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${
      enabled ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
    }`}
    aria-label={enabled ? "Available" : "Unavailable"}
  >
    {enabled ? "✓" : "×"}
  </span>
);

export default function Prototype() {
  return (
    <div className="flex min-h-screen">
      <Header />

      <div className="flex pt-18 w-full">
        <div
          id="M2 - Prototype"
          className="w-full md:w-8/8 p-4 md:p-20 bg-white md:h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <h1 className="font-bold text-4xl text-center md:text-start">
            M2 - Prototype
          </h1>
          <p className="mt-3 text-center md:text-start text-gray-600 text-lg">
            PEI Course presentation - 31/03/2026
          </p>

          <div className="mt-10 justify-center flex flex-col items-center space-y-6">
            <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.canva.com/design/DAHEl4z4yug/_6jqe-w8yFbBaYdFafyBow/view?embed"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <div className="flex flex-row gap-3 items-center pb-3">
              <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
              <h2 className="text-2xl font-extrabold">Project Context</h2>
            </div>
            <p className="text-sm md:text-xl leading-relaxed text-justify mb-4">
              QuickDesk is a technical support platform that allows users to
              request help and resources, track the status of their requests,
              and enables support teams to manage, prioritize, and resolve
              those requests quickly and efficiently.
            </p>
            <p className="text-sm md:text-xl leading-relaxed text-justify">
              At the University of Aveiro, the volume of students and support
              requests makes it difficult to manage all requests efficiently.
              QuickDesk centralizes support in one platform and introduces a
              service catalog adapted to university needs.
            </p>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <div className="flex flex-row gap-3 items-center pb-3">
              <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
              <h2 className="text-2xl font-extrabold">State of the Art</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 font-bold">Feature / Attribute</th>
                    <th className="p-4 text-center font-bold">QuickDesk</th>
                    <th className="p-4 text-center font-bold">GLPI</th>
                    <th className="p-4 text-center font-bold">BUD@UA</th>
                    <th className="p-4 text-center font-bold">ServiceNow</th>
                  </tr>
                </thead>
                <tbody>
                  {stateOfArtRows.map((row) => (
                    <tr key={row.feature} className="border-b border-gray-200">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        <CheckCell enabled={row.quickdesk} />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCell enabled={row.glpi} />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCell enabled={row.bud} />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCell enabled={row.servicenow} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <div className="flex flex-row gap-3 items-center pb-3">
              <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
              <h2 className="text-2xl font-extrabold">Application Features</h2>
            </div>
            <ul className="grid gap-3 md:grid-cols-2 text-sm md:text-xl">
              {applicationFeatures.map((feature) => (
                <li key={feature} className="rounded-xl bg-gray-100 p-4">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <div className="flex flex-row gap-3 items-center pb-3">
              <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
              <h2 className="text-2xl font-extrabold">Technical Features</h2>
            </div>
            <ul className="grid gap-3 md:grid-cols-2 text-sm md:text-xl">
              {technicalFeatures.map((feature) => (
                <li key={feature} className="rounded-xl bg-gray-100 p-4">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <div className="flex flex-row gap-3 items-center pb-3">
              <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
              <h2 className="text-2xl font-extrabold">Actors / Personas</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {personas.map((persona) => (
                <article key={persona.title} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="text-xl font-bold mb-3">{persona.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    {persona.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <div className="flex flex-row gap-3 items-center pb-3">
              <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
              <h2 className="text-2xl font-extrabold">User Stories</h2>
            </div>
            <div className="space-y-4">
              {userStories.map((item) => (
                <article key={`${item.actor}-${item.story}`} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="text-xl font-bold uppercase text-orange-700 mb-2">
                    {item.actor}
                  </h3>
                  <p className="text-sm md:text-xl leading-relaxed">
                    {item.story}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="Updated Architecture" className="my-10 p-5 rounded-2xl shadow-2xl">
            <div className="flex flex-row gap-3 items-center pb-3">
              <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
              <h2 className="text-2xl font-extrabold">Updated Architecture</h2>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">Container-level Diagram</h3>
              <div className="flex item-center justify-center mb-10 mt-5">
                <img
                  src={container_architecture}
                  alt="Container-level Diagram"
                  className="scale-100 md:scale-70"
                />
              </div>
            </div>
          </section>

          <section id="Demo" className="my-10 p-5 rounded-2xl shadow-2xl flex flex-col items-center justify-center">
            <div className="flex flex-row gap-3 self-start pb-3">
              <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
              <h2 className="text-2xl font-extrabold">App Current State</h2>
            </div>
            <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://drive.google.com/file/d/1GhVGcEgLZTNNQVK5O8-EEqbuPyX4aLNV/preview"
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
