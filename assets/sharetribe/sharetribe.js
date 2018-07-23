$( document ).ready(function() {
    var URL = $('[data-reactid="49"]');
    var secondURL = $('[data-reactid="48"]');
    URL[0].attributes.href.nodeValue = "http://www.shootspace.io";
    URL[0].attributes.href.value = "http://www.shootspace.io";
    secondURL[0].attributes[1].nodeValue = "http://www.shootspace.io";
});