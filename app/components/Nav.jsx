import Image from 'next/image'
import {headerLogo} from '@/assets/images/'

const Nav = () => {
    return (
        <nav className='flex items-center py-5  gap-20 p pl-[10%] justify-center max-md:flex-col max-md:gap-5 max-md:pl-0 absolute w-full z-20'>
            <div>
                <Image 
                    src={headerLogo}
                    alt="header logo"
                    width={150}
                    height={100}
                />
            </div>
            <ul className='flex gap-16 items-center text-slate-500 flex-1 justify-center font-montserrat max-md:gap-6 '>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About Us</a></li>
                <li><a href='#products'>Products</a></li>
                <li><a href='#contact'>Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Nav