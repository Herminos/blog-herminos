export default function NotFound() {
    return (<div className='flex w-full h-screen -mt-32  align-middle justify-center -z-10 text-black dark:text-white'>
        <div className='flex flex-col justify-center gap-5'>
            <p className='self-center text-2xl'>404 / NOT FOUND</p>
            <a href="/blogs" className='self-center text-gray hover:text-white'>Back to Blogs {'\u2794'}</a>
        </div>
    </div>)
}