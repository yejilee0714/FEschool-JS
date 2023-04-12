// let과 const는 블록레벨 스코프를 가지고 있다.
// 변수에 접근할 수 있는 유효범위
{
    let x = 10
    const y = 20
}

console.log(x, y);

// 지역변수와 전역변수
let x =100 // 블록 밖에 선언하면 전역에서 접근할 수 있는 변수가 된다. 이를 전역 변수라고 한다.
function 함수(){
    let y = 20; // 블록 안에 변수를 선언하면 밖에서 접근할 수 없다. 이를 지역변수라고 한다.
    console.log(x) // 스코프 체이닝(스코프 체인을 따라 해당 영역에 변수가 없으면 계속해서 상위 스코프를 따라 올라간다. 전역까지 올라갔는데도 변수가 없다면 에러가 난다.)
}
함수()

// 가장 가까운 x를 만났을 때 출력한다.

// 1
let x1 = 10
function 함수1(){
    let x1 = 20;
    function 함수2(){
        function 함수3(){
            let x1 =30;
            console.log(x1);
        }// 함수를 호출하지 않으면 실행되지 않음
    }
}
함수1(); 

// 2
let x2 = 10
function 함수1(){
    let x2 = 20;
    function 함수2(){
        function 함수3(){
            let x2 =30;
            console.log(x2);
        }
        함수3();
    }
    함수2();
}
함수1(); 

// 3
let x3 = 10
function 함수1(){
    let x3 = 20;
    function 함수2(){
        function 함수3(){
            console.log(x3);
        }
        함수3();
    }
    함수2(); // 호출 시 가까운 블록의 값을 출력
}
함수1(); 
console.log(x) // 10

// 
let a = 10
let b = 10
function 함수1(){
    let a = 20
    let b = 20
    function 함수2(){
        let a = 30
        console.log(a, b)
    }
    함수2()
}
함수1()

// 함수의 호이스팅 (함수나 변수를 끌어올려 주는 것처럼 보임)
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
// error 없이
함수(10);

function 함수(x){
    return x + 100
}

// error 발생
함수(10)

let 함수 = x => x + 100;

// error 발생
함수(10)

const 함수 = function (x) {
    return x + 100
}