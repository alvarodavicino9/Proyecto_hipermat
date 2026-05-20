// POST /api/contact/quote
// Recibe un pedido y genera el link de WhatsApp con el mensaje formateado
export function sendQuote(req, res) {
  const { items, customerName, customerPhone, notes } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ success: false, message: 'El pedido no puede estar vacío.' });
  }

  const WHATSAPP = process.env.WHATSAPP_NUMBER || '5493414680227';

  const lines = [
    '🏗️ *NUEVO PEDIDO - HIPERMAT*',
    '─────────────────────────',
    customerName ? `👤 Cliente: ${customerName}` : null,
    customerPhone ? `📞 Teléfono: ${customerPhone}` : null,
    '',
    '*Productos solicitados:*',
    ...items.map(item =>
      `• *${item.name}*\n  Cantidad: ${item.quantity} ${item.unit}${item.notes ? `\n  Nota: ${item.notes}` : ''}`
    ),
    '─────────────────────────',
    `📦 Total ítems: ${items.reduce((sum, i) => sum + i.quantity, 0)}`,
    notes ? `\n📝 Notas adicionales: ${notes}` : null,
    '',
    '_Por favor confirmar disponibilidad y precio._',
  ].filter(Boolean);

  const message = encodeURIComponent(lines.join('\n'));
  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${message}`;

  res.json({ success: true, whatsappUrl });
}

// POST /api/contact/message
export function sendMessage(req, res) {
  const { name, phone, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false, message: 'Nombre y mensaje son requeridos.' });
  }

  const WHATSAPP = process.env.WHATSAPP_NUMBER || '5493414680227';

  const text = [
    '💬 *CONSULTA - HIPERMAT*',
    '─────────────────────────',
    `👤 Nombre: ${name}`,
    phone ? `📞 Teléfono: ${phone}` : null,
    '',
    `📝 Mensaje: ${message}`,
  ].filter(Boolean).join('\n');

  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

  res.json({ success: true, whatsappUrl });
}
