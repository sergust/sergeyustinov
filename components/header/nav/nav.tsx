import { NextPage } from 'next'
import MenuItem from '../menu/menu-item'
import Button from '../../controls/button'
import { MenuItemInterface } from '../header'

interface Props {
  menuItems: MenuItemInterface[]
}

const Nav: NextPage<Props> = ({ menuItems }) => {
  const openResume = () =>
    window.open(
      'https://docs.google.com/document/d/15xrlMch5OL_s_ttqkmcvCVhsEu58BTMXaqzmrPB5kW8/edit?usp=sharing',
      '_blank'
    )
  return (
    <>
      {/*TODO: Provide # for contents*/}
      {menuItems.map(({ text, href }, index) => (
        <MenuItem index={index + 1} key={index} href={href}>
          {text}
        </MenuItem>
      ))}

      <Button onClick={openResume}>Resume</Button>
    </>
  )
}

export default Nav
