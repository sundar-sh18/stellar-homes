/** @type {import('next').NextConfig} */
const repoName = "stellar-homes";
const nextConfig = {
  
  output: "export", // REQUIRED
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },

  
  reactCompiler: true,
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
  
  ]},
};

export default nextConfig;
