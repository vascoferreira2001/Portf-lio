# GUIA RÁPIDO - Deploy Plesk Windows Server

**Domínio:** vascoferreira.cybercore.pt  
**Servidor:** Windows Server 2022 + Plesk

## 🎯 5 Passos Simples

### Passo 1️⃣: Preparar Ficheiros (no seu PC)

```bash
cd portfolio
npm run build
```

Será criada uma pasta `.next/` com o site compilado.

### Passo 2️⃣: Baixar FileZilla (se não tiver)

https://filezilla-project.org/download.php

### Passo 3️⃣: Conectar ao Servidor

1. Abra FileZilla
2. **File** > **Site Manager**
3. Clique "New Site"
4. Configure:
   - **Protocol:** SFTP (ou FTP)
   - **Host:** IP do seu servidor ou domínio
   - **Port:** 22 (SFTP) ou 21 (FTP)
   - **Username:** seu usuário FTP/Plesk
   - **Password:** sua senha
5. Clique "Connect"

### Passo 4️⃣: Upload dos Ficheiros

1. À esquerda (seu PC), navegue para: `C:\Users\seu-usuario\github\portfolio`
2. À direita (servidor), navegue para: `/home/seu-dominio/public_html/portfolio`
3. Selecione as pastas/ficheiros:
   - `.next/` (toda a pasta)
   - `public/` (toda a pasta)
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`
   - `.env.production`

4. Arraste para a direita (ou F5)

### Passo 5️⃣: Instalar Dependências no Servidor

1. Abra Putty ou terminal SSH:
   ```
   SSH seu-usuario@seu-dominio
   cd /home/seu-dominio/public_html/portfolio
   npm install --production
   ```

2. Vá para Plesk:
   - **Domains** > seu domínio > **Node.js**
   - Clique "Restart"
   - Aguarde até ver "Running"

3. Aceda a: **https://vascoferreira.cybercore.pt** 🎉

## ⚠️ Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Porta já em uso | Mude a porta no Plesk (8080, 8081, etc) |
| Módulo não encontrado | Execute `npm install --production` |
| 404 em todas as páginas | Reinicie a app no Plesk |
| CSS/JS não carrega | Verifique se a pasta `public/` foi enviada |

## 📞 Dúvidas Frequentes

**P: Qual a diferença entre FTP e SFTP?**  
R: SFTP é mais seguro (usa SSH). Use SFTP se o servidor suportar.

**P: Posso usar FileZilla ou outra ferramenta?**  
R: Sim! WinSCP, Transmit, Cyberduck também funcionam.

**P: Como atualizo o site depois?**  
R: Faça `npm run build` localmente, envie a pasta `.next/` novamente e reinicie.

**P: Node.js está instalado no meu Plesk?**  
R: Vá em Plesk > **Tools & Settings** > **Node.js** para verificar.

---

Para mais detalhes, veja: **PLESK_DEPLOYMENT.md**
