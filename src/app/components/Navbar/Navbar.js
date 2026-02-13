
import Link from 'next/link';
import Image from 'next/image';
import style from './NavBar.module.css'
import './NavBar.module.css'

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
    
    <nav className={`${style.trans} bg-primary p-2 flex justify-between lg:p-10 lg:bg-transparent  align-center items-center font-semibold transition-all duration-1000 ease-[cubic-bezier(0.075, 0.82, 0.165, 1)] `}>
        <Link href="/home"><Image width={100} height={100} src="/favicon.ico" alt=""></Image></Link>
        <ul className='flex justify-between gap-10'>
            {nav.map((nav) => (
                <Link className={`${style.line} ${style.trans} hidden md:flex lg:flex text-bg-1 lg:text-primary relative`} key={nav.id} href={nav.url}>{nav.name}</Link>
            ))}
        </ul>
        <Link className={`${style.trans} hidden md:flex lg:flex gap-2 text-bg-1 hover:text-white line`} href="/Contact"><button className={`${style.button} ${style.type1} flex`}><span className={`${style.trans} ${style.btnTxt}`}></span>Contact Us</button></Link>
    </nav>
  );
}