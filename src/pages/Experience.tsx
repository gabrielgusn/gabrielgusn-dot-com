import ListPage from './ListPage'
import type { ListEntry } from './ListPage'

const entries: ListEntry[] = [
  {
    id: 1,
    title: 'Senior DevSecOps Engineer',
    subtitle: 'Acme Corp Security · Jan 2022 — Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Led zero-trust architecture rollout across multi-cloud environments. Reduced mean time to remediate CVEs by 60%.',
    blockColor: 'grass',
    pingStrength: 5,
    pingLabel: 'Current',
    tags: ['K8s', 'Terraform', 'AWS', 'Zero Trust', 'OPA'],
  },
  {
    id: 2,
    title: 'Security Engineer',
    subtitle: 'TechShield Systems · Mar 2020 — Dec 2021',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Designed and deployed SIEM solutions, conducted red-team exercises and penetration testing.',
    blockColor: 'diamond',
    pingStrength: 3,
    pingLabel: 'Previous',
    tags: ['SIEM', 'SOC', 'Splunk', 'PenTest', 'OWASP'],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    subtitle: 'CloudFirst Solutions · Aug 2019 — Feb 2020',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Built CI/CD pipelines with security gates, container orchestration and GitOps workflows.',
    blockColor: 'gold',
    pingStrength: 3,
    pingLabel: 'Previous',
    tags: ['Docker', 'CI/CD', 'GitOps', 'GCP', 'ArgoCD'],
  },
  {
    id: 4,
    title: 'Systems Administrator',
    subtitle: 'SecureTech Ltda · Jan 2017 — Jul 2019',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. Managed Linux infrastructure for 500+ servers, automated provisioning with Ansible.',
    blockColor: 'stone',
    pingStrength: 2,
    pingLabel: 'Previous',
    tags: ['Linux', 'Ansible', 'Nagios', 'Bash', 'Networking'],
  },
]

export default function Experience() {
  return <ListPage title="Experience" entries={entries} />
}
