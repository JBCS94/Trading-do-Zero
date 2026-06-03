/* ============================================
   TRADING DO ZERO — Main JS
   Interações leves: nav, menu, ticker, reveal
   ============================================ */

(function () {
  'use strict';

  // ---- Skip to content link (acessibilidade) ----
  // Inserido programaticamente para evitar editar 57 páginas.
  // Visível apenas quando recebe foco via teclado (Tab).
  (function setupSkipLink() {
    // Encontrar destino ideal: <main> > <header class="hero|page-header"> > primeiro <section>
    let target = document.querySelector('main');
    if (!target) target = document.querySelector('header.hero, header.page-header');
    if (!target) target = document.querySelector('main ~ section, nav + header + section, nav + section');
    if (!target) target = document.querySelector('section');
    if (!target) return; // sem conteúdo principal identificável, abortar

    // Garantir que tem id
    if (!target.id) target.id = 'main-content';
    // Tornar focável programaticamente (header/section não recebem foco por defeito)
    if (target.tagName !== 'MAIN') {
      target.setAttribute('tabindex', '-1');
    }

    // Criar skip link como primeiro elemento do body
    const skip = document.createElement('a');
    skip.href = '#' + target.id;
    skip.className = 'skip-link';
    skip.textContent = 'Saltar para o conteúdo';
    document.body.insertBefore(skip, document.body.firstChild);
  })();

  // ---- Nav scroll state ----
  const nav = document.querySelector('.nav');
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const current = window.pageYOffset;
      if (current > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
      lastScroll = current;
    }, { passive: true });
  }

  // ---- Mobile menu toggle ----
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.classList.toggle('open');
    });
    // close on link click
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  // ---- Scroll reveal ----
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => obs.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // ---- Hero ticker animation (simulado, fins decorativos) ----
  const ticker = document.querySelector('.hero-ticker');
  if (ticker) {
    const items = [
      { sym: 'WIN', val: '128,450', delta: '+0.42%', pos: true },
      { sym: 'WDO', val: '5,287',   delta: '-0.18%', pos: false },
      { sym: 'PETR4', val: '38.14', delta: '+1.05%', pos: true },
      { sym: 'VALE3', val: '62.78', delta: '-0.34%', pos: false },
      { sym: 'IBOV', val: '128,945', delta: '+0.27%', pos: true }
    ];
    ticker.innerHTML = items.map(i =>
      `<div class="ticker-line">
        <span>${i.sym}</span>
        <span>${i.val}</span>
        <span class="${i.pos ? 'pos' : 'neg'}">${i.delta}</span>
       </div>`
    ).join('');

    // Pequenas variações em loop para simular "vivo" — só visual
    setInterval(() => {
      const lines = ticker.querySelectorAll('.ticker-line');
      lines.forEach((line, idx) => {
        const drift = (Math.random() - 0.5) * 0.15;
        const pos = drift >= 0;
        const span = line.querySelector('span:last-child');
        const sign = pos ? '+' : '';
        span.textContent = `${sign}${drift.toFixed(2)}%`;
        span.className = pos ? 'pos' : 'neg';
      });
    }, 3500);
  }

  // ---- Smooth-scroll para âncoras ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ---- Reading Progress Bar (só em páginas de lição) ----
  const isLessonPage = document.querySelector('.lesson-page') !== null;
  if (isLessonPage) {
    // criar elemento dinamicamente
    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    bar.setAttribute('role', 'progressbar');
    bar.setAttribute('aria-label', 'Progresso de leitura');
    bar.innerHTML = '<div class="reading-progress-fill"></div>';
    document.body.appendChild(bar);

    const fill = bar.querySelector('.reading-progress-fill');

    // Calcular sobre o conteúdo da lição (não a página inteira)
    // Alvo: do topo do .lesson-body até ao fim de .lesson-nav (ou fim de .lesson-wrap)
    const lessonBody = document.querySelector('.lesson-body');
    const lessonWrap = document.querySelector('.lesson-wrap');
    const reference = lessonWrap || lessonBody;

    function updateProgress() {
      if (!reference) return;
      const rect = reference.getBoundingClientRect();
      const winHeight = window.innerHeight;
      // Topo absoluto do alvo
      const refTop = rect.top + window.pageYOffset;
      // Altura do alvo
      const refHeight = reference.offsetHeight;

      // Progresso: começa 0 quando topo do alvo entra no viewport pela parte de cima
      // Termina 100 quando o fundo do alvo sai pelo topo do viewport
      const scrolled = window.pageYOffset - refTop + winHeight;
      const total = refHeight + winHeight;
      let pct = (scrolled / total) * 100;
      // Clamp
      if (pct < 0) pct = 0;
      if (pct > 100) pct = 100;

      fill.style.width = pct + '%';
      bar.setAttribute('aria-valuenow', Math.round(pct));
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();
  }

  // ---- Botão "voltar ao topo" (todas as páginas) ----
  const backBtn = document.createElement('button');
  backBtn.className = 'back-to-top';
  backBtn.setAttribute('aria-label', 'Voltar ao topo');
  backBtn.setAttribute('title', 'Voltar ao topo');
  backBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  `;
  document.body.appendChild(backBtn);

  let backVisible = false;
  function toggleBackBtn() {
    const shouldShow = window.pageYOffset > 600;
    if (shouldShow !== backVisible) {
      backBtn.classList.toggle('visible', shouldShow);
      backVisible = shouldShow;
    }
  }
  window.addEventListener('scroll', toggleBackBtn, { passive: true });
  toggleBackBtn();

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- Sistema de progresso (localStorage) ----
  // Marca lições como concluídas e mostra agregados em modulos.html
  // e nas overviews de cada módulo.

  const STORAGE_KEY = 'tdz-completed-lessons';
  const TOTAL_LICOES_POR_MODULO = { 1: 6, 2: 6, 3: 6, 4: 6, 5: 6, 6: 4, 7: 4, 8: 6 };

  function getCompleted() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function setCompleted(arr) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch (e) {
      // localStorage desactivado ou cheio — falhar silenciosamente
    }
  }

  function toggleLessonCompleted(id) {
    const list = getCompleted();
    const idx = list.indexOf(id);
    if (idx >= 0) {
      list.splice(idx, 1);
    } else {
      list.push(id);
    }
    setCompleted(list);
    return list.indexOf(id) >= 0;
  }

  // Extrair ID da lição a partir do filename: "3-1-grafico-candles.html" → "3-1"
  function extractLessonId(pathname) {
    const match = pathname.match(/\/licoes\/(\d+-\d+)/);
    return match ? match[1] : null;
  }

  // -- Numa página de lição: adicionar caixa de "marcar como concluída" --
  if (isLessonPage) {
    const lessonId = extractLessonId(window.location.pathname);
    if (lessonId) {
      const keyPoints = document.querySelector('.key-points');
      const lessonNav = document.querySelector('.lesson-nav');
      // Inserir entre key-points e lesson-nav (ou antes do nav se não houver key-points)
      const insertAfter = keyPoints || (lessonNav ? lessonNav.previousElementSibling : null);

      if (insertAfter && insertAfter.parentNode) {
        const card = document.createElement('div');
        card.className = 'lesson-completed-card';

        const isCompleted = getCompleted().includes(lessonId);

        card.innerHTML = `
          <button class="lesson-completed-toggle ${isCompleted ? 'is-completed' : ''}" type="button" aria-pressed="${isCompleted}">
            <span class="lcc-check" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span class="lcc-label">${isCompleted ? 'Lição concluída' : 'Marcar como concluída'}</span>
          </button>
          <p class="lcc-hint">O progresso fica guardado apenas no seu browser.</p>
        `;

        insertAfter.parentNode.insertBefore(card, insertAfter.nextSibling);

        const btn = card.querySelector('.lesson-completed-toggle');
        const label = card.querySelector('.lcc-label');
        btn.addEventListener('click', () => {
          const nowCompleted = toggleLessonCompleted(lessonId);
          btn.classList.toggle('is-completed', nowCompleted);
          btn.setAttribute('aria-pressed', nowCompleted);
          label.textContent = nowCompleted ? 'Lição concluída' : 'Marcar como concluída';
        });
      }
    }
  }

  // -- Em modulos.html: agregar contagem por módulo --
  const moduleCards = document.querySelectorAll('.module-card[id^="m"]');
  if (moduleCards.length) {
    const completed = getCompleted();

    // Calcular contagens por módulo
    const counts = {};
    completed.forEach(id => {
      const modNum = id.split('-')[0];
      counts[modNum] = (counts[modNum] || 0) + 1;
    });

    moduleCards.forEach(card => {
      const id = card.id;  // "m1", "m2", ...
      const modNum = id.replace('m', '');
      const total = TOTAL_LICOES_POR_MODULO[modNum] || 0;
      const done = counts[modNum] || 0;
      if (!total) return;

      // Inserir badge de progresso
      const content = card.querySelector('.module-content');
      if (!content) return;

      const badge = document.createElement('div');
      badge.className = 'module-progress-badge';
      const pct = Math.round((done / total) * 100);
      const isComplete = done === total;
      badge.innerHTML = `
        <div class="mpb-bar"><div class="mpb-fill" style="width: ${pct}%"></div></div>
        <div class="mpb-text">${done} de ${total} lições${isComplete ? ' · concluído' : ''}</div>
      `;
      if (isComplete) badge.classList.add('mpb-complete');
      content.appendChild(badge);
    });
  }

  // -- Nas overviews de cada módulo (modulos/X.html): marcar lições concluídas --
  const lessonItems = document.querySelectorAll('.lesson-item[href*="/licoes/"]');
  if (lessonItems.length) {
    const completed = getCompleted();
    lessonItems.forEach(item => {
      const href = item.getAttribute('href') || '';
      const m = href.match(/(\d+-\d+)/);
      if (m && completed.includes(m[1])) {
        item.classList.add('lesson-item-done');
        // adicionar checkmark visual
        const arrow = item.querySelector('.lesson-arrow');
        if (arrow && !arrow.parentNode.querySelector('.lesson-done-mark')) {
          const mark = document.createElement('span');
          mark.className = 'lesson-done-mark';
          mark.setAttribute('aria-label', 'concluída');
          mark.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
          arrow.parentNode.insertBefore(mark, arrow);
        }
      }
    });
  }
})();
