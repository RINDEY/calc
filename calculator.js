const operations = {
  sum: '+',
  substract: '-',
  multiply: '*',
  division: '/',
};

function calculate({a, b, operation}) {
  let result = null;
  
  switch (operation) {
    case operations.sum:
      result = sum(a, b);
      break;

    case operations.substract:
      result = substract(a, b);
      break;

    case operations.multiply:
      result = multiply(a, b);
      break;

    case operations.division:
      result = division(a, b);
      break;
  
    default:
      break;
  }  
  
  return result;
}