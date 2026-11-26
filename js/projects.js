/* ImageTool Spotlight & All GitHub Projects Showcase */
(function () {
  const IMAGETOOL_MODULES = {
    janai: {
      title: '1. JaNai AI (Manga & Illustration)',
      summary: 'Vulkan-accelerated Python NCNN super-resolution purpose-built for manga screentones, line art, and digital illustrations across 22 on-demand GitHub-hosted models.',
      bullets: [
        'Auto Detect analyzes grayscale vs. chroma fraction, snaps B&W manga to 1200p–2048p height tiers, and pairs color art with IllustrationJaNai V3.',
        'Queue Routing Inspector previews per-file analysis metrics and 2-pass chained workflows before converting.',
        'Reflect-padded block alignment, overlap tile blending, and automatic FP16-to-FP32 GPU fallback.'
      ]
    },
    converter: {
      title: '2. Batch Converter, PSD & PDF Suite',
      summary: 'High-speed batch conversion across PNG, JPEG, WEBP, BMP, GIF, TIFF, PDF, and multi-layered Adobe Photoshop (.psd) files with zero cloud dependency.',
      bullets: [
        'Extracts visible Photoshop PSD layers into organized per-document folders while skipping hidden parent groups.',
        'Multi-page PDF rasterization at 72–600 DPI with custom 1-indexed page ranges (e.g. 1-4, 7).',
        'Workflow presets (Web WEBP, Archival PNG, PSD Layers, PDF Pages), hex alpha mattes, and subfolder mirroring.'
      ]
    },
    upscaler: {
      title: '3. Multi-Engine AI Upscaler (2x–8x)',
      summary: 'Hardware-accelerated 2x to 8x super-resolution running locally on AMD, NVIDIA, and Intel GPUs via Vulkan with multi-GPU selection and CPU fallback.',
      bullets: [
        'Supports Real-ESRGAN, Upscayl (11 optional community NCNN packs like UltraSharp & Remacri), Real-CUGAN SyncGap, Waifu2x 2025, and SRMD.',
        'Optional SSAA post-resize downsampling and lossless two-pass 8x scaling.',
        'EXIF auto-orientation staging, alpha preservation, and fractional EMA ETA progress smoothing.'
      ]
    },
    denoiser: {
      title: '4. AI Denoiser & Grain Preserve',
      summary: '1x compression-artifact and sensor-noise removal powered by Waifu2x 2025 (cunet/upconv7), Real-CUGAN, and SRMD without altering native resolution.',
      bullets: [
        'Adjustable Grain Preserve blending mixes controlled original micro-texture back to prevent plastic over-smoothing.',
        'Tune noise levels independently (-1 to 10 on SRMD, -1 to 3 on Waifu2x/Real-CUGAN).',
        'Retains original format or exports directly to lossless PNG / WebP.'
      ]
    },
    stitcher: {
      title: '5. High-Capacity Strip & Grid Stitcher',
      summary: 'Purpose-built vertical, horizontal, and NxM grid canvas stitcher designed for long webtoon/manhwa strips and multi-panel chapters.',
      bullets: [
        'Grouped folder scanner stages chapters independently with live output dimension estimates.',
        'Supports negative overlap gaps, outer margins, custom hex mattes, and natural / alpha / mtime sorting.',
        'Automatic WebP (16,300px) and JPEG (65,500px) chunk splitting avoids codec dimension failures.'
      ]
    },
    diagnostics: {
      title: '6. Multi-Batch Compare & Settings',
      summary: 'Interactive before/after visual comparison across multiple batches with 50%–800% cursor-anchored zoom and customizable HUD surfaces.',
      bullets: [
        'Compare Inspector retains results across multiple runs with instant batch switching and missing-file cleanup.',
        'Synchronized click-drag pan and independent split divider inspect before/after at pixel level.',
        'Translucent or opaque draggable Progress HUD alongside 6 live synchronized color themes.'
      ]
    }
  };

  const PROJECTS = [
    {
      repo: 'psd-converter',
      title: 'ImageTool (PSD & Image Converter Suite)',
      category: 'desktop',
      featured: true,
      icon: 'wand-magic-sparkles',
      version: 'v7.5 Latest',
      language: 'Python · FastAPI · React 19',
      langColor: '#3572A5',
      starsFallback: 5,
      summary: 'Flagship offline desktop suite (FastAPI + React 19 + Edge WebView2) for PSD layer extraction, multi-page PDF rasterization, 22 MangaJaNai NCNN packs, Real-ESRGAN/Real-CUGAN/Waifu2x/SRMD upscaling & denoising, and safe canvas stitching.',
      tags: ['React 19', 'FastAPI', 'NCNN Vulkan', 'MangaJaNai', 'PSD/PDF'],
      highlights: [
        '22 on-demand MangaJaNai & IllustrationJaNai NCNN packs with Auto Detect routing',
        'Extracts visible PSD layers & multi-page PDFs up to 600 DPI',
        'Multi-batch Before/After split-screen comparator & 6 synchronized UI themes',
        'Windows Setup Installer & Portable build with zero cloud dependency'
      ],
      repoUrl: 'https://github.com/GuptaAman777/psd-converter',
      releaseUrl: 'https://github.com/GuptaAman777/psd-converter/releases',
      liveUrl: 'https://guptaaman777.me/psd-converter/',
      trackRelease: true
    },
    {
      repo: 'mangajanai-illustrationjanai-ncnn-vulkan',
      title: 'MangaJaNai & IllustrationJaNai NCNN',
      category: 'desktop',
      featured: false,
      icon: 'microchip',
      version: '22 Models',
      language: 'Python · NCNN',
      langColor: '#3572A5',
      starsFallback: 0,
      summary: '22 MangaJaNai & IllustrationJaNai super-resolution models (ESRGAN 2x/4x, FDAT, SPAN) converted from FP16 ONNX to Vulkan-capable ncnn with zero CPU layer fallbacks.',
      tags: ['Vulkan NCNN', 'MangaJaNai', 'ESRGAN', 'FDAT', 'SPAN'],
      highlights: [
        '44 direct .ncnn.param + .ncnn.bin model files in GitHub Releases (no zip needed)',
        'Verified support_vulkan = True for every layer on FP16 and FP32 Vulkan GPUs',
        'Built to plug directly into ImageTool (psd-converter) for manga & illustration scaling'
      ],
      repoUrl: 'https://github.com/GuptaAman777/mangajanai-illustrationjanai-ncnn-vulkan',
      releaseUrl: 'https://github.com/GuptaAman777/mangajanai-illustrationjanai-ncnn-vulkan/releases'
    },
    {
      repo: 'Rename-Tool',
      title: 'File Renaming Tool',
      category: 'utility',
      featured: false,
      icon: 'i-cursor',
      version: 'v2.4 Latest',
      language: 'Python · PyQt6',
      langColor: '#3572A5',
      starsFallback: 0,
      summary: 'Modern dark-mode batch file renamer with regex smart-number sorting, zero-padded digit formatting, custom prefixes/suffixes, folder scanning, and one-click Undo.',
      tags: ['Batch Rename', 'Regex', 'Undo History', 'Windows EXE'],
      highlights: [
        'Automatically detects and sorts files by embedded numbers',
        'Configurable zero-padding (e.g., 001, 002) with prefix & suffix',
        'Instant Undo reverts an entire batch rename safely'
      ],
      repoUrl: 'https://github.com/GuptaAman777/Rename-Tool',
      releaseUrl: 'https://github.com/GuptaAman777/Rename-Tool/releases',
      trackRelease: true
    },
    {
      repo: 'stitched',
      title: 'Image Stitcher',
      category: 'desktop',
      featured: false,
      icon: 'object-group',
      version: 'v1.0',
      language: 'Python · PyQt6',
      langColor: '#3572A5',
      starsFallback: 0,
      summary: 'Multi-threaded PyQt6 desktop utility for batch stitching subdirectories of chapter/comic images into clean output formats with configurable quality.',
      tags: ['PyQt6', 'Pillow', 'QThread', 'Batch Stitching'],
      highlights: [
        'Processes nested chapter folders automatically in background QThreads',
        'Supports JPG, PNG, WEBP, BMP, PDF, and TIFF inputs',
        'Evolved into the high-capacity Stitcher module inside ImageTool'
      ],
      repoUrl: 'https://github.com/GuptaAman777/stitched',
      releaseUrl: 'https://github.com/GuptaAman777/stitched/releases',
      trackRelease: true
    },
    {
      repo: 'GuptaAman777.github.io',
      title: 'GuptaAman777 Portfolio Hub',
      category: 'web',
      featured: false,
      icon: 'droplet',
      version: 'Live',
      language: 'HTML · CSS · JS',
      langColor: '#f1e05a',
      starsFallback: 0,
      summary: 'Central portfolio hub built with an Apple-inspired Liquid Glass material system, interactive ImageTool explorer, Dark/Frost glass toggle, and shared 6-palette sync.',
      tags: ['Liquid Glass', 'GitHub Pages', 'Zero Build', 'Mobile Lite'],
      highlights: [
        'Shared theme & accent palette synced seamlessly with Personal & ImageTool sites',
        'Inline SVG icons & lightweight mobile mode with zero render-blocking bloat',
        'Live GitHub repository metadata hydration with session caching'
      ],
      repoUrl: 'https://github.com/GuptaAman777/GuptaAman777.github.io',
      liveUrl: 'https://guptaaman777.me/'
    },
    {
      repo: 'guptaaman777',
      title: 'GuptaAman777 Personal & Socials',
      category: 'web',
      featured: false,
      icon: 'user-astronaut',
      version: 'Live',
      language: 'HTML · CSS · JS',
      langColor: '#f1e05a',
      starsFallback: 0,
      summary: 'Personal bio, scanlation editor card (CL/RD+TS), quick-copy Discord handles, and direct links hub sharing the same Liquid Glass system.',
      tags: ['Personal Hub', 'Quick Links', 'Liquid Glass', 'Mobile Ready'],
      highlights: [
        'One-tap copy for Discord (guptaaman777 / katowhy) and Binance ID',
        'Shares CSS & synchronized theme state seamlessly with the main hub',
        'Lightweight static page tuned for instant mobile loading'
      ],
      repoUrl: 'https://github.com/GuptaAman777/guptaaman777',
      liveUrl: 'https://guptaaman777.me/guptaaman777/'
    },
    {
      repo: 'guptaaman777-imagehosting',
      title: 'Static Media Hosting Repo',
      category: 'web',
      featured: false,
      icon: 'cloud-arrow-up',
      version: 'Active',
      language: 'HTML · Static CDN',
      langColor: '#e34c26',
      starsFallback: 0,
      summary: 'Dedicated static asset repository on GitHub for hosting images, banners, and media assets.',
      tags: ['Media Assets', 'GitHub Raw', 'Static CDN'],
      highlights: [
        'Organized static image directories served via GitHub Raw',
        'Lightweight zero-server asset storage'
      ],
      repoUrl: 'https://github.com/GuptaAman777/guptaaman777-imagehosting',
      releaseUrl: ''
    }
  ];

  const CACHE_KEY = 'ga777-gh-cache-v1';
  const CACHE_TTL_MS = 15 * 60 * 1000;

  function renderSpotlightModule(key) {
    const container = document.getElementById('moduleDetailCard');
    if (!container || !IMAGETOOL_MODULES[key]) return;
    const mod = IMAGETOOL_MODULES[key];
    const esc = window.GlassUI.escapeHtml;
    const checkIcon = window.GlassUI.icon('circle-check');

    container.innerHTML = `
      <h3>${esc(mod.title)}</h3>
      <p>${esc(mod.summary)}</p>
      <ul class="feature-checklist">
        ${mod.bullets.map((b) => `<li>${checkIcon}<span>${esc(b)}</span></li>`).join('')}
      </ul>
    `;
  }

  function initSpotlight() {
    renderSpotlightModule('janai');

    document.querySelectorAll('#imageToolTabs .module-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('#imageToolTabs .module-tab').forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        renderSpotlightModule(tab.dataset.module);
      });
    });

    document.querySelectorAll('.palette-swatch').forEach((swatch) => {
      swatch.addEventListener('click', () => {
        window.GlassUI.applyPalette(swatch.dataset.palette);
      });
    });
  }

  let liveRepoMap = {};
  let livePublicCount = 0;

  function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    const esc = window.GlassUI.escapeHtml;
    const icon = window.GlassUI.icon;

    const list = filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

    grid.innerHTML = list.map((proj) => {
      const live = liveRepoMap[proj.repo.toLowerCase()];
      const stars = live ? live.stargazers_count : proj.starsFallback;
      const showFeatured = filter === 'all' && proj.featured;

      return `
        <article class="glass-surface glass-card-hover project-card ${showFeatured ? 'featured' : ''}" data-repo="${esc(proj.repo)}">
          <div>
            <div class="project-card-top">
              <div class="project-icon">${icon(proj.icon)}</div>
              <div class="project-meta-badges">
                <span class="tag-badge accent">${esc(proj.version)}</span>
                ${stars > 0 ? `<span class="tag-badge">${icon('star', 'gi-star')} ${stars}</span>` : ''}
              </div>
            </div>

            <h3 class="project-title">${esc(proj.title)}</h3>
            <p class="project-desc">${esc(proj.summary)}</p>

            <div class="project-highlights">
              ${proj.tags.map((t) => `<span class="tag-badge">${esc(t)}</span>`).join('')}
            </div>
          </div>

          <div class="project-card-foot">
            <span class="project-lang">
              <span class="lang-dot" style="background:${esc(proj.langColor)}"></span>
              ${esc(proj.language)}
            </span>
            <div class="project-actions">
              <button type="button" class="glass-btn glass-btn-sm inspect-project-btn" data-repo="${esc(proj.repo)}">
                Details
              </button>
              ${proj.liveUrl ? `
                <a href="${esc(proj.liveUrl)}" class="glass-btn glass-btn-sm" aria-label="Open ${esc(proj.title)} website" title="Live Site">
                  ${icon('globe')}
                </a>
              ` : ''}
              <a href="${esc(proj.repoUrl)}" target="_blank" rel="noopener noreferrer" class="glass-btn glass-btn-sm" aria-label="Open ${esc(proj.title)} on GitHub" title="GitHub">
                ${icon('github')}
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('.inspect-project-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const proj = PROJECTS.find((p) => p.repo === btn.dataset.repo);
        if (proj) openProjectModal(proj);
      });
    });
  }

  function openProjectModal(proj) {
    const esc = window.GlassUI.escapeHtml;
    const icon = window.GlassUI.icon;
    const live = liveRepoMap[proj.repo.toLowerCase()];
    const updatedText = live?.updated_at
      ? `Updated ${new Date(live.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}`
      : proj.version;

    const bodyHtml = `
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">
        <span class="tag-badge accent">${esc(proj.language)}</span>
        <span class="tag-badge">${esc(updatedText)}</span>
        ${proj.tags.map((t) => `<span class="tag-badge">${esc(t)}</span>`).join('')}
      </div>
      <p style="color:var(--text-secondary);margin-bottom:18px;">${esc(proj.summary)}</p>
      <h4 style="font-size:0.95rem;margin-bottom:10px;">Key Highlights</h4>
      <ul class="feature-checklist" style="margin-bottom:22px;">
        ${proj.highlights.map((h) => `<li>${icon('circle-check')}<span>${esc(h)}</span></li>`).join('')}
      </ul>
      <div class="hero-cta-row">
        <a href="${esc(proj.repoUrl)}" target="_blank" rel="noopener noreferrer" class="glass-btn glass-btn-primary glass-btn-sm">
          ${icon('github')} View Repository
        </a>
        ${proj.liveUrl ? `
          <a href="${esc(proj.liveUrl)}" class="glass-btn glass-btn-sm">
            ${icon('globe')} Open Site
          </a>
        ` : ''}
        ${proj.releaseUrl ? `
          <a href="${esc(proj.releaseUrl)}" target="_blank" rel="noopener noreferrer" class="glass-btn glass-btn-sm">
            ${icon('arrow-up-right-from-square')} ${proj.category === 'web' ? 'Open Live' : 'Releases'}
          </a>
        ` : ''}
      </div>
    `;

    window.GlassUI.openModal({
      eyebrow: 'Project Architecture',
      title: proj.title,
      bodyHtml
    });
  }

  function normalizeTag(tag) {
    const clean = String(tag || '').trim();
    if (!clean) return '';
    return /^v/i.test(clean) ? clean : `v${clean}`;
  }

  function applyHydratedData(repoMap, publicCount, releaseMap) {
    liveRepoMap = repoMap || {};
    livePublicCount = publicCount || 0;

    const statRepos = document.getElementById('statRepos');
    if (statRepos && livePublicCount > 0) {
      statRepos.textContent = String(livePublicCount);
    }

    if (releaseMap) {
      PROJECTS.forEach((proj) => {
        const ver = releaseMap[proj.repo];
        if (!ver) return;
        proj.version = `${ver} Latest`;
        if (proj.repo === 'psd-converter') {
          const statVer = document.getElementById('statImageToolVersion');
          const btnLabel = document.getElementById('imageToolReleaseLabel');
          if (statVer) statVer.textContent = ver;
          if (btnLabel) btnLabel.textContent = `Releases (${ver})`;
        }
      });
    }

    const activeFilter = document.querySelector('#projectFilters .filter-pill.active')?.dataset.filter || 'all';
    renderProjects(activeFilter);
  }

  async function hydrateFromGitHub() {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (raw) {
        const cached = JSON.parse(raw);
        if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
          applyHydratedData(cached.repoMap, cached.publicCount, cached.releaseMap);
          return;
        }
      }
    } catch (_) {}

    if (navigator.connection && navigator.connection.saveData) {
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4500);

    try {
      const repoMap = {};
      let publicCount = 0;
      const releaseMap = {};

      const reposRes = await fetch('https://api.github.com/users/GuptaAman777/repos?per_page=100', {
        signal: controller.signal
      });
      if (reposRes.ok) {
        const repos = await reposRes.json();
        if (Array.isArray(repos)) {
          repos.forEach((r) => {
            if (!r.private) publicCount++;
            repoMap[String(r.name).toLowerCase()] = {
              stargazers_count: r.stargazers_count || 0,
              updated_at: r.updated_at || ''
            };
          });
        }
      }

      await Promise.all(
        PROJECTS.filter((p) => p.trackRelease).map(async (proj) => {
          try {
            const relRes = await fetch(`https://api.github.com/repos/GuptaAman777/${proj.repo}/releases/latest`, {
              signal: controller.signal
            });
            if (!relRes.ok) return;
            const rel = await relRes.json();
            const ver = normalizeTag(rel.tag_name);
            if (ver) releaseMap[proj.repo] = ver;
          } catch (_) {}
        })
      );

      applyHydratedData(repoMap, publicCount, releaseMap);

      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({
          ts: Date.now(),
          repoMap,
          publicCount,
          releaseMap
        }));
      } catch (_) {}
    } catch (_) {
      // Keep static fallback metadata
    } finally {
      clearTimeout(timer);
    }
  }

  function initProjectFilters() {
    document.querySelectorAll('#projectFilters .filter-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#projectFilters .filter-pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        renderProjects(pill.dataset.filter);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initSpotlight();
    initProjectFilters();
    renderProjects('all');
    hydrateFromGitHub();
  });
})();
