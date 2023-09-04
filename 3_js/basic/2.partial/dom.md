https://gist.github.com/easylogic/e1ac1e9974b277142f06#file-basic3-md

이번에는 이어서 javascript 에서 가장 많이 사용하게될 DOM 과 같이 변수에 대해서 설명을 해보자. 

# DOM 도 객체이다. 

DOM 은 Document Object Model 의 약자로 html 의 태그를 나타내는 하나의 Tree 구조이자 객체이다. 

개별 DOM 은 모두 객체로 이루어져서 Tree 형태로 관리된다. 

DOM 도 객체이기 때문에 생성하고 없어질 때 gc 의 영향을 받는다. 


# 무의식적으로 사용하는 DOM  

DOM 은 기본적으로 브라우저에 종속되어 있는 객체이기 때문에 사람들이 무의식적으로 사용하는 객체이다. 

DOM 생성과 관리에 비용이 든다는걸 인식을 잘 하지 못한다. 

심지어 Jquery 같은 라이브러리를 사용하게 되면  DOM 처리에 관한한 나머지는 모두 jquery 에 맡겨버린다. 

주로 직접 DOM 을 다루지 않기 때문에 대부분 성능에 jquery 가 미치는 영향을 생각을 못한다. 

# DOM 은 어떻게 생성하는가? 

보통 아래와 같은 형태로 생성을 한다. 

생성을 하게 된다는 것은 객체를 만드는 것이고  많이 생성하면 브라우저에 부담이 된다는 뜻이다. 

```javascript
var element = document.createElement('P');
```

# DOM 은 어떻게 삭제 하는가? 

tree 에서 제거 하는 방식이기 때문에 removeChild 라는 메소드를 사용해서 상위 element 에서 해당 객체를 지운다. 

지운 다는 말은 메모리 해제를 뜻하고 GC 의 대상이 된다는 뜻이된다. 

```javascript
parentElement.removeChild(element);
```

그렇다는 말은 element 의 참조를 누군가 가지고 있다면 GC 의 대상이 되지 않는다는 뜻이다. 

조심해서 써야한다. 



# DOM은 재사용 가능한가? 

DOM 은 생성되고 나서 Tree 에 있을지 없을지에 따라 생존이 결정된다. 

Tree 에 없는 상태라도 어떤 변수에서 참조를 가지고 있으면 GC 대상이 되지 않는다. 

즉, 참조만 있다면 다시 재사용이 가능하다. 

이미 한번 생성된 DOM 개수가 무척이나 많고 지속적으로 많은 DOM 이 생성과 소멸이 반복된다면  DOM 의 재사용도 고려해봐야한다. 


# DOM 의 재사용 

아래의 예제를 먼저 한번 보자. 

```javascript

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// list 로 들어온 값을 P 태그 형태로 body 에 추가 한다. 
function setList(list) {
  document.body.innerHTML = "";
  
  for(var i = 0, len = list.length; i < len; i++) {
    var value = list[i];
    
    var pElement = document.createElement('P');
    pElement.innerHTML = value; 
    
    document.body.appendChild(pElement);
  }
}

setList(arr);

```

위의 코드는 간단하다.  10개의 배열을 모두 P 태그 형태로 만든다음 body 태그 안에 추가한다. 

setList() 메소드가 실행될때마다 루프는 반복된다. 

루프가 반복될수록 객체는 생성하고 그 다음 루프가 실행될때 객체는 없어진다. (gc 의 대상이 된다)

그럼 이제 아래의 코드를 보자. 

```javascript

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var cache = [];

// list 로 들어온 값을 P 태그 형태로 body 에 추가 한다. 
function setList(list) {
  document.body.innerHTML = "";
  
  for(var i = 0, len = list.length; i < len; i++) {
    var value = list[i];
    
    if (cache[i]) {
      pElement.innerHTML = value; 
    } else {
      var pElement = document.createElement('P');
      pElement.innerHTML = value; 
      
      cache[i] = pElement;
    }
    
    document.body.appendChild(cache[i]);
  }
}

setList(arr);
```

중간에 cache 가 추가 되었다. 

한번 생성된 객체는 cache 에 저장하고 더이상 생성하지 않고 속성만 바꾼 다음에 다시 body 추가된다. 

매번 실행할때마다 생성하지 않고 해당 객체를 그대로 이용하게 된다. 

생성비용을 줄 일 수 있게된다. 

일명 DOM 을 캐슁하는거다. 

DOM 생성 비용도 줄이고 삭제 비용도 줄일 수 있다.cache 에 참조가 저장이 되어 있기 때문에 gc 대상에 들지 않는다. 


# DOM 의 재사용 2 

최근에 나오는 Webapp 의 경우 DOM 을 활용해서 다양한 UI 를 구성하게 되는데 이때도 DOM 의 관리는 필수적이다. 

```javascript

function MyElement(selector) {

  var $element = $(selector);

  this.render = function(variable) {
    $element.html($("<div class='my-element-content' />").html('Wow!' + variable));
  }
}

var myElement = new MyElement('#sample');

myElement.render(10); 
myElement.render(20);
myElement.render(30);

```

하나의 객체를 생성하고 그 안에 속한 element 에 dom 을 계속적으로 넣게 되는데 render 하는 시점마다 다른 값이 나와야 한다. 

현재 이 코드는 render 하는 시점마다 새로운 객체를 만들기를 반복하고 있다.  


```javascript

function MyElement(selector) {

  var $element = $(selector);
  
  var $div = $("<div class='my-element-content' />");
  $element.html($div);

  this.render = function(variable) {
    $div.html('Wow!' + variable);
  }
}

var myElement = new MyElement('#sample');

myElement.render(10); 
myElement.render(20);
myElement.render(30);

```

상위에 div 에 대한 객체를 캐슁을 해두고 render 시점에 값만 변경한다. 
DOM 의 생성비용이 줄어들었다. 

# DOM 의 재사용 3 

DOM 이 한두개가 아니고 엄청 많을 때는 어떻게 할 것인가? 

어떻게 관리하는게 좋을까? 

간단히 특정 dom 만 바뀌면 되는데 이런 생각이 조금씩 들게 된다. 

## 변경되는 DOM 과 변경이 없는 DOM 을 구분해서 참조를 가지고 있는다. 

## DOM 트리 구성을 위한 객체를 한번만 생성한다. 

## 해당 객체가 바뀔 수 있도록 구조를 맞춘다. 

