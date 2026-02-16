# 🚀 Portfólio Vasco Ferreira

Portfolio pessoal desenvolvido com **PHP**, **Bootstrap 5** e **CSS3** para apresentação de projetos e competências.

## 🎯 Características

- ✨ Design moderno e responsivo
- 🎨 Animações suaves e efeitos hover
- 📱 100% mobile-friendly
- 🖼️ Seções dinâmicas (Hero, Sobre, Habilidades, Projetos, Contacto)
- 🔗 Links para redes sociais (Facebook, Instagram, LinkedIn, GitHub)
- 📧 Formulário de contacto funcional
- 🌐 Compatível com Plesk/Windows Server

## 🛠️ Tecnologias Utilizadas

- **PHP** - Backend e estrutura modular
- **Bootstrap 5** - Framework CSS responsivo
- **Font Awesome 6** - Ícones
- **CSS3** - Animações e estilos personalizados
- **JavaScript** - Interatividade e smooth scroll

## 📁 Estrutura do Projeto

```
portfolio/
├── index.php              # Página principal
├── css/
│   └── style.css         # Estilos personalizados
├── js/
│   └── script.js         # Scripts JavaScript
├── img/
│   ├── profile.jpg       # Foto de perfil
│   ├── programmer-night.jpg    # Imagem de fundo do hero
│   └── programmer-laptop.jpg   # Imagem da seção sobre
├── includes/
│   ├── header.php        # Navbar
│   ├── hero.php          # Seção hero com foto de fundo
│   ├── about.php         # Seção sobre mim
│   ├── skills.php        # Habilidades técnicas
│   ├── projects.php      # Portfólio de projetos
│   ├── contact.php       # Formulário de contacto
│   ├── footer.php        # Rodapé
│   └── contact_handler.php  # Processamento de emails
└── README.md
```

## 🚀 Como Usar

### Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/vascoferreira2001/Portf-lio.git
cd portfolio
```

2. **Inicie um servidor PHP local:**
```bash
php -S localhost:8000
```

3. **Acesse no navegador:**
```
http://localhost:8000
```

### Deploy no Plesk (Windows Server)

1. **Configure o domínio no Plesk**

2. **Clone via SSH ou upload via SFTP:**
```bash
cd C:\Inetpub\vhosts\cybercore.pt\vascoferreira.cybercore.pt
git clone https://github.com/vascoferreira2001/Portf-lio.git .
```

3. **Configure o Document Root:**
   - No Plesk: **Domains** > seu domínio > **Home**
   - **Document Root:** `/vascoferreira.cybercore.pt`
   - **Default Document:** `index.php`

4. **Acesse o site:**
```
https://vascoferreira.cybercore.pt
```

Consulte [PLESK_DEPLOYMENT.md](PLESK_DEPLOYMENT.md) para instruções detalhadas.

## 📝 Personalização

### Alterar Informações Pessoais

1. **Nome e Título:** Edite `includes/hero.php`
2. **Sobre Mim:** Edite `includes/about.php`
3. **Habilidades:** Edite `includes/skills.php`
4. **Projetos:** Edite `includes/projects.php`
5. **Email/Telefone:** Edite `includes/contact.php`

### Adicionar Suas Imagens

Substitua as imagens na pasta `img/`:
- `profile.jpg` - Foto de perfil
- `programmer-night.jpg` - Fundo do hero
- `programmer-laptop.jpg` - Imagem da seção sobre

### Atualizar Redes Sociais

Edite os links em:
- `includes/hero.php` (redes sociais no banner)
- `includes/footer.php` (redes sociais no rodapé)

## 🎨 Seções

### 🏠 Hero
Banner principal com foto de fundo, perfil e call-to-action

### 👨‍💻 Sobre Mim
Apresentação pessoal com estatísticas e imagem

### 💻 Habilidades
Cards com competências técnicas organizadas por categoria

### 🚀 Projetos
Portfolio de projetos com descrições e tecnologias utilizadas

### 📧 Contacto
Formulário funcional com validação

### 🔗 Footer
Links rápidos e redes sociais

## 📧 Configurar Email no Formulário

Edite `includes/contact_handler.php` e altere:
```php
$to = 'seu-email@example.com';
```

## 🔄 Atualizar o Site

```bash
# No servidor
cd C:\Inetpub\vhosts\cybercore.pt\vascoferreira.cybercore.pt
git pull
```

## 🎯 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 👤 Autor

**Vasco Ferreira**
- Website: [vascoferreira.cybercore.pt](https://vascoferreira.cybercore.pt)
- GitHub: [@vascoferreira2001](https://github.com/vascoferreira2001)

---

⭐ Se gostaste, dá uma estrela ao projeto!

