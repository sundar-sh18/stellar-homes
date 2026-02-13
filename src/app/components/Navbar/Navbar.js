'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './NavBar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const nav = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "Innovations", url: "/" },
        { id: 3, name: "Benefits", url: "/" },
        { id: 4, name: "Our Works", url: "/" },
    ];

    return (
        <nav className={`${style.trans} bg-primary lg:bg-transparent p-4 lg:p-10 flex flex-col lg:flex-row justify-between lg:items-center font-semibold transition-all duration-1000 ease-[cubic-bezier(0.075, 0.82, 0.165, 1)] relative z-50`}>
            
            <div className="flex justify-between items-center w-full lg:w-auto">
                <Link href="/">
                    <Image width={100} height={100} src="/favicon.ico" alt="Logo" className="" />
                </Link>
                
                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="lg:hidden text-bg-1 focus:outline-none"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </div>

            {/* Nav Links */}
            <div className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto gap-6 lg:gap-10 lg:justify-between items-center mt-4 lg:mt-0`}>
                <ul className='flex flex-col lg:flex-row gap-6 lg:gap-10 text-center'>
                    {nav.map((item) => (
                        <Link 
                            className={`${style.line} ${style.trans} text-bg-1 lg:text-primary relative text-lg`} 
                            key={item.id} 
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>

            </div>
                <Link className={`${style.trans} text-bg-1 hover:text-white line`} href="#contact">
                    <button className={`${style.button} ${style.type1} flex justify-center`}>
                        <span className={`${style.trans} ${style.btnTxt}`}></span>Contact Us
                    </button>
                </Link>
        </nav>
    );
}