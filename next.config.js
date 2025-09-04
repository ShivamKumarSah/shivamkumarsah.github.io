/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',            // for static export
    basePath: isProd ? '/your-repo-name' : '', // set GitHub Pages path in prod
    images: {
        unoptimized: true,         // disable Next.js Image Optimization
    },
}

module.exports = nextConfig
