Vue.filter("column", function(molecular,denominator) {
  return ((denominator-molecular)/denominator*100).toFixed(2)
});
