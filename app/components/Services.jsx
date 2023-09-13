import { shieldTick, support, truckFast } from '@/assets/icons'
import Image from 'next/image'

const Services = () => {
    return (
        <div className="mt-40 flex flex-wrap items-center gap-10 px-[10%] justify-center">
            <div className="w-[400px] p-10 shadow-2xl flex flex-col justify-center rounded-xl h-72">
                <div className='bg-coral_red w-10 h-10 rounded-full flex justify-center items-center mb-5'>
                <Image 
                    src={truckFast}
                    alt='truck'
                />
                </div>

                <h3 className='font-bold text-xl font-montserrat mb-4'>Free shipping</h3>
                <p className='text-slate-500 leading-7 font-montserrat'>Enjoy seamless shopping with our complimentary shipping service.</p>
            </div>
            <div className="w-[400px] p-10 shadow-2xl flex flex-col justify-center rounded-xl h-72">
            <div className='bg-coral_red w-10 h-10 rounded-full flex justify-center items-center mb-5'>
                <Image 
                    src={shieldTick}
                    alt='shieldTick'
                />
                </div>
                <h3 className='font-bold text-xl font-montserrat mb-4'>Secure Payment</h3>
                <p className='text-slate-500 leading-7 font-montserrat'>Experience worry-free transactions with our secure payment options.</p>
            </div>
            <div className="w-[400px] p-10 shadow-2xl flex flex-col justify-center rounded-xl h-72">
            <div className='bg-coral_red w-10 h-10 rounded-full flex justify-center items-center mb-5'>
                <Image 
                    src={support}
                    alt='support'
                />
                </div>
                <h3 className='font-bold text-xl font-montserrat mb-4'>Love to help you</h3>
                <p className='text-slate-500 leading-7 font-montserrat'>Our dedicated team is here to assist you every step of the way.</p>
            </div>
        </div>
    )
}

export default Services