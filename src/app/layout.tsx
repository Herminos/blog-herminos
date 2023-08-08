import { Metadata } from "next"
import './globals.css';
import NavItem from "./components/NavItem";
import ContactCard from "./components/ContactCard";
import Image from "next/image";
import dino from '../../public/dino.png';
import githubSVG from '../../public/github.svg';
import xSVG from '../../public/x.svg';
import discordSVG from '../../public/discord.svg';

export const metadata: Metadata = {
    title: 'Herminos',
    description: 'Herminos is a personal website for Herminos. It is a place for him to share his thoughts and ideas with the world.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en" className='dark'>
            <body className='bg-white dark:bg-dark'>
                <div className='fixed w-full flex  justify-normal gap-5 bg-white dark:bg-dark h-16 align-middle border-b-[rgb(63,68,81)] border '>
                    <div className='mx-5 self-center rounded-full '>
                        <a href="/">
                            <Image src={dino} width={40} height={40} alt={'Herminos'} className='hover:animate-spin ease-in-out' />
                        </a>
                    </div>
                    <NavItem href='/' name='Home' />
                    <NavItem href='/blogs' name='Blogs' />
                    <NavItem href='/tools-software' name='Tools/Software' />
                    <NavItem href='/techpoints' name='TechPoints' />
                    <NavItem href='/about' name='About' />
                </div>

                {children}

                <div className='w-full h-24 mt-10 flex justify-center'>
                    <ContactCard URL='https://github.com/Herminos/' ImageResource={githubSVG} />
                    <ContactCard URL='https://x.com/herminos666/' ImageResource={xSVG} />
                    <ContactCard URL='https://discord.gg/WZch7uUW' ImageResource={discordSVG} />
                </div>
            </body>
            
        </html>
    )
}
