var finder = (function(){
  // constructor(selector){
  //   this.findSelector(selector)
  // }
  var element = ''
  return {
    findSelector: function(selector) {
      if (selector.constructor == HTMLDocument){
        return element = selector
      } else {
        if (findElement(selector)){
          element = findElement(selector)
        }
        findAttr(selector)
        return element
      }
    }
  }

    function findElement(selector){
      if (selector.charAt(0) !== '.' || selector.charAt(0) !== '#') {
        var tag = selector.replace(/[.].*|[#].*/g, '')
        return document.getElementsByTagName(tag)
      } else {
        return false
      }

    }

    function findAttr(selector) {
      if (selector.includes('#')){
        var id = selector.replace(/\S*[#]/g, '')
        for (var i = 0; i<element.length; i++){
          if (element[i].id == id) {
            element = element[i]
          }
        }
      } else if (selector.includes('.')) {
        var klass = selector.replace(/\S*[.]/g, '')
        var matching = new Array
        for (var i = 0; i<element.length; i++){
          if (element[i].className == klass) {
            matching.push(element[i])
          }
        }
        element = matching
      } else {
        element = document.getElementsByTagName(selector)[0]
      }
    }

})()


function minQuery(element){
  this.element = element
  return {
    hide: () => this.element.style.display = 'none',
    show: () => this.element.style.display = "initial",
    addClass: (className) => this.element.setAttribute('class', className),
    removeClass: (className) => this.element.removeAttribute('class', className),
    // append: (className) => this.element.innerHTML + className,
    on: () => this.element.addEventListener(arguments[0], arguments[1]),
    trigger: () => {
                    var event = new Event(arguments[0]);
                    this.element.dispatchEvent(event)
                    },
    ready: (callback) => {
                            if (this.element.readyState) {
                              console.log('READYREADY');
                              callback();
                            } else {
                              console.error('Error in the DOM!');
                            }
                          }
}
}
var $ = function(selector) {
  var element = finder.findSelector(selector)
  var query = new minQuery(element)
  return query
}

// minQuery.prototype = ()

// })()


// functions on selectors
// HTMLElement.prototype.hide = function(){
//   this.style.display = "none"
// }

// HTMLElement.prototype.show = function(){
//   this.style.display = "initial"
// }

// HTMLElement.prototype.addClass = function(className){
//   this.setAttribute('class', className)
// }

// HTMLElement.prototype.removeClass = function(className){
//   this.removeAttribute('class', className)
// }

// HTMLElement.prototype.on = function(){
//   var callback = arguments[1]
//   this.addEventListener(arguments[0], callback)
// }

// HTMLElement.prototype.trigger = function(){
//   var event = new Event(arguments[0])
//   this.dispatchEvent(event)
// }

// HTMLDocument.prototype.ready = function(callback){
//   if (this.readyState) {
//     console.log('READYREADY')
//     callback()
//   } else {
//     console.error('Error in the DOM!')
//   }
// }

// DOLLAR SIGN SELECTOR
// function $(selector){
//   var listener = finder.findSelector(selector)
//   if (listener.element.constructor == Array && listener.element.length == 1){
//     if (listener.element.length == 1){
//       return listener.element[0]
//     }
//   } else {
//     return listener.element
//   }
// }



$.ajax = function(http){
  var promise = new Promise( function(resolve, reject){
    var req = new XMLHttpRequest()
    req.open(http.type, http.url)
    req.send()

    req.onload = function() {
      if (this.status >= 200 && this.status < 300){
        resolve(this.response)
      } else {
        reject(this.statusText)
      }
    }
    req.onerror = function() {
      reject(this.statusText)
    }
  });
  promise.done = promise.then
  promise.fail = promise.catch
  return promise;
}
