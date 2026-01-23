export const summaryMetrics = [
  {
    label: "Total RFID Cups",
    value: "1,240",
    trend: "+3.4% vs last week",
  },
  {
    label: "In Circulation",
    value: "842",
    trend: "82% returned within 72 hrs",
  },
  {
    label: "Needs Cleaning",
    value: "186",
    trend: "Avg. turnaround 7.5 hrs",
  },
  {
    label: "At Risk",
    value: "43",
    trend: "No scan for 48+ hrs",
  },
];

export const locationInventory = [
  {
    location: "North Quad Cafe",
    available: 124,
    checkedOut: 86,
    status: "Restock in 6 hrs",
  },
  {
    location: "Library Espresso Bar",
    available: 68,
    checkedOut: 112,
    status: "Pickup needed",
  },
  {
    location: "Station Kiosk",
    available: 150,
    checkedOut: 74,
    status: "Healthy",
  },
  {
    location: "Engineering Hub",
    available: 42,
    checkedOut: 134,
    status: "Restock + sanitize",
  },
];

export const serviceTasks = [
  {
    location: "Library Espresso Bar",
    action: "Collect 52 cups",
    priority: "High priority due to overflow",
    eta: "11:30 AM",
  },
  {
    location: "Engineering Hub",
    action: "Deliver 80 clean cups",
    priority: "Low stock detected",
    eta: "1:00 PM",
  },
  {
    location: "North Quad Cafe",
    action: "Swap 30 dirty cups",
    priority: "Scheduled 2pm pickup",
    eta: "2:00 PM",
  },
];

export const scanActivity = [
  {
    time: "09:14 AM",
    location: "North Quad Cafe",
    cupId: "CUP-8841",
    action: "Checkout",
    notes: "Latte order #3321",
  },
  {
    time: "09:38 AM",
    location: "Library Espresso Bar",
    cupId: "CUP-4920",
    action: "Return",
    notes: "Returned at kiosk",
  },
  {
    time: "10:05 AM",
    location: "Station Kiosk",
    cupId: "CUP-1044",
    action: "Checkout",
    notes: "Subscription member",
  },
  {
    time: "10:36 AM",
    location: "Engineering Hub",
    cupId: "CUP-5921",
    action: "Cleaning",
    notes: "Moved to wash bay",
  },
  {
    time: "11:10 AM",
    location: "North Quad Cafe",
    cupId: "CUP-2204",
    action: "Return",
    notes: "Drop box pickup",
  },
];

export const healthSnapshot = [
  {
    label: "Clean + ready",
    count: 710,
    detail: "Ready for checkout",
  },
  {
    label: "Awaiting wash",
    count: 186,
    detail: "Queued for cleaning",
  },
  {
    label: "Under maintenance",
    count: 34,
    detail: "Inspections or repairs",
  },
];

export const architectureLayers = [
  {
    title: "Presentation Layer",
    description:
      "Staff-facing dashboard and cafe portal for subscriptions, inventory, and cup status updates.",
  },
  {
    title: "Business Logic Layer",
    description:
      "Rules engine for subscriptions, loyalty points, scan reconciliation, and service-team routing.",
  },
  {
    title: "Data Layer",
    description:
      "Centralized storage for cup inventory, RFID scans, subscriptions, and audit trails.",
  },
];

export const dataEntities = [
  {
    entity: "RFID Tag Data",
    description: "Unique identifier, cup type, and ownership history.",
  },
  {
    entity: "User Data",
    description: "Cafe profiles, subscriptions, and access permissions.",
  },
  {
    entity: "Transaction Data",
    description: "Checkouts, returns, and cleaning events with timestamps.",
  },
  {
    entity: "Location History",
    description: "Movement records between cafes and collection points.",
  },
];

export const systemGaps = [
  {
    gap: "Offline scanner reconciliation",
    mitigation:
      "Run merge jobs that deduplicate queued scans using RFID + timestamp and flag conflicts.",
  },
  {
    gap: "RFID interference on metal counters",
    mitigation:
      "Adjust scanner placement, add shielding, or tune antennas at high-interference sites.",
  },
  {
    gap: "Cleaning turnaround visibility",
    mitigation:
      "Add wash/inspect timestamps and SLA alerts for cups exceeding 24 hours.",
  },
  {
    gap: "Inventory drift between scans",
    mitigation:
      "Run daily spot audits and track manual corrections in an audit trail.",
  },
];

export const requirementsMatrix = [
  {
    id: "FR001",
    useCase: "User / cup location retrieval",
    classes: "LocationService",
    methods: "getUserLocation, getClosestCup",
    packages: "GPS / location services",
  },
  {
    id: "FR002",
    useCase: "Cup scanning and tracking",
    classes: "ScanCup",
    methods: "TrackCup, updateCupStatus",
    packages: "RFID scanner integration",
  },
  {
    id: "FR003",
    useCase: "Cup status",
    classes: "CupStatus",
    methods: "getCupStatus, updateCupStatus",
    packages: "SQL activity database",
  },
  {
    id: "FR004",
    useCase: "Loyalty program",
    classes: "LoyaltyStatus",
    methods: "getLoyaltyStatus, updateLoyaltyStatus",
    packages: "Purchases + stats DB",
  },
  {
    id: "FR005",
    useCase: "RFID cup scanning",
    classes: "ScanCup",
    methods: "ScanRFID",
    packages: "RFID scanner",
  },
];

export const testingPlan = [
  {
    title: "Unit + integration coverage",
    detail: "Verify RFID scan ingestion, inventory updates, and subscription rules.",
  },
  {
    title: "Performance testing",
    detail: "Simulate peak cafe throughput and rapid RFID scans.",
  },
  {
    title: "User acceptance",
    detail: "Validate cafe workflows with staff during pilot rollouts.",
  },
  {
    title: "Defect reporting",
    detail: "Log defects, complete test reports, and track fixes in a defect system.",
  },
];

export const projectOverview = {
  title: "Reusable RFID Cup Tracking Platform",
  description:
    "A service platform that lets cafes subscribe to reusable RFID-enabled cups, track inventory across locations, and coordinate pickups, cleaning, and redistribution. The system supports live scan visibility, loyalty tracking, and operational reporting so service teams can keep cups available while cutting single-use waste.",
  repoUrl: "https://github.com/your-username/RFIDInventoryTracker",
};
