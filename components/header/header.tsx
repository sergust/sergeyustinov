import type { NextComponentType } from 'next'
import MenuItem from './menu/menu-item'

const Header: NextComponentType = () => {
  const menuItems = [
    {
      text: 'About',
    },
    {
      text: 'Experience',
    },
    {
      text: 'Work',
    },
    {
      text: 'Contact',
    },
  ]
  return (
    <div className="flex justify-between font-mono py-6 px-6 border-2 drop-shadow-md">
      <div>Logo</div>
      <div className={'flex'}>
        {menuItems.map((item, index) => (
          <MenuItem index={index + 1} key={index}>
            {item.text}
          </MenuItem>
        ))}
      </div>
    </div>
  )
}

export default Header
