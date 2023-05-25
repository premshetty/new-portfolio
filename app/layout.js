
// These styles apply to every route in the application
import { Suspense } from 'react';
import NavBar from '../components/common/Navbar';
import '../styles/globals.css';
import { logo } from '../utils/svgs';


export const metadata = {
  title: 'Star Wars',
  description: 'powered by SWAPI',
};



export default function RootLayout({ children }) {

  return (


    <html lang="en">
      <body className='bg-gray-800 text-white h-full font-sans '>

        <div className='min-h-screen'>
          <NavBar />
          <div className='p-3 md:p-5'>

            {children}
          </div>

        </div>
      </body>

    </html>

  );
}

