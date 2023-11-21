(function arrayExtension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let output = [];
        n = Number(n);

        for (let index = n; index < this.length; index++) {
            output.push(this[index])
        }
        return output
    };
    Array.prototype.take = function (n) {
        let output = [];
        n = Number(n);

        for (let index = 0; index < n; index++) {
            output.push(this[index]);
        }
        return output
    };
    Array.prototype.sum = function () {
        let sum = 0

        for (let index = 0; index < this.length; index++) {
            sum += this[index];
        }
        return sum;
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();

let arr = [1, 2, 3, 4, 5];
console.log(arr.last());