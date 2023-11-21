function extensibleObject() {
    let obj = {
        extend: function (template) {
            for (let prop in template) {
                if (typeof template[prop] === 'function') {
                    Object.getPrototypeOf(obj)[prop] = template[prop];
                } else {
                    obj[prop] = template[prop];
                }
            }
        }
    };

    return obj;
}

// Example usage
const myObj = extensibleObject();
console.log(myObj);

const template = {
    extensionMethod: function () {
        console.log('Extension Method');
    },
    extensionProperty: 'someString'
};

myObj.extend(template);
console.log(myObj);
