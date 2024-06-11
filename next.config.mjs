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
      {
        protocol: 'https',
        hostname: 'p1.hiclipart.com',
        port: '',
        pathname:
          '/preview/887/375/732/check-mark-symbol-checkbox-violet-purple-logo-line-circle-material-property-png-clipart.jpg',
      },
    ],
  },
};

export default nextConfig;
