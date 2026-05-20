# Hipermat - Sitio Web Oficial

Página web de **Hipermat**, corralón y ferretería de materiales de construcción en Rosario, Santa Fe.

## Stack

- **Frontend:** Vite + React + TypeScript
- **Deploy:** Netlify (automático desde `main`)

## Estructura del proyecto

```
hipermat/
├── frontend/               # App React/Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/     # Navbar, Footer
│   │   │   ├── sections/   # Hero, Catalog, Services, About, Contact
│   │   │   └── ui/         # Cart
│   │   ├── data/           # Productos y categorías
│   │   ├── hooks/          # useCart
│   │   └── types/          # TypeScript types
│   ├── index.html
│   └── vite.config.ts
├── netlify.toml            # Config deploy Netlify
└── README.md
```

## Cómo correr localmente

```bash
cd frontend
npm install
npm run dev
```

## Deploy en Netlify

1. Conectar el repo en [netlify.com](https://netlify.com)
2. El `netlify.toml` ya configura todo automáticamente:
   - Base dir: `frontend`
   - Build command: `npm run build`
   - Publish dir: `dist`
3. Cada push a `main` hace deploy automático

## Funcionalidades

- ✅ Catálogo por categorías con búsqueda
- ✅ Carrito de pedidos con notas por ítem
- ✅ Envío de pedido por WhatsApp
- ✅ Botón flotante de WhatsApp
- ✅ Sección Nosotros con info del local
- ✅ Sección Contacto con mapa y horarios
- ✅ Link al catálogo de WhatsApp
- ✅ Responsive mobile
- ✅ Deploy automático en Netlify

## Contacto empresa

- **Dirección:** Juan José Paso 6082, Rosario, Santa Fe
- **WhatsApp:** +54 9 341 468-0227
- **Instagram:** @hipermat_rosario
- **Horarios:** Lun–Vie 8–16 | Sáb 8–12
