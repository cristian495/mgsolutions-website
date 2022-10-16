/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: [
      "firebasestorage.googleapis.com",
      "images.pexels.com",
      "swiperjs.com",
    ],
  },
};

module.exports = nextConfig;
