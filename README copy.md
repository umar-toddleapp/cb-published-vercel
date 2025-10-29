# Curriculum Blueprint - Next.js CSR App

A modern Next.js application built with App Router, pure JavaScript, and module CSS.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **React 18** with latest features
- ✅ **Pure JavaScript** (no TypeScript)
- ✅ **Module CSS only** - No global CSS, all styles are scoped using CSS modules
- ✅ **ESLint** with Next.js recommended configuration
- ✅ **Path aliases** for clean imports
- ✅ **src/ directory** structure
- ✅ **Client-side rendering** with interactive components

## Project Structure

```
src/
├── app/                   # App Router directory
│   ├── layout.js         # Root layout
│   ├── layout.module.css # Layout styles
│   ├── page.js           # Home page
│   └── page.module.css   # Page styles
├── components/           # Reusable components
│   ├── Header/
│   │   ├── Header.js
│   │   └── Header.module.css
│   └── Counter/
│       ├── Counter.js
│       └── Counter.module.css
├── utils/               # Utility functions
│   └── helpers.js
├── styles/              # Shared styles
└── lib/                 # Library code
```

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn

### Installation

1. Install dependencies:

   ```bash
   nvm use
   npm install
   ```

2. Run the development server:

   ```bash
   nvm use
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### Development

- `npm run dev` - Start Next.js development server
- `npm run lint` - Run ESLint

### Next.js Production

- `npm run build` - Build for production with Next.js
- `npm run start` - Start Next.js production server

### Webpack Production Builds

- `npm run webpack:staging` - Build for staging environment (console logs, source maps, 512KB budget)
- `npm run webpack:preprod` - Build for preprod environment (no console, source maps, 400KB budget)
- `npm run webpack:prod` - Build for production environment (fully optimized, 300KB budget)
- `npm run webpack:analyze` - Build with bundle analyzer

## Path Aliases

The project uses path aliases for cleaner imports:

- `@/*` - Maps to `src/*`
- `@/components/*` - Maps to `src/components/*`
- `@/utils/*` - Maps to `src/utils/*`
- `@/styles/*` - Maps to `src/styles/*`
- `@/lib/*` - Maps to `src/lib/*`

## Environment Variables

Environment-specific configuration files:

- `.env.staging` - Staging environment
- `.env.preprod` - Preprod environment
- `.env.production` - Production environment

Update these files with your API URLs and other environment-specific values.

## Webpack Build System

This project includes a Webpack 5 build configuration for production deployments with three environments:

### Build Configuration

- **Location**: `build-config/webpack/`
- **Output**: `dist/` directory
- **Features**:
  - Multi-core parallel processing
  - Advanced code splitting (5 intelligent cache groups)
  - Terser minification with parallel workers
  - CSS extraction and minification
  - Gzip compression for assets >8KB
  - Content hashing for cache busting

### Environment Differences

| Feature            | Staging | Preprod | Production |
| ------------------ | ------- | ------- | ---------- |
| Source Maps        | ✅ Full | ✅ Full | ❌ None    |
| Console Logs       | ✅ Keep | ❌ Drop | ❌ Drop    |
| Performance Budget | 512KB   | 400KB   | 300KB      |

### Chunk Output

Builds generate optimized bundles:

- `runtime-main.[hash].js` - Webpack runtime
- `toddle-ds.[hash].js` - @toddle-edu design system
- `common-components.[hash].js` - Shared components
- `react-vendor.[hash].js` - React libraries
- `vendor.[hash].js` - Other dependencies
- `main.[hash].js` - Application code
- `common.[hash].js` - Shared code
- `*.css` - Extracted styles
- `*.gz` - Gzip compressed files

## Styling

This project uses **CSS Modules only** for all styling. Each component has its own `.module.css` file, and there is no global CSS. All styles are component-scoped, including the root layout styles.

## Contributing

1. Follow the existing code style
2. Use module CSS for styling
3. Add path aliases for imports
4. Run `npm run lint` before committing

## License

ISC

# curriculum-blueprint-published
