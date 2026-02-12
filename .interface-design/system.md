# System: Aniversário Vibrante

## Direction and feel
- Tema: romance tropical neon, energético e festivo.
- Sensação: calor humano, celebração e intimidade com impacto visual alto.
- Assinatura visual: cards de memória com paleta quente + acentos neon e fundo com orbs em parallax.
- Idioma e voz: português (Brasil), tom afetivo e direto.

## Depth strategy
- Estratégia principal: superfícies translúcidas com bordas suaves (`glassmorphism leve`).
- Suporte de profundidade: sombras moderadas apenas em blocos principais (hero/cards), sem sombra pesada.
- Elevação:
  - Nível 0: fundo gradiente com texturas e orbs.
  - Nível 1: seções com blur leve e borda translúcida.
  - Nível 2: cards (foto, vídeo, mensagens) com contraste local e sombra curta.
  - Nível 3: lightbox fullscreen para foco.

## Spacing base unit
- Base: `8px`.
- Escala preferida: `8, 12, 14, 16, 20, 24, 28, 32`.
- Raio:
  - Pequeno: `16px` (quotes e blocos pequenos).
  - Médio: `18px` (cards principais).
  - Grande: `24px+` (seções e hero).

## Typography
- Display: `Bungee` (títulos com presença).
- Corpo: `Red Hat Display` (legibilidade geral).
- Destaques afetivos: `Caveat` (mensagens do mural).
- Hierarquia:
  - H1 em caixa alta e alto contraste.
  - Kicker/eyebrow em caps com tracking alto.
  - Corpo com altura de linha entre `1.4` e `1.6`.

## Token patterns
- Cores primárias:
  - `--noite-tropical`, `--noite-profunda` (base escura).
  - `--manga-eletrica`, `--coral-paixao` (calor e energia).
  - `--limao-festa`, `--agua-neon` (acento vibrante).
  - `--creme-luz`, `--texto-secundario` (texto).
- Regras:
  - Acentos vivos para CTAs, métricas e metadados.
  - Borda sempre translúcida e discreta.
  - Evitar branco puro como superfície dominante.

## Motion patterns
- Biblioteca: `GSAP + ScrollTrigger`.
- Entrada da página: timeline com stagger por blocos.
- Scroll reveal: cards surgem com `y` positivo + fade + rotação mínima alternada.
- Ambiência: orbs com parallax de baixa intensidade.
- Interação: hover 3D em foto-card (apenas ponteiro fino) e chips com pulso suave.
- Acessibilidade: respeitar `prefers-reduced-motion`.

## Reusable component patterns
- Hero comemorativo:
  - Topbar compacta + headline display + subtítulo + chips + métricas + CTA arredondado.
- Grid de fotos:
  - Card com imagem 4:3, título, data e mensagem curta.
  - Clique abre lightbox com legenda.
- Grid de vídeos:
  - Video 16:9 com `poster`, título e descrição.
- Mural de mensagens:
  - Cards de citação curtos para reforço emocional.
- Footer de personalização:
  - Reforça onde editar dados no arquivo JS.

## Content structure defaults
- Perfil do casal centralizado em objeto único (`coupleProfile`).
- Mídia e mensagens separadas por arrays (`photoMemories`, `videoMemories`).
- Mínimo padrão para esta experiência:
  - `15` fotos com mensagem por card.
  - `2` vídeos com legenda e capa.

