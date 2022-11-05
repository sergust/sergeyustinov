import type { NextComponentType } from 'next'
import BlockTitle from '../block-title/block-title'
import { useState } from 'react'

const Portfolio: NextComponentType = () => {
  return (
    <div className=" container mx-auto flex items-center justify-center">
      <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-full sm:w-full justify-start flex flex-col">
        <BlockTitle
          text="Things that I've built"
          number="03"
          className="mb-8"
        />
        <div className="flex flex-col md:flex-row gap-4"></div>
      </div>
    </div>
  )
}

export default Portfolio
