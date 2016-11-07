/**
 * Created by lqg on 2016-11-7.
 */
var numberUtil = (function () {
    /**
     * 保留两位小数
     * @param value
     * @returns {string}
     */
    var fixedTwo = function(value){
        return parseFloat(value).toFixed(2);
    };

    return {
        fixedTwo: fixedTwo
    }
})();

export {numberUtil};