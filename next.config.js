/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    reactStrictMode: true,
    swcMinify: true,
    
    webpack: (config, { isServer }) => {
        if (!isServer) {
        config.resolve.fallback = {
            fs: false,
        };
        }
    
        return config;
    },
};

module.exports = nextConfig;