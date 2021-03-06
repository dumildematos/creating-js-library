function $(selector){
    var self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);

    //  .html()
    self.html = function(value){
        if(!value) return self.element;
        self.element.insertAdjacentHTML('beforeend', value);
        return self;
    }

    // .attr()
    self.attr = function(name, value){
        if (!value) return self.element.getAttribute(name)
        self.element.setAttribute(name,value);
        return self;
    }

    // .on()
    self.on = function(type,callback){
        self.element['on' + type] = callback;
        return self;
    }
    return self;
}