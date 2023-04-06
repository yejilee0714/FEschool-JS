for ( let i = 0; i < 10; i++){
    console.log(10);
}

let arr = [10, 20, 30, 40, 50];
for ( let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// airbnb 컨벤션에 권장
// IE에서도 사용 가능
let arr1 = [10, 20, 30, 40, 50];
let obj1 = {'one': 10, 'two': 20};
for (const i in arr1){
    console.log(arr1[i]); //index를 가져온다!?
}

for(const i in obj1){
    console.log(obj1[i]); //key를 가져온다!?
}

for (const i in 'hello world') {
    console.log(i)
}

for (const i in ".".repeat(10)) {
    console.log(i); //하나씩 찍어 index만 가져온 것
}

let s= 0
for(const i in '.'.repeat(10)){
    s += parseInt(i);
}
console.log(s);

// airbnb 컨벤션에 권장
// IE에서는 사용 불가
// 개발자의 행복을 위해 익스플로러를 버리자 => 이렇게 해야만 사용할 수 있다.
let arr2 = [10, 20, 30, 40, 50];
let obj2 = {'one': 10, 'two': 20};
for(const item of arr2){
    console.log(item);
}

let s1= 0
for(const item of arr2){
    s += item;
}
console.log(s);

for(const item of obj2){ //of 뒤에 iterable한 값이 나와야 한다.
    console.log(item);
}

for (const item of 'hello world'){
    console.log(item);
}


// why? for of와 for in문에서는 const가 가능한가요?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
    console.log(10);
} // error

{
    const x = 10
    console.log(x)
}
console.log(x)

for (const i in [1, 2, 3]) {
    console.log(i)
}

for (const i of [1, 2, 3]) {
    console.log(i)
}

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length; i++){
    console.log(s[i], s[i+1]); //마지막 값 확인: undefined, 범위 밖에 나가기 때문 (.length -1을 해주어야 하는 이유)
    console.log(s[i+1] - s[i]);
}

for (let i = 0; i < s.length-1; i++){
    console.log(s[i], s[i+1]); // 마지막 값 확인 
    console.log(s[i+1] - s[i]);
}

for (let i = 0; i < s.length; i++){
    console.log(s[i-1], s[i+1]); // 마지막 값 확인 
    console.log(s[i] - s[i-1]);
}

// 위보다 깔끔한 코드가 나오지 않음
let s2 = [1, 3, 4, 8, 13, 17, 20];
for(const i in s){
    console.log(parseInt(i));
    console.log(s[i], s[parseInt(i)+1]);
}

// 문제
// 다음 수학 점수의 평균을 구하세요.
let 수학점수 = [10, 99, 89, 70];
// step1
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length
// step2
let s3 = 0;
for (let i = 0; i < 수학점수.length; i++){
    s3 += 수학점수[i];
}
console.log(s3 / 수학점수.length);

// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    }
]

// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)

// let sum = 0;
// for (const i in user) {
//     sum += user[i]['age'];
// }
// console.log(sum / user.length);

/// 풀이 1
let ss = 0
for (let i = 0; i < user.length; i++) {
    console.log(user[i]['age'])
    ss += user[i]['age']
}
// console.log(Math.floor(ss / user.length))
console.log((ss / user.length).toFixed(2))

/// 풀이 2

let ss1 = 0;
for (const i of user){
    ss1 += i.age;
}
console.log((ss1 / user.length).toFixed(2));

/// 풀이 3

let ss2 = 0;
for (const i in user){
    ss2 += user[i].age;
}
console.log((s/ user.length).toFixed(2));


///// 보충 내용

let user1 = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "name": "Lamb Adams",
        "gender": "male",
    }
]

let sss = 0;
for (const i of user1) {
    console.log(i);
    console.log(i.age); // 마지막에 undefined
    console.log(sss); // 마지막에 102
    console.log('----------');
    sss += i.age // 마지막에 undefined + 102
}
console.log((sss / user1.length).toFixed(2));

/////
let sss1 = 0;
for (const i of user1) {
    console.log(i);
    console.log(i.age); // 마지막에 undefined
    console.log(sss1); // 마지막에 102
    console.log('----------');
    sss1 += i.age ?? 0
}
console.log((sss1 / user1.length).toFixed(2));

// step 1
let sss11 = 0;
for (const i of user1) {
    console.log(user1[i]);
    console.log(user1[i].age); // 마지막에 undefined
    console.log(sss11); // 마지막에 102
    console.log('----------');
    sss1 += user1[i].age ?? 0
}
console.log((sss11 / user1.length).toFixed(2));

////
let sss2 = 0;
for ( const i of user1.map((v,i)=> v.age)){
    if(!!i){
        sss2 += i
    }
}
console.log((sss2 / user1.length).toFixed(2));
////
!true // false
!false // true
!!10 // true
!!1 // true
!!-1 // true
!!0 // false 0이 아닌 다른 수는 true
!!'hello' // true
!!NaN // false
!!undefined // false
!!null // false

////// 외우기 //////
user
    .map( v => v.age)
    .filter(v => !!v)
    .reduce((a, b) => a + b , 0);