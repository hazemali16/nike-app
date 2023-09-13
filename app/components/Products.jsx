import { star } from '@/assets/icons';
import { shoe4, shoe5, shoe6, shoe7 } from '@/assets/images';
import Image from 'next/image'

const Products = () => {
    return (
        <div id="products" className="mt-40 px-[10%]">
            <h1 className="font-bold text-5xl mb-7  max-sm:text-4xl">
                Our
                <span className="text-coral_red"> Popular</span> Products
            </h1>
            <p className="text-slate-500 leading-7 mb-5 w-[30%] font-montserrat max-xl:w-fit">
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
            </p>
            <div className="flex items-center gap-[5%] mt-20 flex-wrap  max-md:justify-center ">
                <div className="w-64 mb-10">
                    <div className="shoe-img-2 h-[250px] flex justify-center items-center mb-5">
                        <Image
                            src={shoe4}
                            alt='shoe 4'
                        />
                    </div>
                    <div>
                        <span className='font-montserrat flex gap-3 text-slate-500'>
                            <Image 
                                src={star}
                                alt='star'
                            />
                            (4.5)
                        </span>
                        <h3 className='text-xl my-1 font-bold font-palanquin'>Nike Air Jordan-01</h3>
                        <span className='text-coral_red'>$200.20</span>
                    </div>
                </div>
                <div className="w-64 mb-10">
                    <div className="shoe-img-2 h-[250px] flex justify-center items-center mb-5">
                        <Image
                            src={shoe5}
                            alt='shoe 5'
                        />
                    </div>
                    <div>
                        <span className='font-montserrat flex gap-3 text-slate-500'>
                            <Image 
                                src={star}
                                alt='star'
                            />
                            (4.5)
                        </span>
                        <h3 className='text-xl my-1 font-bold font-palanquin'>Nike Air Jordan-10</h3>
                        <span className='text-coral_red'>$210.20</span>
                    </div>
                </div>
                <div className="w-64 mb-10">
                    <div className="shoe-img-2 h-[250px] flex justify-center items-center mb-5">
                        <Image
                            src={shoe6}
                            alt='shoe 6'
                        />
                    </div>
                    <div>
                        <span className='font-montserrat flex gap-3 text-slate-500'>
                            <Image 
                                src={star}
                                alt='star'
                            />
                            (4.5)
                        </span>
                        <h3 className='text-xl my-1 font-bold font-palanquin'>Nike Air Jordan-100</h3>
                        <span className='text-coral_red'>$220.20</span>
                    </div>
                </div>
                <div className="w-64 mb-10">
                    <div className="shoe-img-2 h-[250px] flex justify-center items-center mb-5">
                        <Image
                            src={shoe7}
                            alt='shoe 7'
                        />
                    </div>
                    <div>
                        <span className='font-montserrat flex gap-3 text-slate-500'>
                            <Image 
                                src={star}
                                alt='star'
                            />
                            (4.5)
                        </span>
                        <h3 className='text-xl my-1 font-bold font-palanquin'>Nike Air Jordan-001</h3>
                        <span className='text-coral_red'>$230.20</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
