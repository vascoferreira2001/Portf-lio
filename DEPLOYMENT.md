# 🚀 Guia de Deploy - Portfólio Vasco Ferreira

Este guia te ajudará a fazer deploy do seu portfólio em diferentes plataformas.

## 🎯 Deploy Recomendado: Vercel

Vercel é a plataforma ideal para Next.js. Deploy é automático a cada push no GitHub!

### Passo a Passo

1. **Aceda ao Vercel**
   - Visite [vercel.com](https://vercel.com)
   - Clique em "Sign Up"
   - Faça login com sua conta GitHub

2. **Importe o Projeto**
   - Clique em "New Project"
   - Procure e selecione o repositório `Portf-lio`
   - Clique em "Import"

3. **Configuração**
   - **Framework Preset:** Selecione "Next.js"
   - **Root Directory:** deixe como padrão
   - **Environment Variables:** deixe em branco (ou adicione conforme necessário)
   - Clique em "Deploy"

4. **Pronto!**
   - Seu site estará disponível em `seu-nome.vercel.app`
   - Será atualizado automaticamente a cada push

### Domain Personalizado

Para usar seu próprio domínio:

1. No painel do Vercel, aceda a **Settings** > **Domains**
2. Clique "Add"
3. Digite seu domínio (ex: vascoferreira.dev)
4. Configure os DNS records conforme indicado
5. Vercel vai validar e ativar automaticamente

## 📌 Alternativas

### Netlify

1. Aceda a [netlify.com](https://netlify.com)
2. Clique "Add new site" > "Import an existing project"
3. Selecione GitHub e autorize
4. Escolha o repositório `Portf-lio`
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next` (ou `out`)
6. Deploy

### GitHub Pages (Mais complexo)

Para usar GitHub Pages, é necessário exportar como estático:

```bash
# No next.config.ts
export default {
  output: 'export',
  // ... outras configs
}

# Build
npm run build

# Deploy
npm run deploy (configurar com gh-pages)
```

### Docker

Para usar em seu próprio servidor:

1. Crie um `Dockerfile`:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

2. Build e run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🔐 Variáveis de Ambiente

Se usar features que precisem de tokens/chaves:

1. Crie arquivo `.env.production`:
```
NEXT_PUBLIC_API_KEY=sua-chave-aqui
```

2. No Vercel:
   - Settings > Environment Variables
   - Adicione as chaves necessárias
   - Indique para qual environment (Production/Preview/Development)

## ✅ Checklist antes de Deploy

- [ ] Atualizou `Hero.tsx` com seu nome
- [ ] Adicionou seus projetos em `Projects.tsx`
- [ ] Atualizou `Contact.tsx` com seus emails/telefone
- [ ] Alterou links sociais em `Footer.tsx`
- [ ] Testou localmente: `npm run dev`
- [ ] Build passou sem erros: `npm run build`
- [ ] Fez push para GitHub: `git push`

## 🔗 URLs Úteis

- **Vercel:** https://vercel.com
- **Netlify:** https://netlify.com
- **GitHub Pages:** https://pages.github.com
- **Next.js Docs:** https://nextjs.org/docs

## 💡 Dicas

- Use um domínio personalizado para parecer mais profissional
- Configure um email customizado (ex: hello@seu-dominio.com)
- Ative HTTPS (feito automaticamente por Vercel)
- Configure analytics para rastrear visitantes

---

**Precisa de ajuda?** Contacte o suporte do Vercel ou consulte a documentação.

