// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법이다. 구식 브라우저는 "폴리필(최식 문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것"이 필요하다.

let firstName = null;
let lastName = null;
let nickname = 'licat';

console.log(firstName ?? nickname)
console.log(firstName ?? lastName ?? nickname)
console.log(firstName ?? lastName ?? nickname ?? '익명 사용자')

// null이면 다음 값으로 넘김
let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c)

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100);
console.log(height ?? 100);

let height2;
console.log(height2 || 100)
console.log(height2 ?? 100)

let height3 = '';
console.log(height3 || 'hello')
console.log(height3 ?? 'world')

// 당장은 몰라도 괜찮은 내용
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined