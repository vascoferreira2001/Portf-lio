import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Modo standalone para Plesk/Windows
  output: 'standalone',
  
  // Otimizações para produção
  reactStrictMode: true,
  
  // Compressão de assets
  compress: true,
  
  // Geração de sitemap (para SEO)
  generateEtags: true,
  
  // Headers de segurança
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Configuração para Plesk/Windows
  experimental: {},
};

export default nextConfig;
