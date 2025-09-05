/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',            // for static export
    images: {
        unoptimized: true,         // disable Next.js Image Optimization
    },
    trailingSlash: true,
    assetPrefix: '',             // no asset prefix needed for user.github.io
};

module.exports = nextConfig