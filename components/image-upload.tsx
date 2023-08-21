'use client'

import { useEffect, useState } from 'react'
import { CldUploadButton } from 'next-cloudinary'
import Image from 'next/image'

interface ImageUploadProps {
  value: string
  onChange: (src: string) => void
  disabled?: boolean
}

export const ImageUpload = ({
  value,
  onChange,
  disabled,
}: ImageUploadProps) => {
  // resolve hydration errors because this component use cloudinary
  const [isMounted, setIsMounted] = useState(false)

  // this only going to run once we finished the server side rendering and get to client side rendering
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className='space-y-4 w-full flex flex-col justify-center items-center'>
      <CldUploadButton
        onUpload={(result: any) => onChange(result.info.secure_url)}
        options={{
          maxFiles: 1,
        }}
        uploadPreset='oy9vbmxp'
      >
        <div className='p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col space-y-02 items-center justify-center'>
          <div className='relative h-40 w-40'>
            <Image
              fill
              alt='Upload'
              src={value || '/placeholder.svg'}
              className='rounded-lg object-cover'
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  )
}
