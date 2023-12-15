import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import  Link from 'next/link'
import PathName from './pathName'

// const inter = Inter({ subsets: ['latin'] })
// const inter=Inter({
//   weight:['400'],
//   subsets:['latin'],
//   display:'swap',
//   style:'normal'
// })

export const metadata: Metadata = {
  title: 'Paddy',
  description: 'chat, call and make videos with your friends - your paddy',
}

export default function RootLayout(props: {
  chats:React.ReactNode,
  children: React.ReactNode,
  video:React.ReactNode
}) {
  
 console.log(props.chats, props.video)

  return (
    <html lang="en">
      <body className={`h-screen flex flex-col `}>
      <header className='flex justify-between px-2 py-4'>
        <div className="brand">
          <p className='text-lg font-bold '>Paddy</p>
        </div>
        <div className="path">
        <PathName />  
        </div>
        <div className="flex gap-2 justify-end">
          <p className="search">search</p>
          <p className="user">user</p>

        </div>
      </header>
      <main className="grow">
        {props.children}
        {props.chats}
        {props.video}
      </main>
      <footer className='flex justify-between px-4 pb-4'>
            <Link href='/chats'>chats</Link>
            <Link href='/calls'>calls</Link>
            <Link href='/video'>video</Link>
        </footer>
        </body>
    </html>
  )
}

// function getServerSideProps(req){
//   console.log(req)
//   console.log(typeof req)

//   return true
// }