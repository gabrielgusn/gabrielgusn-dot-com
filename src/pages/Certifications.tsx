import ListPage from './ListPage'
import type { ListEntry } from './ListPage'

const entries: ListEntry[] = [
  {
    id: 1,
    title: 'Certified Kubernetes Administrator (CKA)',
    url: 'https://www.credly.com/badges/18d34477-e0dc-41d9-80d2-2c7aae17d4d6/',
    subtitle: 'Linux Foundation · Issued 2026',
    description:
      'CKA validates proficiency across key domains including installation, security, networking, and the end-to-end troubleshooting of cluster operations.',
    blockColor: 'diamond',
    pingStrength: 5,
    pingLabel: 'Valid',
    tags: ['Kubernetes', 'Cloud Native', 'Open Source', 'Containers'],
  },
  {
    id: 2,
    title: 'API Security Fundamentals',
    url: 'https://www.credly.com/badges/3568711d-3a8e-4738-a8ac-c2ee2c4eecaa/linked_in_profile',
    subtitle: 'APIsec University · Issued 2024',
    description:
      'Focus on the core threats to APIs and OWASP API Security Top 10, examine real-world API attacks, and understand the 3 Pillars of API Security.',
    blockColor: 'gold',
    pingStrength: 5,
    pingLabel: 'Valid',
    tags: ['OWASP', 'Security'],
  },
  {
    id: 3,
    title: 'AI Capabilities and Limitations',
    url: 'https://verify.skilljar.com/c/qsbrxf5mx8sq',
    subtitle: 'Anthropic · Issued 2026',
    description:
      'Equips learners to diagnose unexpected outputs and apply targeted fixes by identifying where specific tasks fall on the AI\'s capability-to-limitation.',
    blockColor: 'bookshelf',
    pingStrength: 5,
    pingLabel: 'Valid',
    tags: ['AI', 'Anthropic'],
  },
  {
    id: 4,
    title: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=ED18DFDA6E3B807C164009A6AA9B13B092DCA12E87BCE2C7B71E157569BB613C',
    subtitle: 'Oracle · Issued 2023',
    description:
      'Validates knowledge of Oracle Cloud core concepts.',
    blockColor: 'redstone',
    pingStrength: 1,
    pingLabel: 'Expired',
    tags: ['Oracle', 'Cloud', 'OCI'],
  },
  {
    id: 5,
    title: 'EF SET English Certificate 78/100 (C2 Proficient)',
    url: 'https://www.efset.org/cert/8RsPaD',
    subtitle: 'EF Standard English Test (EF SET) · Issued 2022',
    description:
      'C2 Proficiente level in English',
    blockColor: 'bookshelf',
    pingStrength: 5,
    pingLabel: 'Valid',
    tags: ['English', 'Language'],
  },
  {
    id: 6,
    title: 'AZ-104 - Azure Administrator Associate',
    // url: 'https://www.efset.org/cert/8RsPaD',
    subtitle: 'Microsoft',
    description:
      'IN PROGRESS',
    blockColor: 'obsidian',
    pingStrength: 3,
    pingLabel: 'IN PROGRESS',
    tags: ['Azure', 'Cloud', 'Microsoft'],
  },
  {
    id: 7,
    title: 'Certified Kubernetes Security Specialist (CKS)',
    // url: '',
    subtitle: 'Linux Foundation · (will be) Issued 2026',
    description:
      'IN PROGRESS',
    blockColor: 'obsidian',
    pingStrength: 3,
    pingLabel: 'IN PROGRESS',
    tags: ['Kubernetes', 'Cloud Native', 'Open Source', 'Containers'],
  }
]

export default function Certifications() {
  return <ListPage title="Certifications" entries={entries} />
}
