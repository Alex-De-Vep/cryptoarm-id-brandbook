# КриптоАРМ Brandbook

Одностраничный brandbook с логотипами продуктов КриптоАРМ и цветовой системой интерфейса.

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
