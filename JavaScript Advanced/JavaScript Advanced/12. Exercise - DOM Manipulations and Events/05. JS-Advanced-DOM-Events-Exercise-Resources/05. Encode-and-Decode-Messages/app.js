function encodeAndDecodeMessages() {
    const textAreasEl = document.querySelectorAll("textarea");
    const buttons = document.querySelectorAll("button");

    let encodedMessage = "";
    let decodedMessage = "";

    // Encode message
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(){
        const input = textAreasEl[0].value;

        for (let index = 0; index < input.length; index++) {
            let text = input[index];
            encodedMessage += String.fromCharCode(text.charCodeAt(0) + 1); 
        }
        textAreasEl[1].value = encodedMessage;
        textAreasEl[0].value = "";
    }

    function decode(){
        const input = textAreasEl[0].value;

        for (let index = 0; index < input.length; index++) {
            let text = input[index];
            decodedMessage += String.fromCharCode(text.charCodeAt(0) - 1);
        }
        textAreasEl[1].value = decodedMessage;
    }
}