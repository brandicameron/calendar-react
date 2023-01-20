export function useChangeYear(selectedYear, setSelectedYear) {
  const handleChangeYear = (e) => {
    if (e.target.textContent === '<') {
      setSelectedYear((prev) => prev - 1);
    } else if (e.target.classList.contains('selected-year')) {
      setSelectedYear(parseInt(e.target.value));
    } else {
      setSelectedYear((prev) => prev + 1);
    }
  };

  return { handleChangeYear };
}
