import React from 'react'
import { checkSubscription } from '@/lib/subscription'
import SubscriptionButton from '@/components/subscription-button'

const SettingPage = async () => {
  const isPro = await checkSubscription()

  return (
    <div className='h-full p-4 space-y-2'>
      <h3 className='text-lg font-medium'>Settings</h3>
      <div className='text-muted-foreground text-sm'>
        {isPro ? "You are currently on a Pro Tier." : "You are currently on a Free Tier."}
      </div>
      <SubscriptionButton isPro={isPro}/>
    </div>
  )
}

export default SettingPage
