import { Companion } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface CompanionsProps {
  data: (Companion & {
    _count: {
      messages: number
    }
  })[]
}

const Companions = ({ data }: CompanionsProps) => {
  if (data.length === 0) {
    return (
      <div className='pt-10 flex flex-col items-center justify-center space-y-3'>
        <div className='relative w-60 h-60'>
          <Image fill className='grayscale' alt='Empty' src='/empty.png' />
        </div>
        <p className='text-sm text-muted-foreground'>No Companion Found.</p>
      </div>
    )
  }

  return <div>Companions</div>
}

export default Companions
