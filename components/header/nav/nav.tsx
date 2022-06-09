import { NextPage } from 'next'
import MenuItem from '../menu/menu-item'
import Button from '../../controls/button'
import { MenuItemInterface } from '../header'

interface Props {
  menuItems: MenuItemInterface[]
}

const Nav: NextPage<Props> = ({ menuItems }) => {
  return (
    <>
      {/*TODO: Provide # for contents*/}
      {menuItems.map(({ text }, index) => (
        <MenuItem index={index + 1} key={index}>
          {text}
        </MenuItem>
      ))}

      {/*TODO: Add link to resume*/}
      <Button>Resume</Button>
    </>
  )
}

export default Nav
