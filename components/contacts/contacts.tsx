import type { NextComponentType } from 'next'
import BlockTitle from '../block-title/block-title'
import IconButton from '../controls/icon-button'
import { IconName } from '@fortawesome/fontawesome-svg-core'

const Contacts: NextComponentType = () => {
  interface IContacts {
    icon: IconName
    link: string
    text: string
  }
  const contacts: IContacts[] = [
    {
      icon: 'github',
      link: 'https://github.com/sergust',
      text: 'GitHub',
    },
    {
      icon: 'instagram',
      link: 'https://www.instagram.com/sergustinov/',
      text: 'Instagram',
    },
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/sergey-ustinov-bb8412169/',
      text: 'LinkedIn',
    },
    {
      icon: 'twitter',
      link: 'https://twitter.com/SergeyUstinov17',
      text: 'Twitter',
    },
  ]

  return (
    <div className=" container mx-auto flex items-center justify-center">
      <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-full sm:w-full justify-start flex flex-col">
        <BlockTitle text="Let's keep in touch" number="03" className="mb-8" />
        <p className="mb-4">
          Currently, I am now not looking for any job opportunities. However,
          inbox is always open for you. Whether you want to propose cooperation
          or just say hello, I will try to answer you as soon as possible
        </p>
        <div className="flex justify-between">
          {contacts.map((contact, index) => (
            <IconButton {...contact} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contacts
