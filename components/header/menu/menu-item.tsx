import type { NextPage } from 'next'

interface Props {
  index: number
  children: string
  href: string
  onClick?: any
}

const MenuItem: NextPage<Props> = (props, context) => {
  return (
    <a
      className="flex mr-4 py-4 cursor-pointer text-xs self-center hover:text-green transition-colors"
      href={props.href}
      onClick={() => props.onClick()}
    >
      <div className="text-green mr-1">{props.index}.</div>
      {props.children}
    </a>
  )
}

export default MenuItem
