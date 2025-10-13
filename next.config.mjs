/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.elfsight.com',
      },
      {
        protocol: 'https',
        hostname: 'elfsightcdn.com',
      },
    ],
  },
};

export default nextConfig;
