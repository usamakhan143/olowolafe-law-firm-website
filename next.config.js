/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.builder.io"],
    formats: ["image/webp", "image/avif"],
  },
  sassOptions: {
    includePaths: ["./src/styles"],
  },
};

module.exports = nextConfig;
