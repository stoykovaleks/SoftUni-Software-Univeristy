function toggle() {
    const btnEl = document.getElementsByClassName("button")[0];
    const text = document.getElementById("extra");
    
    if(btnEl.textContent === "More"){
        btnEl.textContent = "Less";
    }
    else{
        btnEl.textContent = "More";
    }

    if(text.style.display === "block"){
        text.style.display = "none";
    }
    else{
        text.style.display = "block";
    }
}