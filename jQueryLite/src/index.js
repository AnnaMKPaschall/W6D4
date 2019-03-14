// entry file 
const DOMNodeCollection = require('./dom_node_collection');

//elementList = parentNode.querySelectorAll(selectors);
$l = function($ele, callback) {
    const funcsArr = [];
    if (callback && (document.readyState != 'complete')) {
        funcsArr.push(callback);
    } else if (callback) {
        callback.call();
    }
    document.addEventListener("DOMContentLoaded", () => funcsArr.forEach((func) => func.call()));
    let $eleArr = [];
    if ($ele instanceof HTMLElement) {
        $eleArr = [$ele]; 
    } else {
        $eleArr = document.querySelectorAll($ele);
    }
    return new DOMNodeCollection($eleArr);
};

window.$l = $l;

