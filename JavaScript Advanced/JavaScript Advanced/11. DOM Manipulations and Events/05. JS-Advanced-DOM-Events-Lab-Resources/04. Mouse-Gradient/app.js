function attachGradientEvents() {
    const gradient = document.getElementById("gradient");
    const result = document.getElementById("result");

    gradient.addEventListener('mouseout', gradientOut);

    gradient.addEventListener("mousemove", function (event) {
        let position = event.offsetX;
        let gradientWidth = event.target.offsetWidth;

        let res = Math.floor(position / gradientWidth * 100);
        result.textContent = res + "%"
    });
    function gradientOut(){
        document.getElementById("result").textContent = "";
    }
}