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
            url: "/home",
        },
        {
            id: 2,
            name: "Innovations",
            url: "/Innovations",
        },
        {
            id: 3,
            name: "Benefits",
            url: "/Benefits",
        },
        {
            id: 4,
            name: "Our Works",
            url: "/OurWorks",
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
    <div className={`${style.headNav} ${showNavbar ? style.show : ''} ${style.trans} flex justify-between p-10  align-center items-center shadow-2xl font-semibold transition-all duration-1000 ease-[cubic-bezier(0.075, 0.82, 0.165, 1)] `}>

        <Link href="/home"><Image width={100} height={100} src="/favicon.ico" alt=""></Image></Link>
        <ul className='flex justify-between gap-10'>
            {nav.map((nav) => (
                <Link className={`${style.line} ${style.trans} text-bg-1 relative`} key={nav.id} href={nav.url}>{nav.name}</Link>
            ))}
        </ul>
        <Link className={`${style.trans} flex gap-2 text-bg-1 hover:text-white line`} href="/Contact"><button className={`${style.button} ${style.type1} flex`}><span className={`${style.trans} ${style.btnTxt}`}></span>Contact Us</button></Link>
    </div>
  );
};
