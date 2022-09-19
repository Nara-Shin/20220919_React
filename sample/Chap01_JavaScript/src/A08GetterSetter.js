class Jumsu {
    #_name;             // private
    constructor(name, kor, eng) {
        this.#_name = name;
        this._kor = kor;
        this._eng = eng;
    }

    // 일반 메서드
    onTotal() {
        return this._kor + this._eng;
    }
    display() {
        console.log(`${this.#_name}의 총점은 ${this.onTotal()}이고 평균은 ${this.onTotal() / 2}입니다`);
    }
    // 일반적인 메서드
    getName() {
        return this.#_name;
    }

    // Getter / Setter - 정의는 메서드 형태로 하지만 사용은 프로퍼티 형식으로 사용한다.
    get name() {
        return this.#_name;
    }
    set name(name) {
        this.#_name = name;
    }
}

const nolbu = new Jumsu('Nolbu', 100, 90);
console.log(nolbu._name);                       // undefined
console.log(nolbu.getName());
// Getter
console.log(nolbu.name);

// Setter
nolbu.name = '놀부';
console.log(nolbu.name);


