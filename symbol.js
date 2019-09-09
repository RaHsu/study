// # ES6 symbol

// * symbol的使用
let a = Symbol();
console.log(typeof a);

// * symbol的描述(es2019)
let b = Symbol("bbb");
console.log(b.description);

// * Symbol 值作为对象属性名时，不能用点运算符
let c = Symbol("ccc");
let d = {
    [c]: "hello"
}
console.log(d.c); // undefined
console.log(d[c]);

// * Symbol非常适合作为枚举值，且可以保证其值不会与其他值其冲突
const Type = {
    a: Symbol()
}

function getType(type){
    switch (type){
        case Type.a:
            return "a";
            break;
    }
}

// * symbol作为属性名，该属性不会出现在for in和for of循环中
let e = Symbol();
let f = {
    // ![e] : "holle" 这样写会报错
    "g" : "nice" 
} 
// for(let i of Symbol){
//     console.log(i);
// }

// % 使用Object.getOwnPropertySymbol可以获取到symbol
let h = Symbol();
let i = {
    [h] : "nice" 
}

console.log(Object.getOwnPropertySymbols(i));