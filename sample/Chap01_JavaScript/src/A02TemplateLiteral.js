// ES6
let name = 'NolBu';
console.log('My Name is ' + name);
console.log(`My Name is ${name}`)
console.log(`${10 + 20}`)

let obj = {
    name: 'HungBu',
    age: 25,
    child: ['one', 'two'],
    info: {
        tel: '010-1234-5678',
        add: 'Seoul'
    },
    toString: function () {
        console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');
        console.log(`${this.name}님의 나이는 ${this.age}세 입니다`);

        // ES6 - tempate 문자열(space나 return도 그대로 유지된다)
        console.log(`${this.name}님의 나이는 ${this.age}세 입니다.
                        ${this.name}님은 ${this.info.add}에 거주합니다.`);
    }
}

obj.toString();

const dom = `<div>
    <h1>Hello World</h1>
    <div>
        this is content.
    </div>
</div>`
console.log(dom);
