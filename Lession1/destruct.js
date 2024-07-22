//phá vỡ cấu trúc
const arr = [1, 2, 3, 4, 5];
const [a, b] = arr;
console.log("giá trị a=" + a);
console.log("giá trị b=" + b);
console.log("Mảng arr=" + arr);

const personObject={
Name:"minh hai",
name:"minh hai2",
age: 23,
address:"bac giang"
}
// tại sao khi khai báo Name thì không bị gạch còn khi khái báo là name lại bị gạch
//do trùng tên đối tượng mẫu
const { Name, age } = personObject;
console.log("Name=" + Name);
console.log(name)
console.log("Age=" + age);