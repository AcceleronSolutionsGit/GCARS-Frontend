import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({
  page = 1,
  total = 0,
  limit = 25,
  onPageChange,
  onLimitChange,
  limits = [10, 25, 50, 100],
  itemName = 'records',
  className = '',
  style = {}
}) {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  if (total <= 0) return null;

  const startRecord = (page - 1) * limit + 1;
  const endRecord = Math.min(page * limit, total);

  // Generate page numbers with smart ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push('...');
      
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      
      if (page < totalPages - 2) pages.push('...');
      if (!pages.includes(totalPages)) pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className={`pagination ${className}`} style={{ ...style }}>
      <div className="pagination-info" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span>
          Showing <strong>{startRecord}</strong> to <strong>{endRecord}</strong> of <strong>{total}</strong> {itemName}
        </span>
        {onLimitChange && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Per page:</span>
            <select
              className="form-control"
              value={limit}
              onChange={(e) => onLimitChange(Number(e.target.value))}
              style={{
                height: '28px',
                padding: '2px 8px',
                fontSize: '12px',
                borderRadius: '6px',
                background: 'var(--bg-card)',
                width: 'auto'
              }}
            >
              {limits.map(l => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="pagination-btns" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <button
          className="page-btn"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page <= 1}
          title="Previous page"
        >
          <ChevronLeft size={16} />
        </button>

        {getPageNumbers().map((p, idx) => {
          if (p === '...') {
            return (
              <span key={`ellipsis-${idx}`} style={{ padding: '0 6px', color: 'var(--text-muted)', fontSize: '13px' }}>
                ...
              </span>
            );
          }
          return (
            <button
              key={p}
              className={`page-btn ${p === page ? 'active' : ''}`}
              onClick={() => onPageChange(p)}
            >
              {p}
            </button>
          );
        })}

        <button
          className="page-btn"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page >= totalPages}
          title="Next page"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

