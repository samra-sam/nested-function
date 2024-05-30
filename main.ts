function main() {
  function new1() {
    console.log("Hellow");
  }
  new1();
}
main();




function free(no1: number, no2: number) {
  function new2() {
    console.log(no1, no2);
  }
  new2();
}
free(6, 10);




function add(num: number, num2: number, num3: number) {
  function sum() {
    console.log(num + num2 + num3);
  }
  sum();
}
add(2, 4, 6);




function type() {
    function prac() {
      let b = "Nested functions (or inner functions) in JavaScript are a useful feature." 
      return b;
    }
    return prac(); // Invoke prac inside type and return its result
  }
  
  let result = type();
  console.log(result);

