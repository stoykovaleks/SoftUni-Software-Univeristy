class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number) {
        let result = this.value + this.parseInput(number);
        return new Hex(result);
    }

    minus(number) {
        let result = this.value - this.parseInput(number);
        return new Hex(result);
    }

    parseInput(input) {
        if (input instanceof Hex) {
            return input.valueOf();
        } else if (typeof input === 'number') {
            return input;
        } else {
            return parseInt(input, 16);
        }
    }

    static parse(string) {
        return parseInt(string, 16);
    }
}

// Example usage:
let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 === 256);

let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');

console.log(Hex.parse('AAA'));
