#!/bin/bash
# Deploy Script para Plesk + Windows Server
# Use este script para fazer deploy automático

set -e

echo "🚀 Iniciando Deploy para Plesk..."
echo "================================"

# 1. Build
echo "📦 Fazendo build da aplicação..."
npm run build

# 2. Criar arquivo de configuração
echo "⚙️  Criando arquivo de configuração..."
cat > .env.production << EOF
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://vascoferreira.cybercore.pt
EOF

# 3. Preparar ficheiros para upload
echo "📁 Preparando ficheiros para upload..."

# Criar pasta de deploy
mkdir -p deployment
cd deployment

# Copiar apenas o necessário
cp -r ../.next .
cp -r ../public .
cp ../package.json .
cp ../package-lock.json .
cp ../next.config.ts .
cp ../tsconfig.json .
cp ../tailwind.config.ts .
cp ../postcss.config.mjs .
cp ../.env.production .

# 4. Instruções para SFTP
echo ""
echo "✅ Pronto para deploy!"
echo ""
echo "📋 Próximos passos:"
echo "1. Abra FileZilla (FTP/SFTP)"
echo "2. Conecte ao seu servidor Plesk"
echo "3. Navegue até: /home/seu-dominio/public_html/portfolio"
echo "4. Envie os ficheiros da pasta 'deployment/'"
echo "5. No servidor, execute: npm install --production"
echo "6. No Plesk, reinicie a aplicação Node.js"
echo ""
echo "📍 IMPORTANT: Substitua 'seu-dominio' pelo seu domínio real"
echo ""
