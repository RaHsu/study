// ###### 深拷贝与浅拷贝

// * 深拷贝(兼容对象和数组)
// @ 兼容循环引用

function clone(target, map = new Map()){
    if(typeof target === "object"){
        let cloneTarget = Array.isArray(target) ? [] : {};

        // 检查是否循环引用
        if(map.get(target)){
            return map.get(target);
        }
        map.set(target, cloneTarget);

        for(const key in target){
            cloneTarget[key] = clone(target[key])
        }
        return cloneTarget;
    }else{
        return target;
    }
}

// ###### 强引用和弱引用
// * 强引用会不会被垃圾回收机制回收，而弱引用会
// * Map的对象间是存在强引用关系的，而weakmap的对象间存在的是弱引用关系

// % 强引用
let obj = {name: "nihao"};
const target = new Map();
target.set(obj, "wohenhao");
obj = null;

// % 弱引用
let obj = {name: "nihao"};
const target = new WeakMap();
target.set(obj, "wohenhao");
obj = null;







