import { hotQuestions } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RightSidebar = () => {
  return (
    <section className='min-h-screen w-[420px] sticky top-0 right-0 shadow-md p-6'>
        <div className='w-full'>
            <h3>Tops Questions</h3>

            <div className='mt-5 flex flex-col gap-5'>
                {hotQuestions.map((question) => (
                    <Link key={question._id} href={question._id} className='flex justify-between items-center'>
                        <p className='text-sm'>{question.title}</p>
                        <Image src={'/icons/chevron-right.svg'} alt='right arrow' width={23} height={23} className='ease-in-out' />
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default RightSidebar