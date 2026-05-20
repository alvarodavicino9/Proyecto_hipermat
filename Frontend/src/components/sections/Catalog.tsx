import { useState, useMemo } from 'react';
import { Plus, Search, ChevronRight, X } from 'lucide-react';
import { categories, products } from '../../data';
import { Product } from '../../types';
import './Catalog.css';

interface CatalogProps {
  onAddToCart: (product: Product, qty: number) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (product: Product) => {
    onAddToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1400);
  };

  const selectCategory = (id: string) => {
    setActiveCat(id);
    setActiveSub(null);
    setSearch('');
  };

  const clearFilters = () => {
    setActiveCat(null);
    setActiveSub(null);
    setSearch('');
  };

  const currentCategory = categories.find(c => c.id === activeCat);

  const subcategories = useMemo(() => {
    if (!activeCat) return [];
    const subs = new Set(
      products.filter(p => p.category === activeCat && p.subcategory).map(p => p.subcategory!)
    );
    return Array.from(subs);
  }, [activeCat]);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCat) list = list.filter(p => p.category === activeCat);
    if (activeSub) list = list.filter(p => p.subcategory === activeSub);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tags ?? []).some(t => t.includes(q))
      );
    }
    return list;
  }, [activeCat, activeSub, search]);

  const isFiltering = activeCat !== null || search.trim() !== '';

  return (
    <section id="catalogo" className="catalog">
      <div className="container">

        {/* ── Header ── */}
        <div className="catalog-header">
          <div>
            <span className="section-eyebrow">Nuestros productos</span>
            <h2 className="section-title catalog-title">
              CATÁLOGO <span className="title-accent">COMPLETO</span>
            </h2>
          </div>
          <div className="catalog-search-wrap">
            <Search size={15} className="search-icon" />
            <input
              className="catalog-search"
              type="text"
              placeholder="Buscar producto o marca..."
              value={search}
              onChange={e => { setSearch(e.target.value); setActiveCat(null); setActiveSub(null); }}
            />
            {search && (
              <button className="search-clear" onClick={() => setSearch('')}>
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* ── Breadcrumb ── */}
        {isFiltering && (
          <div className="catalog-breadcrumb">
            <button className="breadcrumb-item breadcrumb-home" onClick={clearFilters}>
              Todos los productos
            </button>
            {currentCategory && (
              <>
                <ChevronRight size={14} className="breadcrumb-sep" />
                <button
                  className="breadcrumb-item"
                  onClick={() => { setActiveSub(null); }}
                >
                  {currentCategory.icon} {currentCategory.name}
                </button>
              </>
            )}
            {activeSub && (
              <>
                <ChevronRight size={14} className="breadcrumb-sep" />
                <span className="breadcrumb-item breadcrumb-current">{activeSub}</span>
              </>
            )}
            {search && (
              <>
                <ChevronRight size={14} className="breadcrumb-sep" />
                <span className="breadcrumb-item breadcrumb-current">"{search}"</span>
              </>
            )}
          </div>
        )}

        {/* ── Categories grid (home view) ── */}
        {!isFiltering && (
          <div className="categories-grid">
            {categories.map((cat, i) => {
              const count = products.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  className="cat-card"
                  style={{ '--cat-delay': `${i * 40}ms` } as React.CSSProperties}
                  onClick={() => selectCategory(cat.id)}
                >
                  <div className={`cat-card-top cat-card-top--${i % 2 === 0 ? 'blue' : 'red'}`}>
                    <span className="cat-card-icon">{cat.icon}</span>
                    <span className="cat-card-count">{count} productos</span>
                  </div>
                  <div className="cat-card-body">
                    <h3 className="cat-card-name">{cat.name}</h3>
                    <p className="cat-card-desc">{cat.description}</p>
                    <div className="cat-card-footer">
                      {cat.subcategories?.slice(0, 2).map(s => (
                        <span key={s} className="cat-card-tag">{s}</span>
                      ))}
                      {(cat.subcategories?.length ?? 0) > 2 && (
                        <span className="cat-card-tag cat-card-tag--more">
                          +{(cat.subcategories?.length ?? 0) - 2} más
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="cat-card-arrow">Ver productos →</span>
                </button>
              );
            })}
          </div>
        )}

        {/* ── Subcategory tabs (when category selected) ── */}
        {activeCat && subcategories.length > 1 && (
          <div className="subcategory-tabs">
            <button
              className={`subcat-tab ${!activeSub ? 'subcat-tab--active' : ''}`}
              onClick={() => setActiveSub(null)}
            >
              Todo
            </button>
            {subcategories.map(sub => (
              <button
                key={sub}
                className={`subcat-tab ${activeSub === sub ? 'subcat-tab--active' : ''}`}
                onClick={() => setActiveSub(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* ── Products grid ── */}
        {isFiltering && (
          <>
            {filtered.length === 0 ? (
              <div className="catalog-empty">
                <span className="empty-icon">🔍</span>
                <p>No encontramos resultados para tu búsqueda.</p>
                <button className="btn-secondary" onClick={clearFilters}>Ver todo el catálogo</button>
              </div>
            ) : (
              <>
                <p className="results-count">
                  {filtered.length} producto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
                </p>
                <div className="products-grid">
                  {filtered.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      added={addedId === product.id}
                      onAdd={handleAdd}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* ── WhatsApp CTA ── */}
        <div className="catalog-cta-banner">
          <div className="catalog-cta-text">
            <strong>¿No encontrás lo que buscás?</strong>
            <p>Consultá por WhatsApp — tenemos más de 500 productos disponibles.</p>
          </div>
          <a
            href="https://wa.me/c/5493414680227"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ver catálogo completo en WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

// ── ProductCard component ──────────────────────────────────
interface ProductCardProps {
  product: Product;
  added: boolean;
  onAdd: (p: Product) => void;
}

function ProductCard({ product, added, onAdd }: ProductCardProps) {
  const cat = categories.find(c => c.id === product.category);

  return (
    <div className="product-card">
      {/* Image area */}
      <div className="product-img-wrap">
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-img" />
        ) : (
          <div className="product-img-placeholder">
            <span className="product-img-icon">{cat?.icon ?? '📦'}</span>
            <span className="product-img-label">Imagen próximamente</span>
          </div>
        )}
        {product.featured && <span className="product-badge">Destacado</span>}
      </div>

      {/* Info */}
      <div className="product-info">
        <div className="product-meta">
          <span className="product-category-tag">{cat?.name}</span>
          {product.subcategory && (
            <span className="product-subcategory-tag">{product.subcategory}</span>
          )}
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <span className="product-unit">Unidad: {product.unit}</span>
      </div>

      {/* Action */}
      <button
        className={`product-add-btn ${added ? 'product-add-btn--added' : ''}`}
        onClick={() => onAdd(product)}
      >
        {added ? (
          <>✓ Agregado al pedido</>
        ) : (
          <><Plus size={16} /> Agregar al pedido</>
        )}
      </button>
    </div>
  );
}
