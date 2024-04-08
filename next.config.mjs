/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    images: { unoptimized: true },
    basePath: '',
    output: 'export',
    reactStrictMode: false,
};

export default nextConfig;
