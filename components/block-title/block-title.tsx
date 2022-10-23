import type { NextPage } from 'next'

interface IBlockTitle {
  text: string
  number: string
  className?: string
}

const BlockTitle: NextPage<IBlockTitle> = ({ text, number, className }) => {
  return (
    <div className={`w-full flex font-semibold items-center ${className}`}>
      <span className="text-green mr-2 font-mono text-xl">{number}.</span>
      <h2 className="w-fit mr-4">{text}</h2>
      <hr className="w-1/3 opacity-20 self-center" />
    </div>
  )
}

export default BlockTitle
