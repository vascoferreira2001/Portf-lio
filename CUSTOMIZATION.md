# 🎯 Próximos Passos - Personalização do Portfólio

Este é um guia para personalizar seu novo portfólio moderno com suas informações reais.

## 📝 1. Atualize suas Informações Pessoais

### Hero Section (Seção Inicial)
**Arquivo:** `src/components/Hero.tsx`

```typescript
// Altere:
<h1>...Vasco Ferreira...</h1>
// Para seu nome

<p>...Desenvolvedor Web & IT | Full Stack Developer...</p>
// Para sua profissão

<p>...Crio soluções web modernas...</p>
// Para sua descrição
```

### About Section (Sobre Mim)
**Arquivo:** `src/components/About.tsx`

- Altere a descrição biográfica
- Atualize os números (projetos, anos de experiência, etc.)
- Adicione sua história profissional

### Projects Section (Projetos)
**Arquivo:** `src/components/Projects.tsx`

Substitua os projetos de exemplo pelos seus reais:

```typescript
const projects = [
  {
    id: 1,
    title: 'Seu Projeto 1',
    description: 'Descrição do projeto...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    image: '🎯', // Use um emoji relevante
    link: 'https://seu-projeto.com', // Link do projeto
  },
  // ... adicione mais projetos
];
```

### Skills Section (Competências)
**Arquivo:** `src/components/Skills.tsx`

Atualize as tecnologias e níveis de proficiência:

```typescript
const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      // ... adicione suas skills
    ],
  },
  // ... adicione mais categorias
];
```

### Contact Section (Contacto)
**Arquivo:** `src/components/Contact.tsx`

Atualize seus dados de contacto:

```typescript
const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'seu.email@example.com',
    href: 'mailto:seu.email@example.com',
  },
  // ... adicione outros contactos
];
```

### Footer
**Arquivo:** `src/components/Footer.tsx`

- Links sociais
- Informações da empresa/pessoa
- Links rápidos

## 🎨 2. Personalize o Design

### Cores
Para mudar o esquema de cores (atualmente azul/roxo):

1. Edite `tailwind.config.ts`:
```typescript
theme: {
  colors: {
    // Altere as cores base aqui
  }
}
```

2. Ou substitua as classes nos componentes:
   - `from-blue-400` → `from-green-400`
   - `to-purple-500` → `to-blue-500`
   - etc.

### Fonte
Edite `src/app/layout.tsx` para alterar as fontes do Next.js Font.

## 📱 3. Assets e Mídia

### Logo/Avatar
- Adicione sua foto ou avatar em `public/` 
- Substitua o emoji na Hero section

### Favicon
- Edite ou substitua `public/favicon.ico` com seu favicon

## 🔗 4. Links Importantes

### Atualize os links em:
- **Navbar.tsx** - Links de navegação
- **Contact.tsx** - Email, telefone, redes sociais
- **Footer.tsx** - Links sociais

## ⚙️ 5. SEO e Metadados

**Arquivo:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Seu Nome - Sua Profissão",
  description: "Descrição curta do seu portfólio",
  keywords: ["palavra-chave1", "palavra-chave2"],
};
```

## 🚀 6. Deploy no Vercel

1. **Conecte seu repositório:** Acesse [vercel.com](https://vercel.com)
2. **Manual de importação:** Clique em "New Project"
3. **Selecione o repositório:** `vascoferreira2001/Portf-lio`
4. **Deploy automático:** Vercel vai fazer deploy automaticamente a cada push

## 🧪 7. Testar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Acessar em http://localhost:3000
```

## 📧 8. Funcionalidade de Email (Opcional)

Para ativar o envio de emails no formulário de contacto:

1. Configure um serviço como Resend, SendGrid ou Mailgun
2. Defina as variáveis de ambiente em `.env.local`
3. Crie um endpoint API em `src/app/api/contact/route.ts`

**Exemplo com Resend:**
```bash
npm install resend
```

## 📊 9. Analytics (Opcional)

Para rastrear visitantes, adicione:
- Google Analytics
- Vercel Analytics
- Plausible Analytics

## ✨ Dicas Finais

- Mantenha o conteúdo atualizado
- Teste em diferentes browsers e dispositivos
- Peça feedback sobre o design
- Comunique regularmente suas conquistas
- Atualize o portfólio com novos projetos

---

**Dúvidas?** Leia a documentação do Next.js: [nextjs.org/docs](https://nextjs.org/docs)

**Última atualização:** Fevereiro de 2026
