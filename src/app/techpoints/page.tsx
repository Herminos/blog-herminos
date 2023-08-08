import Image from "next/image"

export default function Page() {
    return(
        <div className=' pt-16 flex flex-col'>
            <h1 className='text-center text-4xl my-20 self-center bg-gradient-to-r from-[#fff720] to-[#3cd500] bg-clip-text text-transparent'>My TechPoints</h1>
            <div className='w-5/6 mx-auto flex flex-col'>
                <div className='self-center'>

                </div>
            </div>
        </div>
    )
}

function TechPoint({config}:{config:any}){
    return(
        <div>
            <Image src={config.image} width={100} height={100} alt={config.name} />
        </div>
    )
}