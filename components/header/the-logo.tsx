import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Logo: NextPage = () => {
  const router = useRouter()
  const handleClick = () => router.push('/')
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer text-4xl text-green font-sans font-semibold subpixel-antialiased tracking-wide"
    >
      SU
    </div>
  )
}

export default Logo
