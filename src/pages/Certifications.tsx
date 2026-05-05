import ListPage from './ListPage'
import type { ListEntry } from './ListPage'

const entries: ListEntry[] = [
  {
    id: 1,
    title: 'AWS Certified Security',
    subtitle: 'Amazon Web Services · Issued 2023',
    description:
      'Specialty certification validating advanced knowledge of AWS security services, data protection, infrastructure security, incident response, and logging/monitoring.',
    blockColor: 'gold',
    pingStrength: 5,
    pingLabel: 'Valid',
    tags: ['AWS', 'Cloud Security', 'IAM', 'KMS'],
  },
  {
    id: 2,
    title: 'CKS — Kubernetes Security',
    subtitle: 'CNCF · Issued 2022',
    description:
      'Certified Kubernetes Security Specialist. Covers cluster hardening, microservice vulnerabilities, supply chain security, monitoring and logging.',
    blockColor: 'diamond',
    pingStrength: 5,
    pingLabel: 'Valid',
    tags: ['Kubernetes', 'K8s', 'CNCF', 'Supply Chain'],
  },
  {
    id: 3,
    title: 'CISSP',
    subtitle: 'ISC² · Issued 2021',
    description:
      'Certified Information Systems Security Professional. Covers security & risk management, asset security, network security, identity & access management.',
    blockColor: 'redstone',
    pingStrength: 5,
    pingLabel: 'Valid',
    tags: ['CISSP', 'ISC²', 'Risk Management', 'GRC'],
  },
  {
    id: 4,
    title: 'HashiCorp Vault Associate',
    subtitle: 'HashiCorp · Issued 2022',
    description:
      'Validates knowledge of Vault concepts, installation, configuration, secrets management, authentication methods, and access policies.',
    blockColor: 'obsidian',
    pingStrength: 4,
    pingLabel: 'Expiring',
    tags: ['Vault', 'Secrets', 'PKI', 'HashiCorp'],
  },
]

export default function Certifications() {
  return <ListPage title="Certifications" entries={entries} />
}
