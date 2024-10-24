import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <div className="flex justify-between px-4 shadow-2xl bg-gray-500">
      <div className='flex gap-10'>
      <div className='cursor-pointer'><Link href="/">HOME</Link></div>
      <div className='cursor-pointer'><Link href=" https://wa.me/qr/FWX3BWWPABVRG1 ">CONTACT</Link></div>
      <div className='cursor-pointer'><Link href="https://www.facebook.com/share/EKwJ9SZ7VMLdxUYz/">FACEBOOK</Link></div>
      <div className='cursor-pointer'><Link href="https://www.tiktok.com/@rivayatiandaz1?is_from_webapp=1&sender_device=pc">TIKTOK</Link></div>
      <div className='cursor-pointer'><Link href="https://www.youtube.com/channel/UCwBn0kcpXfQ_g_i151YvjKw">YOUTUBE</Link></div>
      <div className='cursor-pointer'><Link href="/about">ABOUT</Link></div>
      </div>
    </div>
    </div>
  )
}

export default Header
