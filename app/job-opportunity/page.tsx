import ItNewsCard from '@/components/itNewsCard'
import PaginationComponent from '@/components/pagination'

import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto my-10">
        <h1 className="text-gray-900 font-extrabold uppercase text-3xl my-3 mx-20"> Useful Contents</h1>
        <ItNewsCard/>
        <PaginationComponent/>
    </div>
  );
  

  
}
