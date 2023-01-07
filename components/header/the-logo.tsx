import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Logo: NextPage = () => {
  const router = useRouter()
  const handleClick = () => router.push('/')
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer text-[36px] text-green tracking-wide border-[1px] border-green px-2"
    >
      <div className="pt-[8px]">SU</div>
    </div>
  )
}

export default Logo
