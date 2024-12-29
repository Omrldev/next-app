import Image from 'next/image'
import React from 'react'

const SocialAuthForms = () => {
    const buttonClass = 'background-dark400_light900 body-medium text-dark200_light800 min-h-12 px-4 py-3.5 rounded-2 flex-1 flex-center'
    
  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
        <button className={buttonClass}>
            <Image 
            src={'/icons/github.svg'}
            alt='git hub'
            width={20}
            height={20}
            className='invert-colors mr-2.5 object-contain'
            />
            <span>Log in with GitHub</span>
        </button>

        <button className={buttonClass}>
            <Image 
            src={'/icons/google.svg'}
            alt='google'
            width={20}
            height={20}
            className='mr-2.5 object-contain'
            />
            <span>Log in with Google</span>
        </button>
    </div>
  )
}

export default SocialAuthForms