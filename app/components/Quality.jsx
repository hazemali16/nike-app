import { arrowRight } from "@/assets/icons";
import { shoe8 } from "@/assets/images";
import Image from 'next/image'

const Quality = () => {
    return (
        <div id='about' className="mt-40 px-[10%] flex justify-center items-center gap-20 max-lg:flex-col">
            <div className="w-[50%] max-lg:w-[80%] max-sm:w-full max-sm:text-center">
            <h1 className="font-bold text-5xl leading-[1.3]  mb-7  max-sm:text-4xl">
                We Provide You
                <span className="text-coral_red"> Super
                    <br />
                    Quality
                </span> Shoes
            </h1>
            <p className="text-slate-500 leading-7 mb-5  font-montserrat">
                Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience,
                providing you with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="text-slate-500 leading-7 mb-5 font-montserrat">
                Our dedication to detail and excellence ensures your satisfaction
            </p>
            <button className="rounded-full bg-coral_red flex gap-3 py-3 text-white px-4 items-center max-sm:mx-auto font-montserrat">
                Shop now
                <Image src={arrowRight} alt={"arrowRight"} />
            </button>
            </div>
            <div className="flex justify-center items-center w-[50%] max-lg:w-[80%] max-sm:w-full">
                <Image 
                    src={shoe8}
                    alt="shoe 8"
                />
            </div>
        </div>
    );
};

export default Quality;
