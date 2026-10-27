import './styles.css';

const baseUrl = import.meta.env.BASE_URL;
const pngSizes = [96, 128, 256, 512, 1024, 2048];

const products = [
  {
    id: 'cr',
    name: 'КриптоАРМ Центр регистрации',
    shortName: 'Центр регистрации',
    description: 'Знак продукта для материалов о выпуске и управлении цифровыми сертификатами.',
  },
  {
    id: 'idm',
    name: 'КриптоАРМ IDM',
    shortName: 'IDM',
    description: 'Знак системы управления учётными записями, ролями и правами доступа.',
  },
  {
    id: 'id',
    name: 'КриптоАРМ ID',
    shortName: 'ID',
    description: 'Знак платформы идентификации и аутентификации пользователей.',
  },
  {
    id: 'skzi',
    name: 'КриптоАРМ СКЗИ',
    shortName: 'СКЗИ',
    description: 'Знак продукта для материалов о средствах криптографической защиты информации.',
  },
  {
    id: 'lunch',
    name: 'Корпоративные обеды',
    shortName: 'Корпоративные обеды',
    assetName: 'lunch-logo-round',
    family: 'Корпоративный сервис',
    description: 'Круглый знак продукта в фирменном зелёном цвете.',
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
    description: 'Знак инструмента тестирования OpenID Connect (OIDC).',
    accent: '#1774FF',
    accentHover: '#3486FF',
    accentText: '#184EA8',
    surface: '#EDF4FF',
  },
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
  const defaultPng = productFilename(product, 'png', 1024);

  return `
    <article class="product-card" aria-labelledby="product-${product.id}"
      ${product.accent ? `style="--product-accent: ${product.accent}; --product-accent-hover: ${product.accentHover}; --product-accent-text: ${product.accentText}; --product-surface: ${product.surface}; --product-button-text: var(--text);"` : ''}>
      <div class="product-preview">
        <div class="product-index" aria-hidden="true">0${index + 1}</div>
        <img
          src="${assetPath(svgFilename)}"
          alt="Логотип ${product.name}"
          width="178"
          height="178"
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
          <a
            class="button button-secondary"
            href="${assetPath(svgFilename)}"
            download="${svgFilename}"
            data-download-label="${product.name}, SVG"
          >
            ${icons.arrowDown}
            <span>Скачать SVG</span>
          </a>

          <div class="png-download">
            <label class="size-select">
              <span class="sr-only">Размер PNG для ${product.name}</span>
              <select data-size-select="${product.id}" aria-label="Размер PNG для ${product.name}">
                ${pngSizes
                  .map(
                    (size) =>
                      `<option value="${size}" ${size === 1024 ? 'selected' : ''}>${size} px</option>`,
                  )
                  .join('')}
              </select>
              <span class="select-chevron" aria-hidden="true">${icons.chevron}</span>
            </label>
            <a
              class="button button-primary"
              href="${assetPath(defaultPng)}"
              download="${defaultPng}"
              data-png-download="${product.id}"
              data-product-name="${product.name}"
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

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#content">Перейти к содержимому</a>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="КриптоАРМ Brandbook — на главную">
        <img src="${assetPath('cryptoarm-id.svg')}" alt="" width="40" height="40" />
        <span>КриптоАРМ</span>
        <span class="brand-divider" aria-hidden="true"></span>
        <span class="brand-section">Brandbook</span>
      </a>
    </div>
  </header>

  <main id="content">
    <section class="hero section" id="top">
      <div class="container">
        <div class="hero-panel">
          <div class="hero-copy">
            <h1>Бренд-материалы КриптоАРМ</h1>
            <p class="hero-description">
              Всё необходимое для аккуратного использования бренда: оригинальные знаки,
              прозрачные PNG и палитра интерфейса, мерч компании. 
            </p>
            <div class="hero-actions">
              <a class="button button-primary button-large" href="#logos">
                Перейти к логотипам
                ${icons.chevron}
              </a>
            </div>
          </div>

          <div class="hero-showcase" aria-label="Продукты КриптоАРМ">
            <div class="hero-showcase-head">
              <span>Семейство продуктов</span>
              <span>2026</span>
            </div>
            <div class="logo-cluster">
              ${products
                .map(
                  (product) => `
                    <div class="cluster-item">
                      <img
                        src="${assetPath(productFilename(product, 'svg'))}"
                        alt=""
                        width="92"
                        height="92"
                      />
                      <span>${product.shortName}</span>
                    </div>`,
                )
                .join('')}
            </div>
            <div class="hero-stats" aria-label="Состав материалов">
              <div><strong>${products.length}</strong><span>продуктов</span></div>
              <div><strong>${pngSizes.length}</strong><span>размеров PNG</span></div>
              <div><strong>SVG</strong><span>без потери качества</span></div>
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

    <section class="section merch-section" id="merch" aria-labelledby="merch-title">
      <div class="container">
        <div class="section-heading merch-heading">
          <div>
            <p class="eyebrow">Фирменный мерч</p>
            <h2 id="merch-title">Худи КриптоАРМ</h2>
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
        <span>КриптоАРМ Brandbook</span>
      </div>
      <p>Официальные логотипы и цвета продуктов</p>
      <a href="#top">Наверх <span aria-hidden="true">↑</span></a>
    </div>
  </footer>

  <div class="sr-only" id="live-region" role="status" aria-live="polite"></div>
`;

const liveRegion = document.querySelector('#live-region');
let copyFeedbackTimer;

document.addEventListener('change', (event) => {
  const select = event.target.closest('[data-size-select]');
  if (!select) return;

  const productId = select.dataset.sizeSelect;
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const download = document.querySelector(`[data-png-download="${productId}"]`);
  const filename = productFilename(product, 'png', select.value);

  download.href = assetPath(filename);
  download.download = filename;
  download.setAttribute(
    'aria-label',
    `Скачать ${download.dataset.productName} в PNG, ${select.value} на ${select.value} пикселей`,
  );
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
