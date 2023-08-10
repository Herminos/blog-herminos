import Link from "next/link"

export default function Page(){
    return(
        <div className=' pt-16 flex flex-col w-5/6 mx-auto min-h-screen'>
            <h1 className='text-center text-4xl my-20 self-center bg-gradient-to-r from-sky-300 to-indigo-700 bg-clip-text text-transparent'>My Blogs</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 h-60'>
                <Blog title='My personal website!' URL='/blogs/my-website' description="The 3rd generation of my personal website is finished! " date='2023-08-09'/>
            </div>
        </div>
    )
}

function Blog({title,URL,date,description}:
    {
        title:string,
        URL:string,
        date:string,
        description:string
    }
){
    return(
        <Link href={URL} className='relative border border-white rounded-sm self-stretch flex flex-col h-auto shadow-black  shadow-lg'>
            <h3 className='col-span-1 ml-2 mt-2 mb-0 text-4xl text-light-gray'>{title}</h3>
            <p className='h-auto text-light-gray ml-2'>{description}</p>
            <p className='absolute bottom-0 right-2 text-light-gray'>{date}</p>
        </Link>       
    )

}