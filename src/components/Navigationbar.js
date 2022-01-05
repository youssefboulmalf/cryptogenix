
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import React, { useState } from 'react'
import logo from '../img/CryptoGenix.png'

const NavItem = ({ name, style }) => {
    return (
        <li className={`mx-4 cursor-pointer ${style}`}>
            {name}
        </li>
    )

}

const Navigationbar = () => {


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const locations = ["Market", "Exchange", "Tutorials", "Wallets"]
    const navItemsDesktop = locations.map((location, index) => (
        <NavItem
            name={location}
            key={location + index}
        />
    ));
    const navItemsMobile = locations.map((location, index) => (
        <NavItem
            name={location}
            key={location + index}
            style={"my-2 text-white text-lg"}
        />
    ));

    const mobileMenuButtons = mobileMenuOpen
    ? <AiOutlineClose fontSize={28} className='text-white font-semibold md:hidden cursor-pointer' onClick={() => setMobileMenuOpen(false)} />
    : <HiMenuAlt4 fontSize={28} className='text-white font-semibold md:hidden cursor-pointer' onClick={() => setMobileMenuOpen(true)} />

    const mobileMenu = mobileMenuOpen ? (
        <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
        flex flex-col justify-start items-end rounded-md glassmorphism'>
            <li className='text-xl w-full my-2'>
                <AiOutlineClose onClick={() => setMobileMenuOpen(false)} />
            </li>
            {navItemsMobile}
        </ul>
    ) : null

    return (
        <nav className='w-full p-4 flex md:justify-center justify-between items-center'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo.src} className='w-28 h-28 cursor-pointer'></img>
            </div>
            <ul className='text-white font-semibold md:flex hidden list-none justify-betweem items-center flex-initial'>
                {navItemsDesktop}
                <li className='bg-gradient-to-r from-[#208dcd] to-[#0c3696] text-white font-semibold py-2 px-7 mx-4 rounded-full cursor-pointer hover:scale-105'>
                    login
                </li>
            </ul>
            <div className='flex relative'>
                {mobileMenuButtons}
                {mobileMenu}
            </div>
        </nav>
    )
}
export default Navigationbar