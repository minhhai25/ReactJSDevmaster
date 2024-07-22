//tham số amwcj định là tham số có giá trị mặc định và được sử dụng khi gọi
//thực hiện hàm không truyền giá trị

function add(num1, num2 = 100) {
  console.log(num1, " +", num2, "=", num1 + num2);
}
add(100);
add(100, 200);

function display(name, company) {
  company = company || "Devmaster Âcdemy ";
  console.log("name", name);
  console.log("company", company);
}
display("chung chung");
display("chung chung", "devmaster");
