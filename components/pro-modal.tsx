'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useProModal } from '@/hooks/use-pro-modal'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const ProModal = () => {
  const proModal = useProModal()
  const { toast } = useToast()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  // modal are common case for hydration errors
  // we can't see in this project because in our layout, we add supressHydrationWarning
  // isMounted is going to be false on server side
  const [isMounted, setIsMounted] = useState(false)

  // this will prevent from pro modal to cause any hydration errors
  // and then we get the useEffect that means we are already on the client side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onSubscribe = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/subscription')
      toast({
        variant: 'default',
        description: response.data.message,
      })
      proModal.onClose()
      router.refresh()
      router.push(response.data.url)
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'Something went wrong.',
      })
    } finally {
      setLoading(false)
    }
  }

  if(!isMounted) {
    return null
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader className='space-y-4'>
          <DialogTitle className='text-center'>Upgrade to Pro</DialogTitle>
          <DialogDescription className='text-center space-y-2'>
            Create <span className='text-sky-500 font-medium'>Custom AI</span>{' '}
            Companions!
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className='flex justify-between'>
          <p className='text-2xl font-medium'>
            $X<span className='text-sm font-normal'>.XX / mo</span>
          </p>
          <Button disabled={loading} onClick={onSubscribe} variant='premium'>
            Subscribe
          </Button>
        </div>
        <Separator />
        <p className='text-center space-y-2'>
          After successfully subscribing, please contact me on Discord
          <span className='text-sky-500 font-medium'> rizki2707</span> to get a
          Pro Tier!
        </p>
      </DialogContent>
    </Dialog>
  )
}

export default ProModal
