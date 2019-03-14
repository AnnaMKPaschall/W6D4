class DOMNodeCollection {
    constructor(arr) {
        this.arr = arr; 
    }

    forEach(callback) { // do this to account for case where passing in dom node collection 
        this.arr.forEach((el) => callback(el)); 
    }

    html(str) {
        if (str === undefined) {
            return this.arr[0].innerHTML;
        } 
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].innerHTML = str;
        }
    }

    empty() {
        this.arr.forEach((node) => node.innerHTML = '');
    }

    append(content) {
        this.arr.forEach((node) => {
            if (typeof content === 'string') {
                // debugger
                node.innerHTML += content;
            } else if (content instanceof HTMLElement) {
                // debugger
                node.innerHTML += content.outerHTML; 
            } else {
                // debugger
                content.forEach((contentNode) => {
                    // debugger
                    node.innerHTML += contentNode.outerHTML; 
                });
            }
        });
    }

    attr(attrName, val) {
        if (val === undefined) {
            return this.arr[0].getAttribute(attrName); 
        } else {
            this.forEach((node) => {
                node.setAttribute(attrName, val);
            });
        }
    }

    addClass(className) {
        this.arr.forEach((node) => {
            node.classList.add(className);
        });
    }

    removeClass(className) {
        this.arr.forEach((node) => {
            node.classList.remove(className);
        });
    }

    children() {
        let children = []; 
        this.forEach((node) => {
            children = children.concat(Array.from(node.children)); 
        });
        return new DOMNodeCollection(children); 
    }

    parent() {
        let parents = [];
        this.forEach((node) => {
            parents = parents.concat(Array.from(node.parentNode));
        });
        return new DOMNodeCollection(parents); 
    }

    find(selector) {
        let foundEles = []; 
        this.forEach((node) => {
            foundEles = foundEles.concat(Array.from(node.querySelectorAll(selector)));
        });
        return foundEles; 
    }

    remove() {
        this.forEach((node) => {
            const parent = node.parentNode;
            parent.removeChild(node);
        });
    }

}


module.exports = DOMNodeCollection; 