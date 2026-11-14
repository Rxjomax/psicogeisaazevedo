# DESIGN.md — Sistema Visual & Direção de Arte
**Projeto:** Landing Page Clínica — Geisa Cléa Azevedo Neres · Psicologia Clínica (`@geisaclea.psi` | `CRP 02/22816`)
**Localização Real:** RioMar Trade Center (Torre A, Sala 1903), Av. República do Líbano, 251 — Pina, Recife – PE (CEP 51110-160) | Online.

## 1. Atmosfera & Tema
Estética **Editorial Impressa & Arquitetura Silenciosa**, inspirada na própria identidade visual do consultório de Geisa Cléa (o quadro têxtil de ondas concêntricas em linho e areia visível atrás dela em sua foto oficial do `@geisaclea.psi`). A interface traduz a calma da sala 1903 no Pina com tipografia literária e espaço negativo generoso.

## 2. Paleta de Cores (Tokens CSS & Contraste WCAG AA/AAA)
- `--bg-primary: #F8F6F2` (Linho cru / Off-white quente — 60% da superfície)
- `--bg-secondary: #EFECE6` (Areia suave — 30% das seções alternadas, dialogando com o quadro de ondas em relevo do consultório)
- `--text-primary: #262523` (Carvão profundo — contraste de `13.8:1` sobre `#F8F6F2`, evitando `#000000` puro)
- `--text-secondary: #5C5852` (Cinza pedra — contraste de `6.1:1` sobre `#F8F6F2`, acima do mínimo WCAG AA `4.5:1`)
- `--border-hairline: #DCD7CD` (Fio editorial de `1px solid`)
- `--accent-sage: #4A5D4E` (Verde sálvia seco — contraste de `6.7:1` com texto `#F8F6F2` para o CTA principal)
- `--accent-terracotta: #A66E58` (Terracota suave — reservado a índices numéricos e estrelas de avaliação)

## 3. Tipografia
- **Display & Títulos (`--font-serif`):** *Cormorant Garamond* (Regular 400, Medium 500, SemiBold 600 e Italic 400).
  - `h1` Hero: `clamp(2.25rem, 4.2vw, 3.75rem)`, `line-height: 1.08`, `letter-spacing: -0.015em`, `text-wrap: balance`.
  - `h2` Seções: `clamp(1.85rem, 3.1vw, 2.75rem)`, `line-height: 1.14`.
- **Corpo & Interface (`--font-sans`):** *Plus Jakarta Sans* (Regular 400, Medium 500, SemiBold 600).
  - Corpo de texto: `1rem` (`16px`) no mobile a `1.0625rem` (`17px`) no desktop, `line-height: 1.7`, largura contida entre `55ch` e `66ch`.
  - Algarismos (`CRP 02/22816`, `(81) 98425-5422`, `Sala 1903`, `66 avaliações`): `tabular-nums`.

## 4. Superfícies & Profundidade
- Proibição de `box-shadow` difuso, cartões encapsulados ou *glassmorphism*.
- A separação espacial ocorre por meio de alternância de plano de fundo (`#F8F6F2` ↔ `#EFECE6`), margens amplas e fios divisórios de `1px solid #DCD7CD`.

## 5. Comportamento Responsivo (Mobile-First `360px` → `1440px`)
- Em telas móveis (`360px–767px`), as grades assimétricas empilham-se em coluna única sem rolagem horizontal (`overflow-x: hidden`), mantendo o retrato `4:5` e todos os alvos de toque com altura mínima entre `48px` e `60px`.
- Em desktop (`1024px–1440px`), cada seção adota uma estrutura própria sem repetição de grid consecutivo.

## 6. Micro-interações
- Transições contidas em `180ms` a `300ms` restritas a `opacity`, `color` e `border-color`, mais fade-in suave na rolagem (`transition-opacity duration-700`).
- Estados de foco visíveis (`focus-visible:ring-2 focus-visible:ring-[#4A5D4E]`) e respeito integral a `@media (prefers-reduced-motion: reduce)`.
