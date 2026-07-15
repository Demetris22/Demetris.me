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
      'Building my frontend skills through React, reusable components, responsive layouts, and practical UIs.',
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
    example: 'UART Serial Command Interface for device control',
    shows: 'Serial communication, command parsing, and microcontroller I/O.',
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
    availability: ['Frontend preview'],
    liveUrl: 'https://fintrack-beige-eta.vercel.app/',
    note: 'Core dashboard in progress; charts, budgets, savings goals, auth, and a backend are planned.',
  },
  {
    id: 'portfolio',
    status: 'Active project',
    title: 'Portfolio Website',
    type: 'React and Vite portfolio',
    description:
      'The site you’re on, a React + Vite portfolio of my background, projects, and interests.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
    demonstrates: [
      'Component-based layout and responsive design',
      'Interactive sections for projects and experience',
      'Turning a simple CV into a more personal engineering site',
    ],
    availability: ['Public portfolio repo'],
    liveUrl: 'https://www.demetr1s.me/',
    note: 'An active public project I keep improving with stronger details and updated experience.',
  },
  {
    id: 'sketchef',
    status: 'Active project',
    title: 'Sketchef',
    type: 'React app / Arduino project finder',
    description:
      'Pick your board and the parts you own, and Sketchef sorts a project catalog by what you can build now versus what’s one part away.',
    stack: ['React 18', 'Vite', 'JavaScript', 'CSS', 'Vitest'],
    demonstrates: [
      'Hardware-aware matching engine that respects pin counts and board features, not just parts owned',
      'Pure logic modules — matching, buy-next optimizer, URL state — isolated from the UI and unit-tested',
      'Shareable URLs — board and parts encoded in the query string, validated on load with graceful fallback',
    ],
    availability: ['Live demo', 'Public repo'],
    liveUrl: 'https://sketchef.vercel.app',
    note: 'Fully static — no backend or API calls. The “what to buy next” feature ranks components by how many new projects each one unlocks and recomputes live as you check things off.',
  },
  {
    id: 'uart',
    status: 'Embedded systems project',
    title: 'UART Serial Command Interface',
    type: 'Arduino / embedded systems',
    description:
      'A command-line interface running on the Arduino Uno R4 WiFi, type text commands over serial to control three LEDs and read a potentiometer, with structured key-value responses.',
    stack: ['Arduino Uno R4 WiFi', 'C/C++', 'UART'],
    demonstrates: [
      'UART serial communication and command parsing at 9600 baud',
      'Fixed-size input buffer with overflow protection',
      'Structured command handlers and key-value response format',
    ],
    availability: ['CE310 coursework'],
    note: '6th semester lab project for the Embedded Systems course. Implemented 10+ commands (SET, STATUS, READADC, RESET, HELP), all 14 test cases passed including invalid command handling.',
  },
]

export const experienceItems = [
  {
    id: 'ecommbx',
    label: 'ECOMMBX',
    status: 'Completed short internship / technology department placement',
    title: 'Technology Department Intern',
    company: 'ECOMMBX',
    date: '15–17 June 2026',
    location: 'Nicosia, Cyprus',
    description:
      'A short placement in ECOMMBX’s Technology Department, a first look at a professional fintech environment and the tech behind digital banking.',
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
    institution: 'European University Cyprus',
    date: '2021–2026',
    location: 'Nicosia, Cyprus',
    description:
      'Computer Engineering at European University Cyprus, six semesters covering programming, digital systems, hardware, and embedded systems lab work.',
    highlights: [
      'Programming and problem solving across multiple languages',
      'Embedded systems, digital systems, and microcontroller lab work',
      'Lab projects that put coursework into practice on real hardware',
    ],
    tools: ['C', 'C++', 'Arduino', 'Digital systems', 'Microcontrollers', 'Embedded systems'],
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
