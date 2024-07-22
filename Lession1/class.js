class Person {
  constructor() {
    this.name = "minh hai";
    this.age = 22;
  }
    constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    return this.age = age;
  }

}
//khởi tạo đối tượng
let person= new Person();
person.setAge(24);
//kế thừa lớp cha dùng extent

class Student extends Person {
  constructor(name, age, studentId) {
    //sử dụng gái trị của lớp cha dùng super()
    super(name, age);
    this.studentId = "SV001";
  }
 
  getStudentInfo() {
    return "tên"+ this.getName+ "-tuổi"+ this.age+ "-Mã sinh viên"+ this.studentId;
  }
}
var student = new Student();
console.log(student.getStudentInfo());
