import { useState, useCallback } from 'react';
import { CartItem, Product } from '../types';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product, quantity: number = 1, notes?: string) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity, notes }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems(prev => prev.filter(i => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.product.id !== productId));
      return;
    }
    setItems(prev =>
      prev.map(i => i.product.id === productId ? { ...i, quantity } : i)
    );
  }, []);

  const updateNotes = useCallback((productId: string, notes: string) => {
    setItems(prev =>
      prev.map(i => i.product.id === productId ? { ...i, notes } : i)
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const sendToWhatsApp = useCallback(async (whatsappNumber: string) => {
    if (items.length === 0) return;

    try {
      const { sendQuoteToAPI } = await import('../services/api');
      const payload = {
        items: items.map(i => ({
          name: i.product.name,
          quantity: i.quantity,
          unit: i.product.unit,
          notes: i.notes,
        })),
      };
      const result = await sendQuoteToAPI(payload);
      window.open(result.whatsappUrl, '_blank');
    } catch {
      // Fallback local si la API no está disponible
      const lines = [
        '🏗️ *PEDIDO HIPERMAT*',
        '─────────────────',
        ...items.map(item =>
          `• *${item.product.name}*\n  Cantidad: ${item.quantity} ${item.product.unit}${item.notes ? `\n  Nota: ${item.notes}` : ''}`
        ),
        '─────────────────',
        `📦 Total de ítems: ${totalItems}`,
        '',
        '_Por favor confirme disponibilidad y precio._',
      ];
      const message = encodeURIComponent(lines.join('\n'));
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
  }, [items, totalItems]);

  return {
    items,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
    updateNotes,
    clearCart,
    totalItems,
    sendToWhatsApp,
  };
}
