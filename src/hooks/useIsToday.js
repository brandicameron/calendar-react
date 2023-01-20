export function useIsToday() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate() - 1;
  const currentYear = currentDate.getFullYear();

  return { currentMonth, currentDay, currentYear };
}
