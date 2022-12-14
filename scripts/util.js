const $ = (selector) => {
    return document.querySelector(selector)
}
const $$ = (selectors) => {
    return document.querySelectorAll(selectors)
}
const createElement = (tagName, className, content) => {
     const newElement = document.createElement(tagName)
        if(className){
            newElement.setAttribute('class',className )
        }
        if(content){
            newElement.innerHTML = `${content}`;
        }
           return newElement;
}

