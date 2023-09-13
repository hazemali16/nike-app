import { offer } from '@/assets/images'
import Image from 'next/image'

const Offer = () => {
    return (
        <div className='flex items-center justify-center gap-10 mt-40 px-[10%] max-lg:flex-col-reverse'>
            <div className='w-[45%] max-lg:w-[80%] max-sm:w-full'>
                <Image 
                    src={offer}
                    alt='offer'
                />
            </div>
            <div className="w-[45%] max-lg:w-[80%] max-sm:w-full max-sm:text-center">
            <h1 className="font-bold text-5xl leading-[1.3]  mb-7  max-sm:text-4xl">
                <span className="text-coral_red"> 
                    Special
                </span> Offer
            </h1>
            <p className="text-slate-500 leading-7 mb-5  font-montserrat">
                Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings,
                we offer unparalleled value that sets us apart.
            </p>
            <p className="text-slate-500 leading-7 mb-5 font-montserrat">
                Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations.
                Your journey with us is nothing short of exceptional.
            </p>
            <div className="flex gap-5">
            <button className="rounded-full bg-coral_red flex gap-3 py-3 text-white px-4 items-center max-sm:mx-auto font-montserrat">
                View details
            </button>
            <button className="rounded-full flex gap-3 py-3 text-slate-500 border border-slate-500 px-4 items-center max-sm:mx-auto font-montserrat">
                Learn more
            </button>
            </div>
            </div>
        </div>
    )
}

export default Offer