# Guia de Identidade Visual & Design System: Estúdio RM Academy

Este documento reúne todas as especificações técnicas de design do **Estúdio RM Academy** (CSS, variáveis Tailwind, fontes, espaçamentos e estilos de componentes). Use este guia como referência absoluta para replicar a mesma identidade visual no site **Estúdio RM** ou em outros projetos da marca.

---

## 1. Conceito Visual

A identidade do **Estúdio RM Academy** foi construída sobre os pilares da **sofisticação**, **delicadeza** e **profissionalismo**. O design utiliza tons quentes e terrosos (alinhados ao nicho de fotografia de gestantes e newborn), combinando um forte contraste tipográfico entre títulos serifados clássicos e textos modernos de alta legibilidade.

---

## 2. Paleta de Cores (Color Palette)

A paleta de cores utiliza o formato moderno **OKLCH** no CSS para melhor fidelidade de cor no navegador, mas está documentada abaixo com seus equivalentes em **HEX** para fácil replicação em ferramentas como Figma, Photoshop ou outras plataformas de desenvolvimento (como WordPress/Elementor).

### Cores Principais

| Nome da Variável | Cor (Hex) | OKLCH | Função / Aplicação |
| :--- | :--- | :--- | :--- |
| `--background` | `#F2F2F2` | `oklch(0.962 0 0)` | Fundo principal do site (off-white acolhedor, menos agressivo que o branco puro). |
| `--foreground` | `#40210F` | `oklch(0.265 0.065 43.5)` | Cor principal dos textos (marrom escuro terroso, oferece leitura macia e elegante). |
| `--primary` | `#D97E8E` | `oklch(0.67 0.1 10.5)` | Rosa Queimado / Dusty Rose. Cor de destaque primária para botões de CTA, badges e links importantes. |
| `--primary-foreground` | `#FFFFFF` | `oklch(1 0 0)` | Cor do texto por cima dos elementos com fundo `--primary`. |
| `--accent` | `#A66658` | `oklch(0.59 0.09 24)` | Terracota / Cobre. Tom secundário de destaque, usado para detalhes, ênfases em itálico e badges secundárias. |
| `--accent-foreground` | `#FFFFFF` | `oklch(1 0 0)` | Cor do texto por cima dos elementos com fundo `--accent`. |
| `--card` | `#FFFFFF` | `oklch(1 0 0)` | Fundo dos cards e contêineres destacados (branco puro, gerando contraste sutil sobre o fundo `#F2F2F2`). |
| `--card-foreground` | `#40210F` | `oklch(0.265 0.065 43.5)` | Texto em cima de cards. |

### Cores de Apoio e Neutros

| Nome da Variável | Cor (Hex) | OKLCH | Função / Aplicação |
| :--- | :--- | :--- | :--- |
| `--muted` | `#ECE7E3` | `oklch(0.93 0.01 43)` | Fundos secundários suaves ou campos desabilitados. |
| `--muted-foreground` | `#82766F` | `oklch(0.5 0.04 43)` | Cor para textos de apoio, subtítulos secundários e parágrafos secundários. |
| `--border` / `--input` | `#E0DCD9` | `oklch(0.88 0.01 43)` | Linhas de divisão, bordas de cards e inputs. |
| `--ring` | `#D97E8E` | `oklch(0.67 0.1 10.5)` | Cor de foco para elementos de navegação (mesma do primary). |

---

## 3. Tipografia (Typography)

A tipografia do projeto baseia-se em duas fontes do Google Fonts, criando um contraste sofisticado entre títulos clássicos e textos de leitura rápida.

### Fontes Utilizadas

1. **Serifada (Títulos): `Cormorant Garamond`**
   - **Estilo:** Clássica, elegante, com serifa fina.
   - **Pesos (Weights):** `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-Bold), `700` (Bold).
   - **Onde Usar:** Logotipos, cabeçalhos principais (`h1`, `h2`), títulos de seções e frases de efeito (em itálico).
   - **Configuração no CSS:** `--font-serif`

2. **Sans-serif (Texto Base): `Lato`**
   - **Estilo:** Geométrica, moderna e de excelente leitura em telas menores.
   - **Pesos (Weights):** `300` (Light), `400` (Regular), `700` (Bold).
   - **Onde Usar:** Parágrafos, listas de benefícios, textos de botões, formulários e rótulos de badges.
   - **Configuração no CSS:** `--font-sans`

### Hierarquia Tipográfica (Classes de Referência)

* **Título Principal (Hero H1):**
  - **Classes:** `font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground`
  - **Destaque Itálico:** Envolva o termo principal em `<span class="italic text-accent font-medium">termo</span>` para criar o contraste de assinatura visual.
* **Título de Seção (H2):**
  - **Classes:** `font-serif text-3xl md:text-5xl font-light text-foreground`
* **Título de Card ou Item (H3):**
  - **Classes:** `font-serif text-2xl md:text-3xl font-medium text-foreground`
* **Subtítulo / Pré-título de Seção:**
  - **Classes:** `font-sans text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase text-accent font-medium`
* **Texto de Apoio / Parágrafo:**
  - **Classes:** `font-sans text-base md:text-lg text-muted-foreground font-light leading-relaxed`
* **Texto do Botão:**
  - **Classes:** `font-sans font-semibold text-sm md:text-base tracking-wide`

---

## 4. Espaçamentos & Layout (Grid & Spacing)

O layout do site prioriza o **respiro visual** (espaço em branco), transmitindo uma sensação de luxo e facilidade de navegação.

### Largura de Contêineres (Max-Width)
* **Geral/Vitrine:** `max-w-6xl mx-auto px-6 md:px-12` (Usado para grids de produtos e seções amplas).
* **Foco/Leitura:** `max-w-4xl mx-auto px-6` (Hero text, seções de copy focadas).
* **Faq/Formulários:** `max-w-3xl mx-auto px-6` (Facilita a leitura de textos corridos centralizados).

### Espaçamento Vertical (Padding)
* **Seção Padrão:** `py-12 md:py-20` (Equivale a `48px` em mobile e `80px` em desktop).
* **Seções Hero ou de Grande Impacto:** `py-20 md:py-28` (Equivale a `80px` em mobile e `112px` em desktop).
* **Espaçamento entre Título e Conteúdo:** `mb-12` a `mb-20` (Equivale a `48px` a `80px`).

### Grids e Alinhamentos
* **Grid de 2 Colunas (Ex: Vitrine):** `grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch` (Garante que os cards tenham a mesma altura usando `items-stretch`).
* **Lista de Benefícios:** `space-y-3` ou `space-y-6` para espaçar linhas de texto de forma consistente.

---

## 5. Estilos de Componentes (Design Tokens)

Aqui estão as regras visuais estruturais para recriar os botões, cards, divisores e efeitos do site original.

### Arredondamento de Bordas (Border Radius)
- **Cards Principais:** `rounded-3xl` (`24px`).
- **Botões e Badges de Categoria:** `rounded-full` (`9999px`) ou `rounded-2xl` (`16px`).
- **Inputs de Formulário:** `rounded-xl` (`12px`) ou `rounded-2xl` (`16px`).

### Sombras (Box Shadows)
- **Cards e Botões:** `shadow-xl` (sombra suave e espalhada para dar profundidade).
- **Interação (Hover):** `hover:shadow-2xl hover:border-primary/30 transition-all duration-300` (aumenta o contraste da sombra e adiciona uma borda sutil colorida ao passar o mouse).

### Botão de Ação Principal (CTA - Call to Action)
- **Fórmula Visual:** Fundo `--primary` (`#D97E8E`), texto `--primary-foreground` (`#FFFFFF`), bordas arredondadas e sombra.
- **Micro-animações recomendadas:**
  - `hover:bg-accent` (muda suavemente para Terracota).
  - `hover:scale-[1.02]` ou `hover:scale-105` (aumenta sutilmente de tamanho).
  - `transition-all duration-300` (suaviza o efeito).
- **Código HTML/Tailwind Exemplo:**
  ```html
  <button class="bg-primary text-primary-foreground font-sans font-semibold text-sm md:text-base tracking-wide px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-accent hover:scale-105 transition-all duration-300 uppercase shadow-2xl">
    Garantir Minha Vaga
  </button>
  ```

### Botão de Ação Secundário / Alternativo
- **Fórmula Visual:** Fundo `--accent` (`#A66658`), texto `--accent-foreground` (`#FFFFFF`).
- **Código HTML/Tailwind Exemplo:**
  ```html
  <button class="bg-accent text-accent-foreground font-sans font-semibold rounded-2xl py-4 hover:bg-foreground hover:text-background transition-all duration-300 shadow-md">
    Ver Detalhes do Curso
  </button>
  ```

### Badges e Tags
- **Fórmula Visual:** Fundo suave semitransparente na cor de destaque (`bg-primary/10`), borda sutil (`border border-primary/20`) e texto em tamanho reduzido na cor pura (`text-primary`).
- **Código HTML/Tailwind Exemplo:**
  ```html
  <span class="bg-primary/10 border border-primary/20 text-primary font-sans text-[10px] md:text-xs font-semibold tracking-widest uppercase px-3.5 py-1 rounded-full">
    Presencial • Brasília
  </span>
  ```

### Divisores e Detalhes de Seção
- **Linha de Assinatura:** Pequena linha horizontal centralizada abaixo dos títulos.
  - **Especificações:** Largura de `3rem` a `4rem` (`w-12` a `w-16`), altura de `1px` (`h-px`), cor `--primary` ou `--primary/40`.
  - **Código HTML/Tailwind Exemplo:**
    ```html
    <div class="w-16 h-px bg-primary/40 mx-auto mt-4" />
    ```

---

## 6. Efeitos Visuais Avançados (Micro-Interações)

Para garantir o acabamento premium ("Premium Design"), adicione os seguintes efeitos no site:

1. **Backdrop Blur no Cabeçalho (Glassmorphism):**
   Mantenha o menu fixo transparente com um efeito de desfoque no fundo para que ele se misture com a página ao rolar:
   - **Classes:** `bg-background/80 backdrop-blur-md border-b border-border/40 sticky top-0 z-50`

2. **Círculos de Brilho Decorativos (Decorative Background Blobs):**
   Adicione círculos coloridos com muito desfoque no fundo da página para quebrar o visual plano e criar profundidade:
   - **Classes:** `absolute w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px] opacity-60 pointer-events-none -z-10`
   - **Posicionamento:** Coloque um no topo esquerdo (`top-[-10%] left-[-10%]`) e outro na parte inferior direita (`bottom-[20%] right-[-10%]`).

3. **Elevação de Card em Hover:**
   Ao passar o mouse sobre os cards de produtos ou depoimentos, faça com que eles flutuem ligeiramente e mostrem uma borda mais definida:
   - **Classes:** `transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30`
