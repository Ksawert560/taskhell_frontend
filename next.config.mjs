/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Włączamy eksport statyczny pod serwer Nginx
    output: 'export', 
    
    // 2. Zachowujemy Twoją konfigurację dla plików SVG
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