function receip() {
    header();
    middle();
    floor();

    function header() {
        console.log("CASH RECEIPT");
        console.log("------------------------------");
    }

    function middle() {
        console.log("Charged to____________________");
        console.log("Received by___________________");
    }
    
    function floor() {
        console.log("------------------------------");
        console.log("(c) SoftUni");
    }

}