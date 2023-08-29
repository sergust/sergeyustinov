export const experienceList: IExperience[] = [
  {
    title: 'Software Engineer',
    company: 'Sensand',
    companyLink: 'https://sensand.com/',
    startDay: '1 June 2021',
    endDay: '25 August 2023',
    responsibilities: [
      'Led the development of the frontend for a Vue.js-based Proof of Concept (PoC) in farm asset management with IoT integration, successfully securing a $1 million investment.',
      'Collaborated with developers and teams to migrate the PoC from Vue.js to Angular and React.js. Integrated Mapbox for real-time asset tracking and vendor APIs on the frontend, enhancing MRV capabilities and streamlining risk management and ESG reporting.',
      'Played a key role in setting front-end coding standards and architectural decisions, contributing to long-term maintainability and scalability of the product.',
      'Implemented Jest for front end testing, improving code reliability and reducing bug tickets by 30%.',
      'Initiated and partnered with the design team to implement a streamlined design system using Storybook, significantly accelerating frontend development and enabling rapid UI construction.',
      'Successfully mentored three interns through hands-on training and code reviews; all transitioned into full-time Software Engineer roles and completed their project tasks under my guidance.',
      'Continuously updated technical skills, gaining hands-on experience in Astro and Node.js. Utilised Astro to implement server-side rendering parts of the application and developed API endpoints with vendor integration using Nest.js.',
    ],
    id: 1,
    skills: ['TypeScript', 'Angular', 'Vue', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Software Engineer',
    company: 'Jibble',
    companyLink: 'https://www.jibble.io/',
    startDay: '1 June 2020',
    endDay: '1 June 2021',
    responsibilities: [
      'UI Development & Client Onboarding: Collaborated with design and product teams to create an initial UI in Figma, then transformed it into a functional interface using Vue.js. Incorporated features such as payroll, timesheets, employee time tracking, time attendance, and reports, as well as employee and overtime vacation trackers. This collaborative effort led to the successful onboarding of inaugural clients.',
      'Code Quality Enhancement Initiative: Spearheaded the integration of TypeScript and Prettier into the development workflow, resulting in a significant reduction in bug count.',
      'Agile Development: Actively participated in Scrum meetings, sprint planning, and retrospectives, contributing to a 10% increase in team velocity over six months.',
      'Analytics Integration Initiative: Took the lead in seamlessly incorporating Mixpanel analytics into the service, enabling the monitoring and optimization of user interactions, which in turn provided valuable insights for business strategy and customer engagement.',
    ],
    id: 2,
    skills: ['TypeScript', 'Vuetify', 'Vue'],
  },
  {
    title: 'Frontend Developer',
    company: 'Eriell',
    companyLink: 'https://www.eriell.com/en/',
    startDay: '19 August 2018',
    endDay: '1 June 2020',
    responsibilities: [
      'Specialized UI Development: Designed and implemented a sensor-friendly internal portal user interface, specifically optimized for low-data usage on drilling rigs in rural areas with limited internet connectivity. The product is company-internal and front-end heavy, focusing on complex calculations and graphical chart presentations.',
      'UI Modernization: Spearheaded the successful transition from a legacy PHP-based UI to a more dynamic and responsive UI using React.js. Collaborated with backend teams for seamless integration, overcoming compatibility challenges and resulting in a 20% improvement in page load times.',
    ],
    id: 3,
    skills: ['TypeScript', 'Vue', 'PHP'],
  },
]

export interface IExperience {
  title: string
  company: string
  companyLink: string
  startDay: string
  endDay: string
  responsibilities: string[]
  id: number
  skills?: string[]
}
