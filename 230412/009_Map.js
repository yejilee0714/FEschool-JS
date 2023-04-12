let m = new Map();

// Map에 값을 넣기
m.set('하나', 1)
m.set(1, '하나')
m.set(true, 1)
m.set(false, 0)

// Map에 값에 접근하기
m.get('하나')

// {[1, 2, 3]: 100, {'하나': 1}: 10} //error
// m.set([1, 2, 3], '리얼리?');
// m.get([1, 2, 3]);
// 서로 다른 배열  // 메모리주소를 직접 비교할 수 있는 기능이 없다. 

let x = [1, 2, 3, 4] // [1, 2, 3, 4]의 메모리값 주소 = x
m.set(x, '리얼리?');
m.get(x)

// Map의 값이 있는지 확인하기
m.has('하나')

// Map의 값 제거하기
m.delete('하나');
m.has('하나')
m;

// Map의 크기를 확인하기
m.size

//////////

const data1 = new Map()
    .set('name', 'hojun')
    .set('age', 10)
    .set('height', 180)

//////////
// 이터러블한 객체여야 하고 쌍으로 이루어져야 한다.
let data2 = new Map([['one', 1], ['two',2]]) // O
let data3 = new Map(Object.entries({'one':1, 'two':2})) // O
let data4 = new Map({'one':1, 'two':2}) // X
// let data5 = new Map('hello world') // X
// let data6 = new Map([10, 20, 30, 40]) // X

// 직접 순회가 가능하지 않은 Map!
let data8 = { 'one': 1, 'two': 2 }
for (const i of data8) { // X 작동되지 않습니다!
    console.log(i)
}

let data9 = { 'one': 1, 'two': 2 }
for (const i of Object.entries(data9)) {
    console.log(i)
}

// 직접 순회가 가능한 Map!
let m1 = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for( const i of m){
    console.log(i)
}

for (const [key, value] of m){
    console.log(key, value)
}

// object의 단점
let test = {'one': 1, 'two': 2}
Object.keys(test)

// map은 메서드로 모두 호출 가능!
m.keys()
m.values()
m.entries()

// Map - Object간의 형변환
let 맵 = new Map(Object.entries({'one': 1, 'two': 2}))
let 오브젝트 = Object.fromEntries(맵)

let map = new Map(); // 키 값의 중복이 안됩니다.
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)