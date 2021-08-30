var outputText = document.getElementById('output');
var inputText = document.getElementById('english');

function constructURL(text) {
    return "https://api.funtranslations.com/translate/pirate.json?text=" + text;
}

function readBanana(englishText) {
    fetch(constructURL(englishText))
        .then(response => response.json())
        .then(json => {
            outputText.innerText = json.contents.translated;
        }
        )
        .catch((err) => {
            console.log('Sorry! There is some error with the server, please try again after an hour. The server is limited to only 5 requests per hour.');
            alert("Sorry, the server is limited to only 5 requests per hour, please try again after a while. Thank you for understanding.");
        });
}