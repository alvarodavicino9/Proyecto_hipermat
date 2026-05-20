import { products, categories } from '../data/products.js';

// GET /api/products
export function getProducts(req, res) {
  const { category, search, limit } = req.query;

  let result = [...products];

  if (category && category !== 'todos') {
    result = result.filter(p => p.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (limit) {
    result = result.slice(0, parseInt(limit));
  }

  res.json({ success: true, data: result, total: result.length });
}

// GET /api/products/:id
export function getProductById(req, res) {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Producto no encontrado' });
  }
  res.json({ success: true, data: product });
}

// GET /api/categories
export function getCategories(req, res) {
  const withCount = categories.map(cat => ({
    ...cat,
    productCount: products.filter(p => p.category === cat.id).length,
  }));
  res.json({ success: true, data: withCount });
}
