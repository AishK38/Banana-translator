var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#output")
var serverlink = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(input) {
    return serverlink + "?" + "text=" + input
}

btnTranslate.addEventListener("click", clickHandler)

function errorHandler(error) {
    console.log("error occured", error);
    alert("Sorry, something wrong with server! Please try again after some time")
}


function clickHandler() {
    var inputText = textInput.value; 

    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText
           })
        .catch(errorHandler)
}

