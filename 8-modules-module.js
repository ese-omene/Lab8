//LAB 8 - MODULES - MODULE FILE
//THIS FILE CONTAINS YOUR CUSTOM MODULE.

//IFFI goes here  that will have the function for when the thing gets clicked on
var myModNS = (function(){
var devName = "Ese";
var modName = "citeMe";
var myMessage = devName  +" created this " + modName + " module!"

var citeMe = function(){
  alert(myMessage);
};

var module = {
  sayMsg : citeMe
};
return module;


})();
