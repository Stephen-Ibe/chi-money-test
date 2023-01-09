const formatNumber = (number: number) => {
  if (!number) return 0;
  const res = new Intl.NumberFormat('en-EN', {
    minimumFractionDigits: 2,
  }).format(number);

  return res;
};

export default formatNumber;
