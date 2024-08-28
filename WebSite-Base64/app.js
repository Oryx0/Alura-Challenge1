function processText() {
    const inputText = document.getElementById("inputText").value;
    const action = document.getElementById("actionSelect").value;
    let outputText = '';

    if (action === "encrypt") {
        outputText = inputText
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    } else if (action === "decrypt") {
        outputText = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    document.getElementById("outputText").value = outputText;
}

function copyToClipboard() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    
    const copiedTextElement = document.getElementById("copiedText");
    copiedTextElement.textContent = `Texto copiado: \n${outputText.value}`;
}
