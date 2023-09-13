import { copyrightSign, facebook, instagram, twitter } from "@/assets/icons";
import { footerLogo } from "@/assets/images";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="py-20 flex gap-10 justify-between flex-wrap bg-black text-[#bbb] px-[10%] max-md:flex-col max-md:items-center max-sm:text-center">
                <div className="w-[350px] max-sm:w-[250px]">
                    <div className="w-[40%] max-sm:mx-auto max-sm:w-[60%]">
                        <Image src={footerLogo} alt="footer logo" />
                    </div>
                    <p className="leading-7 mb-10 mt-5 font-montserrat">
                        Get shoes ready for the new term at your nearest Nike store. Find
                        Your perfect Size In Store. Get Rewards
                    </p>
                    <div className="flex items-center gap-5 max-sm:justify-center">
                        <div className="p-3 rounded-full bg-white text-black">
                            <Image src={facebook} alt="facebook" />
                        </div>
                        <div className="p-3 rounded-full bg-white text-black">
                            <Image src={twitter} alt="twitter" />
                        </div>
                        <div className="p-3 rounded-full bg-white text-black">
                            <Image src={instagram} alt="instagram" />
                        </div>
                    </div>
                </div>
                <div className="w-[250px]">
                    <h3 className="text-white font-montserrat font-semibold text-3xl mb-5">
                        Products
                    </h3>
                    <ul className="flex flex-col gap-3 justify-center max-sm:items-center">
                        <li className="hover:text-white w-fit">
                            <a href="">Air Force 1</a>
                        </li>
                        <li className="hover:text-white w-fit">
                            <a href="">Air Max 1</a>
                        </li>
                        <li className="hover:text-white w-fit">
                            <a href="">Air Jordan 1</a>
                        </li>
                        <li className="hover:text-white w-fit">
                            <a href="">Air Force 2</a>
                        </li>
                        <li className="hover:text-white w-fit">
                            <a href="">Nike Waffle Racer</a>
                        </li>
                        <li className="hover:text-white w-fit">
                            <a href="">Nike Cortez</a>
                        </li>
                    </ul>
                </div>
                <div className="w-[250px]">
                    <h3 className="text-white font-montserrat font-semibold text-3xl mb-5">
                        Help
                    </h3>
                    <ul className="flex flex-col gap-3 justify-center max-sm:items-center">
                        <li className="hover:text-white w-fit">
                            <a href="">About us</a>
                        </li>
                        <li className="hover:text-white w-fit">
                            <a href="">FAQs</a>
                        </li>
                        <li className="hover:text-white w-fit">
                            <a href="">How it works</a>
                        </li>
                        <li className="hover:text-white w-fit">
                            <a href="">Privacy policy</a>
                        </li>
                        <li className="hover:text-white w-fit">
                            <a href="">Payment policy</a>
                        </li>
                    </ul>
                </div>
                <div className="w-[250px]">
                    <h3 className="text-white font-montserrat font-semibold text-3xl mb-5">
                        Get in touch
                    </h3>
                    <ul className="flex flex-col gap-3 justify-center max-sm:items-center">
                        <li className="hover:text-white w-fit">
                            <a href="">customer@nike.com</a>
                        </li>
                        <li className="hover:text-white w-fit">
                            <a href="">+92554862354</a>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="bg-black flex px-[10%] items-center justify-between text-[#bbb] py-5">
                <span className="flex gap-2 items-center">
                    <Image src={copyrightSign} alt="copy right" />
                    Copyright. All rights reserved.
                </span>
                <span>Terms & Conditions</span>
            </div>
        </>
    );
};

export default Footer;
