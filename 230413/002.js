// this(***)

function a() { console.log(this) }
a(); // window 호출

function b() { console.log('hello world') };
b();
window.b() // window 호출

let myObj = {
    vali: 100,
    func1: function () {
        console.log(this);
        //this가 누구일까? console.log()로 찍어보고 코드를 작성해도 된다.
        // 1. func1 2. myObj 3. window
    }
}

myObj.func1(); //myObj 호출

///////////

let myObj2 = {
    vali: 100,
    func1: function () {
        console.log(this);

    }
}

let test = myObj2.func1; //myObj 호출
test();

// this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문이다.
// bind를 포함한 예외사항이 있습니다.

function sayName() {
    console.log(this);
}

var c = {
    'hello': 'world',
    'say': sayName,
}

var b = { // var b = {c}
    'c': c
}

var a = { // var a = {b}
    'b': b
}

b.c.say // c의 say 출력

// 문제를 더 꼬아서
function sayName() {
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName
}

var b = { // var b = {c}
    'c': c,
    'say': sayName
}

var a = { // var a = {b}
    'b': b,
    'say': sayName
}

// 추가 예제 //
var name = 'gildong'

function sayName() {
    console.log(this.name); // window의 name을 받음
}

sayName();

let peter = {
    name: 'Peter Parker',
    say: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}

peter.say()
bruce.say()

////

function attackBeam() { // 레이저 공격
    this.hp -= 20;
}

function attackKnife() {
    this.hp -= 5;
}


let zombi = {
    name: 'zombi',
    damaged1: attackBeam,
    damaged2: attackKnife,
    hp: 10000,
    power: 2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 10000,
    power: 2
}

zombi.damaged1() //Beam
zombi.damaged2() //knife
zombi
thanos.damaged()
thanos

///

function attackBeam() { // 레이저 공격
    this.hp -= 20
}

function attackKnife() { // 칼공격
    this.hp -= 5
}

let zombi1 = {
    name: 'zombi',
    damaged1: attackBeam,
    damaged2: attackKnife,
    hp: 10000,
    power: 2
}

let thanos1 = {
    name: 'thanos1',
    damaged: attackBeam,
    hp: 1000,
    power: 100
}

zombi1.damaged1() // Beam
zombi1.damaged2() // Knife
zombi1.hp

/////

function attackBeam() { // 레이저 공격
    // this.hp -= 20
    console.log(this)
}

function attackKnife() { // 칼공격
    // this.hp -= 5
    console.log(this)
}

let zombi2 = {
    name: 'jombi',
    damaged: [attackBeam, attackKnife],
    hp: 10000,
    power: 2
}

let thanos2 = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 1000,
    power: 100
}

zombi2.damaged[0]() // Beam
zombi2.damaged[1]() // Knife
// jombi.hp

//////////

let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

//////

function sayName(){
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName
}

var b = {
    'c': c,
}

var a = {
    'b': b,
}

a.b.c.say();

function a(){
    console.log(this);
    function b(){
        console.log(this);
        function c(){
            console.log(this);
        }
        c();
    }
    b();
}
a();

// a, b, c 모두 window
// 위 함수는 a, b, c() 이런 식으로 호출한 객체를 타고 올라가는 형태가 아니다.