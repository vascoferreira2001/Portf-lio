# 🚀 Deploy no Plesk (Windows Server 2022) - Guia Completo

**Domínio:** vascoferreira.cybercore.pt  
**Servidor:** Windows Server 2022 + Plesk

## 📋 Pré-requisitos

- [ ] Plesk instalado e funcionando
- [ ] Node.js instalado no servidor (versão 18+)
- [ ] npm ou yarn instalado
- [ ] Acesso FTP/SFTP ao servidor
- [ ] Domínio configurado no Plesk

## 🔍 Verificar Instalações no Plesk

### 1. Verificar Node.js no Plesk

1. Aceda ao painel do Plesk: `https://seu-servidor:8443`
2. Vá para **Tools & Settings** > **Node.js**
3. Verifique a versão instalada (deve ser 18+)
4. Se não estiver instalado:
   - **Extensions** > Procure "Node.js"
   - Clique "Install"

### 2. Acesso SFTP

1. No Plesk, vá para **Domains**
2. Selecione seu domínio `vascoferreira.cybercore.pt`
3. Copie as credenciais SFTP:
   - **Servidor:** (seu IP ou domínio)
   - **Utilizador:** (nome do domínio ou custom)
   - **Senha:** (senha do FTP)
   - **Porta:** 22 (SFTP) ou 21 (FTP)

## 📦 Preparar a Aplicação

### 1. Build para Produção

```bash
# No seu computador
cd /Users/vascoferreira/github/portfolio

# Gerar build otimizado
npm run build

# Verificar que tudo está OK
npm run start
```

Você verá: `> ready started server on 0.0.0.0:3000`

### 2. Ficheiros Necessários

Para fazer upload, você precisa de:

```
portfolio/
├── .next/              # Gerado pelo build
├── node_modules/       # OPCIONAL - pode reinstalar no servidor
├── public/             # Assets estáticos
├── package.json        # Dependências
├── package-lock.json   # Versões exatas
├── next.config.ts      # Configuração
├── tsconfig.json       # TypeScript config
├── tailwind.config.ts  # Tailwind config
├── postcss.config.mjs  # PostCSS config
└── .env.production     # Variáveis de ambiente
```

**Nota:** Pode deixar `node_modules` fora do upload e reinstalar no servidor com `npm install --production`

## 🔗 Upload via SFTP (Recomendado)

### Opção A: FileZilla (GUI)

1. **Download:** https://filezilla-project.org/
2. **Configuração:**
   - Host: `seu-ip-ou-dominio`
   - Usuario: seu SFTP user
   - Senha: sua senha
   - Porta: 22
3. **Estrutura:**
   ```
   /home/seu-dominio/public_html/
   └── portfolio/
       ├── .next/
       ├── public/
       ├── package.json
       ├── next.config.ts
       └── ...
   ```
4. **Enviar:** Arraste os ficheiros da esquerda para a direita

### Opção B: Terminal (Mais rápido)

```bash
# Aceder via SSH
ssh seu-usuario@seu-dominio

# Ou usar SCP para enviar ficheiros
scp -r portfolio/ seu-usuario@seu-dominio:/home/seu-dominio/public_html/

# Depois conectar e instalar dependências
ssh seu-usuario@seu-dominio
cd /home/seu-dominio/public_html/portfolio
npm install --production
```

## ⚙️ Configurar no Plesk

### 1. Criar Aplicação Node.js

1. No Plesk, aceda a **Domains** > seu domínio
2. Vá a **Node.js**
3. Clique "Create Application"
4. Configure:
   - **Application:** `portfolio` ou `default`
   - **Node.js version:** 18 LTS ou superior
   - **Document root:** `/portfolio` ou `/public_html/portfolio`
   - **Application root:** `/portfolio` ou `/public_html/portfolio`
   - **Startup file:** `npm start` ou `node .next/standalone/server.js`
   - **Port:** 8080 (ou outro livre)

### 2. Variáveis de Ambiente

1. Na mesma página, clique **Environment Variables**
2. Adicione:
   ```
   NODE_ENV=production
   ```
3. Se tiver API keys ou secrets, adicione aqui

### 3. Reiniciar Aplicação

1. Clique "Restart"
2. Aguarde até ver "Running"

## 🔐 Configurar HTTPS/SSL

1. No Plesk, vá para seu domínio > **SSL/TLS**
2. Clique "Let's Encrypt" se disponível
3. Selecione o domínio `vascoferreira.cybercore.pt`
4. Clique "Install"

## ✅ Testar o Deploy

### 1. Aceder ao Site

```
https://vascoferreira.cybercore.pt
```

### 2. Verificar Logs

No Plesk:
1. **Domains** > seu domínio > **Node.js**
2. Scroll até **Error Log** e **Access Log**
3. Verifique se há erros

### 3. Teste de Funcionalidades

- [ ] Navbar carrega corretamente
- [ ] Seções carregam com scroll
- [ ] Animações funcionam
- [ ] Formulário de contacto valida
- [ ] Responsividade funciona em mobile

## 🔄 Atualizar o Código (depois)

### Opção 1: Reenviar via SFTP
```
1. Fazer alterações localmente
2. npm run build
3. Enviar apenas a pasta .next/
4. Reiniciar aplicação no Plesk
```

### Opção 2: Git + SSH
```bash
# No servidor
cd /home/seu-dominio/public_html/portfolio
git pull origin main
npm install --production
npm run build
# Reiniciar no Plesk
```

## 🛠️ Troubleshooting

### Erro: "Port already in use"
- Change port in Plesk configuration (use 8080, 8081, etc.)

### Erro: "Cannot find module"
- Execute no servidor: `npm install --production`
- Reinicie a aplicação

### Erro: 404 em sub-rotas
- Certificar-se que `next.config.ts` tem configuração correta
- Reiniciar aplicação

### Erro: CSS/JS não carrega
- Verificar `public/` folder está no upload
- Limpar cache do navegador (Ctrl+Shift+Delete)

## 📊 Monitorar Performance

1. No Plesk: **Domains** > seu domínio > **Node.js**
2. Veja:
   - **CPU Usage**
   - **Memory Usage**
   - **Status** (deve estar "Running")

Se usar muita memória, reinicie a app regularmente:
- Cron job no Plesk para restart automático se necessário

## 📝 Checklist Final

- [ ] Node.js instalado no Plesk (versão 18+)
- [ ] Ficheiros do portfolio enviados via SFTP
- [ ] `npm install --production` executado no servidor
- [ ] Aplicação Node.js criada no Plesk
- [ ] Variáveis de ambiente configuradas
- [ ] SSL/HTTPS ativado
- [ ] Site acessível em https://vascoferreira.cybercore.pt
- [ ] Logs verificados (sem erros)
- [ ] Teste de mobile responsividade

## 🆘 Suporte

Se encontrar problemas:
1. Verifique os logs no Plesk
2. Teste localmente: `npm run dev`
3. Verifique a versão do Node.js no servidor
4. Considere contactar suporte do seu provider

---

**Última atualização:** Fevereiro de 2026
