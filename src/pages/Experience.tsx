import ListPage from './ListPage'
import type { ListEntry } from './ListPage'

const entries: ListEntry[] = [
  {
    id: 1,
    title: 'DevSecOps Engineer',
    url: 'https://adcb.com',
    subtitle: 'Abu Dhabi Commercial Bank · Sep 2025 — Apr 2026, Hybrid, UAE',
    description:
      'Managed secure SDLC and CI/CD pipelines via GitHub Actions and Terraform for microservices. Integrated security tooling (GitHub Advanced Security, Trivy, SonarQube) and maintained production EKS clusters. Led disaster recovery migration of AWS services (EC2, EKS, RDS) during regional outages.',
    // blockColor: '',
    pingStrength: 0,
    // pingLabel: 'Current',
    tags: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Security'],
  },
  {
    id: 2,
    title: 'DevSecOps Engineer',
    url: 'https://linkedin.com/company/luizalabs',
    subtitle: 'LuizaLabs · Jan 2025 — Sep 2025 · Remote, Brazil',
    description:
      'Standardized infrastructure by developing reusable Terraform templates for AWS and GCP using Go, Python, and Bash. Managed vulnerability remediation across multi-cloud environments (AWS, GCP, Azure, Magalu Cloud) for high-scale retail and fintech systems.',
    // blockColor: '',
    pingStrength: 0,
    tags: ['GCP', 'AWS', 'Terraform', 'Golang', 'Python', 'Vulnerability Management'],
  },
  {
    id: 3,
    title: 'DevSecOps and Infrastructure Analyst',
    url: 'https://softfocus.com.br',
    subtitle: 'Softfocus · Apr 2023 — Jan 2025 · Hybrid, Brazil',
    description:
      'Executed AWS to Oracle Cloud migration, reducing costs by 60%. Built an observability stack (ELK, Prometheus) and an Internal Developer Portal using Backstage. Managed on-prem Proxmox environments and implemented LGPD/ISO 27001 compliant SAST pipelines.',
    // blockColor: '',
    pingStrength: 0,
    tags: ['Oracle Cloud', 'Proxmox', 'Kubernetes', 'ELK', 'Backstage', 'SAST'],
  },
  {
    id: 4,
    title: 'Mid-level Frontend Developer',
    url: 'https://nees.ufal.br',
    subtitle: 'NEES · Nov 2022 — Aug 2023 · Remote, Brazil',
    description:
      'Developed e-learning modules for a national education platform using TypeScript and React, integrating with Django-based APIs.',
    // blockColor: '',
    pingStrength: 0,
    tags: ['TypeScript', 'React', 'Django', 'Frontend', 'Docker'],
  },
  {
    id: 5,
    title: 'DevOps Engineer and Full-stack Developer',
    subtitle: 'OCCAM Engineering · Nov 2021 — Mar 2023 · Hybrid, Brazil',
    description:
      'Engineered full-stack solutions using Node.js, React, and MongoDB. Managed AWS and on-prem deployments while leading technical onboarding and training for the engineering stack.',
    // blockColor: '',
    pingStrength: 0,
    tags: ['NodeJS', 'React', 'MongoDB', 'Docker', 'AWS'],
  },
]

export default function Experience() {
  return <ListPage title="Experience" entries={entries} />
}
