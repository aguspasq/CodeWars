console.log(String.fromCharCode(1 + 64));
function alphabetPosition(text) {
    let finalText="";

    for (let i = 0; i < text.length; i++) {
        finalText += String.fromCharCode(text+ 64);
    }
    console.log(finalText);
    return finalText;
};

alphabetPosition([20,15,25,15,74])