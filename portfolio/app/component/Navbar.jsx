import { assets } from '@/assets/assets'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='w-full-fixed px-5 lg:px-8 xl:px-[8%] py-4
            flex items-center justify-between z-50'>
                <a href="#top">
                    <image src = {assets.logo} className='w-28 cursor-pointer mr-14'/>
                </a>

                <ul className='hidden md:flex items-center gap-6 lg:gap-8
                rounded-full px-12 py-3'>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">My work</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>


                <div>
                    <a href="#contact" className='hidden lg:flex items-center gap-3
                    px-10  py-2.5 boader boader-gray-500 rounded-full ml-4 ' >Contact <image src={assets.
                    arrow_icon} alt=""className='w-3' /></a>
                </div>
            </nav>
        </>
    )
}
export default Navbar