//  JavaScript의 문자열
//
let s1 = "Modern JavaScript and Java";
let s2 = String("Mordern JavaScript");

console.log(s1, s2);
console.log(typeof s1, typeof s2);

console.log("s1 == s2 ? ", s1 == s2);   //  값의 비교도 ==로 하면 된다

//  문자가 여러개 연결된 타입 : 길이를 잡을 수 있다
console.log("string : ", s1, "length :", s1.length);

//  문자열 추출 메서드, 인덱스 이용하여 내용에 접근
console.log(s1);
console.log("7th char :", s1.charAt(7));    //  7번 인덱스의 글자
//  그 자체로 배열처럼 접근할 수 있다.
console.log("7th char :", s1[7]);   //  7번인덱스 ~ 10글자
console.log(s1.substr(7));  // 끝까지
console.log(s1.substring(7, 17));   //  7번인덱스 ~ 16번 인덱스
console.log(s1.substring(7))    //  7번인덱스 ~ 끝까지 

console.log("========= Search");
console.log("원본 :" ,s1);

let position = s1.indexOf("Jaca");  //s1에서 Java검색
console.log("1st search : ", position);
//  검색 시작 위치 조정
position += 4;
