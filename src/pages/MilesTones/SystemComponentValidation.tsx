// JSX-only component — explicit React import not required
import Header from "../Header";

const performanceRows = [
  [
    "GET api/services/org/1/all",
    "232.37 / 261.89 ms",
    "255.27 / 289.26 ms",
    "242.67 / 360.3 ms",
  ],
  [
    "GET /api/tickets/organization/1/all",
    "6.51 / 15.66 ms",
    "8.10 / 31.70 ms",
    "11.74 / 48.20 ms",
  ],
  [
    "POST /api/forms/submissions/upload",
    "403.75 / 492.77 ms",
    "552.07 / 925.35 ms",
    "698.87 / 1350 ms",
  ],
];

const scalabilityPoints = [
  "FastAPI can be replicated because the API layer is stateless.",
  "No user session is stored inside an API container.",
  "Authentication uses JWTs validated locally by each replica.",
  "Application state is centralized in PostgreSQL.",
  "Uploaded files are stored externally in MinIO.",
  "Any API replica can handle any request.",
];

const securityLayers = [
  ["RoleGuard", "Defines who can access each endpoint."],
  ["Ownership Check", "Validates whether the user owns the ticket."],
  ["Identity Assert", "Confirms whether the user is the resource owner."],
];

const owaspRows = [
  [
    "SQL Injection",
    "100% SQLModel ORM, zero raw SQL in the codebase, with parameterized queries enforced architecturally.",
  ],
  [
    "Input Validation",
    "Pydantic strict typing rejects invalid payloads with HTTP 422; custom validators enforce stripping, size limits, email regex and select whitelists.",
  ],
  [
    "Security Misconfiguration",
    "Swagger/OpenAPI disabled in production, Nginx security headers enabled, and Traefik is the single production entry point.",
  ],
  [
    "Logging & Monitoring",
    "SensitiveDataFilter redacts passwords, tokens, JWTs and emails before logs reach Grafana.",
  ],
];

const invariants = [
  [
    "Invalid ticket enum fields",
    "If an invalid status or priority is persisted directly in the database, ticket display fails afterwards. In real flows, Pydantic and DTO constraints prevent invalid enum values from reaching the database.",
  ],
  [
    "Messages on a closed ticket",
    "The frontend blocks this behavior, but backend validation is incomplete, so a manual API request can still create a message on a closed ticket.",
  ],
  [
    "Concurrency errors",
    "If the assigned technician and organization admin change the same ticket at the same time, the current behavior is last write wins.",
  ],
  [
    "Transactional inconsistency",
    "Complex flows are mostly handled gracefully. If ticket attribution fails during creation, the ticket remains open and unassigned until manual assignment.",
  ],
];

const implementedFeatures = [
  "Complete ticket workflow supporting ticket submission, tracking, assignment, resolution and rating.",
  "Centralized administration of users, support staff, tickets and organizational entities.",
  "Dynamic configuration of service categories, request forms and available support services.",
];

const missingFeatures = [
  "Automated ticket prioritization using AI-based classification.",
  "Shared knowledge base for recurring incidents, FAQs and resolution guides.",
  "Service Level Agreement management with deadline tracking and escalation rules.",
  "AI-powered chatbot for first-level support and ticket guidance.",
];

const reasons = [
  "Reduced team availability.",
  "Priority given to core helpdesk features.",
  "Need for more testing and validation.",
  "Focus on milestone requirements.",
];

const SectionTitle = ({ children }: { children: string }) => (
  <div className="flex flex-row gap-3 items-center pb-3">
    <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
    <h2 className="text-2xl font-extrabold">{children}</h2>
  </div>
);

export default function SystemComponentValidation() {
  return (
    <div className="flex min-h-screen">
      <Header />

      <div className="flex pt-18 w-full">
        <div
          id="M4 - System Component Validation"
          className="w-full md:w-8/8 p-4 md:p-20 bg-white md:h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <h1 className="font-bold text-4xl text-center md:text-start">
            M4 - System Component Validation
          </h1>
          <p className="mt-3 text-center md:text-start text-gray-600 text-lg">
            PEI Course presentation - 19/05/2026
          </p>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Project Context</SectionTitle>
            <p className="text-sm md:text-xl leading-relaxed text-justify">
              QuickDesk is a technical support system that allows users to
              request help and resources, track request status, and enables
              support teams to manage, prioritize and resolve those requests
              quickly and efficiently.
            </p>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>System Specs</SectionTitle>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["Production URL", "https://quickdesk.online"],
                ["RAM", "16 GB DDR4"],
                ["CPU", "4 vCPU cores (AMD EPYC)"],
                ["Storage", "200 GB NVMe SSD"],
              ].map(([label, value]) => (
                <article key={label} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="font-bold text-lg mb-2">{label}</h3>
                  <p className="text-sm md:text-lg break-words">{value}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-sm md:text-xl leading-relaxed">
              The production environment is hosted outside the university
              network.
            </p>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Performance Validation</SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 font-bold">Endpoint</th>
                    <th className="p-4 font-bold">5 VUs Avg / P95</th>
                    <th className="p-4 font-bold">10 VUs Avg / P95</th>
                    <th className="p-4 font-bold">20 VUs Avg / P95</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceRows.map(([endpoint, five, ten, twenty]) => (
                    <tr key={endpoint} className="border-b border-gray-200">
                      <td className="p-4 font-medium">{endpoint}</td>
                      <td className="p-4">{five}</td>
                      <td className="p-4">{ten}</td>
                      <td className="p-4">{twenty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm md:text-xl leading-relaxed">
              Test setup: k6 load testing. Global throughput increased with
              load while keeping 0% failed requests across all three scenarios.
            </p>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Slow Operations and Bottlenecks</SectionTitle>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Heaviest endpoint", "POST /api/forms/submissions/upload"],
                ["Observed behavior", "Request timeouts started under high POST load."],
                ["Likely bottleneck", "Pressure on database connections."],
                ["Impact", "Form submissions failed and stored tickets became temporarily unavailable in the UI."],
                ["Optimization path", "Inspect database connection pool and slow-query logs."],
                ["Breaking point", "Timeouts started after about 435 completed POST requests."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-sm md:text-lg leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Scalability</SectionTitle>
            <p className="text-sm md:text-xl leading-relaxed mb-5">
              Under moderate POST load the system remained stable. At high POST
              load, the upload submission endpoint started timing out,
              indicating saturation in the write/submission path.
            </p>
            <ul className="grid gap-3 md:grid-cols-2 text-sm md:text-xl">
              {scalabilityPoints.map((point) => (
                <li key={point} className="rounded-xl bg-gray-100 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>JWT / Session Cookie Security</SectionTitle>
            <div className="grid gap-5 md:grid-cols-3">
              {securityLayers.map(([title, text]) => (
                <article key={title} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-sm md:text-lg leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
            <ul className="mt-5 list-disc space-y-2 ml-6 text-sm md:text-xl">
              <li>RS256 with JWKS validation and asymmetric signing.</li>
              <li>Issuer and audience validated in production.</li>
              <li>JWKS cache with 10-minute TTL to avoid repeated Keycloak calls.</li>
              <li>Passwords are managed exclusively by Keycloak with Argon2.</li>
            </ul>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>OWASP Top 10 - Threats and Mitigations</SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 font-bold">Threat</th>
                    <th className="p-4 font-bold">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  {owaspRows.map(([threat, mitigation]) => (
                    <tr key={threat} className="border-b border-gray-200">
                      <td className="p-4 font-medium">{threat}</td>
                      <td className="p-4">{mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Business Rule Analysis</SectionTitle>
            <p className="text-sm md:text-xl leading-relaxed mb-5 text-justify">
              Business invariants are rules that remain valid across the
              system. The team tested invariants such as invalid ticket fields,
              empty form fields and messages on closed tickets.
            </p>
            <div className="space-y-4">
              {invariants.map(([title, text]) => (
                <article key={title} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-sm md:text-lg leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Software Project Management</SectionTitle>
            <p className="text-sm md:text-xl leading-relaxed">
              CI/CD is used as automated validation before integration, helping
              keep implementation work aligned with the project workflow and
              reducing the risk of integrating broken changes.
            </p>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Implemented Features</SectionTitle>
            <ul className="grid gap-3 md:grid-cols-3 text-sm md:text-lg">
              {implementedFeatures.map((feature) => (
                <li key={feature} className="rounded-xl bg-gray-100 p-4">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Features Not Implemented</SectionTitle>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-3">Missing scope</h3>
                <ul className="list-disc space-y-2 ml-6 text-sm md:text-lg">
                  {missingFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Reasons</h3>
                <ul className="list-disc space-y-2 ml-6 text-sm md:text-lg">
                  {reasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>General Evolution and Velocity</SectionTitle>
            <p className="text-sm md:text-xl leading-relaxed text-justify">
              The Jira reports show the evolution of project work items over
              time, the growth of the backlog and the progressive completion of
              tasks throughout the project. The velocity report compares planned
              work at the start of each sprint with the work completed by the
              team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
