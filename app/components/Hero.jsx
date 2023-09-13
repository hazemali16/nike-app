'use client'

import Image from 'next/image'
import {arrowRight} from '@/assets/icons'
import { bigShoe1, bigShoe2, bigShoe3 } from '@/assets/images'

const Hero = () => {
    return (
        <div id='home' className="w-full min-h-screen flex justify-center items-center  pl-[10%] 2xl:pr-[10%] max-xl:flex-col max-xl:items-start max-xl:pl-0">
            <div className='w-2/5 max-xl:w-full mt-40 mb-16 max-xl:pl-20 max-sm:pl-0 max-sm:text-center'>
                <span className="text-coral_red text-xl font-montserrat">Our Summer Collections</span>
                <h1 className="font-bold text-[85px] leading-[106px]  mt-10 mb-7 relative z-10 max-md:text-6xl max-sm:text-4xl">
                    <span className='whitespace-nowrap bg-white pr-5'>The New Arrival</span>
                    <br />
                    <span className="text-coral_red">Nike</span> Shoes
                </h1>
                <p className="text-slate-500 leading-7 mb-5 w-96 font-montserrat">Discover stylish Nike arrivals, quality, comfort and innovation for your active life</p>
                <button className='rounded-full bg-coral_red flex gap-3 py-3 text-white px-4 items-center max-sm:mx-auto font-montserrat'>
                    Shop now
                    <Image 
                        src={arrowRight}
                        alt={'arrowRight'}
                    />
                </button>
                <div className='flex items-center gap-[10%] mt-20 max-sm:gap-16 max-sm:justify-center flex-wrap'>
                    <div classname='w-[30%]'>
                        <h3 className='text-4xl font-palanquin font-bold'>1k+</h3>
                        <span className='block mt-3 text-slate-500 font-montserrat'>Brands</span>
                    </div>
                    <div classname='w-[30%]'>
                        <h3 className='text-4xl font-palanquin font-bold'>500+</h3>
                        <span className='block mt-3 text-slate-500 font-montserrat'>Shops</span>
                    </div>
                    <div classname='w-[30%]'>
                        <h3 className='text-4xl font-palanquin font-bold'>250k+</h3>
                        <span className='block mt-3 text-slate-500 font-montserrat'>Customers</span>
                    </div>
                </div>
            </div>
            <div className='shoe-img min-h-screen flex-1 flex justify-center items-center relative max-xl:w-full'>
                <Image 
                    src={bigShoe1}
                    alt={'bigShoe1'}
                    className='selected-image'
                />
                <div className='absolute left-[50%] w-full p-3 -bottom-[80px] -translate-x-[50%] flex justify-center items-center gap-7'>
                    <div 
                    className='box shoe-img-2 w-40 h-40 flex justify-center items-center border-2 border-coral_red cursor-pointer rounded-[10px]'
                    
                    >
                    <Image 
                        src={bigShoe1}
                        alt={'bigShoe1'}
                        onClick={(ele) => {
                            document.querySelectorAll(".box").forEach(ele => {
                                ele.classList.remove("border-coral_red")
                            })
                            ele.target.parentElement.classList.add("border-coral_red")
                            document.querySelector(".selected-image").src = bigShoe1.src
                            document.querySelector(".selected-image").srcset = bigShoe1.src
                        }

                        }
                    />
                    </div>
                    <div
                    className='box shoe-img-2 w-40 h-40 flex justify-center items-center border-2 cursor-pointer rounded-[10px]'
                    
                    >
                    <Image 
                        src={bigShoe2}
                        alt={'bigShoe2'}
                        onClick={(ele) => {
                            document.querySelectorAll(".box").forEach(ele => {
                                ele.classList.remove("border-coral_red")
                            })
                            ele.target.parentElement.classList.add("border-coral_red")
                            document.querySelector(".selected-image").src = bigShoe2.src
                            document.querySelector(".selected-image").srcset = bigShoe2.src
                        }}
                    />
                    </div>
                    <div 
                    className='box shoe-img-2 w-40 h-40 flex justify-center items-center border-2 rounded-[10px] cursor-pointer'
                    
                    >
                    <Image 
                        src={bigShoe3}
                        alt={'bigShoe3'}
                        onClick={(ele) => {
                            document.querySelectorAll(".box").forEach(ele => {
                                ele.classList.remove("border-coral_red")
                            })
                            ele.target.parentElement.classList.add("border-coral_red")
                            document.querySelector(".selected-image").src = bigShoe3.src
                            document.querySelector(".selected-image").srcset = bigShoe3.src
                        }}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero