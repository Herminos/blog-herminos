/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {unoptimized: true},
    experimental:{
        mdxRs:true,
    }
}

const withMDX=require('@next/mdx')()
module.exports = nextConfig
