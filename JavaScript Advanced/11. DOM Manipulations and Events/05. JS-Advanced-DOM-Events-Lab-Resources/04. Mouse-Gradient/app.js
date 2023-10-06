function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event){
        const gradientBoxWidth = event.target.clientWidth;
        const positionOgTheMouse = event.offsetX / (gradientBoxWidth - 1);
        const percentage = Math.floor(positionOgTheMouse * 100);
        document.getElementById('result').textContent = percentage + '%';
    }

    function gradientOut() {
        document.getElementById("result").textContent = '';
    }
}