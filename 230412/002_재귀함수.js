// 재귀함수의 중요도 *
// 다이나믹 프로그래밍, 메모라이징 기법 등을 사용하는 순간이 오게 되면 재귀함수의 중요도 **

// 재귀함수 => 내가 나를 호출하는 것
// 반복문으로 반복할 수 있는 것은 재귀함수로 만들 수 있다.
// 재귀함수로 만들 수 있는 것은 반복문으로도 만들 수 있다.
// 실무에서는 반복문 사용하고, 재귀는 사용하지 않길 권장. 알고리즘 문제에서는 간혹 재귀를 호출해야 할 일이 있다. (팰린드롬, 오디오, 기러기, 스위스, 토마토)

// factorial
// 5! == 5 * 4* 3* 2* 1
result = 1
for (let i = 2; i < 6 ; i++){
    result *= 1;
}
result

function factorial(n){
    if(n <= 1){
        return n
    }
    return n * factorial(n-1)
}

factorial(5);
// 5 * factorial(4) // 4 * factorial(3) // 3 * factorial(2) // 2 * factorial(1) // 1

// 누적합 (이렇게 일일이 순회하지 않고 구할 수 있는 값이기 때문에 2개 다 비효율적인 코드이다. 특히 소수 구하는 문제 같은 곳에서 2중 for문 사용하는 것도 매우 비효율적이다.)
result = 0
for (let i = 1; i < 1001; i++){
    result += i;
}
result;

function sigma(n){
    if(n <= 1) { // 종료조건 없으면 무한 반복
        return n
    }
    return n + sigma(n-1);
}
sigma(1000)

const n =1000;
console.log(n*(n+1)/2);

// 2. 문자열 뒤집는 것
result = ''
for (const i of 'hello world'){
    result = result + 1
}
result

result = ''
for (const i of 'hello world'){
    result = result + 1
}
result

// 'h' + '' // 1번째 순회
// 'e' + 'h' // 2번째 순회
// 'l' + 'eh' // 3번째 순회

function reverse(txt){
    if(txt.length <= 1){
        return txt // 종료조건
    }
    return reverse(txt.slice(1)) + txt[0]
}
reverse('hello world');

// 호출             //return                 //최종값
// reverse('hello') //reverse('ello') + 'h'  //'olle' + 'h' == 'olleh'
// reverse('ello')  //reverse('llo') + 'e'   //'oll' + 'e' == 'olle'
// reverse('llo')   //reverse('lo') + 'l'    //'ol' + 'l' == 'oll'
// reverse('lo')    //reverse('o') + 'l'     //'o' + 'l' == 'ol'
// reverse('o')     // 'o'                   //'o'         // 밑에서 위로