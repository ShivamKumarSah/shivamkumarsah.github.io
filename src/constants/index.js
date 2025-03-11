import {
  frontend,
  backend,
  ux,
  android,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Android Developer',
    icon: android,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'anderoid studio',
    icon: android,
  },
];

const experiences = [
  {
    title: 'Frontend Web Development',
    company_name: 'IBM SkillsBuild',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jun 2021 - Jul 2023',
  },
  {
    title: 'Software Engineering',
    company_name: 'JPMorgan Chase Co Forage',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jul 2023 - Present',
  },
  {
    title: 'Android Development ParCar - Smart Car Parking',
    company_name: 'University Of Calcutta Tata Tcs Project',
    icon: kelhel,
    iconBg: '#333333',
    date: 'APr 2023 - Oct 2023',
  },
  {
    title: 'Avionics Systems Programmer',
    company_name: 'University Of Calcutta DRDO Project',
    icon: dcc,
    iconBg: '#333333',
    date: 'APR 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Online Python IDE',
    description: 'Created an online Python IDE enabling code execution directly in the browser.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-2',
    name: 'ParCar - CU ',
    description:
      'Developed an Android app - Parcar, for intelligent car parking with IoT integration.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-3',
    name: 'AI Netra',
    description: 'Developed an Android app for visually impaired users with TensorFlow Lite, MobileNet, voice feedback',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-4',
    name: 'AI Netra - Wesbite',
    description: `Designed a single-page React website to highlight the AI Netra app.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/ShivamKumarSah/AI-Netra-Website-main',
    demo: 'https://shivamkumarsah.github.io/AI-Netra-Website/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '#',
    demo: '#',
  },
];

export { services, technologies, experiences, projects };
