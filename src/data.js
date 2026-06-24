// Content for the portfolio. Kept separate from App.jsx so the markup and
// behavior stay readable, and so copy/projects can be edited in one place.

export const emailAddress = 'demetris102933@gmail.com'

export const profileHighlights = [
  'Computer Engineering student based in Cyprus',
  'Building with React, JavaScript, C, and C++',
  'Interested in software, embedded systems, electronics, and automation',
]

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
      "I'm developing my frontend skills through React projects, focusing on reusable components, clear layouts, responsive design, and practical user interfaces.",
    tools: ['React', 'JavaScript', 'HTML/CSS', 'Responsive design', 'GitHub'],
    example: 'Personal portfolio website built with React and Vite',
    shows:
      'Reusable components, responsive layouts, state-based UI, clean structure, and the ability to present information clearly.',
  },
  {
    id: 'embedded',
    label: 'Embedded',
    eyebrow: 'ARDUINO SYSTEMS',
    title: 'Connecting code with real-world hardware',
    description:
      "I'm interested in embedded systems because they combine programming, electronics, sensors, and practical automation. These projects help me understand how software interacts with physical devices.",
    tools: ['Arduino', 'C/C++', 'Sensors', 'Microcontrollers', 'Automation'],
    example: 'Arduino automated watering system',
    shows:
      'Sensor input, microcontroller logic, basic circuit connections, automation, and practical hardware/software integration.',
  },
  {
    id: 'hardware',
    label: 'Hardware',
    eyebrow: 'REPAIR MINDSET',
    title: 'Debugging beyond the screen',
    description:
      'My electronics repair experience trained me to troubleshoot carefully, understand components, and think practically when solving technical problems.',
    tools: ['Diagnostics', 'PCB inspection', 'Soldering basics', 'Component checks'],
    example: 'Electronics repair and hardware support experience',
    shows:
      'Careful troubleshooting, practical fault-finding, attention to components, and a hands-on engineering mindset.',
  },
]

export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    signal: 'Core logic',
    title: 'Programming languages',
    description:
      'Languages I use to understand both application logic and lower-level engineering problems.',
    skills: ['C', 'C++', 'JavaScript', 'Some C#'],
    context: [
      'University programming work',
      'Frontend logic in React projects',
      'Systems thinking from C and C++',
    ],
    developmentFocus:
      'Strengthening data structures, debugging habits, and clean program design through university work and personal practice.',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    signal: 'Interface craft',
    title: 'Web development',
    description:
      'Tools I use to turn ideas into interfaces that feel structured, readable and useful.',
    skills: ['React', 'HTML', 'CSS', 'JavaScript'],
    context: [
      'This portfolio website',
      'FinTrack private React project',
      'Responsive layout and component structure',
    ],
    developmentFocus:
      'Building richer interfaces with polished UI states, stronger component reuse, and clearer project presentation.',
  },
  {
    id: 'embedded',
    label: 'Embedded',
    signal: 'Physical systems',
    title: 'Arduino and embedded systems',
    description:
      'Practical hardware/software work where code controls sensors, actuators and real-world behavior.',
    skills: ['Arduino', 'Sensors', 'Actuators', 'Automation logic'],
    context: [
      'Arduino and embedded systems learning',
      'Planning sensor-based automation',
      'Understanding how code affects physical components',
    ],
    developmentFocus:
      'Improving how I explain circuits, components, and control logic when documenting embedded systems work.',
  },
  {
    id: 'hardware',
    label: 'Hardware',
    signal: 'Troubleshooting',
    title: 'Electronics and repair',
    description:
      'Hands-on experience that helps me approach technical problems patiently and systematically.',
    skills: ['Diagnostics', 'Electronics repair', 'PCB inspection', 'Component checks'],
    context: [
      'Hardware support experience',
      'Fault-finding habits',
      'Careful inspection and testing',
    ],
    developmentFocus:
      'Presenting hands-on repair experience through clear responsibilities, tools used, and lessons learned.',
  },
]

export const projectCards = [
  {
    id: 'fintrack',
    status: 'Private case study',
    title: 'FinTrack',
    type: 'React personal finance app',
    description:
      'A personal finance React dashboard for tracking income, expenses, balance, and transaction activity.',
    stack: ['React', 'JavaScript', 'CSS'],
    demonstrates: [
      'React components and state management',
      'Form handling and dashboard-style UI',
      'Practical frontend problem solving in a real project',
    ],
    availability: ['Private case study', 'Screenshots coming soon'],
    note: 'The core frontend dashboard is in progress. Advanced features such as charts, budgets, savings goals, authentication, and backend integration are planned for later. Screenshots coming soon.',
  },
  {
    id: 'portfolio',
    status: 'Active project',
    title: 'Portfolio Website',
    type: 'React and Vite portfolio',
    description:
      'A React and Vite portfolio designed to present my engineering background, projects, and technical interests in a clean, modern way.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
    demonstrates: [
      'Component-based layout and responsive design',
      'Interactive sections for skills, projects, and experience',
      'Turning a simple CV into a more personal engineering website',
    ],
    availability: ['Active project', 'Public portfolio repo'],
    note: 'This website is an active public project and will continue to improve as I add stronger project details, screenshots, and updated experience.',
  },
  {
    id: 'watering',
    status: 'Embedded systems project',
    title: 'Arduino Automated Watering System',
    type: 'Arduino / embedded systems',
    description:
      'An Arduino-based automation project designed to water plants when soil moisture drops below a set level.',
    stack: ['Arduino', 'C/C++', 'Soil moisture sensor', 'Relay module', 'Water pump'],
    demonstrates: [
      'Sensor input and microcontroller logic',
      'Relay control and basic circuit connections',
      'Practical problem solving with hardware and software',
    ],
    availability: ['Embedded systems project', 'Documentation coming soon'],
    note: 'Built as a school Arduino project. I worked on the Arduino logic, component connections, sensor input, and pump control. Documentation coming soon.',
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
      'Completed a short internship placement in the Technology Department of ECOMMBX, gaining exposure to a professional fintech environment and the technology behind digital banking and e-money services.',
    highlights: [
      'Gained insight into how a fintech company organizes technology work, internal systems, and digital banking services.',
      'Observed the role of software, infrastructure, and security-minded thinking in financial technology.',
      'Strengthened my understanding of professional technology workflows, teamwork, and attention to detail in a regulated industry.',
      'Connected my Computer Engineering studies with real-world technology operations in the financial services sector.',
    ],
    tools: [
      'FinTech',
      'Digital banking',
      'Technology operations',
      'Professional workflow',
      'Software systems',
      'Security awareness',
    ],
  },
  {
    id: 'study',
    label: 'University',
    status: 'Computer Engineering studies',
    title: 'Building engineering foundations',
    description:
      'My university work is helping me connect programming, systems thinking and hardware concepts into one engineering path.',
    highlights: [
      'Programming and problem solving',
      'Hardware and software fundamentals',
      'Learning to document technical work more clearly',
    ],
    tools: ['C', 'C++', 'Digital systems', 'Microcontrollers'],
  },
  {
    id: 'repair',
    label: 'Repair',
    status: 'Hands-on hardware',
    title: 'Learning through electronics repair',
    description:
      'Repair work has trained me to slow down, inspect carefully and debug problems with a practical mindset.',
    highlights: [
      'Inspecting devices before assuming the fault',
      'Breaking problems into testable steps',
      'Handling components and hardware carefully',
    ],
    tools: ['Diagnostics', 'PCB inspection', 'Component checks', 'Fault finding'],
  },
  {
    id: 'projects',
    label: 'Projects',
    status: 'Self-directed building',
    title: 'Turning learning into portfolio work',
    description:
      'Private and prototype projects give me space to practice product thinking, interface design and embedded systems ideas.',
    highlights: [
      'FinTrack as a private React case study',
      'Arduino watering automation as documentation-pending',
      'This portfolio as a growing engineering workspace',
    ],
    tools: ['React', 'JavaScript', 'Arduino', 'CSS'],
  },
]

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Workbench', href: '#workbench' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
