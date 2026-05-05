import ListPage from './ListPage'
import type { ListEntry } from './ListPage'

const entries: ListEntry[] = [
  {
    id: 1,
    title: 'Zero Trust Architecture in K8s',
    subtitle: 'May 2024 · Security',
    description:
      'STILL BEING WRITTEN',
    blockColor: 'redstone',
    pingStrength: 5,
    pingLabel: '8 min read',
    tags: ['Kubernetes', 'Zero Trust', 'mTLS', 'OPA'],
  },
  {
    id: 2,
    title: 'Shifting Security Left with GitOps',
    subtitle: 'March 2024 · DevSecOps',
    description:
      'STILL BEING WRITTEN',
    blockColor: 'emerald',
    pingStrength: 5,
    pingLabel: '6 min read',
    tags: ['GitOps', 'ArgoCD', 'ShiftLeft', 'SAST', 'DAST'],
  },
  {
    id: 3,
    title: 'Secrets Management at Scale',
    subtitle: 'January 2024 · Infrastructure',
    description:
      'STILL BEING WRITTEN',
    blockColor: 'obsidian',
    pingStrength: 4,
    pingLabel: '10 min read',
    tags: ['Vault', 'Secrets', 'PKI', 'Dynamic Creds'],
  },
  {
    id: 4,
    title: 'Container Security Best Practices',
    subtitle: 'November 2023 · Containers',
    description:
      'STILL BEING WRITTEN',
    blockColor: 'diamond',
    pingStrength: 4,
    pingLabel: '7 min read',
    tags: ['Docker', 'Falco', 'Trivy', 'OCI', 'SBOM'],
  },
]

export default function BlogPosts() {
  return <ListPage title="Blog Posts" entries={entries} />
}
