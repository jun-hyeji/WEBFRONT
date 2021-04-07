console.log("-----------------배열 전개 연산");

//  ESS Way 배열 합치기
let arr1 = ['홍길동', ' 장길산'];
let arr2 = ['임꺽정', '전우치'];

console.log("arr1:", arr1);
console.log("arr2:", arr2);

let combined = [];

//  ESS 방법 1. 각 요소를 꺼내서 새 배열에 할당
combined = [arr[0], arr1[1], arr2[0], arr[1]];
console.log("combined m1:", combined);

//  ESS 방법 2. concat 메서드 사용
combined = arr1.concat(arr2);   //  arr1 배열에 arr2를 연결 새 배열 생성
console.log("combined m2:", combined);

//  ESS 방법 3. 빈 배열에 concat 메서드 사용
combined = [].concat(arr1, arr2);
console.log("combined m3:", combined);

//  ES6 Way
combined = [...arr1, ...arr2];  //  ...->전개 연산자 : 각 요소를 풀어낸다는 느낌
console.log("EX6 combined:", combined);

//  배열의 전개
console.log("원본 배열: ", combined);

let[first, second, third = "empty", ...others] = arr1;
console("arr1 : ",arr1);
console.log("전개: ", first, second, this, others);
console.log("combined:", combined);
[first, second, this = "empty", others] = combined;
console.log("전개: ", first, second, this, others);


console.log("-----------------객체 전개 연산");
let obj1 = {one: 1, two:2, other:0 };
let obj2 = { three: 3, four: 4, other: -1};

//  ESS방식으로 두 객체 합치기
//  방법 1. 수작업 풀어내기
combined = {
    one : obj1.one,
    two : obj1.two,
    three : obj2.three,
    four : obj2.four,
    other : obj1.other,
};
console.log("obj1: ", obj1);
console.log("obg2: ",obj2);

console.log("obj combined m1 ", combined);

//  ESS 방법 2. Object.assign
combined = Object.assign({}, obj1, obj2);
console.log("obj combined m2 :", combined);
//  assaign 의 순서를 바꿔 봅니다.
combined = Object.assign({}, obj2, obj1);
console.log("obj combined m3: ", combined);

//  ES6 방식
combined = {
    ...obj1,    //  obj1의 모든 속성을 전개
    ...obj2     //  obj2의 모든 속성을 전개
}

console.log("obj combined ES6:", combined);

//  속성의 전개
console.log("obj combined:", combined);
let{ one, two, other, ...other} = combined;
console.log("전개 :", one, two, other, otrs);