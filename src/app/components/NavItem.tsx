'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function NavItem({ href, name, }: {
    href: string,
    name: string,
}) {
    const path=usePathname();
    const isCurrentPage = path === href;
    return (
        isCurrentPage ?
        (<div className='text-sm md:text-lg self-center text-sky-400'>
            <Link href={href}>{name}</Link>
        </div>)
            :
        (<div className='text-sm md:text-lg self-center text-gray hover:text-black dark:hover:text-white'>
            <Link href={href}>{name}</Link>
        </div>)
    )
}