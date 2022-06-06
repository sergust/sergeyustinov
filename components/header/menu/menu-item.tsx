import type { NextPage } from 'next'

interface MenuItem {
  index: number
  children: string
}

const MenuItem: NextPage<MenuItem> = (props, context) => {
  return (
    <a className="flex mr-4 cursor-pointer text-xs self-center hover:text-green transition-colors">
      <div className="text-green mr-1">{props.index}.</div>
      {props.children}
    </a>
  )
}

export default MenuItem
