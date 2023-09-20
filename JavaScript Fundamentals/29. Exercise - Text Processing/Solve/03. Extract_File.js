function extractFile(input){
    let lastSlashIndex = input.lastIndexOf("\\");
    let lastStopIndex = input.lastIndexOf(".");

    let fileName = input.substring(lastSlashIndex + 1, lastStopIndex);
    let extension = input.substring(lastStopIndex + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')