/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['api.dicebear.com', 'api.multiavatar.com', 'ui-avatars.com'],
    },
};

module.exports = nextConfig;
