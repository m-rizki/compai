import prismadb from '@/lib/prismadb'
import { auth, currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import { absoluteUrl } from '@/lib/utils'

const settingsUrl = absoluteUrl('/settings') // http://localhost:3000/settings

export async function GET() {
  try {
    const { userId } = auth()
    const user = await currentUser()

    if (!userId || !user)
      return new NextResponse('Unautorized', { status: 401 })

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId: userId,
      },
    })

    if (userSubscription && userSubscription.subscriptionId) {
      return new NextResponse(
        JSON.stringify({
          message: "Great news! You're already a Pro Tier!",
          url: settingsUrl,
        })
      )
    }

    if (userSubscription) {
      return new NextResponse(
        JSON.stringify({ message: 'you have subscribed', url: settingsUrl })
      )
    }

    // Subscriptions settings for user who first time subscribed
    await prismadb.userSubscription.create({
      data: {
        userId: userId,
      },
    })
    return new NextResponse(
      JSON.stringify({
        message: 'Your Subscription Request was Successful!',
        url: settingsUrl,
      }),
      {
        status: 200,
      }
    )
  } catch (error) {
    console.log('[SUBSCRIPTION_GET]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
