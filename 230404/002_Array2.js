const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function(el){
    return el % 2 === 0
})

function solution(n) {
    return Array(n)
        .fill()
        .map((_, i) => i + 1)
        .filter((v) => v % 2 === 0)
        .reduce((a, c) => a + c, 0);
}


const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function(el){
    return el % 2 !== 0
})

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))

// reduce
const arr3 = [1, 2, 3, 4, 5]
arr3.reduce((a, c) => a + c, 0)

const arr4 = []
arr4.reduce((a, c) => a + c)

const arr5 = [1]
arr5.reduce((a, c) => a + c)

// 0을 항상 넣기
const arr6 = []
arr6.reduce((a, c) => a + c, 0)

// min, max는 있지만 sum이 없음


// includes
const arr7 = ['hello', 'world', 'hojun']
arr7.includes('world')

const arr8 = ['hello', 'world', 'hojun']
arr8.includes('leehojun')

const arr9 = ['hello', 'world', 'hojun']
arr9.includes('jun')

// join
const arr1 = ['hello', 'world', 'hojun']
arr1.join('!')

const arr10 = ['010', '1234', '5678']
arr10.join('-')

// 이렇게 하면 안됨
const arr11 = [010, 1234, 5678]
arr11.join('-')

// 0b100 // b는 바이너리의 첫글자입니다.
// 0o100 // o는 옥타의 첫글자입니다.
// 0x100 // x는 헥사를 표현합니다.