function helloName(name) {
    function printHello() {
        return "Hello, ";
    }
    helloName(printHello(name));
}