//LAB 8 - MODULES - LOGIC FILE
//THIS FILE CONTAINS ALL OF THE LOGIC THAT BELONGS WITH THE HTML PAGE - window.onload ETC. IN HERE YOU WILL REFERENCE AND USE YOUR MODULE.

//main logic file for the webpage
//window.onload
//get the custom element
//set up the listener
window.onload = function(){
  var tag = document.getElementById('name-tag');
tag.addEventListener('click', myModNS.sayMsg);

}
