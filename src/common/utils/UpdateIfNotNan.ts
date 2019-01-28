export const updateIfNotNaN = (e: any, original: number) => {
  const amount = parseInt(e.target.value, 10);
  if (e.target.value.length === 0) return 0;
  if (isNaN(amount)) return original;
  return amount;
};
