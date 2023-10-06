function toggle() {
    let buton = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');3
    
    buton.textContent = buton.textContent === 'More' ? 'Less' : 'More';

    // if(text.style.display === "");{
    //     text.style.display = 'none';
    // }

    // if(text.style.display === 'none'){
    //     text.style.display === 'none';
    // }
    // else{
    //     text.style.display === 'block';
    // }
    text.style.display = text.style.display === 'none' ? 'block' : 'none';

}