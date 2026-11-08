
# GDGoC UGM Website

A responsive website for Google Developer Groups on Campus at Universitas Gadjah Mada, built as part of the GDGoC UGM Academic Hacker Frontend recruitment project.

## Installation and Setup

### Prerequisites
- Node.js
- npm
- Git

### 1. Clone the repository
```bash
git clone https://github.com/yahyamuhammadfahmikurnia-byte/gdc.git
```

### 2. Navigate to the project directory
```bash
cd gdc
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```

Open the local URL displayed in the terminal.

### 5. Build for production
```bash
npm run build
```

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Motion for React
- Lucide React
- GDGoC UGM REST API

## Features

- Responsive website layout
- Home, About, Overview, and Contact pages
- Animated navigation bar
- Dynamic content using REST API
- Learning tracks and program formats
- Learning journey information
- Interactive contact categories

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Website pages
- `src/App.jsx` - Routing configuration
- `public/` - Static assets

## Getting Started

### 1. Clone the repository

    git clone https://github.com/yahyamuhammadfahmikurnia-byte/gdc.git

### 2. Enter the project directory

    cd gdc

### 3. Install dependencies

    npm install

### 4. Run development server

    npm run dev

Open the local URL displayed in your terminal.

### 5. Build for production

    npm run build

## API Integration

This project uses the GDGoC UGM API:

https://gdgoc-ugm-api.vercel.app/api

Endpoints used include:

- `/api/navigation`
- `/api/tracks`
- `/api/formats`
- `/api/journey`
- `/api/values`
- `/api/roles`
- `/api/faqs`
- `/api/inquiry-categories`

## Live Website

https://gdc-beta.vercel.app

## Author

Yahya Muhammad Fahmi Kurnia

Computer Science - Universitas Gadjah Mada
