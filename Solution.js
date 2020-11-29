function productFib(prod)
{
var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 80; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  if (fib[i]*fib[i-1]==prod)
  {
    return [fib[i-1],fib[i],true]
  }
  if (fib[i]*fib[i-1]>prod)
  {
    return [fib[i-1],fib[i],false]
  }
 
}
}
