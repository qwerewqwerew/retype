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

> 반복문과 함께 쓰이는 배열자료형을 알아봅시다.
>
> 배열은 여러 값을 한공간에 저장할때 쓰입니다.
>
> 배열은 한 반에 속한 여러 학생을 생각하면 됩니다.
>
> 이때 우리는 **학급을 배열**, **학생을 요소 혹은 원소** 라고 부릅니다.
>
> 학교에서는 한반에 속한 여러 학생들의 관리하기 위해 학생들에게 번호를 부여합니다.
>
> 이름으로 관리할 경우 동명이인이 있기도 하고 번호에 비해 효율성이 떨어지기 때문이지요.
>
> 이때 **학생에게 부여되는 일련의 번호를 배열에서는 인덱스 번호**라고 합니다.
>
> 배열의 선언은 **`[ ]`**{.red} 값의 구분은 **`,`**{.red} 으로 합니다.
>
> 배열의 인덱스 번호는 **`0`**{.red} 부터 시작합니다.
>
> 배열의 값(요소)은 문자,숫자,객체,함수 모든 자료형이 들어갈수 있습니다.

**배열은 값의 집합이다**{.red}

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

<aside style='border:1px solid #ddd; padding:1rem; white-space:pre-wrap;background:#00bcd412;'>
<h4>배열 다루기</h4>

    • 배열 생성하기: [요소, 요소, 요소, … , 요소]

    •  배열 요소에 접근하기: 배열[인덱스]

    •  배열 요소 개수 확인하기: 배열.length

    •  배열 뒷부분에 요소 추가하기: 배열.push(요소)

    •  배열 특정 위치에 요소 추가하기: 배열.splice(인덱스, 0, 요소)

    •  배열 요소 제거하기:

    	•  인덱스로 제거하기: 배열.splice( 인덱스, 제거할 요소의 개수)

    	•  값으로 요소 제거하기: const 인덱스 = 배열.indexOf(요소)

    	•  배열.splice(인덱스, 1)

</aside>
