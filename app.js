//for selecting button
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

//outputDiv.innerText = "translated text";
//console.log(outputDiv);

function getTranslationalURL(text){
    return serverURL + "?" + "text=" + text;

}

function errorHandler(error){
    console.log("error occured" + error)
}


btnTranslate.addEventListener("click", function clickEventHandler() {
    //console.log("clicked");
    //console.log(txtInput.value);
    //outputDiv.innerText="translated text: " + txtInput.value;

    var inputText = txtInput.value; // taking input

    fetch(getTranslationalURL(inputText)) //calling server for processing
    .then(response=>response.json())
    .then(json=>{
        var translatdText = json.contents.translated;
        outputDiv.innerText = translatdText;
    })
    .catch(errorHandler)
  
});

