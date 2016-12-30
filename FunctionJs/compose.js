/**
 * Created by lqg on 2016-12-22.
 */
import _ from 'lodash'
import $ from 'jquery'

/**
 * 先分析一下之前写的一段代码
    taxAttachBody[0].periodAmt = (_.reduce(countArray, (memo, num)=>memo + parseFloat(taxAttachBody[num].periodAmt), 0)).toFixed(2);
    taxAttachBody[0].totalAmt = (_.reduce(countArray, (memo, num)=>memo + parseFloat(taxAttachBody[num].totalAmt), 0)).toFixed(2);

 有什么问题呢？
    首先是一段代码写了两遍。如果多出有类似的功能，就要多写很多遍，不利于维护。而且这种很常见的功能应该抽到公有代码中去。

 */

/**
 * 说明：按照自己的思路我会按照下面的方式封装。
 * 计算collection指定顺序某个字段的合并保留两位小数
 * @param countArray
 * @param collection
 * @returns {Function}
 */
var getCount = function(countArray, collection){
    return function(code){
        return (countArray.reduce((memo, num)=>memo + parseFloat(collection[num][code]), 0)).toFixed(2);
    }
};

var add = function(a, b){
    return a + b;
};

var add3 = _.curry(add)(3);

console.log(add3, 5);