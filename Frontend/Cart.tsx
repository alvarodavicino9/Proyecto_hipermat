import { X, Trash2, Plus, Minus, ShoppingCart, Send } from 'lucide-react';
import { CartItem } from '../../types';
import { contactInfo } from '../../data';
import './Cart.css';

interface CartProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onClear: () => void;
  onSend: (phone: string) => void;
  totalItems: number;
}

export default function Cart({
  isOpen, items, onClose, onRemove, onUpdateQty, onUpdateNotes, onClear, onSend, totalItems
}: CartProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="cart-overlay" onClick={onClose} />}

      {/* Drawer */}
      <aside className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-left">
            <ShoppingCart size={20} />
            <h2 className="cart-title">Mi Pedido</h2>
            {totalItems > 0 && (
              <span className="cart-count">{totalItems} ítem{totalItems !== 1 ? 's' : ''}</span>
            )}
          </div>
          <button className="cart-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={48} strokeWidth={1} />
              <p>Tu pedido está vacío.</p>
              <span>Agregá productos desde el catálogo.</span>
            </div>
          ) : (
            <ul className="cart-list">
              {items.map(item => (
                <li key={item.product.id} className="cart-item">
                  <div className="cart-item-top">
                    <div className="cart-item-info">
                      <span className="cart-item-name">{item.product.name}</span>
                      <span className="cart-item-unit">por {item.product.unit}</span>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => onRemove(item.product.id)}
                      aria-label="Eliminar"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <div className="cart-item-controls">
                    <div className="qty-control">
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    className="cart-item-notes"
                    placeholder="Aclaración (opcional)..."
                    value={item.notes ?? ''}
                    onChange={e => onUpdateNotes(item.product.id, e.target.value)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <span>{items.length} producto{items.length !== 1 ? 's' : ''}</span>
              <span>{totalItems} unidad{totalItems !== 1 ? 'es' : ''} en total</span>
            </div>

            <button
              className="cart-send-btn"
              onClick={() => onSend(contactInfo.whatsapp)}
            >
              <Send size={18} />
              Enviar pedido por WhatsApp
            </button>

            <button className="cart-clear-btn" onClick={onClear}>
              Vaciar pedido
            </button>

            <p className="cart-note">
              El pedido se enviará por WhatsApp para confirmar disponibilidad y precio.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
