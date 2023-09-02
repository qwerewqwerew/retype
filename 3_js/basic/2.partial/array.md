---
order: category
category:
  - javascript
  - partial
---

# 1. 자료형

## 1.1. 참조형

### 1.1.1. 배열

#### 1.1.1.1. 개요

> 반복문과 함께 쓰이는 배열자료형을 알아보자
>
> 여러 값을 한공간에 저장할때 쓰인다.
>
> 학교에서는 한반에 속한 여러 학생들을 관리하기 위해 학생들에게 번호를 부여한다.
>
> 일일히 이름을 기억하기 어렵고 부르기도 쉬워 번호로 관리하는데 이것이 배열이다.
>
> 배열의 선언은 [ ] 값의 구분은 , 으로 한다.
>
> 배열의 값은 번호를 갖게 된다.(인덱스 번호는 0부터 시작됨)
>
> 배열의 값(요소)은 문자,숫자,객체,함수 모든 값이 들어갈수 있다

**배열은 값의 집합이다**

```js #
let srt = [];
str = '안녕하세요';
document.write(str + '');
document.write(str[2] + '');
document.write(str[str.length - 1] + '');

const array = [273, 'String', true, function () {}, {}, [273, 103]];
console.log(array);

//배열생성2
var arr = [];
arr[0] = 'zero';
arr[1] = 'one';
arr[2] = 'tow';
console.log(arr);
var arr1 = [, , ,];

//배열생성3
var arr2 = new Array();

arr[0] = 'zero';
arr[1] = 'one';
arr[2] = 'tow';

//배열생성4
var arr3 = new Array('zero', 'one', 'two');

//배열생성5
var arr4 = new Array(3);
console.log(arr4);
```
