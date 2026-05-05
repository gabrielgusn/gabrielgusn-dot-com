import ListPage from './ListPage'
import type { ListEntry } from './ListPage'

const entries: ListEntry[] = [
  {
    id: 1,
    title: 'Profile',
    subtitle: 'DevSecOps Engineer — Porto Alegre, BR',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Passionate about building secure, resilient systems at scale.',
    blockColor: 'grass',
    pingStrength: 5,
    pingLabel: 'Active',
    tags: ['Security', 'DevOps', 'Cloud', 'SRE'],
  },
  {
    id: 2,
    title: 'Technical Skills',
    subtitle: 'Arsenal & Tooling',
    description:
      'Kubernetes · Docker · Terraform · AWS · GCP · Azure · HashiCorp Vault · Falco · Snyk · Trivy · ArgoCD · GitHub Actions · GitLab CI · Python · Go · Bash · OPA/Rego.',
    blockColor: 'diamond',
    pingStrength: 5,
    pingLabel: 'Expert',
    tags: ['K8s', 'Terraform', 'AWS', 'Vault', 'Python'],
  },
  {
    id: 3,
    title: 'Education',
    subtitle: 'B.Sc. Computer Science · 2018',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graduated with honors, focused on systems security, networks, and distributed computing.',
    blockColor: 'bookshelf',
    pingStrength: 4,
    pingLabel: 'Graduated',
    tags: ['CompSci', 'Security', 'Networks'],
  },
  {
    id: 4,
    title: 'Languages & Location',
    subtitle: 'Open to Remote-First Opportunities',
    description:
      'Portuguese (native) · English (fluent) · Spanish (intermediate). Based in Porto Alegre, RS — Brazil. Available for remote, hybrid, or relocation.',
    blockColor: 'emerald',
    pingStrength: 5,
    pingLabel: 'Online',
    tags: ['Remote-ready', 'Open to work'],
  },
]

export default function AboutMe() {
  return <ListPage title="About Me" entries={entries} />
}
