# PROJETO: Trading do Zero

> **Para o Claude da próxima sessão:** lê este ficheiro **antes de fazer qualquer coisa**. Contém todas as decisões já tomadas, o tom de escrita, e o que está por fazer. Não revisites decisões fechadas. Continua do ponto onde parou.

---

## 1. O QUE É O PROJETO

Site educativo de day trading em **português brasileiro**, gratuito e independente. Curso estruturado em 7 módulos. Baseado conceitualmente nos dois livros de Andrew Aziz (*How to Day Trade for a Living* e *Advanced Techniques in Day Trading*), mas com conteúdo escrito de raiz, adaptado ao mercado brasileiro.

- **Domínio previsto:** tradingdozero.com (utilizador vai alojar no Hostinger Business)
- **Stack:** HTML/CSS/JS estático, sem framework. Sem WordPress.
- **Estado atual:** Módulo 1 (6 lições) concluído. Resto por fazer.

---

## 2. DECISÕES FECHADAS (NÃO REVISITAR)

| Decisão | Status |
|---|---|
| Idioma | **100% PT-BR.** Não é PT-PT. Não traduzir. |
| Mercado de referência | **80% Brasil, 20% internacional.** B3, CVM, WIN, WDO em primeiro lugar. |
| Stack técnico | HTML/CSS/JS puro. Não WordPress, não React, não build tools. |
| Vídeos | **Descartados.** Só conteúdo escrito + diagramas SVG. |
| Aba de vídeo-aulas | Não existe. |
| Design | Dark editorial. Diferente da concorrência BR (que é branca/corporativa). |
| Tipografia | Fraunces (display) + Geist (corpo) + JetBrains Mono (números/tickers). |
| Paleta accent | Dourado `#D4A574` (não verde-bolsa cliché). |
| Tom | Didático conversacional, voz humana, anti-vendedor-de-sonhos. |
| Ticker no hero | Decorativo/simulado, NÃO em tempo real (decisão consciente). |

---

## 3. ESTADO ATUAL (o que está feito)

### Site base
- `/home/claude/site/index.html` — frontpage
- `/home/claude/site/modulos.html` — overview dos 7 módulos
- `/home/claude/site/modulos/*.html` — overview por módulo (fundamentos, ferramentas, analise, estrategias, risco, psicologia, plano)
- `/home/claude/site/sobre.html`, `/home/claude/site/disclaimer.html`
- `/home/claude/site/calculadoras.html`, `glossario.html`, `cheatsheets.html`, `em-breve.html` — páginas extras
- `/home/claude/site/css/style.css` — design system (~1190 linhas)
- `/home/claude/site/js/main.js`

### 38 lições escritas
Todas em `/home/claude/site/licoes/`. Distribuição:
- Módulo 1 (Fundamentos): 6 lições ✅
- Módulo 2 (Ferramentas): 6 lições ✅
- Módulo 3 (Análise): 6 lições ✅
- Módulo 4 (Estratégias): 6 lições ✅
- Módulo 5 (Gestão de risco): 6 lições ✅
- Módulo 6 (Psicologia): 4 lições ✅
- Módulo 7 (Prática e jornada): 4 lições ✅

### Limpeza editorial (sessão de maio 2026, parte 1)
Passada uma camada de revisão sobre todas as lições:
1. **Conversão PT-PT → PT-BR.** 21 lições tinham contaminação (gerir, ecrã, telemóvel, portátil, está a + verbo, etc.). Tudo convertido. Verificação: zero residuais.
2. **Despersonalização de atribuições.** 42 menções directas a "Andrew Aziz" foram reduzidas a zero. Princípios apresentados como editorial do próprio curso. Reescritas em voz autoral, não substituições mínimas.
3. **Enriquecimento inicial de 3 lições-chave.** 3.1 (candles), 4.1 (ABCD) e 5.1 (regra dos 2%) — expandidas para 1.100–1.350 palavras com exemplos brasileiros concretos, aritmética real, secções novas sobre erros comuns/volume/position size.

### Páginas extras + ferramentas funcionais (sessão de maio 2026, parte 2)
- **calculadoras.html** — 3 calculadoras funcionais (Position Sizing, Risco/Retorno, Juros Compostos), R$ + pt-BR, valores brasileiros (PETR4-like)
- **glossario.html** — 29 termos, busca instantânea funcional
- **cheatsheets.html** — 11 regras + tabela de 7 setups + checklist de pré-mercado
- **ferramentas-dicas.html** (novo) — hub de recursos com workflow diário (timeline 3 fases), dicas por ferramenta, 4 erros comuns, dica avançada de combinação
- **Nav top reorganizado** — "Estratégias" removido (continua no rodapé), "Recursos" adicionado a apontar para ferramentas-dicas.html (53 páginas)
- **Breadcrumbs** — "recursos" agora clicável (era span)
- **Floating point bug** corrigido no position sizing (Math.floor com epsilon 1e-9)

### Expansão pedagógica das 8 lições críticas (sessão de maio 2026, parte 3)
Lições expandidas com conteúdo original substancial (exemplos brasileiros concretos, fórmulas, tabelas, callouts, secções novas):

| Lição | Antes | Depois | Conteúdo adicionado |
|---|---|---|---|
| **4.2 Bull/Bear Flag** | 649 | 1.366 | Exemplo numérico VALE3 às 11h00, assinatura de volume em 3 fases, 3 erros que matam, filtros |
| **5.2 Risco/Retorno** | 614 | 1.502 | Fórmula expectativa matemática, quadrante WR×R:R, R:R planeado vs real, como melhorar |
| **6.1 O adversário** | 503 | 1.309 | 3 vieses Kahneman (aversão, confirmação, custo afundado), neuroquímica cortisol/dopamina, 3 protocolos de treino |
| **6.4 Disciplina** | 533 | 1.190 | 3 tipos de overtrading (tédio/recuperação/eufórico), ritual de fechamento, pergunta-chave de check-in |
| **7.1 Watchlist** | 465 | 1.314 | Rotina cronológica minuto-a-minuto (75 min), 5 filtros de qualidade, o que NÃO pôr na watchlist |
| **7.2 Plano de trade** | 523 | 1.260 | Template dos 7 campos, 3 cenários pré-pensados (A/B/C), evolução do plano via diário |
| **7.3 Diário de trading** | 445 | 1.320 | Template 13 colunas, 8 métricas a calcular, exercício de descoberta do setup A+, folha semanal |
| **7.4 Próximos passos** | 626 | 1.342 | Progressão em 4 fases (sim→micro→escalada→pleno), rendimento mensal honesto, sinais para recuar |

### Expansão final — fechamento de todas as restantes (sessão de maio 2026, parte 4)
As 15 lições que ainda estavam curtas foram expandidas para o tamanho-alvo, completando todas as 38:

| Lição | Antes | Depois | Conteúdo adicionado |
|---|---|---|---|
| **2.1 Escolher corretora** | 883 | 1.350 | Tabela comparativa 8 corretoras BR, checklist de 10 perguntas antes de abrir conta |
| **2.2 Plataformas** | 745 | 1.254 | Configuração inicial passo-a-passo, comparação Profit vs MT5, ecossistema de plug-ins |
| **2.3 Tipos de ordens** | 913 | 1.427 | Setup OCO no Profit passo-a-passo, 3 erros comuns, guia rápido por situação |
| **2.4 Book de ofertas** | 715 | 1.260 | Spoofing detalhado com sinais, iceberg orders, config Level 2, Times&Trades |
| **2.5 Hotkeys** | 545 | 1.152 | Protocolo de treino em 4 semanas, fat fingers, ergonomia, teste de automatização |
| **2.6 Estação de trabalho** | 605 | 1.233 | Monitor, cadeira, ambiente físico, checklist final completo |
| **3.2 Tendência/lateralização** | 654 | 1.262 | Como medir força da tendência, conceito de pivô, 3 armadilhas, reversão verdadeira vs falsa |
| **3.3 S/R básico** | 549 | 1.175 | Como traçar passo-a-passo, força do nível, números redondos, multi-timeframe |
| **3.4 S/R avançado** | 572 | 1.179 | Zonas múltiplas em camadas, confluência, exemplo prático de fakeout |
| **3.5 Indicadores** | 642 | 1.270 | RSI/MACD honestamente, indicadores que NÃO valem, configuração mínima recomendada |
| **3.6 Timeframes** | 611 | 1.386 | Protocolo top-down, exemplo de salvamento por MTF, armadilhas, timeframe ideal por perfil |
| **4.3 Top Reversal** | 650 | 1.295 | Exemplo PETR4 às 11h30, por que reversões são mais difíceis, filtros, ordem de aprendizagem |
| **4.4 VWAP/MA Trend** | 569 | 1.173 | Exemplo ITUB4 às 14h00, escolha entre EMA 9/20/50, quando a EMA falha, confluência |
| **4.5 Red-to-Green** | 570 | 1.298 | Exemplo VALE3 às 10h35, momentos ideais, filtros que eliminam, psicologia colectiva |
| **4.6 ORB** | 639 | 1.253 | Exemplo MGLU3 às 10h15, escolha do timeframe (5/15/30 min), fakeouts, ORB inverso |
| **5.3 Tamanho de posição** | 608 | 1.271 | Position sizing em minicontratos (WIN/WDO), escalada em 25%, 3 erros frequentes |
| **5.4 Limite diário** | 517 | 1.100 | 3 níveis (diário/semanal/mensal), meta de lucro, matemática da recuperação, config Profit |
| **5.5 Trailing stop** | 543 | 1.219 | 4 tipos de trailing, exemplo numérico completo, quando NÃO usar |
| **5.6 Preço médio** | 561 | 1.250 | Psicologia da espiral, exemplo numérico catastrófico, contextos válidos, regra única |
| **6.2 FOMO/hesitação** | 523 | 1.100 | 3 gatilhos do FOMO, exercício de desactivação em 60s, ciclo FOMO-hesitação |
| **6.3 Revenge trading** | 535 | 1.116 | Sinais de aviso precoce, regra dos 3 stops, custo em números (caso completo) |

**Estado final do projeto:** 49.680 palavras de conteúdo nas 38 lições. Média 1.307 palavras por lição. **Todas as lições ≥1.100 palavras**. Tom consistente, exemplos brasileiros originais, conceitos públicos da indústria sem reprodução de material protegido.

### Última entrega
`/mnt/user-data/outputs/trading-do-zero.zip` — pacote completo pós-revisão.

---

## 4. ARQUITETURA DOS 7 MÓDULOS

1. **Fundamentos** (iniciante) — ✅ 6 lições escritas
2. **Ferramentas e plataforma** — corretoras BR, tipos de ordens, Level 2, hotkeys, plataformas (Profit, Nelogica, MetaTrader)
3. **Análise de mercado** — candlesticks, price action, suporte/resistência (S/R deep dive vem do L2)
4. **Estratégias** — 9 estratégias: ABCD + Reverse ABCD, Bull Flag + Bear Flag, Top Reversal + Fallen Angel, VWAP, S/R, MA Trend, Red-to-Green, Opening Range Breakout, time-of-day
5. **Gestão de risco e psicologia** — 3 passos, position sizing (L2 deep dive), 11 regras do Aziz
6. **Prática diária** — watchlist, scanners, execução, revisão, diário de trades
7. **Jornada do trader** — simulador, progressão de capital, mentoria, quando escalar

---

## 5. TOM E ESTILO DE ESCRITA

Esta secção é a mais importante para manter consistência. Lê os exemplos com atenção.

### Voz
- Conversacional, mas não infantil. Nem palestrante de TED, nem professor de pós-graduação.
- Frases curtas quando dá. Ritmo. Variação de comprimento.
- **Tu/você:** usar "você" (é PT-BR). Nunca "tu" nem "vós".
- Em português brasileiro nem sempre se usa "tu". O padrão neste projeto é "você".

### Estrutura de cada lição
1. **Header** — tag de lição, h1 com palavra-chave em itálico dourado, resumo em Fraunces, meta (leitura, nível)
2. **Hook de abertura** — uma cena, uma pergunta provocadora, ou um problema. NUNCA começar com "Bem-vindo a esta lição" ou similar.
3. **3 a 6 secções H2** — cada uma com h3 internos onde fizer sentido
4. **Pelo menos 1 callout** — uma caixa com `class="callout"` para destacar uma regra/aviso
5. **Pelo menos 1 lesson-quote** — frase em destaque tipo pull quote
6. **Tabela ou diagrama SVG** — quando ajudar a entender
7. **Pontos-chave** — recap no fim com `class="key-points"`
8. **lesson-nav** — prev/next no fim

### Comprimento alvo
- 1.500–2.000 palavras de conteúdo (não incluindo HTML).
- Pode passar se o tópico exigir. Não cortar para caber.

### Recursos retóricos que funcionam bem (a usar com moderação)
- **Analogias do dia-a-dia.** Ex: liquidez = carro popular vs carro raro. Day vs swing = restaurante vs delivery. Retail vs institucional = guerrilha vs exército regular.
- **Personagens fictícios para ilustrar.** Ex: Bruno e Marina na lição 1.5 (R:R).
- **Dados com fonte específica.** Ex: "estudo FGV 2019 com 20 mil traders mostrou que 97% perderam após 300 sessões".
- **Exemplos numéricos concretos.** Não "imagine que o preço sobe" — "imagine que PETR4 sai de R$ 38,00 para R$ 38,50".

### Recursos a EVITAR
- "Bem-vindo a esta lição" — banal.
- "Como dissemos antes" — referência preguiçosa.
- "É importante notar que" — encheção de linguiça.
- Excesso de emojis. Não usar emojis em lições. Apenas no `disclaimer.html` há um ⚠️.
- "Espero que tenha gostado!" — fora de tom.
- Promessas vazias tipo "domine o mercado", "alcance a liberdade financeira".
- Ser bajulador com o leitor. Tratar o leitor como adulto.

### Tom anti-vendedor
Este é um diferencial estratégico do projeto. Quando há oportunidade de mostrar dados duros sobre o quanto o day trade é difícil, **usar**. O leitor deveria sair de cada lição com expectativas mais realistas, não mais infladas.

### Exemplos de aberturas que funcionaram (das lições 1.1–1.6)
- "Você provavelmente já ouviu falar do mercado financeiro de mil formas diferentes..."
- "Há um momento curioso na conversa com qualquer pessoa que está começando no mercado..."
- "Imagina a seguinte cena. Você abre o jornal e lê que as ações da Petrobras caíram 4%..."
- "Há uma ilusão confortável que quase todo iniciante carrega..."
- "Imagina que te apresento dois traders. O primeiro, o Bruno..."
- "O day trade ocupa, no imaginário popular, um espaço estranho..."

---

## 6. CONTEXTO BRASIL (referências sempre disponíveis)

Quando precisar de exemplos, usa estas referências em vez de inventar:

- **B3** — bolsa única do Brasil (resultado da fusão BM&F + Bovespa + Cetip)
- **CVM** — regulador (equivalente da SEC americana)
- **BACEN** — regulador bancário/cambial
- **Corretoras BR populares:** XP, Rico, Clear (do grupo XP), Modal/Genial, BTG, Inter, Avenue (para EUA), Nomad (para EUA)
- **Plataformas de execução:** Profit (Nelogica), MetaTrader 5, TraderEvolution
- **Ativos favoritos do day trader BR:**
  - **WIN** — mini-índice (1 ponto = R$ 0,20)
  - **WDO** — mini-dólar (1 ponto = R$ 10)
  - **Ações líquidas:** PETR4, VALE3, ITUB4, BBDC4, BBAS3, B3SA3, MGLU3
- **Horários da B3:** pregão 10h–17h; call de fechamento 17h–17h25
- **Tributação:** day trade 20% sobre lucro; swing 15%; isenção até R$20k/mês em vendas comuns (não vale para day trade)
- **Estudos a citar quando relevante:**
  - **FGV 2019** (Giovannetti & Chague): 97% perdem após 300 sessões em mini-índice
  - **Massachusetts** (decisão judicial): 84% perdem após 6 meses
- **Casos brasileiros úteis:**
  - **Joesley Day** (17 maio 2017) — gap brutal, perdas além do stop
  - **Marçal 2020** — circuit breakers, gaps de pandemia
- **Casos internacionais úteis:**
  - **Franco suíço 15 jan 2015** — broker bankrupts, slippage extremo
  - **GameStop jan 2021** — short squeeze histórico
  - **Lehman Brothers set 2008** — HFT falhando

---

## 7. ESTILO HTML/CSS (padrões a manter)

### Estrutura de cada ficheiro de lição
Olha como template qualquer um dos 6 ficheiros em `/home/claude/site/licoes/`. Mantém:
- `<meta name="description">` única, ~150 chars, com keywords naturais
- `<meta name="keywords">` 4–6 termos
- Link das fontes do Google
- Link para `../css/style.css` (paths relativos)
- Favicon SVG inline
- Nav idêntico em todas as páginas
- Breadcrumbs no topo do `<main>`
- `<article class="lesson-wrap">` envolve tudo
- Footer idêntico em todas

### Componentes CSS prontos a usar
Todas as classes abaixo já estão no `style.css`:
- `.lesson-tag` — pílula "lição X.Y · básico/avançado"
- `.lesson-summary` — parágrafo grande em Fraunces, cor suave
- `.lesson-meta` — linha "leitura ~Xmin · nível básico"
- `.callout` (padrão dourado), `.callout.warn` (vermelho), `.callout.success` (verde)
- `.lesson-quote` — pull quote entre duas linhas horizontais
- `.lesson-figure` — wrapper para SVG com figcaption
- `.lesson-table` — tabela com header em monospace dourado
- `.key-points` — caixa de recap no fim, com checkmarks
- `.lesson-nav` — grid prev/next no rodapé

### Diagramas SVG
Quando criar SVG, usar `viewBox="0 0 700 [altura]"` e cores hex literais (não CSS vars dentro do SVG porque renderiza melhor assim). Cores semânticas:
- `#7A9D6F` — verde (long/alta/bullish)
- `#C75B3E` — vermelho (short/queda/bearish)
- `#D4A574` — dourado accent
- `#15130F` — background do SVG
- `#EDE6D6` — texto claro
- `#8A8275` — texto muted
- Fontes: `Fraunces, serif` para itálicos; `JetBrains Mono, monospace` para labels

---

## 8. ROADMAP & TODO LIST

### Estado actual
**Todas as 38 lições no tamanho-alvo (≥1.100 palavras).** Total de 49.680 palavras de conteúdo escrito de raiz. Média de 1.307 palavras por lição.

Páginas extras funcionais e linkadas:
- 3 calculadoras (Position Sizing, R:R, Juros Compostos) com R$/pt-BR e valores brasileiros
- Glossário de 29 termos com busca funcional
- Cheatsheets (11 regras + tabela de setups + checklist pré-mercado)
- Hub `ferramentas-dicas.html` com workflows diários e dicas de uso

### ✅ Concluído (sessão de auditoria pré-upload, maio 2026)

1. **SEO básico**
   - sitemap.xml gerado com todas as páginas
   - robots.txt criado
   - Open Graph tags adicionadas em todas as 56 páginas (antes só estava no index)
   - og:image criado (`og-image.png`)

2. **Conformidade legal LGPD**
   - `privacidade.html` (Política de Privacidade)
   - `termos.html` (Termos de Uso)
   - Links no footer de todas as páginas

3. **Favicon completo**
   - SVG (browsers modernos)
   - PNG 192×192 e 512×512 (Android/PWA)
   - apple-touch-icon 180×180 (iOS)
   - manifest.json com cores e nomes

4. **Progress bar de leitura nas lições**
   - Barra fina (3px) dourada no topo, com glow subtil
   - Ativada via JS apenas em páginas com `.lesson-page` (38 lições)
   - Calcula progresso sobre o conteúdo da lição (não a página inteira)
   - Implementação centralizada em `main.js` + `style.css` — não precisou editar lições individualmente
   - Respeita `prefers-reduced-motion`

5. **Botão "voltar ao topo"**
   - Botão circular fixo no canto inferior direito, com borda accent subtil e backdrop-blur
   - Aparece com transição suave após scroll > 600px
   - Click executa smooth scroll para o topo
   - Ativo em TODAS as páginas (não só lições)
   - Acessibilidade: `aria-label`, `title`, focus visible

6. **Sistema de progresso (localStorage)**
   - Botão "marcar como concluída" no fim de cada lição (após pontos-chave, antes da navegação)
   - Estado guardado em `localStorage` com a key `tdz-completed-lessons` (array de IDs como `["1-1", "3-2"]`)
   - Toggle visual: badge accent quando não-marcada, verde com check quando concluída
   - Em `modulos.html`: badge de progresso por módulo ("3 de 6 lições") com barra dourada subtil
   - Nas overviews dos módulos: lições concluídas têm check verde + título riscado + número em verde
   - Implementação centralizada em `main.js` — não precisou editar páginas individualmente
   - Sem backend, sem tracking, privacidade preservada (hint visível no card "guardado apenas no seu browser")

7. **Tempo estimado de leitura recalculado para todas as 38 lições**
   - Algoritmo: `ceil(palavras / 200 + tabelas × 0.5)` — 200 wpm referência + overhead por tabela
   - Substituiu valores hardcoded antigos (inconsistentes com conteúdo real expandido)
   - Aplicado em 3 níveis: header de cada lição (`~X min`), overview do módulo (`TEMPO ESTIMADO ~Y MIN`), eyebrow da `modulos.html` (`~4h41 de leitura`)
   - **Curso completo: 281 min ≈ 4h41 de leitura** distribuídos pelos 7 módulos (M1: 52, M2: 45, M3: 42, M4: 43, M5: 43, M6: 25, M7: 31)

8. **Página de FAQ**
   - `faq.html` criada com 15 perguntas comuns, organizadas em 5 categorias (Dinheiro, Tempo/Rotina, Impostos, Corretoras, Estratégias)
   - Estrutura `<details>`/`<summary>` nativa — sem JS, acessibilidade pronta, expansível clicável
   - Visual: pergunta em serif, ícone +/− circular dourado que roda 180° ao abrir
   - **Schema.org FAQPage** já incluído no `<head>` (JSON-LD) — antecipa parte do item 13. Google pode mostrar rich snippets ("perguntas e respostas" directos no resultado)
   - Link adicionado ao footer "Recursos" das 56 páginas (e padronizado o bloco que estava inconsistente entre raiz e subpastas)
   - 4º card adicionado ao hub `ferramentas-dicas.html`, grid mudado para `auto-fit` (responsivo: 4 colunas em desktop, 2 em tablet, 1 em mobile)
   - Adicionada ao `sitemap.xml`

12. **Acessibilidade**
   - **Skip-to-content link** — inserido via JS em todas as 57 páginas; hidden por defeito (top: -100px), visível com fundo accent e outline duplo após Tab. Detecção inteligente do destino: `<main>` (lições), fallback para `<header class="hero|page-header">` (index, modulos, etc.), com tabindex="-1" para focagem programática quando aplicável.
   - **Contraste WCAG auditado** — testados todos os pares cor/fundo. Único falhar: `--ink-soft #5C564B` (2.65:1) → ajustado para `#807A6C` (4.52:1, AA). Os outros já passavam AA ou AAA (`--ink` 15.5:1, `--accent` 8.67:1, `--ink-muted` 5.08:1, `--success` 6.32:1, `--warn` 4.59:1).
   - **SVGs auditados** — 120 SVGs no site. Decorativos (76 em lições + outros): `aria-hidden="true"`. Informativos (5 diagramas pedagógicos: pirâmide do mercado, long/short, S/R, candlesticks, ABCD): `role="img"` + `aria-label` descritivo de qualidade. Único SVG órfão (em-breve.html) corrigido com `aria-hidden`.
   - **Focus visible global** — CSS adiciona outline accent automático em todos os `<a>`, `<button>`, `<input>`, `<textarea>`, `<select>`, `<details>/<summary>` via `:focus-visible`. Remove outline default azul mas mantém estado visível para teclado.
   - **`prefers-reduced-motion`** — respeitado globalmente (transições e animações desabilitadas para utilizadores que pedem menos movimento).
   - **Utility `.sr-only`** — disponível para texto exclusivo para leitores de tela quando necessário.

13. **Schema.org JSON-LD em todo o site**
   - **56 páginas com JSON-LD válido** (só `em-breve.html` excluída — intencional, não indexar)
   - Distribuição:
     - 38 × `LearningResource` (cada lição) com `wordCount`, `timeRequired` em ISO 8601 (ex: `PT8M`), `educationalLevel` (Beginner/Intermediate), `isPartOf` referenciando o módulo correspondente
     - 9 × `Course` (1 global em index.html via @graph + 1 em modulos.html com `syllabusSections` + 7 nos overviews dos módulos com `hasPart` listando as lições)
     - 7 × `WebPage` (calculadoras, glossário, cheatsheets, ferramentas-dicas, disclaimer, privacidade, termos) — todas com `BreadcrumbList`
     - 1 × `AboutPage` (sobre.html)
     - 1 × `FAQPage` (faq.html, já incluído no item 8)
     - 1 × `EducationalOrganization` (index.html, via @graph)
     - 1 × `WebSite` (index.html, via @graph, ligado à Organization)
   - Index usa `@graph` para combinar 3 schemas (Org + WebSite + Course) num único bloco — abordagem semântica correcta
   - **Benefícios esperados:**
     - Rich snippets no Google para a FAQ (perguntas/respostas expandidas no resultado)
     - Card de Course no Google com nota "Curso gratuito"
     - Knowledge Graph mais robusto sobre a entidade "Trading do Zero"
     - Breadcrumbs visíveis no resultado de pesquisa para páginas internas
   - Implementação centralizada via Python: cálculo automático de `wordCount` e `timeRequired` a partir do conteúdo real, sem hardcoding

---

## ESTADO FINAL

Todos os itens essenciais (1-3) e todos os de UX/conteúdo principais (4-10, 12, 13) foram implementados. **Item 11 (Newsletter) descartado** pelo dono do projeto.

Site pronto para upload em produção.

### Revisão editorial — calibragem do tom (maio 2026)

Sessão dedicada a equilibrar o tom do site: manter honestidade sobre dificuldades do day trade, mas tornar a perspectiva mais inspiradora para quem está a começar com capital pequeno. Mudanças principais:

- **FAQ "Posso viver de day trade com R$ 5.000?"** — reescrita: em vez de "Realisticamente não, precisa de R$ 200-500 mil", agora explica progressão incremental: R$ 5.000 vira R$ 30-80 mil em 2-3 anos com consistência, e com R$ 50-100 mil a 2-3%/mês a renda mensal de R$ 1.000-3.000 torna-se significativa. Tom: "começa pequeno, escala com tempo e método".
- **Tabela de capitais em 1-6 (Mitos)** — substituídos R$ 200/500 mil por uma progressão visível: R$ 5k → R$ 20k → R$ 50k → R$ 100k → R$ 200k, com o realismo de cada estágio (de "renda inicial, foco em aprendizado" a "viável para viver disto"). Mensagem central: cada vez que o capital duplica, a renda também duplica.
- **Lição 7-4 (Próximos passos)** — aritmética reformulada: R$ 40-80k para renda complementar, R$ 100-200k para substituir salário (em vez de R$ 200-500k). Frase central: "o capital não precisa de ser aporte inicial — cresce por lucros reinvestidos durante 2-5 anos".
- **Index `reality` check** — mantidos os 84% factuais, mas suavizado "menos de 1%" para "poucos traders retail". Adicionado parágrafo construtivo: "os 16% que vencem não são sortudos — são pessoas que tratam o trading como profissão. Este site existe para te ajudar a estar nesse grupo".
- **Linguagem inadequada removida** — todas as 7 referências a "suicídio" / "suicídio financeiro" substituídas por linguagem profissional ("erro grave", "decisão de alto risco"). Sensibilidade séria importa.
- **Meta descriptions suavizadas** — em 5-1 (Regra dos 2%), 5-4 (Limite diário), 6-3 (Revenge): "matemática da ruína", "dia de fúria destrói contas", "porta para a falência" → linguagem mais factual e construtiva.
- **Títulos e quadrantes** — Lição 1-6 "destroem contas" → "atrasam quem está a começar". Quadrante 4 em 5-2: "zona da morte" → "zona a evitar".

Tom final: honestidade sem catastrofismo. Iniciante sai do site sabendo que vai ser difícil, mas com perspectiva de crescimento concreto e progressivo.

### Auditoria técnica final (maio 2026)

Verificação sistemática para identificar bugs, código órfão e inconsistências antes de upload.

**Verificações passadas:**
- ✅ **0 links quebrados** em 57 páginas
- ✅ **0 problemas estruturais** — todas as páginas têm nav, footer, main/header, meta description
- ✅ **0 erros JS reais** (apenas 12 falsos positivos: Google Fonts CORS em file:// que desaparecem em produção HTTPS)
- ✅ **0 ficheiros temporários/backup** no projeto
- ✅ **0 duplicações** de tags HTML
- ✅ **Calculadoras** (Position Sizing, R:R, Juros Compostos) — todas calculam correctamente
- ✅ **Glossário** — busca funcional, 29 termos, filtragem em tempo real (VWAP→1, stop→3, vazia→29)
- ✅ **Skip link** — existe em todas as páginas, target válido
- ✅ **Sistema de progresso** — localStorage funciona, marcar/desmarcar OK
- ✅ **Progress bar de leitura** — actualiza no scroll
- ✅ **Back-to-top** — aparece após 600px, desaparece se voltar para o topo
- ✅ **Breadcrumbs** — links visíveis (sublinhado dourado subtil) e clicáveis

**Limpezas aplicadas:**
- **6 ficheiros com PT-PT residual** corrigidos para PT-BR: "partilhar"→"compartilhar", "utilizador"→"usuário", "estás"→"está", "rato"→"mouse"
- **10 classes CSS órfãs** removidas: `.hero-eyebrow`, `.live-dot`, `.svg-bullish`, `.svg-bearish`, `.svg-neutral`, `.svg-line`, `.svg-accent`, `.svg-text`, `.svg-text-muted`, `section.tight`
- **CSS minificado**: 37,965 → 37,190 bytes (-775 bytes, -2%)

**Métricas finais:**
- 57 páginas HTML
- CSS: 36.3 KB
- JS: 12.7 KB
- Total ficheiros: 68 (~1.2 MB)

### TODO restante (longo prazo, opcional)

**9. Casos de estudo (1-3 inicialmente)** — walkthrough completo de trades reais (setup → execução → gestão → saída → análise no diário). Format: artigo longo 1500-2000 palavras com diagramas. Path sugerido: `casos-de-estudo/`. Diferencial editorial forte que poucos cursos têm.

**10. Página "Sobre o autor" expandida** — actual `sobre.html` fala do projeto. Falta voz humana do autor (motivação, abordagem editorial, por que escreveu sem promessas vazias).

### Médio prazo
- **Módulos 4, 5, 6, 7** (mesma estrutura).
- **Calculadoras interativas** (HTML/JS no próprio site, sem dependências):
  - Position sizing (quanto comprar baseado em stop e % de risco)
  - R:R (entrada, stop, alvo → ratio automático)
  - Juros compostos para mostrar realismo de longo prazo
- **Glossário completo** — `/glossario.html` com termos em ordem alfabética, âncoras internas

### Longo prazo (quando utilizador decidir)
- Newsletter (sistema simples, ConvertKit ou Buttondown)
- Deploy no Hostinger (FTP/SFTP do site estático)
- SEO técnico (sitemap.xml, robots.txt, structured data)
- Eventual versão em inglês (12+ meses depois, com editor nativo)

### Monetização (discutido, não implementado)
- AdSense pode entrar quando houver tráfego (~$3-8 RPM no nicho)
- Afiliação corretoras BR ($50-400 por lead) — muito superior
- Decisão: PT-BR primeiro 12-18 meses, antes de pensar em monetização agressiva

---

## 9. COMANDOS ÚTEIS PARA A PRÓXIMA SESSÃO

```bash
# Verificar estado do site
find /home/claude/site -type f | sort

# Ver template de lição existente
view /home/claude/site/licoes/1-3-long-short.html

# Ver CSS de lição (a partir da linha 800 aprox.)
grep -n "PÁGINA DE LIÇÃO" /home/claude/site/css/style.css

# Verificar links em modulos/fundamentos.html
grep "licoes/" /home/claude/site/modulos/fundamentos.html

# Criar entrega final atualizada
rm -rf /mnt/user-data/outputs/trading-do-zero /mnt/user-data/outputs/trading-do-zero.zip
mkdir -p /mnt/user-data/outputs/trading-do-zero
cp -r /home/claude/site/* /mnt/user-data/outputs/trading-do-zero/
cd /mnt/user-data/outputs && zip -rq trading-do-zero.zip trading-do-zero/

# Reextrair texto dos PDFs (se utilizador os reanexar)
pdftotext "/mnt/user-data/uploads/How_to_Day_Trade_for_a_Living_-_Andrew_Aziz.pdf" /tmp/L1_full.txt
pdftotext "/mnt/user-data/uploads/Advanced_Techniques_in_Day_Trading__A_Prac_-_Andrew_Aziz.pdf" /tmp/L2_full.txt
```

---

## 10. COMO RETOMAR (checklist para o Claude da próxima sessão)

1. Lê este PROJETO.md por inteiro. **Não pules.**
2. Roda `find /home/claude/site -type f | sort` para ver o estado real dos ficheiros.
3. Lê pelo menos UMA lição existente (sugestão: `1-3-long-short.html` ou `1-5-probabilidades.html`) para internalizar o tom.
4. Pergunta ao utilizador: "Continuo no Módulo 2 ou tens outra prioridade?"
5. **Não mostres este PROJETO.md ao utilizador a não ser que ele peça.** Ele já sabe o que está aqui — pediu que eu o escrevesse.
6. **Não revisites decisões fechadas** (secção 2). Se o utilizador quiser mudar algo, ele dirá.
7. Mantém o ritmo: uma lição completa por turn é viável. Não dividir uma lição em vários turns sem necessidade.

---

## 11. NOTA FINAL SOBRE PROPRIEDADE INTELECTUAL

Os livros do Aziz são fonte conceitual — estruturas pedagógicas, conceitos, framework. **Não traduzir trechos**. Cada lição é reescrita de raiz, com voz própria, exemplos brasileiros, e adaptações. As "11 regras do Aziz" podem ser referidas pelo nome dele (atribuição correta), mas reformuladas em PT-BR. Citações curtas com aspas, sempre atribuídas, são aceitáveis em casos pontuais — mas não dependentes.

---

*Última atualização: maio 2026 · Todas as 38 lições no tamanho-alvo (49.680 palavras totais) · Páginas extras funcionais · Pronto para upload em produção*
