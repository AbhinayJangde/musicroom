import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-400 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>About Us</h2>
                <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum dolores, consequatur reprehenderit asperiores eius illo doloribus at! Aliquam deleniti alias et porro recusandae, repudiandae placeatrem tempora?</p>
            </div>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>Quick Links</h2>
                <ul>
                    <li className='flex flex-col'>
                        <Link href="/">Home</Link>
                        <Link href="/courses">Course</Link>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>Follow Us</h2>
                <div>
                    <p>Fackbook</p>
                    <p>Twitter(X)</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>Contact Us</h2>
                <p>India, Bilaspur, C.G.</p>
                <p>abhinayjangde@gmail.com</p>
                <p>+91342342324</p>
            </div>
        </div>
        <p className='text-center'>@2024 Music Room. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer