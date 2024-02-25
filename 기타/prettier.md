---
label: vscode 세팅
layout: default
order: 100
author:
name: 코알라코딩
avatar: koala
link: https://www.youtube.com/channel/UCMb94yucTNsjIJqD8C8lO2Q
icon: dot
category: [tip]
tags: [tip]
---


## 프리티어세팅
### '. prettierrc' 파일 구성하기


| Option 명          | API Override                                            | default   | Option 설명                                                                                                                                                                                                                                                                                    |
|--------------------|---------------------------------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| printWidth         | printWidth: <int>                                       | 80        | - 코드 한줄의 개수                                                                                                                                                                                                                                                                             |
| tabWidth           | tabWidth: <int>                                         | 2         | - 들여쓰기 너비 수(탭을 사용할 경우 몇칸을 띄워줄지)                                                                                                                                                                                                                                           |
| useTabs            | useTabs: <bool>                                         | false     | - 탭 사용 여부 (미사용 시 스페이스바로 간격조정을 해야함.)                                                                                                                                                                                                                                     |
| semi               | semi: <bool>                                            | true      | - 명령문의 끝에 세미콜론(;)을 인쇄합니다.- true: (;)를 추가함 / false : (;)를 지움                                                                                                                                                                                                             |
| singleQuote        | singleQuote: <bool>                                     | false     | - 큰따옴표("") 대신 작은따옴표('')를 사용여부- true: 홀따옴표로 사용 / false : 큰따옴표로 사용                                                                                                                                                                                                 |
| quoteProps         | quoteProps: <as-needed	&#124;consistent	&#124;preserve> | as-needed | - 개체의 속성이 인용될 때 변경합니다.<br>- "as-needed" - 필요한 경우에만 개체 속성 주위에 따옴표를 추가합니다.<br>- "consistent" - 개체의 속성 중 하나 이상에 따옴표가 필요한 경우 모든 속성을 따옴표로 묶습니다.<br>- "preserve" - 개체 속성에서 따옴표의 입력 사용을 존중합니다. |
| jsxSingleQuote     | jsxSingleQuote: <bool>                                  | false     | - JSX내에서 큰따옴표("") 대신 작은따옴표('')를 사용여부- true: 홀따옴표로 사용 / false : 큰따옴표로 사용                                                                                                                                                                                       |
| trailingComma      | trailingComma: "<es5 &#124; none &#124;all>             | es5       | - 객체나 배열을 작성하여 데이터를 넣을때, 마지막에 후행쉼표를 넣을지 여부- es5: 후행쉼표 제외 / none: 후행쉼표 없음 / all: 후행쉼표 포함                                                                                                                                                       |
| jsxBracketSameLine | jsxBracketSameLine: <bool>                              | true      | - ">" 다음 줄에 혼자 있는 대신 여러 줄 JSX 요소를 마지막 줄 끝에 넣습니다- true: 줄넘김하지 않음 / false: 줄넘김을 수행                                                                                                                                                                        |
| bracketSpacing     | bracketSpacing: <bool>                                  | true      | - 화살표 함수가 하나의 매개변수를 받을 때 괄호 사용여부- "always"- 항상 괄호를 포함합니다- "avoid"- 가능하면 괄호를 생략합니다.                                                                                                                                                                |
| bracketSameLine    | bracketSameLine: <bool>                                 | false     | - 혼자 있는 대신 여러 줄 HTML(HTML, JSX >, Vue, Angular) 요소를 마지막 줄 끝에 넣습니다(자체 닫는 요소에는 적용되지 않음).                                                                                                                                                                     |
| arrowParens        | arrowParens: <always&#124; avoid>"                      | lways     | - 단독 화살표 기능 매개변수 주위에 괄호를 포함합니다.                                                                                                                                                                                                                                          |
