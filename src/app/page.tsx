import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import localFont from 'next/font/local'
import dino from '../../public/dino.png';

const ApaluFont = localFont({
    src: '../../public/Apalu.otf',
    display: 'swap',
  })

export default function Page(){

    return(
    <div className='w-full h-full bottom-0 align-middle -z-10 text-black dark:text-light-gray'>
        <div className='w-full h-screen flex flex-col align-middle'>
            <h1 className={ApaluFont.className+' text-6xl md:text-9xl font-bold self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight mt-36'}>{'\u00a0Hi There!\u00a0'}</h1>
            <h2 className='text-2xl md:text-4xl font-bold text-center self-center bg-gradient-to-r from-yellow-300 via-green-500 to-sky-500 bg-clip-text text-transparent mb-10'>
                {'I\'m Herminos'}
            </h2>
            <h2 className='text-2xl md:text-4xl font-bold self-center text-center bg-gradient-to-r from-yellow-300 via-green-500 to-sky-500 bg-clip-text text-transparent'>
                {'Welcome to my website'}
            </h2>
            <div className='relative w-10 self-center rounded-full mt-36'>
                <ChevronDownIcon/>
            </div>
        </div>
        <div className='w-5/6 m-auto '>
            <p className='w-full text-bg md:text-2xl text-lightgray'>
                Thank you for coming to my site! I am an ordinary high school student who is not hosting any open 
                source project, not famous and not a genius. I am interested in computer science and natural science.
                I am also a fan of open source software and I am trying to contribute to the open source community.<br/><br/>
                I majored in Backend, I love to use C/C++ and even Assembly (Am I mad? ) to write some stuff. I am obsessed with 
                some low-level stuff such as Operating System, Linux kernel and Intel IA-32/64 architecture. I am not very keen on Java or Python, but I did know some basic stuff about them.
                My homemade server is a Raspberry Pi 4B with 8GB RAM and 64GB SD card. I am using it to host my Minecraft server.
                <br/><br/>
                I am also interested in Frontend, My technology stack is React. I like to use Next.js and TailwindCSS to build my Web Application or static site (I HATE PURE CSS).
                Besides, I know a bit of other framework like Vue or Svelte but not very familiar with them.<br/><br/>
                I am also interested in Natural Science, especially Physics. I am a fan of Erwin Schrödinger. In that case, I also know a bit of Quantum Computing and its Python framework
                Qiskit.
            </p>
        </div>

    </div>
    

    )
}

function ChevronDownIcon() {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                    </svg>
                );
            }
  