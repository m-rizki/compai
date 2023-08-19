import Navbar from '@/components/navbar'
import React from 'react'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className='h-full'>
      <Navbar />
      <main className='md:pl-20 pt-16 h-full'>{children}</main>
    </div>
  )
}

export default RootLayout
