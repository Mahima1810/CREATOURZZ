/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'thumb.wikimedia.org' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
