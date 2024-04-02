/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/notification',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  