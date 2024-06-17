/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'git-scm.com',
        port: '',
        pathname: '/images/logos/downloads/Git-Icon-1788C.png',
      },
    ],
  },
};

export default nextConfig;
