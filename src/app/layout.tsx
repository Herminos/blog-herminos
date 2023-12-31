import { Metadata } from "next"
import './globals.css';
import NavItem from "./components/NavItem";
import ContactCard from "./components/ContactCard";
import Image from "next/image";
import dino from '../../public/dino.png';
import githubSVG from '../../public/github.svg';
import xSVG from '../../public/x.svg';
import discordSVG from '../../public/discord.svg';
import mailSVG from '../../public/mail.svg'
import Link from "next/link";

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
            <body className='bg-white dark:bg-dark min-h-[100vh] relative'>
                <div className='fixed w-full flex  justify-normal gap-5 bg-white dark:bg-dark h-16 align-middle border-b-[rgb(63,68,81)] border '>
                    <div className='mx-5 self-center rounded-full '>
                        <a href="/">
                            <Image src={dino} width={40} height={40} alt={'Herminos'} className='hover:animate-spin ease-in-out' />
                        </a>
                    </div>
                    <NavItem href='/' name='Home' />
                    <NavItem href='/blogs' name='Blogs' />
                    <NavItem href='/tools-softwares' name='Tools/Software' />
                    <NavItem href='/techpoints' name='TechPoints' />
                </div>

                {children}


                <div className='w-full h-auto mt-10 absolute b-0'>
                    <div className='w-full h-12 mt-10 flex justify-center'>
                        <ContactCard URL='https://github.com/Herminos/' ImageResource={githubSVG} />
                        <ContactCard URL='https://x.com/herminos666/' ImageResource={xSVG} />
                        <ContactCard URL='https://discord.gg/WZch7uUW' ImageResource={discordSVG} />
                        <ContactCard URL='mailto:herminos@163.com' ImageResource={mailSVG} />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <p className='align-middle text-center text-light-gray mb-1'>
                            OpenPGP E2E Encryption? Public key <a href='#' download={'../../public/public.asc'} className='hover:text-sky-500 underline'>here</a>
                        </p>
                        <p className='align-middle text-center text-light-gray mb-1'>
                        Fingerprint: 5941 C68F BCA0 EDB8 3E94 476F B588 D7DE B8A1 78EC
                        </p>
                        <p className='align-middle text-center text-light-gray mb-1'>
                            You can also find it on <a href='https://keys.openpgp.org/' className='hover:text-sky-500 underline'>the OpenPGP key server</a>
                        </p>
                        <p className='align-middle text-center text-light-gray mb-3'>
                            Licensed under CC BY-SA
                        </p>
                    </div>
                </div>
            </body>
            
        </html>
    )
}
