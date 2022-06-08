import type { NextComponentType } from 'next'
import MenuItem from './menu/menu-item'
import Button from '../controls/button'
import Logo from './the-logo'
import Hamburger from './the-hamburger/the-hamburger'

const Header: NextComponentType = () => {
  const menuItems = [
    {
      text: 'about',
    },
    {
      text: 'experience',
    },
    {
      text: 'work',
    },
    {
      text: 'contact',
    },
  ]
  return (
    <div className="drop-shadow-md py-6 px-10">
      <div className="flex justify-between">
        <Logo />
        <div className="flex font-mono">
          <div className="hidden sm:hidden md:flex">
            {/*TODO: Provide # for contents*/}
            {menuItems.map(({ text }, index) => (
              <MenuItem index={index + 1} key={index}>
                {text}
              </MenuItem>
            ))}

            {/*TODO: Add link to resume*/}
            <Button>Resume</Button>
          </div>
          <Hamburger />
        </div>
      </div>
    </div>
  )
}

export default Header
