export const experienceList: IExperience[] = [
  {
    title: 'Software Engineer',
    company: 'Sensand',
    companyLink: 'https://sensand.com/',
    startDay: '1 June 2021',
    endDay: 'Current',
    responsibilities: [
      'Writing and testing code, deploying applications, diagnosing, debugging and troubleshooting issues, improving the structure and quality of code through refactoring',
      'Performing regular code review as a part of software quality assurance process',
      'Creating and updating documentation for the code base to assist both users and developers in understanding and using the product and code accordingly',
      'Developing, implementing, and maintaining automated test system utilising Jest to ensure the reliability and stability of the code',
      'Collaborating with cross-functional teams to develop and introduce new features',
      'Provide technical advice and consultations to the cross-functional teams in relation to Front End to assist the process of new features development and implementation',
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
      'Building User Interface utilising Vue.js and TypeScript',
      'Working on new features and move towards releasing a new version',
      'Ensuring code quality and standards while meeting deadlines and delivering targets set by the product team',
      'Working closely with the product manager, senior frontend developer, designer and backend developers in completing the scope of work',
    ],
    id: 2,
    skills: ['TypeScript', 'Vuetify', 'Vue'],
  },
  {
    title: 'Frontend Developer',
    company: 'Eriell',
    companyLink: 'https://www.eriell.com/en/',
    startDay: '19 December 2019',
    endDay: '1 June 2020',
    responsibilities: [
      'Specialized UI Development: Designed and implemented a sensor-friendly user interface optimized for low-data usage on drilling rigs.',
      'Component Library Innovation: Pioneered the introduction of a component library, complemented by a rigorous review process to ensure quality and consistency.',
      'UI Modernization: Successfully transitioned legacy PHP-based UI to a more dynamic and responsive Vue.js framework.',
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
