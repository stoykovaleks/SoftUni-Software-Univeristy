function matchFullName(text){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let name = text.match(pattern);
    console.log(name.join(" "));
}

matchFullName("ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov")