export function useMonthData(month, year) {
  const numDaysInMonth = new Date(year, month, 0).getDate();
  const showMonth = new Date(year, month, 0).toLocaleString('default', {
    month: 'long',
  });
  const days = Array(numDaysInMonth).fill();
  const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  const firstDay = Array(new Date(year, month - 1, 1).getDay()).fill();

  return { showMonth, days, weekDays, firstDay };
}
