
import SocialAuthForms from '@/components/forms/SocialAuthForms'
import Image from 'next/image'
import React from 'react'

const AuthLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <main className='min-h-screen flex justify-center items-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat'>
      <section className='min-w-full light-border background-light800_dark200 shadow-light100_dark100 rounded-[10px] border shadow-md px-4 py-10 sm:min-w-[520px] sm:px-8'>
        <div className='flex-between gap-2'>
          <div className='space-y-2.5'>
            <h1 className='text-dark100_light900 h2-bold'>
              Join DevFlow
            </h1>
            <p className='text-dark500_light400 paragraph-regular'>
              To get your questions answered
            </p>
          </div>

          <Image 
          src={'/images/site-logo.svg'}
          alt='site logo'
          width={50}
          height={50}
          className='object-contain'
          />
        </div>

        {children}

        <SocialAuthForms />
      </section>
    </main>
  )
}

export default AuthLayout