# Брендбук КриптоАРМ

Медиакит компании: логотипы продуктов КриптоАРМ в SVG и PNG, фирменные цвета, видео с просмотром и скачиванием, а также мерч.

## Локальный запуск

```bash
npm ci
npm run dev
```

Production-сборка:

```bash
npm run build
npm run preview
```

## GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` собирает проект и публикует каталог `dist` после каждого push в ветку `master`. Также его можно запустить вручную через вкладку Actions.

В настройках репозитория GitHub Pages должен использовать источник **GitHub Actions**.
