import React from 'react'
import Hero1 from '../image/food1.jpg';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[100px] relative '>
        <div className='absolute w-full md:h-[1070px] text-gray-200 max-h-[5000px] bg-black/40 flex flex-col justify-center '>
            <h1 className='px-4 text-4xl sm:text-5xl lg:text-6xl md:text-7xl font-bold'>The <span className='text-orange-600 '> Dest</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl lg:text-6xl md:text-7xl font-bold'>Foods <span className='text-orange-600 '>Delivered</span></h1>
        </div>
        <img src={Hero1} alt=""/>
      </div>
    </div>
  )
}

export default Hero
