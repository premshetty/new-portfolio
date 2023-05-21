
// These styles apply to every route in the application
"use client"
import { useEffect } from 'react';
import NavBar from '../components/common/Navbar';
import '../styles/globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};



export default function RootLayout({ children }) {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      document.addEventListener('mousemove', function (event) {
        const cursor = document.querySelector('.custom-cursor');
        cursor.style.top = event.clientY + 'px';
        cursor.style.left = event.clientX + 'px';
      });

      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      cursor.innerHTML = '<div class="custom-cursor__inner"></div>';
      document.body.appendChild(cursor);
    });


  }, [])
  return (
    <html lang="en">

      <body className='bg-gray-950 text-white h-full '>
        <NavBar />{children}</body>
    </html>
  );
}

