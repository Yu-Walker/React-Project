# 原型

```JavaScript
        // prototype;
        function Person() {
            // 每个函数都会有一个prototype，prototype是函数才会具有的属性；
            // 每个JavaScript对象（null除外）在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每个对象都会从原型“继承”属性。

        };
        let person = new Person();
        person.name = 'Tony';
        // person.name = 'Neo';
        console.log(person.name);   // Tony

        Person.prototype.name = "kervin";
        console.log(person.name);   // Tony

        let newperson = new Person();
        console.log(newperson.name);    // kervin
        console.log(newperson.__proto__.constructor);   // function Person

        // __proto__
        function Age() {
            // 每个JavaScript对象（除了null）都具有的__proto__,这个属性会指向该对象的原型。
        }
        let age = new Age();
        console.log(age.__proto__ == Age.prototype);

        // constructor
        function sex() {
            // 每个原型都有一个constructor属性指向关联的构造函数，实例原型指向构造函数。

        }
        console.log(sex.__proto__ == sex.prototype.constructor);

        //eg:
        function func() {

        }
        func.prototype.name = 'Tony';
        
        let newfunc = new func();
        newfunc.name = 'stark';
        console.log(newfunc.name);  // stark

        delete newfunc.name;
        console.log(newfunc.name);
        // 给实例对象newfunc添加了name属性，当我们打印newfunc.name的时候。结果自然为stark，当删除了newfunc的name属性时，读取newfunc.name,从newfunc对象中找不到name属性就会从newfunc的原型也就是newfunc.proto,也就是func.prototype中查找。
```

   TODO:构造函数与普通函数的区别；


# 原型链
```JavaScript
   console.log(Object.prototype.__proto__ === null) // true
   ```
    JavaScript默认并不会复制对象的属性，只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数。
    ```




     
