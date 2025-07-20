import './globals.css'

import React from 'react'
import Navbar from '@/components/Navbar';
import {Inter,Roboto} from "next/font/google";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
};

const roboto = Roboto({subsets:['latin'],weight:['300']});

function layout({children}:{children:React.ReactNode}) {
  return (
    <html lang='en' className={roboto.className}>
      <body>
      <Navbar />
      <main className='max-w-3xl mx-auto py-10'>
        {children}

      </main>
      </body>
    </html>
  )
}

export default layout;