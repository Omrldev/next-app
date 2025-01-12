import React from 'react'
import NavLinks from './navbar/NavLinks'

const LeftSideNav = () => {
  return (
    <section className='sticky left-0 top-0 shadow-md custom-scrollbar'>
        <div className='flex flex-1 gap-6 flex-col'>
            <NavLinks />
        </div>
    </section>
  )
}

export default LeftSideNav