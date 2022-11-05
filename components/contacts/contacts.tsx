import type { NextComponentType } from 'next'
import BlockTitle from '../block-title/block-title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  brands,
  icon,
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro'

const Contacts: NextComponentType = () => {
  return (
    <div className=" container mx-auto flex items-center justify-center">
      <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-full sm:w-full justify-start flex flex-col">
        <BlockTitle text="Let's keep in touch" number="03" className="mb-8" />
        <div className="">
          <FontAwesomeIcon icon={brands('github')} />
        </div>
      </div>
    </div>
  )
}

export default Contacts
