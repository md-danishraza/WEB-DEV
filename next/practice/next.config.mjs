/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "www.course-api.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
