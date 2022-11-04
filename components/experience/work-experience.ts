export const experienceList: IExperience[] = [
  {
    title: 'Software Engineer',
    company: 'Sensand',
    companyLink: 'https://sensand.com/',
    startDay: '1 June 2021',
    endDay: 'Present',
    responsibilities: [
      'Develop product features, from inception to completion—including gathering and analyzing requirements, collaborating on design, and coding',
      'Support, maintain, and upgrade code',
      'Acting as the technical/team lead on development projects',
    ],
    id: 1,
  },
  {
    title: 'Front End Developer',
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
  },
  {
    title: 'Front End Developer',
    company: 'Eriell',
    companyLink: 'https://www.jibble.io/',
    startDay: '20 December 2019',
    endDay: '1 June 2020',
    responsibilities: [
      'Development of an interface for the admin panel to control oil drilling platforms using JavaScript, Vue.js and Vuex',
    ],
    id: 3,
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
}
