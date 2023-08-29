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
      <div
        id="contact"
        className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-full sm:w-full justify-start flex flex-col pt-2"
      >
        <BlockTitle text="Let's keep in touch" number="03" className="mb-8" />
        <p className="mb-4">
          Currently, I am now looking for a Senior Frontend Engineer role.
          Specifically, I am m seeking a permanent Hybrid role in Sydney or a
          Remote position. My expertise lies in React, Angular, and Vue for
          frontend development. While it is not a requirement, I would love to
          work in an environment that also utilizes Node.js on the backend. Wha
          is most important to me is joining an amazing, friendly, and
          open-minded team of professionals who are passionate about their work.
          Thank you in advance for any connections, advice, or opportunities you
          can offer. Feel free to reach out to me directly through the contacts
          that are located in my resume.
        </p>
        <div className="flex justify-between flex-col md:flex-row">
          {contacts.map((contact, index) => (
            <IconButton {...contact} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contacts
