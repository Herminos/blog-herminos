import dynamic from 'next/dynamic';

export default function Page({ params }: { params: { blog: string } }) {
    const BlogComp = dynamic(() => import(`./blogs/${params.blog}/index.mdx`).catch(() => {return import('../../components/BlogNotFound');}))


    return (<div className="min-h-screen pt-32 w-5/6 mx-auto">
        <BlogComp />
    </div>);

}