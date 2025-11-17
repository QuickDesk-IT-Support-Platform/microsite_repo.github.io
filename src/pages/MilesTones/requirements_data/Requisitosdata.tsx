export const func_requirements = [
  {
    category: "Ticket Management",
    items: [
      "Allow end-users to create support tickets via web form or chatbot integration.",
      "Each ticket includes Title, Description, Category, Subcategory, Priority, Attachments, Requester, and Status.",
      "Users can track ticket status: Open, In Progress, Resolved, Closed.",
      "Users can attach files (e.g., screenshots, log files).",
      "Automatic notifications for ticket status changes.",
      "Technicians can change status manually or via automated workflow.",
      "Automatic assignment to technicians based on category, priority, and availability.",
      "Manual reclassification by technicians.",
      "Notifications for creation, status changes, comments, resolution, or closure."
    ]
  },
  {
    category: "Automation & AI",
    items: [
      "Use NLP to analyze text and attachments of incoming tickets.",
      "Automatic ticket categorization based on historical data.",
      "Automatic priority assignment based on urgency keywords, user role, and business impact.",
      "Automatic routing to appropriate group or technician based on skills, workload, and availability.",
      "Keep confidence scores for AI predictions; only automate above threshold (e.g., 80%).",
      "Ask human agent for confirmation if below threshold.",
      "All AI-based actions reversible by managers.",
      "Pre-configured automatic responses for recurring requests (e.g., password reset)."
    ]
  },
  {
    category: "Self-Service Portal",
    items: [
      "Web-based portal for submitting and managing support requests.",
      "Secure authentication via Keycloak SSO.",
      "Create, view, search, and filter tickets.",
      "Searchable knowledge base with articles, FAQs, guides.",
      "Multi-language interface: English and Portuguese.",
      "Display relevant articles before submitting a ticket.",
      "Log all user interactions for analytics."
    ]
  },
  {
    category: "Analytics, Dashboards and Reporting",
    items: [
      "Real-time dashboards for managers, technicians, administrators.",
      "Customizable dashboards by role and permissions.",
      "Display key indicators: open/resolved/closed tickets, response times, SLA compliance, workload.",
      "Filter analytics by date range, category, department, priority.",
      "Manual report generation with PDF and CSV export.",
      "Visual charts and graphs for intuitive interpretation.",
      "Store historical data for trend analysis and capacity planning."
    ]
  }
];

const nonFunctionalRequirements = [
  {
    category: "Performance & Scalability",
    items: [
      "System shall respond to user actions within 2 seconds under normal load.",
      "System shall support at least 500 concurrent users without performance degradation.",
      "System shall allow horizontal scaling by adding additional servers.",
      "Backend shall implement asynchronous request handling to optimize response times and reduce latency.",
      "System shall perform automatic load balancing between service instances.",
      "Database shall support indexed search and caching for efficient retrieval of ticket data and analytics.",
      "System shall handle at least 10,000 active tickets while maintaining responsiveness.",
      "API error rate shall remain below 1% during standard operation."
    ]
  },
  {
    category: "Security & Data Protection",
    items: [
      "All data in transit shall be encrypted using TLS 1.3 or higher.",
      "All sensitive information (credentials, tokens, attachments) shall be encrypted at rest using AES-256.",
      "System shall enforce Role-Based Access Control (RBAC) and integrate with Keycloak for authentication.",
      "Platform shall comply with GDPR, ensuring user consent, right to erasure, and data minimization.",
      "System shall prevent SQL injection, Cross-Site Scripting (XSS), and authentication/session hijacking.",
      "System shall include intrusion detection and alert administrators of unauthorized access attempts.",
      "Failed login attempts shall trigger temporary account lockouts (e.g., 5 failed attempts = 10-minute lock)."
    ]
  },
  {
    category: "Reliability & Availability",
    items: [
      "System shall maintain uptime of at least 99.5% during business hours.",
      "System shall include redundancy and failover mechanisms at server and database levels.",
      "System shall automatically recover from unexpected failures without manual intervention.",
      "System shall allow real-time health monitoring of components (API, database, services).",
      "System shall store logs of critical events for at least 6 months.",
      "Scheduled maintenance shall be communicated to users and logged in the admin panel.",
      "Database shall support replication (e.g., PostgreSQL streaming replication or cloud-managed replicas).",
      "Recovery Time Objective (RTO) shall not exceed 2 hours, and Recovery Point Objective (RPO) shall not exceed 15 minutes.",
      "System shall include health-check endpoints (/health) for monitoring uptime.",
      "Backup and recovery procedures shall be tested twice per year."
    ]
  },
  {
    category: "Error Handling & Recovery",
    items: [
      "System shall detect runtime exceptions and handle them via graceful degradation.",
      "Frontend shall display user-friendly error messages without exposing system details.",
      "Backend shall log all exceptions with metadata (service name, timestamp, user ID, stack trace).",
      "Application shall operate in read-only mode during partial database outages if possible.",
      "System shall retry failed background tasks up to 3 times before escalation.",
      "System shall automatically notify administrators on critical failures.",
      "Failed containers or services shall automatically restart using Docker health checks."
    ]
  },
  {
    category: "Maintainability & Modularity",
    items: [
      "System shall use a modular architecture separating frontend, backend, and database layers.",
      "System shall support automated unit, integration, and regression testing.",
      "System shall use version control (Git) with rollback capability.",
      "Platform shall allow adding new modules or integrations without altering the core system.",
      "CI/CD pipeline shall automate deployment, testing, and rollback.",
      "System shall support Docker-based deployments for easier maintenance."
    ]
  },
  {
    category: "Compatibility & Integration",
    items: [
      "System shall be compatible with major browsers (Chrome, Edge, Firefox, Safari).",
      "System shall expose a RESTful API for external integrations (HR, monitoring, communication tools).",
      "System shall allow email integration for ticket creation and updates.",
      "Platform shall integrate with monitoring tools (e.g., Prometheus, Grafana)."
    ]
  },
  {
    category: "Usability & Accessibility",
    items: [
      "User interface shall be intuitive, responsive, and consistent across devices.",
      "Interface shall include tooltips, contextual help, and visual feedback.",
      "System shall support multi-language UI (English and Portuguese).",
      "System shall allow user personalization (theme, language, notification preferences).",
      "Platform shall include onboarding guides and help overlays for first-time users.",
      "System shall maintain light/dark mode themes configurable per user."
    ]
  }
];
export const nonFunctionalReqs = nonFunctionalRequirements;