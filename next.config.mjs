/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.(js|ts)x?$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
  export default nextConfig;