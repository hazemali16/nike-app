import { star } from '@/assets/icons'
import { customer1, customer2 } from '@/assets/images'
import Image from 'next/image'

const Customers = () => {
    return (
        <div className='bg-[#f6f6fe] mt-40 mb-40 py-20'>
            <h1 className="font-bold text-5xl leading-[1.3]  mb-7  max-sm:text-4xl text-center">
                What Our
                <span className="text-coral_red"> Customers 
                </span> Say?
            </h1>
            <p className="text-slate-500 leading-7 mb-5  font-montserrat w-[30%] text-center mx-auto max-lg:w-full">
                Hear genuine stories from our satisfied customers about their exceptional experiences with us.
            </p>
            <div className="mt-10  flex justify-center items-center gap-20 max-lg:flex-col">
                <div className="flex flex-col justify-center items-center w-96">
                    <div className='w-28 h-28'>
                    <Image 
                        src={customer1}
                        alt='customer1'
                        className='rounded-full'
                    />
                    </div>
                    <p className="text-slate-500 leading-7 mb-5 font-montserrat text-center mt-5">
                    The attention to detail and the quality of the product exceeded my expectations. Highly recommended!
                    </p>
                    <span className='font-montserrat flex gap-3 text-slate-500 '>
                            <Image 
                                src={star}
                                alt='star'
                            />
                            (4.5)
                    </span>
                    <h3 className='text-xl my-1 font-bold font-montserrat'>Morich Brown</h3>
                </div>
                <div className="flex flex-col justify-center items-center w-96">
                    <div className='w-28 h-28'>
                    <Image 
                        src={customer2}
                        alt='customer2'
                        className='rounded-full'
                    />
                    </div>
                    <p className="text-slate-500 leading-7 mb-5 font-montserrat text-center mt-5">
                    The product not only met but exceeded my expectations. I'll definitely be a returning customer!
                    </p>
                    <span className='font-montserrat flex gap-3 text-slate-500 '>
                            <Image 
                                src={star}
                                alt='star'
                            />
                            (4.5)
                    </span>
                    <h3 className='text-xl my-1 font-bold font-montserrat'>Lota Mongeskar</h3>
                </div>
            </div>
        </div>
    )
}

export default Customers