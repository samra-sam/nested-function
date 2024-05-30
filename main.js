function main() {
    function new1() {
        console.log("Hellow");
    }
    new1();
}
main();
function free(no1, no2) {
    function new2() {
        console.log(no1, no2);
    }
    new2();
}
free(6, 10);
function add(num, num2, num3) {
    function sum() {
        console.log(num + num2 + num3);
    }
    sum();
}
add(2, 4, 6);
function type() {
    function prac() {
        var b = "Nested functions (or inner functions) in JavaScript are a useful feature.";
        return b;
    }
    return prac(); // Invoke prac inside type and return its result
}
var result = type();
console.log(result);
