// import React, { useState } from 'react';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import style from './NavBar.module.css'

export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

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

  return (
    
    <nav className={`${style} flex justify-between p-10  align-center items-center font-semibold`}>
        <Link href="/home"><Image width={100} height={100} src="./next.svg" alt=""></Image></Link>
        <ul className='flex justify-between gap-10'>
            {nav.map((nav) => (
                <Link className='hover:text-white' key={nav.id} href={nav.url}>{nav.name}</Link>
            ))}
        </ul>
        <Link className='flex gap-2 hover:text-white' href="/Contact"><span><MoveRight/></span>Contact Us</Link>
    </nav>
  );
}