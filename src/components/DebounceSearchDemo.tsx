// src/components/DebounceSearchDemo.tsx
import { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce.ts';

export function DebounceSearchDemo() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, 800); // 800ms delay

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log(`[API CALL SIMULATION] Searching for: ${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="card">
      <h2>Debounce Demo</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <div style={{ backgroundColor: '#000', padding: '1rem', borderRadius: '4px', fontFamily: 'monospace' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Immediate Value: </span>
            <span style={{ color: 'var(--accent-color)' }}>{searchTerm || '""'}</span>
          </div>
          <div>
            <span style={{ color: 'var(--text-secondary)' }}>Debounced Value: </span>
            <span style={{ color: '#4caf50' }}>{debouncedSearchTerm || '""'}</span>
          </div>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          Check the console to see the simulated API calls. Notice how it only triggers after you stop typing for 800ms.
        </p>
      </div>
    </div>
  );
}