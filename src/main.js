import './styles.css';

const baseUrl = import.meta.env.BASE_URL;
const imageSizes = [96, 128, 256, 512, 1024, 2048];

const products = [
  {
    id: 'cr',
    name: 'Центр регистрации',
    shortName: 'Центр регистрации',
    description: 'Логотип продукта для выпуска и управления цифровыми сертификатами.',
  },
  {
    id: 'idm',
    name: 'IDM',
    shortName: 'IDM',
    description: 'Логотип продукта для управления учётными записями, ролями и правами доступа.',
  },
  {
    id: 'id',
    name: 'ID',
    shortName: 'ID',
    description: 'Логотип продукта для идентификации и аутентификации пользователей.',
  },
  {
    id: 'skzi',
    name: 'СКЗИ',
    shortName: 'СКЗИ',
    description: 'Логотип продукта для криптографической защиты информации.',
  },
  {
    id: 'pdn',
    name: 'PDn',
    shortName: 'PDn',
    description: 'Логотип продукта PDn.',
  },
  {
    id: 'documents',
    name: 'Документы',
    shortName: 'Документы',
    description: 'Логотип продукта для работы с документами.',
  },
  {
    id: 'ca',
    name: 'CA',
    shortName: 'CA',
    description: 'Логотип продукта CA.',
  },
  {
    id: 'server',
    name: 'Server',
    shortName: 'Server',
    description: 'Логотип продукта Server.',
  },
  {
    id: 'sign-encrypt',
    name: 'Подпись и шифрование',
    shortName: 'Подпись и шифрование',
    description: 'Логотип продукта для электронной подписи и шифрования документов.',
  },
  {
    id: 'lunch',
    name: 'Корпоративные обеды',
    shortName: 'Корпоративные обеды',
    assetName: 'lunch-logo-round',
    family: 'Корпоративный сервис',
    description: 'Логотип продукта «Корпоративные обеды» в фирменном зелёном цвете.',
    accent: '#7ABC2F',
    accentHover: '#6BA629',
    accentText: '#365A16',
    surface: '#F2F8EA',
  },
  {
    id: 'oidc',
    name: 'OIDC Тест-инструмент',
    shortName: 'OIDC Тест-инструмент',
    assetName: 'oidc-test-tool',
    family: 'Инструмент тестирования',
    description: 'Логотип продукта для тестирования OpenID Connect (OIDC).',
    accent: '#1774FF',
    accentHover: '#3486FF',
    accentText: '#184EA8',
    surface: '#EDF4FF',
  },
];

const videos = [
  {
    id: 'id-webauthn',
    product: 'КриптоАРМ ID',
    title: 'WebAuthn',
    description: 'Демонстрация входа с помощью WebAuthn.',
    duration: '00:20',
    width: 1080,
    height: 1920,
  },
  {
    id: 'id-login',
    product: 'КриптоАРМ ID',
    title: 'Сценарий входа',
    description: 'Сценарий входа в систему КриптоАРМ ID.',
    duration: '00:25',
    width: 1080,
    height: 1920,
  },
  {
    id: 'registration-center',
    product: 'КриптоАРМ',
    title: 'Центр регистрации',
    description: 'Знакомство с Центром регистрации.',
    duration: '01:17',
    width: 1920,
    height: 1080,
  },
  {
    id: 'mobile-sign-encrypt',
    product: 'КриптоАРМ Mobile',
    title: 'Подпись и шифрование',
    description: 'Подпись и шифрование документов в КриптоАРМ Mobile.',
    duration: '00:45',
    width: 1920,
    height: 1080,
  },
];

const mediaSections = [
  { id: 'logos', title: 'Логотипы продуктов', description: `${products.length} продуктов · SVG и PNG` },
  { id: 'colors', title: 'Фирменные цвета', description: 'Основная и акцентные палитры' },
  { id: 'videos', title: 'Видео о продуктах', description: 'Демонстрации и сценарии работы' },
  { id: 'merch', title: 'Фирменный мерч', description: 'Худи и примеры нанесения' },
];

const palette = [
  { name: 'Фирменный', role: 'Логотипы', value: '#CC4533', inverse: true },
  { name: 'Интерактивный', role: 'Кнопки и действия', value: '#BD4F3C', inverse: true },
  { name: 'Ошибка', role: 'Ошибки и предупреждения', value: '#D42D23', inverse: true },
  { name: 'Основной текст', role: 'Заголовки и основной текст', value: '#000000', inverse: true },
  { name: 'Вторичный тёмный', role: 'Текст и иконки', value: '#727373', inverse: true },
  { name: 'Placeholder', role: 'Подсказки в полях', value: '#919192', inverse: true },
  { name: 'Вспомогательный', role: 'Подписи и метаданные', value: '#9AA1AD', inverse: true },
  { name: 'Граница', role: 'Контуры и разделители', value: '#E0E0E0' },
  { name: 'Основной фон', role: 'Фон страницы', value: '#E2E1E5' },
  { name: 'Вложенная поверхность', role: 'Поля и мягкие блоки', value: '#F9FAFB' },
  { name: 'Поверхность', role: 'Карточки и панели', value: '#FFFFFF', bordered: true },
];

const lunchPalette = [
  { name: 'Основной зелёный', role: 'Фирменный цвет логотипа', value: '#7ABC2F' },
  { name: 'Тёмный зелёный', role: 'Текст и иконки на светлом фоне', value: '#365A16', inverse: true },
  { name: 'Светлый зелёный', role: 'Выделения и акцентные плашки', value: '#D7EBBE' },
  { name: 'Мягкий зелёный', role: 'Фон блоков и поверхностей', value: '#F2F8EA' },
];

const oidcPalette = [
  { name: 'Основной синий', role: 'Центральный цвет градиента', value: '#1774FF' },
  { name: 'Фиолетовый', role: 'Начало градиента', value: '#6235FF', inverse: true },
  { name: 'Бирюзовый', role: 'Завершение градиента', value: '#18D0E8' },
  { name: 'Глубокий синий', role: 'Цвет свечения в логотипе', value: '#003FFF', inverse: true },
];

const icons = {
  arrowDown: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
    </svg>`,
  copy: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h1" />
    </svg>`,
  check: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>`,
  chevron: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>`,
};

function assetPath(filename) {
  return `${baseUrl}logos/${filename}`;
}

function productFilename(product, extension, size) {
  const suffix = size ? `-${size}` : '';
  return `${product.assetName || `cryptoarm-${product.id}`}${suffix}.${extension}`;
}

function renderProductCard(product, index) {
  const svgFilename = productFilename(product, 'svg');
  const defaultSvg = productFilename(product, 'svg', 1024);
  const defaultPng = productFilename(product, 'png', 1024);

  return `
    <article class="product-card" aria-labelledby="product-${product.id}"
      ${product.accent ? `style="--product-accent: ${product.accent}; --product-accent-hover: ${product.accentHover}; --product-accent-text: ${product.accentText}; --product-surface: ${product.surface}; --product-button-text: var(--text);"` : ''}>
      <div class="product-preview">
        <div class="product-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</div>
        <img
          src="${assetPath(svgFilename)}"
          alt="Логотип ${product.name}"
          width="112"
          height="112"
        />
        <span class="format-badge">SVG · PNG</span>
      </div>
      <div class="product-content">
        <div class="product-copy">
          <p class="product-family">${product.family || 'Продукт КриптоАРМ'}</p>
          <h3 id="product-${product.id}">${product.name}</h3>
          <p>${product.description}</p>
        </div>

        <div class="download-panel">
          <label class="size-select">
            <span class="sr-only">Размер SVG и PNG для ${product.name}</span>
            <select data-size-select="${product.id}" aria-label="Размер SVG и PNG для ${product.name}">
              ${imageSizes
                .map(
                  (size) =>
                    `<option value="${size}" ${size === 1024 ? 'selected' : ''}>${size} × ${size} px</option>`,
                )
                .join('')}
            </select>
            <span class="select-chevron" aria-hidden="true">${icons.chevron}</span>
          </label>

          <div class="download-actions">
            <a
              class="button button-secondary"
              href="${assetPath(defaultSvg)}"
              download="${defaultSvg}"
              data-svg-download="${product.id}"
              data-product-name="${product.name}"
              data-download-label="${product.name}, SVG, 1024 × 1024 px"
              aria-label="Скачать ${product.name} в SVG, 1024 на 1024 пикселей"
            >
              ${icons.arrowDown}
              <span>Скачать SVG</span>
            </a>
            <a
              class="button button-primary"
              href="${assetPath(defaultPng)}"
              download="${defaultPng}"
              data-png-download="${product.id}"
              data-product-name="${product.name}"
              data-download-label="${product.name}, PNG, 1024 × 1024 px"
              aria-label="Скачать ${product.name} в PNG, 1024 на 1024 пикселей"
            >
              ${icons.arrowDown}
              <span>Скачать PNG</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderColorCard(color) {
  return `
    <article class="color-card">
      <div
        class="color-swatch ${color.bordered ? 'color-swatch-bordered' : ''}"
        style="--swatch: ${color.value}"
        aria-label="Образец цвета ${color.value}"
      >
        <span class="swatch-value ${color.inverse ? 'swatch-value-inverse' : ''}">${color.value}</span>
      </div>
      <div class="color-info">
        <div>
          <h3>${color.name}</h3>
          <p>${color.role}</p>
        </div>
        <button
          class="copy-button"
          type="button"
          data-copy-color="${color.value}"
          aria-label="Копировать цвет ${color.value}"
          title="Копировать цвет ${color.value}"
        >
          <span class="copy-icon">${icons.copy}</span>
          <span class="copy-label sr-only">Копировать</span>
        </button>
      </div>
    </article>
  `;
}

function renderVideoCard(video) {
  const filename = `${video.id}.mp4`;
  return `
    <article class="video-card ${video.height > video.width ? 'video-card-portrait' : ''}" aria-labelledby="video-${video.id}">
      <div class="video-preview">
        <video
          controls
          playsinline
          preload="none"
          poster="${baseUrl}videos/${video.id}.jpg"
          width="${video.width}"
          height="${video.height}"
          aria-label="${video.product} — ${video.title}"
        >
          <source src="${baseUrl}videos/${filename}" type="video/mp4" />
          Ваш браузер не поддерживает просмотр видео. Скачайте ролик по ссылке ниже.
        </video>
      </div>
      <div class="video-content">
        <div class="video-meta"><span>${video.product}</span><span>MP4 · ${video.duration}</span></div>
        <h3 id="video-${video.id}">${video.title}</h3>
        <p>${video.description}</p>
        <div class="video-actions">
          <a
            class="button button-secondary"
            href="${baseUrl}videos/${filename}"
            download="${filename}"
            data-download-label="${video.product} — ${video.title}, MP4"
            aria-label="Скачать видео ${video.product} — ${video.title}"
          >${icons.arrowDown}<span>Скачать видео</span></a>
        </div>
      </div>
    </article>
  `;
}

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#content">Перейти к содержимому</a>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="Брендбук КриптоАРМ — на главную">
        <img src="${assetPath('cryptoarm-id.svg')}" alt="" width="40" height="40" />
        <span>КриптоАРМ</span>
        <span class="brand-divider" aria-hidden="true"></span>
        <span class="brand-section">Брендбук</span>
      </a>
      <nav class="site-nav" aria-label="Разделы медиакита">
        <a href="#logos">Логотипы</a>
        <a href="#colors">Цвета</a>
        <a href="#videos">Видео</a>
        <a href="#merch">Мерч</a>
      </nav>
    </div>
  </header>

  <main id="content">
    <section class="hero section" id="top">
      <div class="container">
        <div class="hero-panel">
          <div class="hero-copy">
            <p class="eyebrow">Медиакит компании</p>
            <h1>Брендбук КриптоАРМ</h1>
            <p class="hero-description">
              Логотипы продуктов, фирменные цвета, видео и мерч — материалы
              для презентаций, публикаций и коммуникаций компании.
            </p>
            <div class="hero-actions">
              <a class="button button-primary button-large" href="#logos">
                Бренд-материалы
                ${icons.chevron}
              </a>
              <a class="text-link" href="#videos">Смотреть видео</a>
            </div>
          </div>

          <div class="hero-showcase" aria-label="Состав медиакита КриптоАРМ">
            <div class="hero-showcase-head">
              <span>В медиаките</span>
              <span>2026</span>
            </div>
            <div class="media-index">
              ${mediaSections
                .map(
                  (section, index) => `
                    <a class="media-index-link" href="#${section.id}">
                      <span class="media-index-number" aria-hidden="true">0${index + 1}</span>
                      <span class="media-index-copy"><strong>${section.title}</strong><span>${section.description}</span></span>
                      ${icons.chevron}
                    </a>`,
                )
                .join('')}
            </div>
            <div class="hero-stats" aria-label="Состав материалов">
              <div><strong>${products.length}</strong><span>продуктов</span></div>
              <div><strong>${imageSizes.length}</strong><span>размеров изображений</span></div>
              <div><strong>${videos.length}</strong><span>видео о продуктах</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section logos-section" id="logos" aria-labelledby="logos-title">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Файлы для скачивания</p>
            <h2 id="logos-title">Логотипы продуктов</h2>
          </div>
          <p>
            SVG подходит для печати и масштабирования. PNG — для презентаций,
            документов и цифровых интерфейсов.
          </p>
        </div>
        <div class="products-grid">
          ${products.map(renderProductCard).join('')}
        </div>
      </div>
    </section>

    <section class="section colors-section" id="colors" aria-labelledby="colors-title">
      <div class="container">
        <div class="colors-intro">
          <div>
            <p class="eyebrow">Цветовое решение</p>
            <h2 id="colors-title">Палитра интерфейса</h2>
          </div>
          <p>
            Цвета собраны из продуктовых знаков и интерфейса КриптоАРМ ID.
            Нажмите кнопку рядом с нужным оттенком, чтобы скопировать HEX.
          </p>
        </div>
        <div class="palette-grid">
          ${palette.map(renderColorCard).join('')}
        </div>
        <section class="accent-palette" aria-labelledby="lunch-colors-title" style="--palette-accent: #365A16">
          <div class="colors-intro">
            <div>
              <p class="eyebrow">Акцентные цвета</p>
              <h2 id="lunch-colors-title">Корпоративные обеды</h2>
            </div>
            <p>
              Основной зелёный взят из логотипа. Дополнительные оттенки подобраны
              для текста, выделений и мягких фоновых поверхностей.
            </p>
          </div>
          <div class="palette-grid accent-palette-grid">
            ${lunchPalette.map(renderColorCard).join('')}
          </div>
        </section>
        <section class="accent-palette" aria-labelledby="oidc-colors-title" style="--palette-accent: #184EA8">
          <div class="colors-intro">
            <div>
              <p class="eyebrow">Акцентные цвета</p>
              <h2 id="oidc-colors-title">OIDC Тест-инструмент</h2>
            </div>
            <p>
              Основной синий, фиолетовый и бирюзовый образуют градиент логотипа.
              Глубокий синий используется в слое свечения. Все цвета взяты из SVG.
            </p>
          </div>
          <div class="palette-grid accent-palette-grid">
            ${oidcPalette.map(renderColorCard).join('')}
          </div>
        </section>
      </div>
    </section>

    <section class="section videos-section" id="videos" aria-labelledby="videos-title">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Продукты в действии</p>
            <h2 id="videos-title">Видео</h2>
          </div>
          <p>Демонстрации возможностей и сценарии работы. Смотрите ролики на странице или скачивайте для презентаций.</p>
        </div>
        <div class="video-carousel" role="region" aria-roledescription="карусель" aria-label="Видео о продуктах">
          <div class="video-carousel-toolbar">
            <p>Листайте ролики по горизонтали</p>
            <div class="video-carousel-controls">
              <button class="carousel-button carousel-button-previous" type="button" aria-label="Предыдущее видео" aria-controls="videos-track" data-video-direction="-1" disabled>${icons.chevron}</button>
              <button class="carousel-button" type="button" aria-label="Следующее видео" aria-controls="videos-track" data-video-direction="1">${icons.chevron}</button>
            </div>
          </div>
          <div class="videos-track" id="videos-track" tabindex="0" aria-label="Лента видео, прокрутка по горизонтали">${videos.map(renderVideoCard).join('')}</div>
        </div>
      </div>
    </section>

    <section class="section merch-section" id="merch" aria-labelledby="merch-title">
      <div class="container">
        <div class="section-heading merch-heading">
          <div>
            <p class="eyebrow">Фирменный мерч</p>
            <h2 id="merch-title">Худи бренда КриптоАРМ</h2>
          </div>
          <p>
            Варианты нанесения фирменной графики и примеры того,
            как худи выглядит в образе.
          </p>
        </div>

        <div class="merch-product-grid" aria-label="Виды худи">
          <figure class="merch-product-card">
            <figcaption class="merch-card-head">
              <span>01</span>
              <strong>Вид спереди</strong>
            </figcaption>
            <div class="merch-product-frame">
              <img
                src="${baseUrl}merch/hoodie-front.webp"
                alt="Красное худи КриптоАРМ, вид спереди"
                width="1600"
                height="2107"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>

          <figure class="merch-product-card">
            <figcaption class="merch-card-head">
              <span>02</span>
              <strong>Вид сзади</strong>
            </figcaption>
            <div class="merch-product-frame">
              <img
                src="${baseUrl}merch/hoodie-back.webp"
                alt="Красное худи КриптоАРМ, вид сзади"
                width="1600"
                height="2107"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>
        </div>

        <div class="merch-lookbook-head">
          <h3>На моделях</h3>
          <p>Фронтальный и задний виды в студийной и городской среде.</p>
        </div>

        <div class="merch-lookbook-grid" aria-label="Худи КриптоАРМ на моделях">
          <figure class="merch-lookbook-card">
            <img
              src="${baseUrl}merch/hoodie-models-studio.webp"
              alt="Мужчина и женщина в худи КриптоАРМ, вид спереди и сзади"
              width="1023"
              height="1537"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Передняя и задняя стороны</figcaption>
          </figure>

          <figure class="merch-lookbook-card">
            <img
              src="${baseUrl}merch/hoodie-back-city.webp"
              alt="Женщина в худи КриптоАРМ, вид сзади"
              width="1024"
              height="1536"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Вид сзади</figcaption>
          </figure>

          <figure class="merch-lookbook-card">
            <img
              src="${baseUrl}merch/hoodie-front-studio.webp"
              alt="Мужчина в худи КриптоАРМ, вид спереди"
              width="1054"
              height="1492"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Вид спереди</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="${assetPath('cryptoarm-id.svg')}" alt="" width="36" height="36" />
        <span>Брендбук КриптоАРМ</span>
      </div>
      <p>Медиакит компании: логотипы, цвета, видео и мерч</p>
      <a href="#top">Наверх <span aria-hidden="true">↑</span></a>
    </div>
  </footer>

  <div class="sr-only" id="live-region" role="status" aria-live="polite"></div>
`;

const liveRegion = document.querySelector('#live-region');
let copyFeedbackTimer;

const videosTrack = document.querySelector('#videos-track');
const videoCards = [...videosTrack.querySelectorAll('.video-card')];
const previousVideo = document.querySelector('[data-video-direction="-1"]');
const nextVideo = document.querySelector('[data-video-direction="1"]');

function updateVideoNavigation() {
  const maxScroll = videosTrack.scrollWidth - videosTrack.clientWidth;
  previousVideo.disabled = videosTrack.scrollLeft <= 1;
  nextVideo.disabled = videosTrack.scrollLeft >= maxScroll - 1;
}

function scrollVideoCarousel(direction) {
  const maxScroll = videosTrack.scrollWidth - videosTrack.clientWidth;
  const positions = videoCards.map((card) => Math.min(maxScroll, card.offsetLeft - videoCards[0].offsetLeft));
  const current = videosTrack.scrollLeft;
  const target = direction > 0
    ? positions.find((position) => position > current + 2) ?? maxScroll
    : [...positions].reverse().find((position) => position < current - 2) ?? 0;

  videosTrack.scrollTo({
    left: target,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  });
}

previousVideo.addEventListener('click', () => scrollVideoCarousel(-1));
nextVideo.addEventListener('click', () => scrollVideoCarousel(1));
videosTrack.addEventListener('scroll', updateVideoNavigation, { passive: true });
new ResizeObserver(updateVideoNavigation).observe(videosTrack);
videosTrack.addEventListener('keydown', (event) => {
  if (event.target !== videosTrack) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    scrollVideoCarousel(event.key === 'ArrowRight' ? 1 : -1);
  }
});
updateVideoNavigation();

document.addEventListener('change', (event) => {
  const select = event.target.closest('[data-size-select]');
  if (!select) return;

  const productId = select.dataset.sizeSelect;
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  for (const format of ['svg', 'png']) {
    const download = document.querySelector(`[data-${format}-download="${productId}"]`);
    const filename = productFilename(product, format, select.value);
    const formatLabel = format.toUpperCase();

    download.href = assetPath(filename);
    download.download = filename;
    download.dataset.downloadLabel = `${product.name}, ${formatLabel}, ${select.value} × ${select.value} px`;
    download.setAttribute(
      'aria-label',
      `Скачать ${product.name} в ${formatLabel}, ${select.value} на ${select.value} пикселей`,
    );
  }
});

document.addEventListener('click', async (event) => {
  const copyButton = event.target.closest('[data-copy-color]');
  const download = event.target.closest('[data-download-label], [data-png-download]');

  if (download) {
    const label = download.dataset.downloadLabel || `${download.dataset.productName}, PNG`;
    liveRegion.textContent = `Начато скачивание: ${label}`;
  }

  if (!copyButton) return;

  const color = copyButton.dataset.copyColor;
  const copied = await copyText(color);
  const label = copyButton.querySelector('.copy-label');
  const icon = copyButton.querySelector('.copy-icon');

  document.querySelectorAll('.copy-button.is-copied').forEach((button) => {
    button.classList.remove('is-copied');
    button.querySelector('.copy-label').textContent = 'Копировать';
    button.querySelector('.copy-icon').innerHTML = icons.copy;
  });

  if (copied) {
    copyButton.classList.add('is-copied');
    label.textContent = 'Скопировано';
    icon.innerHTML = icons.check;
    liveRegion.textContent = `Цвет ${color} скопирован`;

    window.clearTimeout(copyFeedbackTimer);
    copyFeedbackTimer = window.setTimeout(() => {
      copyButton.classList.remove('is-copied');
      label.textContent = 'Копировать';
      icon.innerHTML = icons.copy;
    }, 1800);
  } else {
    liveRegion.textContent = `Не удалось скопировать цвет ${color}`;
  }
});

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Use the legacy fallback below.
    }
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }

  textarea.remove();
  return copied;
}
