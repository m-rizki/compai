'use client'

import React, { useState } from 'react'
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

  const onSubscribe = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/subscription')
      toast({
        variant: 'default',
        description: response.data.message,
      })
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
          <span className='text-sky-500 font-medium'> rizki2707</span> to get a Pro Tier!
        </p>
      </DialogContent>
    </Dialog>
  )
}

export default ProModal
