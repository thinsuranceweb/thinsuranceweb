import {
  Cog6ToothIcon,
  TruckIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  CpuChipIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CheckCircleIcon,
  LifebuoyIcon,
  CubeIcon,
} from "@heroicons/vue/24/outline";

export const industries = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    subtitle: "Risk assessment, machinery, and continuity protection.",
    icon: Cog6ToothIcon,
    heroVideo: "/10095306-uhd_3840_2160_25fps.mp4",
    heroImage:
      "/industries/manufact.jpg",

    intro:
      "Manufacturers face high-value assets, complex supply chains, and operational dependencies. Our role is to reduce uncertainty with clear, structured cover and proactive risk support.",

    quickStats: [
      { label: "Common exposures", value: "Fire, breakdown, injury, delay" },
      { label: "Typical assets", value: "Plant, machinery, stock, buildings" },
      { label: "Priority outcome", value: "Reduced downtime and claims friction" },
    ],

    riskAreas: [
      {
        title: "Property & plant interruption",
        icon: ExclamationTriangleIcon,
        points: [
          "Fire, flood, and perils impacting facilities and stock",
          "Business interruption due to insured damage",
          "Dependency risk (utilities, suppliers, key customers)",
        ],
      },
      {
        title: "Machinery breakdown",
        icon: Cog6ToothIcon,
        points: [
          "Sudden mechanical/electrical failure",
          "Repair/replacement planning and indemnity options",
          "Critical spares and maintenance evidence support",
        ],
      },
      {
        title: "Liability & people",
        icon: ShieldCheckIcon,
        points: [
          "Employers’ liability and workplace incident response",
          "Public/product liability considerations",
          "Contractual risk reviews for key vendors",
        ],
      },
    ],

    solutions: [
      {
        title: "Property + Business Interruption",
        icon: DocumentTextIcon,
        desc: "Structured cover for buildings/contents with interruption options aligned to production realities.",
      },
      {
        title: "Engineering / Machinery Breakdown",
        icon: Cog6ToothIcon,
        desc: "Cover designed for high-dependency equipment where failure creates immediate operational loss.",
      },
      {
        title: "Employers’ & Public Liability",
        icon: ShieldCheckIcon,
        desc: "Practical protection with claims guidance and policy wording clarity to avoid gaps.",
      },
      {
        title: "Cargo / Transit (where relevant)",
        icon: TruckIcon,
        desc: "Optional extensions for inbound materials and outbound goods to protect cashflow.",
      },
    ],

    approach: [
      {
        title: "Discover",
        icon: LifebuoyIcon,
        text: "We capture your operational profile: sites, processes, values, and key dependencies.",
      },
      {
        title: "Assess",
        icon: ChartBarIcon,
        text: "We map exposures, review contracts, and align coverage limits to your risk appetite.",
      },
      {
        title: "Design",
        icon: DocumentTextIcon,
        text: "We structure cover to reduce gaps, simplify renewals, and improve claims outcomes.",
      },
      {
        title: "Support",
        icon: CheckCircleIcon,
        text: "We provide ongoing service: endorsements, certificates, and claims guidance when needed.",
      },
    ],

    faqs: [
      {
        q: "How do we decide the right business interruption period?",
        a: "We base it on realistic recovery times: lead times for equipment, specialist labour availability, and supply chain re-start, not just a generic 12-month default.",
      },
      {
        q: "Can we combine covers into one programme?",
        a: "Yes. Where practical, we consolidate to reduce admin and help avoid duplicated or conflicting policy wordings.",
      },
    ],
  },

  {
    slug: "agro-processing",
    title: "Agro Processing",
    subtitle: "Weather volatility, storage risk, and operational resilience.",
    icon: BuildingStorefrontIcon,
    heroVideo: "/13637445_1920_1080_60fps.mp4",
    heroImage:
      "/industries/agro.jpg",
    intro:
      "Agro-processing organisations manage seasonal risk, storage sensitivity, and price/volume volatility. We build programmes that prioritise continuity and clarity.",
    quickStats: [
      { label: "Common exposures", value: "Weather, storage loss, breakdown" },
      { label: "Typical assets", value: "Facilities, stock, equipment" },
      { label: "Priority outcome", value: "Stability through disruption" },
    ],
    riskAreas: [
      {
        title: "Storage & spoilage",
        icon: ExclamationTriangleIcon,
        points: ["Temperature control failure", "Contamination and hygiene events", "Handling and warehousing loss"],
      },
      {
        title: "Operational dependency",
        icon: Cog6ToothIcon,
        points: ["Processing line downtime", "Power and utility interruptions", "Seasonal capacity bottlenecks"],
      },
      {
        title: "Liability exposures",
        icon: ShieldCheckIcon,
        points: ["Product liability considerations", "Supplier/contractor risk", "Visitor/public liability at sites"],
      },
    ],
    solutions: [
      { title: "Property + Business Interruption", icon: DocumentTextIcon, desc: "Cover aligned to storage, processing, and recovery times." },
      { title: "Engineering / Breakdown", icon: Cog6ToothIcon, desc: "Protection for critical equipment where failure creates cascading loss." },
      { title: "Liability Programme", icon: ShieldCheckIcon, desc: "Practical protection with clear wordings and support." },
    ],
    approach: [
      { title: "Discover", icon: LifebuoyIcon, text: "Understand seasonality, throughput, and storage constraints." },
      { title: "Assess", icon: ChartBarIcon, text: "Map loss scenarios and set limits/deductibles to match appetite." },
      { title: "Design", icon: DocumentTextIcon, text: "Build a programme that avoids gaps and supports continuity." },
      { title: "Support", icon: CheckCircleIcon, text: "Ongoing service for documentation, certificates, and claims guidance." },
    ],
    faqs: [
      { q: "Can we tailor deductibles around seasonal peaks?", a: "Yes — we can structure excesses to reflect realistic loss tolerances and cashflow constraints during peak periods." },
    ],
  },

  {
    slug: "hospitality",
    title: "Hospitality",
    subtitle: "Multi-site property, liability, and guest experience protection.",
    icon: BuildingOffice2Icon,
    heroVideo: "/8921925-uhd_4096_2160_25fps.mp4",
    heroImage:
      "/industries/hospitality.jpg",
    intro:
      "Hospitality operators need strong protection without admin overload. We simplify programmes across locations while protecting revenue and reputation.",
    quickStats: [
      { label: "Common exposures", value: "Property loss, guest claims, interruption" },
      { label: "Typical assets", value: "Buildings, contents, cashflow" },
      { label: "Priority outcome", value: "Simplified renewals + reduced gaps" },
    ],
    riskAreas: [
      { title: "Property & interruption", icon: ExclamationTriangleIcon, points: ["Fire and perils", "Events impacting occupancy", "Claims-ready documentation"] },
      { title: "Guest & public liability", icon: ShieldCheckIcon, points: ["Slip/trip incidents", "Events and activities risk", "Third-party contractors"] },
      { title: "Operational complexity", icon: DocumentTextIcon, points: ["Multiple sites/renewal dates", "Certificates and proof of cover", "Consistent policy wordings"] },
    ],
    solutions: [
      { title: "Portfolio Property Programme", icon: DocumentTextIcon, desc: "Standardised cover across sites with clear reporting and renewals." },
      { title: "Public/Employers Liability", icon: ShieldCheckIcon, desc: "Protection for guest incidents with support for documentation and response." },
    ],
    approach: [
      { title: "Discover", icon: LifebuoyIcon, text: "Review sites, activities, and contractual requirements." },
      { title: "Assess", icon: ChartBarIcon, text: "Identify gaps, overlaps, and inconsistent wording across policies." },
      { title: "Design", icon: DocumentTextIcon, text: "Consolidate where sensible and streamline documentation." },
      { title: "Support", icon: CheckCircleIcon, text: "Claims guidance and ongoing service for endorsements and certificates." },
    ],
    faqs: [],
  },

  {
    slug: "tech-ventures",
    title: "Tech Ventures",
    subtitle: "Cyber, interruption, and client trust enablement.",
    icon: CpuChipIcon,
    heroVideo: "/6754824-uhd_3840_2160_25fps.mp4",
    heroImage:
      "/industries/tech.jpg",
    intro:
      "Growing tech businesses face cyber exposure, service dependencies, and contractual security requirements. We help build confidence with structured protection.",
    quickStats: [
      { label: "Common exposures", value: "Cyber, outage, third-party dependency" },
      { label: "Typical assets", value: "Data, IP, revenue streams" },
      { label: "Priority outcome", value: "Incident readiness + continuity" },
    ],
    riskAreas: [
      { title: "Cyber incidents", icon: ExclamationTriangleIcon, points: ["Data breach and response costs", "Ransom events and recovery", "Regulatory and contractual impact"] },
      { title: "Interruption & dependency", icon: Cog6ToothIcon, points: ["Cloud outages", "Payment provider disruptions", "Supplier exposure"] },
      { title: "Liability & contracts", icon: ShieldCheckIcon, points: ["Client contract requirements", "Professional liability considerations", "Third-party claims risk"] },
    ],
    solutions: [
      { title: "Cyber Liability", icon: ShieldCheckIcon, desc: "Standalone cover with incident response guidance and clarity." },
      { title: "Business Interruption Options", icon: DocumentTextIcon, desc: "Extensions aligned to digital dependencies where available." },
    ],
    approach: [
      { title: "Discover", icon: LifebuoyIcon, text: "Understand your platform, dependencies, and data handling." },
      { title: "Assess", icon: ChartBarIcon, text: "Review controls, history, and likely loss scenarios." },
      { title: "Design", icon: DocumentTextIcon, text: "Build cover that matches your budget and client requirements." },
      { title: "Support", icon: CheckCircleIcon, text: "Ongoing service and guidance when incidents occur." },
    ],
    faqs: [],
  },

  {
    slug: "non-governmental-organization",
    title: "Non-Governmental Organization",
    subtitle: "Multi-country personnel, travel, and operational risk.",
    icon: GlobeAltIcon,
    heroVideo: "/6646626-hd_1920_1080_30fps.mp4",
    heroImage:
      "/industries/ngo.jpg",
    intro:
      "NGOs operate in dynamic environments with travel, medical, and operational risk. We focus on practical cover design that supports your mission.",
    quickStats: [
      { label: "Common exposures", value: "Travel, medical, political risk" },
      { label: "Typical assets", value: "Personnel, equipment, field sites" },
      { label: "Priority outcome", value: "Rapid support + simplified structure" },
    ],
    riskAreas: [
      { title: "Travel & medical", icon: ExclamationTriangleIcon, points: ["Medical emergencies", "Evacuation needs", "Remote location support"] },
      { title: "Operational exposure", icon: DocumentTextIcon, points: ["Field equipment loss", "Asset and site risk", "Duty of care considerations"] },
      { title: "Complex geography", icon: GlobeAltIcon, points: ["Multi-country placements", "Variable risk indices", "Consistent benefits and limits"] },
    ],
    solutions: [
      { title: "Travel Accident & Medical Evacuation", icon: ShieldCheckIcon, desc: "Core cover for global staff movement and emergencies." },
      { title: "Asset / Equipment Cover", icon: DocumentTextIcon, desc: "Protection aligned to field operations and equipment values." },
    ],
    approach: [
      { title: "Discover", icon: LifebuoyIcon, text: "Capture travel profiles, locations, and staff roles." },
      { title: "Assess", icon: ChartBarIcon, text: "Map country risk and align benefit limits to operations." },
      { title: "Design", icon: DocumentTextIcon, text: "Consolidate to reduce admin and keep cover consistent." },
      { title: "Support", icon: CheckCircleIcon, text: "Help with documentation, claims guidance, and ongoing changes." },
    ],
    faqs: [],
  },

  {
    slug: "transport-logistics",
    title: "Transport & Logistics",
    subtitle: "Fleet, cargo, and liability for moving goods reliably.",
    icon: TruckIcon,
    heroVideo: "/logistics.mp4",
    heroImage:
      "/industries/transport.jpg",
    intro:
      "Transport and logistics teams operate under tight schedules where accidents, cargo issues, and subcontractor risk can disrupt cashflow and reputation.",
    quickStats: [
      { label: "Common exposures", value: "Accidents, cargo loss, liability" },
      { label: "Typical assets", value: "Vehicles, cargo, contracts" },
      { label: "Priority outcome", value: "Fewer surprises at claims time" },
    ],
    riskAreas: [
      { title: "Fleet risk", icon: ExclamationTriangleIcon, points: ["Accidents and driver exposure", "Maintenance and compliance", "Claims frequency management"] },
      { title: "Cargo & transit", icon: DocumentTextIcon, points: ["High-value/perishable goods", "Theft and damage", "Subcontractor usage"] },
      { title: "Liability", icon: ShieldCheckIcon, points: ["Freight liability exposure", "Contract requirements", "Cross-border considerations"] },
    ],
    solutions: [
      { title: "Fleet Motor Programme", icon: TruckIcon, desc: "Flexible structure across fleet sizes with practical options." },
      { title: "Cargo / Transit Cover", icon: DocumentTextIcon, desc: "Protection for goods-in-transit aligned to your routes and values." },
      { title: "Liability Structure", icon: ShieldCheckIcon, desc: "Clear cover design that supports contractual requirements." },
    ],
    approach: [
      { title: "Discover", icon: LifebuoyIcon, text: "Review routes, fleet profile, subcontractors, and claims history." },
      { title: "Assess", icon: ChartBarIcon, text: "Identify hotspots and structure deductibles appropriately." },
      { title: "Design", icon: DocumentTextIcon, text: "Build a programme that supports operations and simplifies renewals." },
      { title: "Support", icon: CheckCircleIcon, text: "Ongoing endorsements, certificates, and claims coordination." },
    ],
    faqs: [],
  },

  {
    slug: "construction",
    title: "Construction",
    subtitle: "Project risk, site liability, and asset protection.",
    icon: BuildingOffice2Icon,
    heroVideo: "/4430419-uhd_3840_2160_24fps.mp4",
    heroImage: "/industries/cons.jpg",
    intro:
      "Construction organisations face physical and financial risks at every stage of a project. We build programmes that protect contractors, developers, and project owners from the ground up.",
    quickStats: [
      { label: "Common exposures", value: "Site damage, third-party injury, design error" },
      { label: "Typical assets", value: "Plant, materials, works-in-progress" },
      { label: "Priority outcome", value: "Project completion, uninterrupted" },
    ],
    riskAreas: [
      {
        title: "Physical damage",
        icon: ExclamationTriangleIcon,
        points: ["Damage to works-in-progress", "Loss or theft of materials on site", "Breakdown or damage to plant and machinery"],
      },
      {
        title: "Third-party liability",
        icon: ShieldCheckIcon,
        points: ["Injury to members of the public", "Damage to neighbouring property", "On-site contractor incidents"],
      },
      {
        title: "Design and performance",
        icon: DocumentTextIcon,
        points: ["Architectural or engineering errors", "Performance bond obligations", "Contract completion guarantees"],
      },
    ],
    solutions: [
      { title: "Contractors All Risks (CAR)", icon: ExclamationTriangleIcon, desc: "Protection for works-in-progress, materials, and construction machinery against physical damage." },
      { title: "Public Liability", icon: ShieldCheckIcon, desc: "Coverage for third-party injuries or property damage on or around the site." },
      { title: "Professional Indemnity", icon: DocumentTextIcon, desc: "Protection against claims arising from design errors or architectural mistakes." },
      { title: "Performance Bonds", icon: CheckCircleIcon, desc: "Guarantees that the project will be completed in accordance with contract terms." },
      { title: "Plant & Equipment", icon: Cog6ToothIcon, desc: "Coverage for heavy machinery — cranes, excavators, and scaffolding — against theft or breakdown." },
    ],
    approach: [
      { title: "Discover", icon: LifebuoyIcon, text: "Understand project scope, timelines, contractor structures, and site-specific exposures." },
      { title: "Assess", icon: ChartBarIcon, text: "Map physical, liability, and contractual risks to define appropriate limits and deductibles." },
      { title: "Design", icon: DocumentTextIcon, text: "Build a programme that covers the full project lifecycle without gaps." },
      { title: "Support", icon: CheckCircleIcon, text: "Ongoing service for certificates, contract compliance, and claims guidance." },
    ],
    faqs: [
      { q: "Can we cover multiple projects under a single programme?", a: "Yes — annual or project-specific structures can be arranged to cover multiple sites and contracts efficiently." },
    ],
  },

  {
    slug: "mining",
    title: "Mining",
    subtitle: "High-value asset exposure, environmental liability, and workforce risk.",
    icon: CubeIcon,
    heroVideo: "/13223553_3840_2160_30fps.mp4",
    heroImage: "/industries/mining.jpg",
    intro:
      "Mining operations contend with extreme environmental conditions,complex asset profiles, and significant workforce risk. We design programmes for both open-cast and underground operations.",
    quickStats: [
      { label: "Common exposures", value: "Equipment failure, environmental damage, transit loss" },
      { label: "Typical assets", value: "Processing plants, machinery, minerals in transit" },
      { label: "Priority outcome", value: "Operational continuity and liability protection" },
    ],
    riskAreas: [
      {
        title: "Asset and operational risk",
        icon: Cog6ToothIcon,
        points: ["Damage to processing plants", "Breakdown of drills, crushers, and conveyors", "Revenue loss from unplanned operational halts"],
      },
      {
        title: "Environmental liability",
        icon: ExclamationTriangleIcon,
        points: ["Pollution arising from mining activity", "Ecological damage to surrounding areas", "Regulatory and remediation costs"],
      },
      {
        title: "Workforce and transit",
        icon: ShieldCheckIcon,
        points: ["High-risk manual labour in remote locations", "Workers' compensation for underground operations", "Loss of high-value minerals during transit"],
      },
    ],
    solutions: [
      { title: "Property & Business Interruption", icon: DocumentTextIcon, desc: "Coverage for processing plants and loss of revenue resulting from operational halts." },
      { title: "Machinery Breakdown", icon: Cog6ToothIcon, desc: "Protection for specialist equipment — drills, crushers, and conveyor systems — where failure is critical." },
      { title: "Environmental Liability", icon: ExclamationTriangleIcon, desc: "Protection against claims arising from pollution or ecological damage caused by mining activity." },
      { title: "Transit / Marine Cargo", icon: TruckIcon, desc: "Coverage for the transportation of high-value minerals and ores from site to port." },
      { title: "Workers' Compensation", icon: ShieldCheckIcon, desc: "Enhanced coverage for high-risk labour in remote or hazardous environments." },
    ],
    approach: [
      { title: "Discover", icon: LifebuoyIcon, text: "Understand operational structure, asset values, workforce composition, and environmental profile." },
      { title: "Assess", icon: ChartBarIcon, text: "Identify key loss scenarios across property, liability, and personnel to set appropriate limits." },
      { title: "Design", icon: DocumentTextIcon, text: "Construct a programme that addresses the full risk landscape without coverage gaps." },
      { title: "Support", icon: CheckCircleIcon, text: "Ongoing service across certificates, compliance documentation, and claims management." },
    ],
    faqs: [
      { q: "Can environmental liability be structured separately from property cover?", a: "Yes — environmental liability can be written as a standalone policy or integrated into a broader programme, depending on your regulatory obligations and risk appetite." },
    ],
  },



];

export const getIndustryBySlug = (slug) => industries.find((i) => i.slug === slug);

export const getPrevNext = (slug) => {
  const idx = industries.findIndex((i) => i.slug === slug);
  return {
    prev: idx > 0 ? industries[idx - 1] : null,
    next: idx >= 0 && idx < industries.length - 1 ? industries[idx + 1] : null,
  };
};