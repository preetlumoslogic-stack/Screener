# Screener Website Clone

A React.js + Tailwind CSS recreation of the Screener.in stock analysis website.

## Features

- **HomePage**: Clean landing page with search bar and company quick links
- **Screens Page**: Browse stock screens by categories (themes, formulas, price/volume, etc.)
- **Screen Detail Page**: View detailed results of a stock screen with query customization
- **Company Detail Page**: Comprehensive company analysis with financials, charts, and peer comparison
- **Tools Dropdown**: Accessible from all pages via the navbar

## Tech Stack

- React.js 18 (Functional Components)
- Tailwind CSS 3
- React Router DOM 6
- Vite

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SearchBar.jsx
│   ├── ScreenCard.jsx
│   └── ToolsDropdown.jsx
├── pages/           # Page components
│   ├── HomePage.jsx
│   ├── ScreensPage.jsx
│   ├── ScreenDetailPage.jsx
│   └── CompanyDetailPage.jsx
├── layout/          # Layout components
│   └── Layout.jsx
├── data/            # Mock data
│   ├── companies.js
│   └── screens.js
├── App.jsx          # Main app with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Pages

1. **HomePage** (`/`) - Landing page with search and company buttons
2. **Screens Page** (`/explore`) - Browse all stock screens
3. **Screen Detail** (`/screens/:id/:slug`) - View screen results
4. **Company Detail** (`/company/:symbol`) - Company analysis page

## Notes

- All data is currently mock/dummy data
- Chart visualizations are placeholders
- The UI closely matches Screener.in's design and layout
- Responsive design with Tailwind CSS

