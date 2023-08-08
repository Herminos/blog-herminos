import Image from "next/image"
import {StaticImageData} from "next/image"
import Link from "next/link"

export default function ContactCard({URL,ImageResource}:
    {
        URL:string,
        ImageResource:StaticImageData
    }
    ) {
        return(
            <div className='self-center rounded-full mx-2'>
                <Link href={URL} className='z-100'>
                    <Image src={ImageResource} width={25} height={25} alt={'Herminos'} className='bg-dark' />
                </Link>
            </div>
        )

    
}