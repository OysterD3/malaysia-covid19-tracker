export const formatNumber = (v: number) =>
  v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
