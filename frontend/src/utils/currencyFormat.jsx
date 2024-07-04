export const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};
