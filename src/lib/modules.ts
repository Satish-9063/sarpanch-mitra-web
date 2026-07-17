export interface Module {
  slug: string;
  title: string;
  description: string;
}

export const modules: Module[] = [
  {
    slug: 'm1-constituent-registry',
    title: 'Constituent Registry',
    description:
      'Unified digital records for every constituent — ward-wise, searchable, and offline-capable.',
  },
  {
    slug: 'm2-grievance-tracker',
    title: 'Grievance Tracker',
    description:
      'Capture, assign, escalate, and close complaints with a full audit trail.',
  },
  {
    slug: 'm3-work-orders',
    title: 'Work Order Management',
    description:
      'Create and track infrastructure work orders from initiation to completion and payment.',
  },
  {
    slug: 'm4-funds-ledger',
    title: 'Funds Ledger',
    description:
      'Transparent recording of scheme receipts, expenditures, and utilisation certificates.',
  },
  {
    slug: 'm5-karyakarta-network',
    title: 'Karyakarta Network',
    description:
      'Coordinate field workers, assign tasks, and monitor ground-level activity in real time.',
  },
  {
    slug: 'm6-meeting-minutes',
    title: 'Meeting Minutes',
    description:
      'Structure, record, and publish gram sabha and ward committee proceedings.',
  },
  {
    slug: 'm7-asset-register',
    title: 'Asset Register',
    description:
      'Geo-tagged inventory of panchayat assets with maintenance schedules and condition logs.',
  },
  {
    slug: 'm8-reports-analytics',
    title: 'Reports & Analytics',
    description:
      'Ready-made and custom reports across all modules for performance reviews and audits.',
  },
];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}
