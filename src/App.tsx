import './App.css'
import { PaginationDemo } from './components/PaginationDemo.tsx';
import { DebounceSearchDemo } from './components/DebounceSearchDemo.tsx';

function App() {

  return (
    <main>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Custom Hooks Lab</h1>
      <DebounceSearchDemo />
      <PaginationDemo />
    </main>
  )
}

export default App
