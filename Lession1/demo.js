var x = 100
function varDemo(){
    var y=200;
    console.log("giá trin biến x bên trong hàm :" ,x);
    console.log("giá trị y bên trong hàm:",y);
}
console.log("giá trị biến x bên ngoài hàm:", x);
// console.log("giá trị biến x bên ngoài hàm:", y);=>giá trị y sẽ bị lỗi
varDemo();

