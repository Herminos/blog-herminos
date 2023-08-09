'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function NavItem({ href, name, }: {
    href: string,
    name: string,
}) {
    const path=usePathname();
    let isCurrentPage=false;
    if(path===href){
        isCurrentPage=true;
    }
    else{
        if(href==='/blogs')
            isCurrentPage=path.startsWith(href);
    }
    return (
        isCurrentPage ?
        (<div className='text-sm md:text-lg self-center '>
            <Link id='nav' href={href}>{name}</Link>
        </div>)
            :
        (<div className='text-sm md:text-lg self-center text-gray hover:text-black dark:hover:text-white'>
            <Link href={href}>{name}</Link>
        </div>)
    )
}