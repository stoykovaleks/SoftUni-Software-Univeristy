function foreifnLang(country){
    let langauge = "";

    if (country == "USA" || country == "England"){
       
        langauge = "English"
    }
    else if (country == "Spain" || country == "Argentina" || country == "Mexico"){
       
        langauge = "Spanish"
    } 
    else{
       
        console.log("unknown");
    }
    console.log(langauge);
}

foreifnLang("USA")
