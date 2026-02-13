'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './HeadNav.module.css';


export default function HeadNav(){
 const nav = [
        {
            id: 1,
            name: "Home",
            url: "/",
        },
        {
            id: 2,
            name: "Innovations",
            url: "/",
        },
        {
            id: 3,
            name: "Benefits",
            url: "/",
        },
        {
            id: 4,
            name: "Our Works",
            url: "/",
        },
    ]


  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (!homeSection) return;

      const scrollPosition = window.scrollY;
      const homeHeight = homeSection.offsetHeight;

      if (scrollPosition > homeHeight - 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${style.headNav} ${showNavbar ? style.show : ''} ${style.trans} hidden lg:flex justify-between p-10  align-center items-center shadow-2xl font-semibold transition-all duration-1000 ease-[cubic-bezier(0.075, 0.82, 0.165, 1)] `}>

        <Link href="/"><Image width={100} height={100} src="/favicon.ico" alt=""></Image></Link>
        <ul className=' hidden md:flex lg:flex lg:justify-between lg:gap-10'>
            {nav.map((nav) => (
                <Link className={`${style.line} ${style.trans} text-bg-1 relative`} key={nav.id} href={nav.url}>{nav.name}</Link>
            ))}
        </ul>
        <Link className={`${style.trans} hidden md:flex md:gap-2 lg:flex lg:gap-2 text-bg-1 hover:text-white line`} href="#contact"><button className={`${style.button} ${style.type1} flex`}><span className={`${style.trans} ${style.btnTxt}`}></span>Contact Us</button></Link>
    </div>
  );
};
