'use client'

import Image from 'next/image'
import React from 'react'
import { toast } from '@/hooks/use-toast'
import { ToastAction } from '@radix-ui/react-toast'
import { Button } from '../ui/button'
import { signIn } from 'next-auth/react'
import ROUTES from '@/constants/route'

const SocialAuthForms = () => {
    const buttonClass = 'background-dark400_light900 body-medium text-dark200_light800 min-h-12 px-4 py-3.5 rounded-2 flex-1 flex-center'

    const handleSignIn = async (provider: "github" | "google") => {
      try {
        // How we gonna do the funcionality
        await signIn(provider, {
          callbackUrl: ROUTES.HOME,
          redirect: false
        })
        
      } catch (error) {
        console.log(error)

        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 
            error instanceof Error 
            ? error.message 
            : "There was a problem with your request.",
          action: <ToastAction className='border rounded-md px-3 py-1 hover:border-none' altText='Try again'>Try again</ToastAction>     
        })
      }
    }
    
  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
        <Button className={buttonClass} onClick={() => handleSignIn('github')}>
            <Image 
            src={'/icons/github.svg'}
            alt='git hub'
            width={20}
            height={20}
            className='invert-colors mr-2.5 object-contain'
            />
            <span>Log in with GitHub</span>
        </Button>

        <Button className={buttonClass}>
            <Image 
            src={'/icons/google.svg'}
            alt='google'
            width={20}
            height={20}
            className='mr-2.5 object-contain'
            />
            <span>Log in with Google</span>
        </Button>
    </div>
  )
}

export default SocialAuthForms