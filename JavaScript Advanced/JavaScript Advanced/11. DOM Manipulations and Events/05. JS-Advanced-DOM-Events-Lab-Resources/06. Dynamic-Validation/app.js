function validate() {
    const input = document.getElementById('email');
    const regex = new RegExp('/[a-z]+@[a-z]+.[a-z]+');

    input.addEventListener('change', validateEmail);

    function validateEmail(e){

        if (regex.test(input.value)){
            input.classList = 'error';
        } 
        else{
            input.classList = 'error';
        }
    }
}