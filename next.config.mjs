/** @type {import('next').NextConfig} */

const repoName = "stellar-homes";

const nextConfig = {
  output: "export",
basePath: "/stellar-homes",
assetPrefix: "/stellar-homes/",


  reactCompiler: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
