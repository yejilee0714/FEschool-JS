// 집합, 합집합, 교집합, 차집합, 여집합
// 실무에서는 많이 사용이 안되지만
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형이다.

let s = new Set('aabbbcccdd'); // 중복을 제거한다.
s.size;

회사게시판 = ['홍길동', '홍길동', '홍길동', '홍길동', '홍길동', '김원하', '김원하', '최홍석', '이나겸'];

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 한다.)
let 게시자 = new Set(회사게시판);
게시자.size;

// 문제 2 : 각각 몇 개의 게시물을 작성했나요?
for (const i of 게시자){
    console.log(i, 회사게시판.filter(e=> e === i));
}

for (const i of 게시자){
    console.log(i, 회사게시판.filter(e=> e === i).length);
}

// 이 풀이는 초급자에게 어려운 풀이
let map = new Map();
for (const i of 회사게시판){
    map.set(i, (map.get(i) || 0) + 1)
}

// 1번째 순회 '홍길동'
map.set(i, (map.get(i) || 0) + 1)

let map1 = new Map()
map1.get('홍길동') // undefined

map1.set('홍길동', 1) //최종

// 2번째 순회 i에 '홍길동'
map1.set(i, (map1.get(i) || 0) + 1)

map1.set('홍길동', 2) // 최종

/// set 연습 ///
let s1 = new Set('aabbbcccdd');
s1.sizes
s1.has('a');
s1.has('f');
s1.has('z');

for (const i of s){
    console.log(i);
}

let s2 = new Set('aabbbccccdd'.split(''));
let s3 = new Set(['a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd'])

s.forEach((value, value, set)=> {})
// IE10은 미지원

s.forEach((a, b, set)=>{
    console.log(a, b, set)
})

회사게시판 = ['홍길동', '홍길동', NaN, NaN, NaN];
let test = new Set(회사게시판)

// 교집합
let a = new Set('abc');
let b = new Set('cde');
let cro = [...a].filter(e => b.has(e));

// 합집합
let union = new Set([...a].concat(...b))
let union1 = new Set([...a, ...b])

// 차집합
let dif = [...a].filter(e => !b.has(e))



// set, map, object, array, string이 이터러블 객체인지? 순서는 보장하는지?
// 이터러블한 객체란? 순회가 가능한 객체이다.
// set, map, array, string

// 순서를 보장하나?
// set, map, array, string이 순서를 보장하고 object는 순서를 보장하지 않는다.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://myung-ho.tistory.com/90

// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 교집합의 갯수를 구하는 문제
function solution(s1, s2){
    return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2){
    s1 = new Set(s1)
    s2 = new Set(s2)
    let cro = [...s1].filter(e => s2.has(e));
    return cro.length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120891
// 369 게임
function solution(order){
    const mySet = new Set([3, 6, 9]);
    return String(order).split("").filter((num)=> mySet.has(parseInt(num))).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n){
    let answer = [];

    let i=2;
    while ( i<= n){
        if (n % i ===0){
            answer.push(i);
            n = n/i;
        } else {
            i++;
        }
    }

    return [...new Set(answer.sort((a,b)=> (a > b ? 1: -1)))];
}