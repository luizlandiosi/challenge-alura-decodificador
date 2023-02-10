function Encriptografia(){

	var textValue = document.getElementById("textAreaEncripto").value
	var textValueEncripted = document.getElementById("textAreaDecripto")
	var encriptedWord = ""

	for(let x = 0; x < textValue.length ; x++) {

		console.log(textValue[x])

		if (textValue[x] === "a") {encriptedWord += "ai"}
		else if (textValue[x] === "e") {encriptedWord += "enter"}
		else if (textValue[x] === "i") {encriptedWord += "imes"}
		else if (textValue[x] === "o") {encriptedWord += "ober"}
		else if (textValue[x] === "u") {encriptedWord += "ufat"}
		else { encriptedWord += textValue[x]}

	}

	console.log(encriptedWord)
	textValueEncripted.value = encriptedWord
	
}

function Decriptografia(){

	var textValue = document.getElementById("textAreaEncripto").value
	var textValueDecripted = document.getElementById("textAreaDecripto")

	var decriptedText = textValue.replace(/ai/g, 'a')
	decriptedText = decriptedText.replace(/enter/g, 'e')
	decriptedText = decriptedText.replace(/imes/g, 'i')
	decriptedText = decriptedText.replace(/ober/g, 'o')
	decriptedText = decriptedText.replace(/ufat/g, 'u')

	textValueDecripted.value = decriptedText

}

function textCopy(target) {

    let getTextFromTextArea = document.getElementById(target);

    getTextFromTextArea.select();

    getTextFromTextArea.setSelectionRange(0, getTextFromTextArea.value.length)
    document.execCommand("copy");

    alert("Texto copiado para a área de transferência. Utilize o CTRL + V para visualizá-lo.");

}