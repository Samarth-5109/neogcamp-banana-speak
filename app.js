//for selecting button
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//outputDiv.innerText = "translated text";
//console.log(outputDiv);


btnTranslate.addEventListener("click", function clickEventHandler() {
    //console.log("clicked");
    //console.log(txtInput.value);
    outputDiv.innerText="translated text: " + txtInput.value;
   
});