function extract(elementId) {
    let param = document.getElementById(elementId).textContent;
    let regex = /\(([^)]+)\)/g;
    let result = [];

    let match = regex.exec(param);

    while(match){
        result.push(match[1]);
        match = regex.exec(param);
    }

    return result.join("; ")
}