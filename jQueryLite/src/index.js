// entry file 
const DOMNodeCollection = require('./dom_node_collection');

//elementList = parentNode.querySelectorAll(selectors);
$l = function($ele) {
    let $eleArr = [];
    if ($ele instanceof HTMLElement) {
        $eleArr = [$ele]; 
    } else {
        $eleArr = document.querySelectorAll($ele);
    }
    return new DOMNodeCollection($eleArr);
};

window.$l = $l;

