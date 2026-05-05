import ListPage from './ListPage'
import type { ListEntry } from './ListPage'

const entries: ListEntry[] = [
  {
    id: 1,
    title: 'Zero Trust Architecture in K8s',
    subtitle: 'May 2024 · Security',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Implementing zero-trust principles in Kubernetes using mTLS, network policies, and OPA Gatekeeper for policy enforcement.',
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
      'Ut enim ad minim veniam, quis nostrud exercitation. Integrating security scanning and policy-as-code directly into your GitOps pipeline with ArgoCD and Flux.',
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
      'Duis aute irure dolor in reprehenderit in voluptate velit esse. Deep dive into HashiCorp Vault deployment patterns, dynamic secrets, and enterprise PKI infrastructure.',
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
      'Excepteur sint occaecat cupidatat non proident. Comprehensive guide from image scanning to runtime protection using Falco, Trivy, and OPA admission controllers.',
    blockColor: 'diamond',
    pingStrength: 4,
    pingLabel: '7 min read',
    tags: ['Docker', 'Falco', 'Trivy', 'OCI', 'SBOM'],
  },
]

export default function BlogPosts() {
  return <ListPage title="Blog Posts" entries={entries} />
}
