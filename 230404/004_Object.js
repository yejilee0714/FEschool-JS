const human = {
    name: "yeji",
    age: 26, 
    from: "korea",
    askingHer: function(){
        console.log("hello world!")
    },
    0: '01012345678'
};

console.log(human.name);
console.log(human.age);
console.log(human['name']);
console.log(human['age']);

// human.0 //error
human['0']
// 01012345678
human[0]
// 01012345678

// 유사배열객체는 실무에서도 사용하지 않기 때문에 잊어도 된다.
const arr = {
    0 : 10,
    1 : 20,
    2 : 30,
    length: 3
};

arr[0]
// 10
arr[1]
// 20
arr[2]
// 30
arr.length
// 3

// 배열이 아님. 유사배열객체라고 한다
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠르다.

const human1 = {
    name: "yeji",
    age: 26, 
    from: "korea",
    askingHer: function(){
        console.log("hello world!")
    },
    0: '01012345678'
};

human1.name = 'ji'
human1.name
human1.askingHer()
delete human1.job;

//다른 언어와 동작 방식이 달라 주의하기
console.log('age' in human1);
// console.log(20 in [10, 20, 30, 40]);
// console.log('length' in [10, 20, 30, 40]);

const aespa = {
    members: ['카리나', '윈터', '지젤', '닝닝'],
    from: '광야',
    sing: function(){
        return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
    }
};

// 중요도 **
console.log(aespa.hasOwnProperty('itzy'));
console.log(aespa.hasOwnProperty('sing'));

// 중요도 ***
// 다른 언어는 aespa.keys()와 같은 방식으로 사용한다.
console.log(Object.keys(aespa)); //불편한 코드
console.log(Object.values(aespa)); //불편한 코드