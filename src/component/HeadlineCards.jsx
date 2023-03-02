import React from 'react'
import  Logo  from '../image/Hero2.jpg'
import  food2  from '../image/food2.jpg'
import  food3  from '../image/food3.jpg'
import  dessert  from '../image/dessert.jpg'
const HeadlineCards = () => {
  return (
    <div className='max-w-[1640] mx-auto p-8 md:mt-[840px] py-40 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-4 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-4'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                Order Now 
            </button>
        </div>
        <img src={ Logo }  alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
      </div>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-4 pt-4'>New Restaurants</p>
            <p className='px-4'> Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                Order Now 
            </button>
        </div>
        <img src={ food2 }  alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
      </div>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-4 pt-4'>We Delivered Desserts</p>
            <p className='px-4'>Testy Treats</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                Order Now 
            </button>
        </div>
        <img src={ dessert }  alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
      </div>
    </div>
  )
}

export default HeadlineCards
