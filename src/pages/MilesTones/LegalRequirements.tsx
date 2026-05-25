// JSX-only component — explicit React import not required
import Header from "../Header";

const gdprData = [
  {
    title: "Personal data collected",
    items: [
      "Name",
      "E-mail address",
      "User role",
      "Ticket history",
      "Support messages",
      "File attachments",
    ],
  },
  {
    title: "Purpose of data collection",
    items: [
      "User authentication",
      "Ticket creation and tracking",
      "Communication between users and IT staff",
      "Service monitoring and reporting",
    ],
  },
];

const privacyMeasures = [
  {
    title: "Pseudonymization",
    items: [
      "Use internal user IDs instead of names or emails.",
      "Use correlation IDs in logs.",
      "Hide personal identifiers from dashboards.",
      "Restrict access to identity mappings.",
      "Keep role-based access control over tickets.",
    ],
  },
  {
    title: "Anonymization",
    items: [
      "Remove personal identifiers from closed or old tickets when possible.",
      "Use aggregated statistics for reporting.",
      "Avoid personal data in analytics.",
      "Delete or anonymize unnecessary attachments.",
      "Keep only non-identifiable operational metrics.",
    ],
  },
];

const thirdPartySharing = [
  ["Keycloak", "Authentication and access tokens"],
  ["SMTP Provider", "Email notifications"],
  ["MinIO / Storage", "Ticket attachments"],
  ["Grafana / Loki", "Logs and observability"],
  ["Hosting Provider", "App, databases and storage infrastructure"],
];

const protectionMeasures = [
  ["Keycloak Auth", "No direct password storage."],
  ["RBAC", "USER, ORG_WORKER and ORG_ADMIN permissions."],
  ["JWT Validation", "Protected endpoints require valid tokens."],
  ["HTTPS / TLS", "Encrypted communication."],
  ["Ticket Access Control", "Users can only access authorized data."],
  ["Controlled File Access", "Attachments have restricted access."],
  ["Database Isolation", "Databases are not publicly exposed."],
  ["Secure Logs", "Correlation IDs and no unnecessary personal data."],
];

const licensingRows = [
  ["QuickDesk Platform", "Own code", "MIT"],
  ["Frontend", "React, TanStack, Radix UI, Zustand, Zod", "MIT"],
  ["Frontend", "keycloak-js, TypeScript", "Apache 2.0"],
  ["Backend", "FastAPI, SQLModel, PyJWT", "MIT"],
  ["Backend", "PyMongo/Motor, Cryptography, MinIO SDK", "Apache 2.0"],
  ["Infra", "Keycloak, PostgreSQL, RabbitMQ, Traefik", "Apache 2.0 / MPL 2.0"],
];

const commercialRisks = [
  ["MongoDB", "SSPL", "Migrate to MongoDB Atlas under commercial terms."],
  ["MinIO", "AGPL-3.0", "Use unmodified or purchase a commercial license."],
  ["Grafana + Loki", "AGPL-3.0", "Use internally; consider Grafana Cloud if needed."],
];

const sectorRows = [
  ["ITIL / ISO 20000", "Service management structure and operational maturity", "Partial"],
  ["ISO/IEC 27001", "Reference for information security controls", "Partial"],
  ["GDPR + Law 58/2019", "Personal data processing in tickets and user accounts", "Compliant"],
  ["NIS2 / DL 65/2021", "Security controls, incident traceability and system protection", "Partial"],
  ["DL 83/2018", "Accessibility obligations for public-sector platforms", "Not assessed"],
];

const legalRisks = [
  ["Lack of processing records", "Data processing record model and admin export."],
  ["Failure to support data subject rights", "User data export and anonymization endpoints."],
  ["Weak privacy transparency", "Privacy notice and privacy policy."],
  ["Data breach without response process", "Security incident model and 72h CNPD workflow."],
  ["Excessive data retention", "Automated retention and pseudonymization policy."],
  ["Weak auditability", "Immutable audit logs in Loki."],
];

const dependencyRisks = [
  ["Keycloak", "Authentication service failure", "Redundancy and session fallback."],
  ["RabbitMQ", "Message loss or delay", "Persistent queues and retry mechanisms."],
  ["PostgreSQL", "Data inconsistency or downtime", "Backups and replication."],
  ["MongoDB", "Schema inconsistency", "Validation and controlled structure."],
  ["MinIO", "Data unavailability or loss", "Backups, redundancy and monitoring."],
];

const maintainabilityRisks = [
  ["Lack of automated testing", "Undetected bugs and difficult refactoring.", "Unit and integration tests."],
  ["Limited documentation", "Hard onboarding and maintenance.", "Keep API and system docs updated."],
  ["Tight coupling between services", "Changes may break other modules.", "Improve modularity and interfaces."],
  ["Complex data flow across services", "Hard to track and debug data across components.", "Standardize data flow and improve logging."],
];

const swot = [
  {
    title: "Strengths",
    items: [
      "Very feature dense platform.",
      "Clear and defined product scope.",
      "Strong alignment with industry standards such as ITIL.",
      "Separation of duties created a tighter understanding of the product.",
    ],
  },
  {
    title: "Weaknesses",
    items: [
      "Handles a lot of personal information.",
      "Limited proof of real-world performance.",
      "Feature-heavy product can create maintenance expectations.",
      "Limited brand recognition.",
    ],
  },
  {
    title: "Opportunities",
    items: [
      "Clear market where the main competitor provides a weak solution.",
      "Can target mid-sized organizations, universities, schools and public institutions.",
      "Can evolve features to meet current IT demands and trends.",
      "Organizations may prefer a more adaptable platform than large standardized tools.",
    ],
  },
  {
    title: "Threats",
    items: [
      "Platform migration is sometimes avoided.",
      "Dependence on organizational adoption.",
      "Competition with mature ITSM platforms.",
      "Client IT needs may surpass the initial scope.",
    ],
  },
];

const pestel = [
  ["Political", "QuickDesk can benefit from the push toward digital transformation in public organizations, although adoption processes may require time and transparency."],
  ["Economic", "QuickDesk can position itself as a less established and cheaper ITSM alternative with manageable operating costs."],
  ["Social", "Ease of use and accessibility reduce the learning curve, while changing communication habits and AI tools may influence adoption."],
  ["Technological", "The platform is built on stable and documented foundations, while AI tools may increasingly compete with ITSM workflows."],
  ["Environmental", "Better ticket tracking can reduce paper-based processes, repeated work and unnecessary equipment replacement."],
  ["Legal", "Future public-sector clients may value interoperability, data residency, secure cloud choices and digital sovereignty requirements."],
];

const SectionTitle = ({ children }: { children: string }) => (
  <div className="flex flex-row gap-3 items-center pb-3">
    <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
    <h2 className="text-2xl font-extrabold">{children}</h2>
  </div>
);

export default function LegalRequirements() {
  return (
    <div className="flex min-h-screen">
      <Header />

      <div className="flex pt-18 w-full">
        <div
          id="M3 - Legal Requirements"
          className="w-full md:w-8/8 p-4 md:p-20 bg-white md:h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <h1 className="font-bold text-4xl text-center md:text-start">
            M3 - Legal Requirements
          </h1>
          <p className="mt-3 text-center md:text-start text-gray-600 text-lg">
            PEI Course presentation - 05/05/2026
          </p>

          <div className="mt-10 justify-center flex flex-col items-center space-y-6">
            <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.canva.com/design/DAHHl-UVBJ0/us66eGli_ogG_l6zng9g0g/view/embed?"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>

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
            <SectionTitle>Why Legal Requirements Matter</SectionTitle>
            <ul className="grid gap-3 md:grid-cols-2 text-sm md:text-xl">
              {[
                "QuickDesk handles user and support-agent information.",
                "It relies on third-party software and libraries.",
                "It operates in the IT service management domain.",
                "It needs clear rules for data protection and platform use.",
              ].map((item) => (
                <li key={item} className="rounded-xl bg-gray-100 p-4">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm md:text-xl leading-relaxed">
              Legal compliance is essential to ensure trust, security and
              sustainable adoption of QuickDesk.
            </p>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>GDPR Compliance</SectionTitle>
            <div className="grid gap-5 md:grid-cols-2">
              {gdprData.map((group) => (
                <article key={group.title} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="text-xl font-bold mb-3">{group.title}</h3>
                  <ul className="list-disc space-y-2 ml-5 text-sm md:text-lg">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Data Anonymization and Pseudonymization</SectionTitle>
            <div className="grid gap-5 md:grid-cols-2">
              {privacyMeasures.map((group) => (
                <article key={group.title} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="text-xl font-bold mb-3">{group.title}</h3>
                  <ul className="list-disc space-y-2 ml-5 text-sm md:text-lg">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Right to be Forgotten and Data Retention</SectionTitle>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["Deletion upon request", "Users may request deletion of their personal data."],
                ["Ticket anonymization", "Ticket data may be anonymized when it is no longer necessary."],
                ["Messages and attachments", "They must be dissociated from the user."],
                ["Technical logs", "Logs should avoid unnecessary personal data."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-sm md:text-xl leading-relaxed text-justify">
              Instead of deleting a ticket needed for internal statistics,
              QuickDesk can replace user identity with an anonymous identifier,
              delete attachments and keep only non-identifiable operational data.
            </p>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Privacy Policy and Third-Party Data Sharing</SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 font-bold">Component</th>
                    <th className="p-4 font-bold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {thirdPartySharing.map(([component, purpose]) => (
                    <tr key={component} className="border-b border-gray-200">
                      <td className="p-4 font-medium">{component}</td>
                      <td className="p-4">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Safety and Protection Measures</SectionTitle>
            <div className="grid gap-4 md:grid-cols-4">
              {protectionMeasures.map(([title, text]) => (
                <article key={title} className="rounded-xl bg-gray-100 p-4">
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Licensing and Intellectual Property</SectionTitle>
            <div className="overflow-x-auto mb-6">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 font-bold">Layer</th>
                    <th className="p-4 font-bold">Components</th>
                    <th className="p-4 font-bold">License</th>
                  </tr>
                </thead>
                <tbody>
                  {licensingRows.map(([layer, components, license]) => (
                    <tr key={`${layer}-${components}`} className="border-b border-gray-200">
                      <td className="p-4 font-medium">{layer}</td>
                      <td className="p-4">{components}</td>
                      <td className="p-4">{license}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-xl leading-relaxed">
              For the current academic scope, QuickDesk is license-compliant.
              A commercial pivot requires addressing MongoDB, MinIO and
              Grafana/Loki, all with viable mitigations.
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 font-bold">Component</th>
                    <th className="p-4 font-bold">License</th>
                    <th className="p-4 font-bold">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  {commercialRisks.map(([component, license, mitigation]) => (
                    <tr key={component} className="border-b border-gray-200">
                      <td className="p-4 font-medium">{component}</td>
                      <td className="p-4">{license}</td>
                      <td className="p-4">{mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Sector-Specific Regulation</SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 font-bold">Area</th>
                    <th className="p-4 font-bold">Relevance to QuickDesk</th>
                    <th className="p-4 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sectorRows.map(([area, relevance, status]) => (
                    <tr key={area} className="border-b border-gray-200">
                      <td className="p-4 font-medium">{area}</td>
                      <td className="p-4">{relevance}</td>
                      <td className="p-4">{status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Main Legal Risks and Mitigation</SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 font-bold">Risk</th>
                    <th className="p-4 font-bold">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  {legalRisks.map(([risk, mitigation]) => (
                    <tr key={risk} className="border-b border-gray-200">
                      <td className="p-4 font-medium">{risk}</td>
                      <td className="p-4">{mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Technical Risks</SectionTitle>
            <p className="text-sm md:text-xl leading-relaxed text-justify mb-5">
              QuickDesk depends on multiple interconnected services, external
              systems, relational and non-relational databases. Reliability and
              scalability are critical for user trust and long-term adoption.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 font-bold">Dependency</th>
                    <th className="p-4 font-bold">Risk</th>
                    <th className="p-4 font-bold">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  {dependencyRisks.map(([dependency, risk, mitigation]) => (
                    <tr key={dependency} className="border-b border-gray-200">
                      <td className="p-4 font-medium">{dependency}</td>
                      <td className="p-4">{risk}</td>
                      <td className="p-4">{mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>Technical Debt and Maintainability</SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 font-bold">Topic</th>
                    <th className="p-4 font-bold">Risk</th>
                    <th className="p-4 font-bold">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  {maintainabilityRisks.map(([topic, risk, mitigation]) => (
                    <tr key={topic} className="border-b border-gray-200">
                      <td className="p-4 font-medium">{topic}</td>
                      <td className="p-4">{risk}</td>
                      <td className="p-4">{mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>SWOT Analysis</SectionTitle>
            <div className="grid gap-5 md:grid-cols-2">
              {swot.map((group) => (
                <article key={group.title} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="text-xl font-bold mb-3">{group.title}</h3>
                  <ul className="list-disc space-y-2 ml-5 text-sm md:text-lg">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>TOWS Matrix Actions</SectionTitle>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Highlight that QuickDesk combines standard ITSM practices with flexibility.",
                "Use the clear project scope to communicate a focused value proposition.",
                "Use ITIL alignment to reassure organizations during platform migration.",
                "Prioritize common ITSM needs first and clearly mark advanced enterprise needs as outside the initial scope.",
                "Support pilot adoption through early feedback, usage metrics and satisfaction indicators.",
                "Build user trust by making data usage transparent.",
              ].map((item) => (
                <article key={item} className="rounded-xl bg-gray-100 p-5 text-sm md:text-lg">
                  {item}
                </article>
              ))}
            </div>
          </section>

          <section className="my-10 p-5 rounded-2xl shadow-2xl">
            <SectionTitle>PESTEL Analysis</SectionTitle>
            <div className="grid gap-4 md:grid-cols-2">
              {pestel.map(([area, text]) => (
                <article key={area} className="rounded-xl bg-gray-100 p-5">
                  <h3 className="text-xl font-bold mb-2">{area}</h3>
                  <p className="text-sm md:text-lg leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
