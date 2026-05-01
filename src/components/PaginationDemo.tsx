import { usePagination } from '../hooks/usePagination.ts';
import { useState } from 'react';

// Generate 50 mock items
const MOCK_DATA = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

export function PaginationDemo() {
    // State to track the dynamic items per page
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const pagination = usePagination({
        totalItems: MOCK_DATA.length,
        itemsPerPage: itemsPerPage,
        initialPage: 1,
    });

    // Slice the data based on the hook's start and end indices
    const currentItems = MOCK_DATA.slice(
        pagination.startIndex,
        pagination.endIndex + 1
    );

    return (
 <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Pagination Demo</h2>
        
        {/* NEW: Dropdown to control items per page */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <label htmlFor="pageSize" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Items per page:
          </label>
          <select 
            id="pageSize"
            value={itemsPerPage} 
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            style={{
              backgroundColor: 'var(--bg-color)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px'
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
      
      <div style={{ minHeight: '300px' }}>
        <ul style={{ paddingLeft: '1rem' }}>
          {currentItems.map((item, index) => (
            <li key={index} style={{ padding: '0.25rem 0' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Showing items {pagination.startIndex + 1} - {pagination.endIndex + 1} of {MOCK_DATA.length} 
          <br/>
          (Items on this page: {pagination.itemsOnCurrentPage})
        </p>
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button onClick={pagination.prevPage} disabled={!pagination.canPrevPage}>
            Previous
          </button>
          
          <span>
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
          
          <button onClick={pagination.nextPage} disabled={!pagination.canNextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
    );
}