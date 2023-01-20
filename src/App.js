import './App.css';
import { useState } from 'react';
import { useChangeYear } from './hooks/useChangeYear';
import Month from './components/Month';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { handleChangeYear } = useChangeYear(selectedYear, setSelectedYear);
  const allMonths = Array(12).fill();

  return (
    <main className='container'>
      <header className='header'>
        <button onClick={handleChangeYear} aria-label={`View ${selectedYear - 1}`}>
          &#60;
        </button>
        <input
          onChange={handleChangeYear}
          className='selected-year'
          type='tel'
          value={selectedYear}
        />
        <button onClick={handleChangeYear} aria-label={`View ${selectedYear + 1}`}>
          &#62;
        </button>
      </header>

      {allMonths.map((month, i) => (
        <Month key={uuidv4()} month={i + 1} year={selectedYear} />
      ))}
    </main>
  );
}

export default App;
