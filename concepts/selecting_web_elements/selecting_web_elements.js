var title = document.getElementsByTagName("h1");
//now title contains a array of html collection with various properties of it
//to get the innertext
var title1 = document.getElementsByTagName("h1")[0].innerText;
console.log(title1);

//it'll not run here as it won't identify the document