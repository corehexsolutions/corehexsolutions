export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceProject {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  status: "live" | "in-progress" | "archived";
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroIcon: string;
  accentColor: string;
  features: ServiceFeature[];
  process: ServiceProcess[];
  benefits: string[];
  projects?: ServiceProject[];   // only on software-development (or any service you choose)
  cta: {
    heading: string;
    subtext: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Protect what matters. Before it's too late.",
    description:
      "We build multi-layered security architectures that keep your business protected against evolving cyber threats — from ransomware and phishing to insider attacks and zero-day exploits. Our team monitors, detects, and responds around the clock so you don't have to.",
    heroIcon: "shield-lock",
    accentColor: "#3b82f6",
    features: [
      {
        icon: "shield-check",
        title: "Threat Detection & Response",
        description:
          "Real-time monitoring with automated threat intelligence. We identify anomalies before they escalate into incidents, with 24/7 SOC coverage.",
      },
      {
        icon: "lock",
        title: "Endpoint Protection",
        description:
          "Secure every device on your network — laptops, servers, mobile endpoints — with next-gen antivirus, EDR, and zero-trust access policies.",
      },
      {
        icon: "firewall",
        title: "Firewall & Perimeter Defense",
        description:
          "Advanced next-gen firewalls, intrusion detection systems, and network segmentation to keep attackers out and contain any breach.",
      },
      {
        icon: "file-certificate",
        title: "Compliance & Auditing",
        description:
          "Stay compliant with ISO 27001, SOC 2, GDPR, and industry-specific regulations with regular security audits and documentation.",
      },
      {
        icon: "user-shield",
        title: "Security Awareness Training",
        description:
          "Your people are your first line of defense. We train your team to recognize phishing, social engineering, and insider threats.",
      },
      {
        icon: "bug",
        title: "Penetration Testing",
        description:
          "Simulate real-world attacks on your systems before hackers do. Our ethical hackers find vulnerabilities so you can fix them first.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Security Assessment",
        description:
          "We audit your existing infrastructure, identify vulnerabilities, and map your risk exposure across all systems and endpoints.",
      },
      {
        step: 2,
        title: "Strategy & Planning",
        description:
          "Based on the assessment, we design a layered security roadmap tailored to your business size, industry, and compliance needs.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "We deploy security tools, configure firewalls, set up monitoring pipelines, and harden your systems — with minimal disruption.",
      },
      {
        step: 4,
        title: "Ongoing Monitoring",
        description:
          "Continuous 24/7 threat monitoring, monthly reports, and rapid incident response to keep your defenses current.",
      },
    ],
    benefits: [
      "Reduce breach risk by up to 85%",
      "Meet compliance requirements faster",
      "Minimize downtime from attacks",
      "Employee security awareness uplift",
      "Clear security posture visibility",
      "Rapid incident response SLAs",
    ],
    cta: {
      heading: "Ready to secure your business?",
      subtext:
        "Start with a free security assessment and understand exactly where your risks lie.",
    },
  },

  "network-management": {
    slug: "network-management",
    title: "Network Management",
    tagline: "A network that just works. Always.",
    description:
      "From design and deployment to ongoing monitoring and optimization, we manage your entire network infrastructure so your team stays connected and productive — with zero unplanned downtime as the goal.",
    heroIcon: "network",
    accentColor: "#06b6d4",
    features: [
      {
        icon: "router",
        title: "Network Design & Architecture",
        description:
          "Purpose-built network topologies for your office layout, workload profile, and growth plans — wired, wireless, and hybrid.",
      },
      {
        icon: "activity",
        title: "24/7 Network Monitoring",
        description:
          "We watch your network around the clock. Performance dashboards, bandwidth analytics, and instant alerting on anomalies.",
      },
      {
        icon: "wifi",
        title: "Wireless Infrastructure",
        description:
          "Enterprise-grade Wi-Fi deployments with optimized coverage, guest isolation, and seamless roaming across your premises.",
      },
      {
        icon: "server",
        title: "Switch & Router Management",
        description:
          "Configuration, firmware management, and ongoing tuning of all core switching and routing infrastructure.",
      },
      {
        icon: "speedboat",
        title: "Performance Optimization",
        description:
          "QoS tuning, traffic shaping, and bandwidth management to prioritize business-critical applications.",
      },
      {
        icon: "file-analytics",
        title: "Reporting & Analytics",
        description:
          "Monthly performance reports, capacity planning insights, and clear recommendations to keep your network ahead of demand.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Survey",
        description:
          "We assess your physical environment, existing infrastructure, and connectivity requirements across all your locations.",
      },
      {
        step: 2,
        title: "Network Design",
        description:
          "We architect a network design optimized for your traffic patterns, security requirements, and future scalability.",
      },
      {
        step: 3,
        title: "Deployment",
        description:
          "Professional installation of hardware and configuration of all network devices with minimal business disruption.",
      },
      {
        step: 4,
        title: "Managed Operations",
        description:
          "Ongoing monitoring, maintenance, firmware updates, and proactive issue resolution under a managed services agreement.",
      },
    ],
    benefits: [
      "99.9% uptime target across your network",
      "Faster troubleshooting & resolution times",
      "Predictable monthly networking costs",
      "Scalable infrastructure as you grow",
      "Improved application performance",
      "Reduced burden on internal IT staff",
    ],
    cta: {
      heading: "Let's build your ideal network.",
      subtext:
        "Get a free site survey and see what a well-managed network can do for your productivity.",
    },
  },

  "it-infrastructure": {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    tagline: "The backbone your business runs on.",
    description:
      "We design, deploy, and manage the full IT infrastructure stack — from servers and storage to virtualization and cloud — giving your business a reliable, scalable foundation without the overhead of managing it all in-house.",
    heroIcon: "building-skyscraper",
    accentColor: "#8b5cf6",
    features: [
      {
        icon: "server-2",
        title: "Server Deployment & Management",
        description:
          "Physical and virtual server setup, ongoing patching, performance tuning, and lifecycle management for your compute environment.",
      },
      {
        icon: "database",
        title: "Storage Solutions",
        description:
          "SAN, NAS, and cloud storage architectures designed for your performance, redundancy, and data retention requirements.",
      },
      {
        icon: "brand-virtualbox",
        title: "Virtualization",
        description:
          "VMware, Hyper-V, and cloud-native virtualization to maximize hardware utilization and improve workload flexibility.",
      },
      {
        icon: "cloud",
        title: "Cloud Integration",
        description:
          "Seamless hybrid and multi-cloud strategies connecting on-premise infrastructure to Azure, AWS, or Google Cloud.",
      },
      {
        icon: "refresh",
        title: "Backup & Disaster Recovery",
        description:
          "Automated backup solutions with tested disaster recovery plans to get you back online fast after any incident.",
      },
      {
        icon: "adjustments",
        title: "Infrastructure Monitoring",
        description:
          "Proactive health monitoring across all your infrastructure components with alerting and capacity planning.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Infrastructure Audit",
        description:
          "A thorough review of your existing hardware, software, and architecture to identify gaps, risks, and optimization opportunities.",
      },
      {
        step: 2,
        title: "Design & Roadmap",
        description:
          "We design an infrastructure blueprint aligned with your business goals, budget, and 3–5 year growth plan.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "Structured rollout of new infrastructure components with thorough testing and documentation at every stage.",
      },
      {
        step: 4,
        title: "Managed Support",
        description:
          "Ongoing management, monitoring, and proactive maintenance under an SLA-backed managed services agreement.",
      },
    ],
    benefits: [
      "Reduced hardware capital expenditure",
      "Higher availability and uptime",
      "Faster recovery from failures",
      "Simplified vendor management",
      "Clear capacity and lifecycle visibility",
      "Expert support without hiring overheads",
    ],
    cta: {
      heading: "Ready to modernize your infrastructure?",
      subtext:
        "Start with a free infrastructure audit and get a clear picture of where you stand.",
    },
  },

  "data-solutions": {
    slug: "data-solutions",
    title: "Data Solutions",
    tagline: "Turn your data into your competitive edge.",
    description:
      "We help businesses collect, protect, manage, and extract value from their data — with solutions ranging from database management and data warehousing to analytics and business intelligence platforms.",
    heroIcon: "chart-dots",
    accentColor: "#10b981",
    features: [
      {
        icon: "database",
        title: "Database Management",
        description:
          "Expert administration of SQL and NoSQL databases — performance tuning, replication, backup, and schema optimization.",
      },
      {
        icon: "table",
        title: "Data Warehousing",
        description:
          "Centralize your business data in a structured, query-optimized warehouse for fast, reliable reporting and analytics.",
      },
      {
        icon: "chart-bar",
        title: "Business Intelligence",
        description:
          "BI dashboards and reports that turn raw data into clear insights for decision-makers across every department.",
      },
      {
        icon: "arrows-exchange",
        title: "Data Integration & ETL",
        description:
          "Connect disparate data sources with clean, reliable ETL pipelines that keep your systems in sync.",
      },
      {
        icon: "shield-lock",
        title: "Data Security & Compliance",
        description:
          "Encryption, access controls, audit trails, and compliance frameworks to keep sensitive data protected and auditable.",
      },
      {
        icon: "cloud-upload",
        title: "Data Migration",
        description:
          "Safe, zero-downtime migration of databases and data assets to new platforms or cloud environments.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Data Discovery",
        description:
          "We map your existing data sources, flows, and pain points to understand what you have and what you need.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description:
          "We design a data architecture that fits your current needs and scales with future data volumes and use cases.",
      },
      {
        step: 3,
        title: "Build & Integrate",
        description:
          "We implement databases, pipelines, and analytics tools — integrating with your existing systems for a seamless experience.",
      },
      {
        step: 4,
        title: "Manage & Optimize",
        description:
          "Ongoing monitoring, query optimization, capacity planning, and support to keep your data infrastructure humming.",
      },
    ],
    benefits: [
      "Faster, more reliable reporting",
      "Single source of truth for your data",
      "Improved data quality and integrity",
      "Faster decision-making with better insights",
      "Reduced data management overhead",
      "Regulatory compliance confidence",
    ],
    cta: {
      heading: "Ready to unlock your data's potential?",
      subtext:
        "Talk to our data team and discover what's possible with a properly managed data strategy.",
    },
  },

  "it-support": {
    slug: "it-support",
    title: "IT Support",
    tagline: "Expert help when you need it. Fast.",
    description:
      "From day-to-day helpdesk requests to complex technical issues, our IT support team is your always-on partner — resolving problems quickly so your team can focus on work, not tech frustrations.",
    heroIcon: "headset",
    accentColor: "#f59e0b",
    features: [
      {
        icon: "phone",
        title: "Helpdesk Support",
        description:
          "Responsive Level 1, 2, and 3 support via phone, email, and remote tools. Most issues resolved in the first contact.",
      },
      {
        icon: "desktop",
        title: "Remote & On-Site Support",
        description:
          "Remote desktop support for quick fixes, on-site engineers for hardware issues that need hands-on attention.",
      },
      {
        icon: "device-laptop",
        title: "Device Management",
        description:
          "Procurement, setup, imaging, and lifecycle management for laptops, desktops, mobile devices, and peripherals.",
      },
      {
        icon: "tool",
        title: "Break/Fix Services",
        description:
          "Fast hardware diagnostics and repair for servers, workstations, printers, and networking equipment.",
      },
      {
        icon: "apps",
        title: "Software Support",
        description:
          "Installation, licensing, updates, and troubleshooting for business applications and productivity suites.",
      },
      {
        icon: "users",
        title: "Onboarding & Offboarding",
        description:
          "Seamless user account setup, device provisioning, and access management when staff join or leave.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Ticket & Triage",
        description:
          "Issues are logged, prioritized by severity, and assigned to the right engineer — automatically, with no chasing needed.",
      },
      {
        step: 2,
        title: "Remote Resolution",
        description:
          "Most issues are resolved remotely within minutes using secure remote access tools, with no site visit needed.",
      },
      {
        step: 3,
        title: "Escalation if Needed",
        description:
          "Complex issues are escalated smoothly to senior engineers or on-site teams with full context already shared.",
      },
      {
        step: 4,
        title: "Root Cause & Prevention",
        description:
          "After resolution, we document root causes and recommend changes to prevent the same issue recurring.",
      },
    ],
    benefits: [
      "Fast response times, day or night",
      "Reduced employee downtime",
      "Predictable support costs",
      "Proactive maintenance reduces incidents",
      "Dedicated account manager",
      "Clear SLAs with performance reporting",
    ],
    cta: {
      heading: "Stop fighting fires. Get proactive support.",
      subtext:
        "Talk to us about a support plan that fits your team size and budget.",
    },
  },

  "it-consulting": {
    slug: "it-consulting",
    title: "IT Consulting",
    tagline: "Strategy that aligns technology with your business goals.",
    description:
      "We help businesses make smarter technology decisions — from digital transformation roadmaps and vendor evaluations to technology audits and IT budgeting. Our consultants work as an extension of your leadership team.",
    heroIcon: "presentation-analytics",
    accentColor: "#ec4899",
    features: [
      {
        icon: "map",
        title: "IT Strategy & Roadmapping",
        description:
          "We work with your leadership team to build a clear, prioritized technology roadmap aligned with your 1–3 year business plan.",
      },
      {
        icon: "transform",
        title: "Digital Transformation",
        description:
          "We guide organizations through modernization initiatives — from cloud migration to process automation and platform consolidation.",
      },
      {
        icon: "coin",
        title: "IT Budgeting & Cost Optimization",
        description:
          "We review your IT spend, identify waste, and build a structured budget that aligns costs with business priorities.",
      },
      {
        icon: "checklist",
        title: "Vendor Evaluation & Management",
        description:
          "Objective evaluation of technology vendors and products so you make procurement decisions based on data, not sales pitches.",
      },
      {
        icon: "clipboard-check",
        title: "Technology Audits",
        description:
          "A full review of your existing technology stack to surface risks, redundancies, and missed opportunities.",
      },
      {
        icon: "git-branch",
        title: "Project & Change Management",
        description:
          "Structured project management for major IT initiatives, with change management to drive adoption across your organization.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "We meet your team, understand your business model, goals, and current technology state through workshops and interviews.",
      },
      {
        step: 2,
        title: "Analysis",
        description:
          "We analyze your technology environment, competitive landscape, and industry best practices to identify key opportunities.",
      },
      {
        step: 3,
        title: "Recommendations",
        description:
          "We deliver a clear, actionable report with prioritized recommendations, business cases, and an implementation roadmap.",
      },
      {
        step: 4,
        title: "Implementation Support",
        description:
          "We remain engaged as advisors during execution — reviewing progress, adjusting plans, and ensuring you hit your goals.",
      },
    ],
    benefits: [
      "Clearer technology direction",
      "Avoid costly technology mistakes",
      "Objective, vendor-neutral advice",
      "Better ROI on IT investments",
      "Faster decision-making processes",
      "Alignment between IT and business goals",
    ],
    cta: {
      heading: "Let's build your technology strategy together.",
      subtext:
        "Book a discovery call and see how strategic IT advice can transform your business outcomes.",
    },
  },

  // ─── Software Development ──────────────────────────────────────────────────
  "software-development": {
    slug: "software-development",
    title: "Software Development",
    tagline: "Custom software built to fit your business, not the other way around.",
    description:
      "We design and build web and mobile applications from the ground up — clean architecture, modern tech stacks, and a product-first mindset. Whether you need an internal tool, a customer-facing platform, or a full SaaS product, we deliver software that works and scales.",
    heroIcon: "code",
    accentColor: "#f97316",
    features: [
      {
        icon: "layout",
        title: "Web Application Development",
        description:
          "Full-stack web apps built with React, Next.js, Node.js, and modern backend frameworks — responsive, fast, and production-ready.",
      },
      {
        icon: "device-mobile",
        title: "Mobile App Development",
        description:
          "Cross-platform iOS and Android apps using React Native — one codebase, native performance, deployed to both stores.",
      },
      {
        icon: "api",
        title: "API Design & Integration",
        description:
          "RESTful and GraphQL APIs built for scale, with clean documentation and integrations into third-party platforms and services.",
      },
      {
        icon: "database",
        title: "Database Architecture",
        description:
          "Schema design, query optimization, and database selection (PostgreSQL, MySQL, MongoDB) matched to your data model.",
      },
      {
        icon: "cloud",
        title: "Cloud Deployment & DevOps",
        description:
          "CI/CD pipelines, containerized deployments on AWS, Azure, or GCP, and infrastructure-as-code for repeatable, reliable releases.",
      },
      {
        icon: "refresh",
        title: "Maintenance & Iteration",
        description:
          "Post-launch support, bug fixes, performance monitoring, and feature iteration so your product keeps improving over time.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Scoping",
        description:
          "We dig into your requirements, map user flows, and define the scope, tech stack, and delivery timeline before a line of code is written.",
      },
      {
        step: 2,
        title: "Design & Prototype",
        description:
          "Wireframes and interactive prototypes so you can see and test the product before we build it — catching problems early when they're cheap to fix.",
      },
      {
        step: 3,
        title: "Build & Test",
        description:
          "Iterative development in sprints with continuous testing — unit, integration, and end-to-end — so quality is baked in, not bolted on.",
      },
      {
        step: 4,
        title: "Deploy & Support",
        description:
          "Production deployment with monitoring, performance tracking, and a clear handover — or ongoing managed development if you need it.",
      },
    ],
    benefits: [
      "Software built exactly for your workflow",
      "Modern, maintainable codebases",
      "Faster time-to-market with sprint delivery",
      "Scalable architecture from day one",
      "Full source code ownership",
      "Ongoing support and feature development",
    ],
    projects: [
      {
        title: "Hotel Management System",
        description:
          "A full-featured hotel operations platform covering room reservations, guest check-in/check-out, billing, housekeeping scheduling, and occupancy reporting — built for a mid-size hotel in Vadodara.",
        tags: ["React", "Node.js", "PostgreSQL", "REST API"],
        githubUrl: "https://github.com/corehexsolutions/hotel-management",
        year: "2024",
        status: "live",
      },
      {
        title: "Inventory & Billing Software",
        description:
          "Desktop-class web application for managing product inventory, purchase orders, vendor accounts, and GST-compliant invoicing for retail businesses.",
        tags: ["React", "Express", "MySQL", "PDF generation"],
        githubUrl: "https://github.com/corehexsolutions/inventory-billing",
        year: "2024",
        status: "live",
      },
      {
        title: "Employee Attendance Portal",
        description:
          "RFID and biometric-integrated attendance tracking system with shift management, leave requests, payroll export, and manager dashboards.",
        tags: ["Next.js", "Prisma", "PostgreSQL", "RFID integration"],
        githubUrl: "https://github.com/corehexsolutions/attendance-portal",
        year: "2023",
        status: "live",
      },
      {
        title: "School ERP System",
        description:
          "End-to-end school management covering student enrollment, fee collection, timetable generation, exam results, and parent communication via SMS/email.",
        tags: ["React", "Node.js", "MongoDB", "Twilio"],
        githubUrl: "https://github.com/corehexsolutions/school-erp",
        year: "2023",
        status: "live",
      },
      {
        title: "Real Estate Listing Platform",
        description:
          "Property search and listing platform with advanced filters, map-based search, agent dashboards, and lead management for a local real estate firm.",
        tags: ["Next.js", "Tailwind CSS", "Supabase", "Google Maps API"],
        githubUrl: "https://github.com/corehexsolutions/realestate-platform",
        liveUrl: "https://properties.corehexsolutions.com",
        year: "2024",
        status: "live",
      },
      {
        title: "Field Service Mobile App",
        description:
          "Mobile application for field technicians to receive job assignments, log work orders, capture signatures, and sync data offline when connectivity is limited.",
        tags: ["React Native", "SQLite", "Node.js", "Push notifications"],
        githubUrl: "https://github.com/corehexsolutions/field-service-app",
        year: "2025",
        status: "in-progress",
      },
    ],
    cta: {
      heading: "Have a project in mind?",
      subtext:
        "Share what you're trying to build and we'll tell you how we'd approach it — no commitment needed.",
    },
  },
};

export const getServiceData = (slug: string): ServiceData | null => {
  return servicesData[slug] ?? null;
};

export const getAllServiceSlugs = (): string[] => {
  return Object.keys(servicesData);
};