/**
 * Created by lqg on 2017-1-20.
 */
var TestObj = function(){
    return new TestObj.prototype.init();
};
TestObj.prototype = {
    init:function(){
        return this;
    },
    init1: function(){
        console.log("init1");
    },
    init2: function(){
        console.log("init2");
    }
};
TestObj.init = function(){
    return this;
};

// 继承原型链
TestObj.prototype.init.prototype = TestObj.prototype;

TestObj().init1();