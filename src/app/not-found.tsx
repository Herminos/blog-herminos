import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '404 Not Found',
    description: '404 Not Found'
}

export default function NotFound() {
    return (<div className='flex  w-full h-[100vh] align-middle justify-center -z-10 text-black dark:text-white'>
        <div className='flex flex-col justify-center gap-5'>
            <p className='self-center text-2xl'>404 / NOT FOUND</p>
            <a href="/" className='self-center text-gray hover:text-white'>Back to Home	{'\u2794'}</a>
        </div>
    </div>)
}