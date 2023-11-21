(function () {
    String.prototype.ensureStart = function (string) {
        return this.startsWith(string) ? this.toString() : string + this.toString();
    }
    String.prototype.ensureEnd = function (string) {
        return this.endsWith(string) ? this.toString() : this.toString() + string;
    }
    String.prototype.isEmpty = function () {
        return this.length === 0;
    }
    String.prototype.truncate = function (n) {
        let length = this.toString().length;
        if (n < 4) {
            return ".".repeat(n);
        }
        if (length <= n) {
            return this.toString();
        }
        let indexOfSpace = this.toString().slice(0, n - 2).lastIndexOf(" ");
        if (indexOfSpace !== -1 && indexOfSpace >= n - 6) {
            return `${this.toString().slice(0, indexOfSpace)}...`;
        }
        else {
            return this.toString().slice(0, indexOfSpace) + "...";
        }
    }
    String.prototype.format = function (string, ...params) {
        params.forEach(param, index =>
            string = string.replace(`{${index}}`, param))
            return string
    }
})()

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
