import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { NextPage } from 'next'

interface IIconButtonProps {
  icon: IconName
  text: string
  link: string
}

const IconButton: NextPage<IIconButtonProps> = ({ icon, text, link }) => {
  // @ts-ignore
  return (
    <button
      className={
        'transition hover:bg-green/5 p-3 flex items-center text-xl font-mono text-green rounded-xl gap-3'
      }
      onClick={() => window.open(link, '_blank')}
    >
      {icon && <FontAwesomeIcon icon={`fa-brands fa-${icon}`} />}
      {text}
    </button>
  )
}

export default IconButton
