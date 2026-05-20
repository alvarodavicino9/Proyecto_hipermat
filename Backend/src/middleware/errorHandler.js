// Manejo global de errores
export function errorHandler(err, req, res, _next) {
  console.error(`[ERROR] ${req.method} ${req.path}:`, err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Error interno del servidor',
  });
}

// 404 para rutas no encontradas
export function notFound(req, res) {
  res.status(404).json({ success: false, message: `Ruta no encontrada: ${req.path}` });
}
