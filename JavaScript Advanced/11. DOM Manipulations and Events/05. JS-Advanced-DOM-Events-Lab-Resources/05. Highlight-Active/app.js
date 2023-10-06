function focused() {
    let element = Array.from(document.querySelectorAll('div div'));
    let inputFields = document.getElementsByTagName('input');

    for (const input of inputFields) {
        input.addEventListener('focus', inputFocus);
        input.addEventListener('blur', inputBlur);
    }

    function inputFocus(e) {
        let sectionEl = e.target.parentNode;
        sectionEl.classList.add('focused');
    }
    
    function inputBlur(e) {
        let sectionEl = e.target.parentNode;
        sectionEl.classList.remove('focused');
    }
}