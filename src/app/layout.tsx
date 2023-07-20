import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Inter({subsets: ['latin']})
const title = 'Project Pineapple';
const description = 'This the Tech Journey template site';
const links = [
  {title: 'Pokemon', href: '/pokemon'},
  {title: 'Rick and Morty', href: '/rick-and-morty'}
];
const SocialLinks = {
  twitter: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89LzwsIV8jZgGP6ofOnCcwdTqHz78wrqmnQ&usqp=CAU',
  github: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPAyWwgGLwA9EqVJ_6pjI62N8ArvyIl1BwA&usqp=CAU',
  instagram: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkl0V-WP5x-jFl5tCLePLrlxtRjf-cJhNLYg&usqp=CAU',
  email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WEcapr-15Iug7_CASbCJ6CgTpCDegiwsYg&usqp=CAU'
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: 'images/newfavicon.png',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'h-full'}>
      <body className={`${font.className} flex flex-col min-h-screen`}>
      <NavBarContainer title={title} links={links}>
        <main className={'flex-1 max-w-6xl py-8 md:py-16 px-4 md:px-0'}>{children}</main>
      </NavBarContainer>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}
