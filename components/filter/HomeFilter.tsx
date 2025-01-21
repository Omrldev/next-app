import React from 'react'
import { Button } from '../ui/button'
import { homeFilters } from '@/constants'

const HomeFilter = () => {
  return (
    <div className='mt-10 max-sm:hidden'>
        {homeFilters.map((filter) => (
            <Button key={filter.name}>
                {filter.name}
            </Button>
        ))}
    </div>
  )
}

export default HomeFilter