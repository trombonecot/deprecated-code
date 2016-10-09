define([],function(){
    
    return {

        createDiv: function (clase, text, color){
            var div = document.createElement("div");
            div.setAttribute('class', clase);
            if (color!=undefined){
                div.setAttribute('style', 'color:'+color);
            }
            if (text!==undefined){
                var headerText = document.createTextNode(text);
                div.appendChild(headerText);
            }
            return div;
        }
    }
});