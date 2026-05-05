import ListPage from './ListPage'
import type { ListEntry } from './ListPage'

const entries: ListEntry[] = [
  {
    id: 1,
    title: 'Profile',
    subtitle: 'DevSecOps Engineer — from Brazil, based in United Arab Emirates',
    description:
      'I am a DevSecOps Engineer with deep experience in Kubernetes, Linux, and Cloud architecture, enabling secure development through automated CI/CD pipelines in a way that does not slow software products time-to-market.',
    blockColor: 'grass',
    pingStrength: 5,
    pingLabel: 'Active',
    // tags: ['Security', 'DevOps', 'Cloud', 'SRE'],
  },
  {
    id: 2,
    title: 'Technical Skills',
    subtitle: 'Arsenal & Tooling',
    description:
      'Kubernetes · Docker · Terraform · AWS · GCP · Azure  · Oracle Cloud · Falco · Snyk · Trivy · ArgoCD · GitHub Actions · GitLab CI · Python · Go · Bash · OPA/Rego.',
    blockColor: 'diamond',
    pingStrength: 5,
    pingLabel: 'Expert',
    // tags: ['K8s', 'Terraform', 'AWS', 'Vault', 'Python'],
  },
  {
    id: 3,
    title: 'Education',
    subtitle: 'B.Sc. Computer Engineering  - Paraná\'s Federal University of Technology - Brazil · 2021-Dropout',
    description:
      'Solid foundation in computing and electronics, preparing engineers to innovatively design hardware, software, and embedded systems.',
    blockColor: 'bookshelf',
    pingStrength: 1,
    pingLabel: 'Dropout',
    tags: ['CompEng', 'Security', 'Networks', 'Development'],
  },
  {
    id: 4,
    title: 'Education',
    subtitle: 'B.Sc. Software Engineering  - Unicesumar - Dubai · 2026-2028',
    description:
      'Solid foundation in computing and electronics, preparing engineers to innovatively design hardware, software, and embedded systems.',
    blockColor: 'bookshelf',
    pingStrength: 3,
    pingLabel: 'Ongoing',
    tags: ['CompEng', 'Security', 'Networks', 'Development'],
  },
  {
    id: 5,
    title: 'Languages & Location',
    subtitle: 'Open to Remote-First Opportunities',
    description:
      'Portuguese (native) · English (fluent) · Based in Abu Dhabi, UAE',
    blockColor: 'emerald',
    pingStrength: 5,
    pingLabel: 'Online',
    // tags: ['Remote-ready', 'Open to work'],
  },
]

export default function AboutMe() {
  return <ListPage title="About Me" entries={entries} />
}
