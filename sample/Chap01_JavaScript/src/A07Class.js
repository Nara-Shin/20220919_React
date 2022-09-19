
class User {
  constructor(name, age) {
    // new에 의해 생성되는 각 객체의 속성
    this.name = name;
    this.age = age;

    this.info = function () {
      console.log(`${this.name} / ${this.age}`);
    }
  }

  // User Class의 속성
  display() {
    console.log(`${this.name} / ${this.age}`);
  }
}

class Employee extends User {
  // 자식 클래스에서 생성자 메서드를 만들면 반드시 부모(User)의 생성자 메서드를 호출해 주어야 한다.
  constructor(name, age, job) {
    super(name, age);            // 부모 객체를 먼저 메모리에 로드
    this.job = job;
  }

  display() {
    console.log(`${this.name} / ${this.age} / ${this.job}`);
  }
}

const nolbu = new User('NolBu', 30);
nolbu.info();
nolbu.display();
console.log(nolbu.name);
console.log(nolbu);
console.log('');

const hungbu = new Employee('흥부', 20, '개발자');
hungbu.info();
hungbu.display();
console.log(hungbu.name);
console.log(hungbu);
console.log('');

