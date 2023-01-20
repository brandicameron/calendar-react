import { v4 as uuidv4 } from 'uuid';
import { useIsToday } from '../hooks/useIsToday';
import { useMonthData } from '../hooks/useMonthData';

export default function Month({ month, year }) {
  const { currentMonth, currentDay, currentYear } = useIsToday();
  const { showMonth, days, weekDays, firstDay } = useMonthData(month, year);

  return (
    <section className='month-container'>
      <h2 className='month'>
        {showMonth} {year}
      </h2>

      <ol className='weekdays'>
        {weekDays.map((day, i) => (
          <li className='weekday' key={uuidv4()}>
            {day}
          </li>
        ))}
      </ol>
      <ol className='calendar'>
        {firstDay.map((day) => (
          <li className='day' key={uuidv4()}></li>
        ))}
        {days.map((day, i) => (
          <li
            className={
              currentMonth === month && currentDay === i && currentYear === year
                ? 'day today'
                : 'day'
            }
            key={uuidv4()}
          >
            {i + 1}
          </li>
        ))}
      </ol>
    </section>
  );
}
