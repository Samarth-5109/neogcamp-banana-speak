//for selecting button
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var Output = document.querySelector("#output");

btnTranslate.addEventListener("click", function clickEventHandler() {
    //console.log("clicked");
    console.log(txtInput.value);
    console.log(Output.innerHTML="translated text");
});