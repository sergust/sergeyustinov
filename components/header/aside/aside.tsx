import type { NextPage } from 'next'
import { MenuItemInterface } from '../header'
import Nav from '../nav/nav'
import { useState } from 'react'

interface Props {
  menuItems: MenuItemInterface[]
}

const Aside: NextPage<Props> = ({ menuItems }) => {
  return (
    <>
      <aside
        className="md:hidden bg-navy-light fixed flex flex-col h-screen items-center justify-center top-0 right-0"
        style={{ width: 'min(75vw, 400px)' }}
      >
        <Nav menuItems={menuItems}></Nav>
      </aside>
    </>
  )
}

export default Aside
