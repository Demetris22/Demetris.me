// Content for the portfolio. Kept separate from App.jsx so the markup and
// behavior stay readable, and so copy/projects can be edited in one place.

export const emailAddress = 'demetris102933@gmail.com'

export const heroFocusWords = [
  'React interfaces',
  'embedded systems',
  'electronics',
  'automation',
]

// Grid inside the hero card — a balanced mix of software, hardware, and the
// engineering skills that span both.
export const heroStack = [
  'React',
  'JavaScript',
  'C',
  'C++',
  'Arduino',
  'Sensors',
  'Electronics',
  'Problem solving',
  'System analysis',
]

export const workModes = [
  {
    id: 'web',
    label: 'Web apps',
    eyebrow: 'REACT INTERFACE',
    title: 'Building clean and useful web applications',
    description:
      'Building my frontend skills through React — reusable components, responsive layouts, and practical UIs.',
    tools: ['React', 'JavaScript', 'HTML/CSS', 'Responsive design', 'GitHub'],
    example: 'Personal portfolio website built with React and Vite',
    shows: 'Reusable components, responsive layouts, and clean structure.',
  },
  {
    id: 'embedded',
    label: 'Embedded',
    eyebrow: 'ARDUINO SYSTEMS',
    title: 'Connecting code with real-world hardware',
    description:
      'Where code meets electronics: using sensors and microcontrollers to control real-world devices.',
    tools: ['Arduino', 'C/C++', 'Sensors', 'Microcontrollers', 'Automation'],
    example: 'Arduino automated watering system',
    shows: 'Sensor input, microcontroller logic, and basic circuit work.',
  },
  {
    id: 'hardware',
    label: 'Hardware',
    eyebrow: 'REPAIR MINDSET',
    title: 'Debugging beyond the screen',
    description:
      'Repair experience that taught me to troubleshoot carefully and think in components.',
    tools: ['Diagnostics', 'PCB inspection', 'Soldering basics', 'Component checks'],
    example: 'Electronics repair and hardware support experience',
    shows: 'Careful fault-finding and a hands-on engineering mindset.',
  },
]

export const projectCards = [
  {
    id: 'fintrack',
    status: 'Private case study',
    title: 'FinTrack',
    type: 'React personal finance app',
    description:
      'A React dashboard for tracking income, expenses, and balances.',
    stack: ['React', 'JavaScript', 'CSS'],
    demonstrates: [
      'React components and state management',
      'Form handling and dashboard-style UI',
      'Practical frontend problem solving in a real project',
    ],
    availability: ['Private case study', 'Screenshots coming soon'],
    note: 'Core dashboard in progress; charts, budgets, savings goals, auth, and a backend are planned.',
  },
  {
    id: 'portfolio',
    status: 'Active project',
    title: 'Portfolio Website',
    type: 'React and Vite portfolio',
    description:
      "The site you're on — a React + Vite portfolio of my background, projects, and interests.",
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
    demonstrates: [
      'Component-based layout and responsive design',
      'Interactive sections for projects and experience',
      'Turning a simple CV into a more personal engineering site',
    ],
    availability: ['Active project', 'Public portfolio repo'],
    note: 'An active public project I keep improving with stronger details and updated experience.',
  },
  {
    id: 'watering',
    status: 'Embedded systems project',
    title: 'Arduino Automated Watering System',
    type: 'Arduino / embedded systems',
    description:
      'An Arduino project that waters plants automatically when soil moisture drops below a set level.',
    stack: ['Arduino', 'C/C++', 'Soil moisture sensor', 'Relay module', 'Water pump'],
    demonstrates: [
      'Sensor input and microcontroller logic',
      'Relay control and basic circuit connections',
      'Practical problem solving with hardware and software',
    ],
    availability: ['Embedded systems project', 'Documentation coming soon'],
    note: 'A school Arduino project — I worked on the logic, wiring, sensor input, and pump control.',
  },
]

export const experienceItems = [
  {
    id: 'ecommbx',
    label: 'ECOMMBX',
    status: 'Completed short internship / technology department placement',
    title: 'Technology Department Intern',
    company: 'ECOMMBX',
    date: '15 June 2026 - 17 June 2026',
    location: 'Nicosia, Cyprus',
    description:
      "A short placement in ECOMMBX's Technology Department — a first look at a professional fintech environment and the tech behind digital banking.",
    highlights: [
      'Saw how a fintech company organizes its technology work and internal systems.',
      'Observed the role of software, infrastructure, and security in financial technology.',
      'Connected my Computer Engineering studies to real-world operations in a regulated industry.',
    ],
    tools: ['FinTech', 'Digital banking', 'Technology operations', 'Security awareness'],
  },
  {
    id: 'study',
    label: 'University',
    status: 'Computer Engineering studies',
    title: 'Building engineering foundations',
    description:
      'My university work ties programming, systems thinking, and hardware into one path.',
    highlights: [
      'Programming and problem solving',
      'Hardware and software fundamentals',
    ],
    tools: ['C', 'C++', 'Digital systems', 'Microcontrollers'],
  },
  {
    id: 'repair',
    label: 'Repair',
    status: 'Hands-on hardware',
    title: 'Learning through electronics repair',
    description:
      'Repair work taught me to slow down, inspect carefully, and debug with a practical mindset.',
    highlights: [
      'Inspecting devices before assuming the fault',
      'Breaking problems into testable steps',
    ],
    tools: ['Diagnostics', 'PCB inspection', 'Component checks', 'Fault finding'],
  },
]

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Workbench', href: '#workbench' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
