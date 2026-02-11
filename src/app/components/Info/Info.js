import React from 'react'
import Image from 'next/image'
import style from './Info.module.css'

export default function Info() {
  return (
    <div className=' h-dvh bg-bg-1'>
        <div className='p-30 flex justify-between gap-10'>
            <div className='flex flex-col w-1/2 '>
                <h1>Introduction to Stellar Mulberry</h1>
                <h3>Where Nature Meets Opportunity</h3>
                <section>
                    <p>At Stellar Homes, we believe a home should be more than just walls—it should be a legacy. Stellar Mulberry is a premium plotted development in Chikkaballapur designed to offer a wholesome lifestyle away from city chaos. Whether you are building a weekend retreat or securing a future asset, this is your gateway to peaceful living and smart investment.</p>
                    <ul>
                        <li><b>A Lifestyle Rooted in Nature:</b> Designed to bring nature to your doorstep with abundant tropical green patches, tree-lined paths, and landscaped open spaces that offer a breath of fresh air.</li>
                        <li><b>Smart Investment Potential:</b> A future-ready asset with DTCP & RERA approvals and high appreciation potential, located in a rapidly growing region with easy bank loan options up to 90%.</li>
                        <li><b>Prime Location Advantage:</b> Strategically located near Nandi Hills and the Isha Foundation, offering excellent connectivity to Bengaluru via highways while remaining a serene spiritual and tourism hub.</li>
                    </ul>
                </section>

            </div>
            <div className='w-1/2'>
                <Image className='w-full h-full rounded' width={1600} height={900} src='/weekend-home.jpg' alt='weekend-home'></Image>
            </div>
        </div>
    </div>

  )
}
