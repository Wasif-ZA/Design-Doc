import {
  architectureLayers,
  dataEntities,
  healthSnapshot,
  locationInventory,
  requirementsMatrix,
  scanActivity,
  serviceTasks,
  summaryMetrics,
  systemGaps,
  testingPlan,
  projectOverview,
} from "@/lib/mock-data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatCard } from "@/components/StatCard";

const Pill = ({ text }: { text: string }) => (
  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
    {text}
  </span>
);

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            RFID Inventory Tracker
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Campus Cup Operations Dashboard
          </h1>
          <p className="max-w-2xl text-base text-slate-200 md:text-lg">
            Live-ready MVP that visualizes inventory, scan activity, service routing, and
            architecture decisions from the SDD. Built with Next.js, Tailwind, Prisma, and
            Framer Motion for a polished employer-ready demo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Pill text="Next.js 14" />
            <Pill text="Tailwind" />
            <Pill text="Prisma schema" />
            <Pill text="Framer Motion" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl space-y-16 px-6 py-12">
        <AnimatedSection title="Operational Snapshot" eyebrow="Live Mock Data">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {summaryMetrics.map((metric) => (
              <StatCard key={metric.label} {...metric} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection title="Inventory by Location" eyebrow="Campus Cafes">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-4 gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-600">
              <span>Location</span>
              <span>Available</span>
              <span>Checked Out</span>
              <span>Status</span>
            </div>
            <div className="divide-y divide-slate-100">
              {locationInventory.map((row) => (
                <div
                  key={row.location}
                  className="grid grid-cols-4 gap-4 px-6 py-4 text-sm text-slate-700"
                >
                  <span className="font-semibold text-slate-900">{row.location}</span>
                  <span>{row.available}</span>
                  <span>{row.checkedOut}</span>
                  <span className="text-slate-500">{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection title="Service Team Tasks" eyebrow="Daily Routing">
          <div className="grid gap-6 md:grid-cols-3">
            {serviceTasks.map((task) => (
              <div
                key={task.location}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{task.location}</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">{task.action}</p>
                <p className="mt-1 text-sm text-slate-500">{task.priority}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-cyan-600">
                  ETA {task.eta}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection title="Cup Health Snapshot" eyebrow="Cleaning Loop">
          <div className="grid gap-4 md:grid-cols-3">
            {healthSnapshot.map((entry) => (
              <div key={entry.label} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">{entry.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">
                  {entry.count} cups
                </p>
                <p className="mt-2 text-sm text-slate-500">{entry.detail}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection title="Recent Scan Activity" eyebrow="RFID Events">
          <div className="grid gap-4">
            {scanActivity.map((scan) => (
              <div
                key={`${scan.cupId}-${scan.time}`}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {scan.location} · {scan.time}
                    </p>
                    <p className="text-sm text-slate-500">{scan.notes}</p>
                  </div>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase text-white">
                    {scan.action}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">Cup ID: {scan.cupId}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection title="Architecture Summary" eyebrow="SDD Highlights">
          <div className="grid gap-4 md:grid-cols-3">
            {architectureLayers.map((layer) => (
              <div key={layer.title} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{layer.title}</p>
                <p className="mt-2 text-sm text-slate-500">{layer.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection title="Core Data Entities" eyebrow="What we track">
          <div className="grid gap-4 md:grid-cols-2">
            {dataEntities.map((entity) => (
              <div key={entity.entity} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{entity.entity}</p>
                <p className="mt-2 text-sm text-slate-500">{entity.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection title="System Gaps & Mitigations" eyebrow="Pilot Review">
          <div className="grid gap-4">
            {systemGaps.map((item) => (
              <div key={item.gap} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">{item.gap}</p>
                <p className="mt-2 text-sm text-slate-500">{item.mitigation}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection title="Requirements Traceability" eyebrow="FR Matrix">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-5 gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase text-slate-600">
              <span>ID</span>
              <span>Use Case</span>
              <span>Classes</span>
              <span>Methods</span>
              <span>Packages</span>
            </div>
            <div className="divide-y divide-slate-100">
              {requirementsMatrix.map((row) => (
                <div key={row.id} className="grid grid-cols-5 gap-4 px-6 py-4 text-sm">
                  <span className="font-semibold text-slate-900">{row.id}</span>
                  <span className="text-slate-600">{row.useCase}</span>
                  <span className="text-slate-600">{row.classes}</span>
                  <span className="text-slate-600">{row.methods}</span>
                  <span className="text-slate-600">{row.packages}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection title="Testing Plan" eyebrow="Quality Assurance">
          <div className="grid gap-4 md:grid-cols-2">
            {testingPlan.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection title="Project Overview" eyebrow="About the Repo">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  {projectOverview.title}
                </p>
                <p className="mt-4 text-base text-slate-600">{projectOverview.description}</p>
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-700">Repository</p>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  href={projectOverview.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
                <p className="text-xs text-slate-500">Replace with your public repo URL.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500">
          <span>Mock data timestamp: 12:05 PM AEST</span>
          <span>Prepared for employer demos · MVP scope</span>
        </div>
      </footer>
    </main>
  );
}
