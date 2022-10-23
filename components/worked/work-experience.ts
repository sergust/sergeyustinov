export const experienceList: IExperience[] = [
  {
    title: 'Software Engineer',
    company: 'Sensand',
    companyLink: 'https://sensand.com/',
    startDay: '1 June 2021',
    endDay: 'Preset',
    responsibilities: ['sdfsdf', 'sdfsd'],
    id: 1,
  },
  {
    title: 'Front End Developer',
    company: 'Jibble',
    companyLink: 'https://www.jibble.io/',
    startDay: '1 June 2020',
    endDay: '1 June 2021',
    responsibilities: ['sdfsdf', 'sdfsd'],
    id: 2,
  },
  {
    title: 'Front End Developer',
    company: 'Eriell',
    companyLink: 'https://www.jibble.io/',
    startDay: '1 June 2020',
    endDay: '1 June 2021',
    responsibilities: ['sdfsdf', 'sdfsd'],
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
